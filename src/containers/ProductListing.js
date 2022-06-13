import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productActions";


const ProductListing = () => {

    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    console.log("Products from redux", products)
    return (<div className="ui grid container" style={{ border: '2px solid black' }}>
        {< ProductComponent />}
    </div >)
}

export default ProductListing