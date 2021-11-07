import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_REQUEST_FAILED,
    GET_PRODUCT_REQUEST_SUCCESS,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_REQUEST_SUCCESS,
    DELETE_PRODUCT_REQUEST_FAILED,
} from '../Constants/ProductConstants';
import { v4 as uuid } from 'uuid';
import { products } from '../../jsonData';

export const getProductAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_PRODUCT_REQUEST,
        });

        console.log(id);

        let data = id
            ? products.tableData.filter((product) => product._id === id)
            : products.tableData;

        dispatch({
            type: GET_PRODUCT_REQUEST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_PRODUCT_REQUEST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const deleteProductAction = (id) => async (dispatch) => {
    try {
        dispatch({
            type: DELETE_PRODUCT_REQUEST,
        });

        let data = products.tableData.filter((product) => product._id !== id);

        dispatch({
            type: DELETE_PRODUCT_REQUEST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_REQUEST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
