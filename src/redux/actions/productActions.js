import { ActionTypes } from '../constants/action.types'
import fakeStoreAPI from '../../apis/fakeStoreAPI'
// import axios from 'axios'
export const fetchProducts = () => async (dispatch, getState) => {
    const response = await fakeStoreAPI.get("/products")
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
}

export const fetchProductDetail = (productId) => async (dispatch, _) => {
    const response = await fakeStoreAPI.get(`/products/${productId}`).catch(err => console.err(err))
    dispatch(selectedProduct(response.data))
}
export const setProducts = (products) => {
    return { type: ActionTypes.SET_PRODUCTS, payload: products }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const addProductDetails = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT_DETAILS,
        payload: product
    }
}

export const removeSelectedproduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}