import axios from 'axios';
import { BaseURL } from './projectConfig';

const axiosInstance = axios.create({
    baseURL: BaseURL,
    // headers: {
    //     refreshToken: localStorage.getItem('token'),
    // },
});

axiosInstance.defaults.withCredentials = true;

const getAccessToken = async () => {
    let { data } = await axiosInstance.post('/vendor/refresh-token');

    if (data.code === 200) {
        localStorage.setItem('token', data.data.refreshToken);
        return true;
    } else {
        return false;
    }
};

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const ok = await getAccessToken();
            if (ok) return axiosInstance(originalRequest);
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
