import React, { useState } from "react";
import style from "./ProductSort.module.css"
import Price from "./Price/Price";
import { useDispatch, useSelector } from "react-redux";
import { AddProductToCartActionCreator } from "../../../../../Redux/shopReducer";

const ProductSort = ({ name, price, src, itemId, company, statePrice }) =>{
    const store = useSelector(state => state.shopPage);
    const dispatch = useDispatch()
    const addProductInCart = (e)=>{
        let elem = e.target;
        elem.price = statePrice;
        elem.src = src;
        dispatch(AddProductToCartActionCreator(elem))
    }
    return(
        <div className={style.wrapper} >
            <div className={style.secondWrapper} key={itemId}>
                <div className={style.imageWrapper}>
                    <img src={src} alt="product image" />
                </div>
                <div className={style.textWrapper}>
                    <p className={style.mainText}>{name}</p>
                </div>
                <Price price={price} />
                <div className={style.addButtonWrapper}>
                    <button name={name} className={style.addButton} onClick={addProductInCart}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductSort;