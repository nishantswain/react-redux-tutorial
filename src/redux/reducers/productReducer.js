import { ActionTypes } from "../constants/action.types"

const initialState = {
    products: [],
    // product: [],
    // testAllDetails: []
}

export const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload }
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    // console.log(state)
    // console;
    let x = { ...state, product: {} }
    console.log(x)
    switch (type) {

        case ActionTypes.SELECTED_PRODUCT:
            return payload
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state
    }

}

const checkAndAddDetails = (reduxState, payload) => {
    // let  payload.id
    let { testAllDetails } = reduxState
    // testAllDetails
    // console.log(testAllDetails, reduxState)
    if (testAllDetails === undefined) {
        let testAllDetails = {}
        testAllDetails[payload.id] = payload
        return { ...reduxState, testAllDetails }
    }
    if (testAllDetails[payload.id] === undefined) {
        testAllDetails[payload.id] = payload
        return { ...reduxState, testAllDetails }
    }
    else
        return reduxState
}
export const justForTestingReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_PRODUCT_DETAILS:
            return checkAndAddDetails(state, payload)
        default:
            return state
    }
}

