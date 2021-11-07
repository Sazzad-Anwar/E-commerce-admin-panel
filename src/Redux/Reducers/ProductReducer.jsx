import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_REQUEST_SUCCESS,
    GET_PRODUCT_REQUEST_FAILED,
    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_REQUEST_SUCCESS,
    PRODUCT_UPDATE_REQUEST_FAILED,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_REQUEST_SUCCESS,
    DELETE_PRODUCT_REQUEST_FAILED,
} from '../Constants/ProductConstants';

export const getProductReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return { isLoading: true };
        case GET_PRODUCT_REQUEST_SUCCESS:
            return { isLoading: false, data: action.payload };
        case GET_PRODUCT_REQUEST_FAILED:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const updateProductReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return { isLoading: true };
        case PRODUCT_UPDATE_REQUEST_SUCCESS:
            return { isLoading: false, data: action.payload };
        case PRODUCT_UPDATE_REQUEST_FAILED:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const deleteProductReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return { isLoading: true };
        case DELETE_PRODUCT_REQUEST_SUCCESS:
            return { isLoading: false, data: action.payload };
        case DELETE_PRODUCT_REQUEST_FAILED:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};
