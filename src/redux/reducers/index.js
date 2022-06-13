import { combineReducers } from 'redux'
import { justForTestingReducer, productReducer, selectedProductReducer } from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    testAllDetails: justForTestingReducer
})

export default reducers