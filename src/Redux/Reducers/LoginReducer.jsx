import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILED,
    LOGIN_REQUEST_SUCCESS,
    LOGOUT,
} from '../Constants/LoginConstants';

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { loading: true };
        case LOGIN_REQUEST_SUCCESS:
            return { loading: false, details: action.payload };
        case LOGIN_REQUEST_FAILED:
            return { loading: false, error: action.payload };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
