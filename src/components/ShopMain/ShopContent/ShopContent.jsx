import React from "react";
import ProductSort from "./ProductSortContainer/ProductSort/ProductSort";
import style from "./ShopContent.module.css"
import ProductSortContainer from "./ProductSortContainer/ProductSortContainer";

const ShopContent = () =>{
    return(
        <div className={style.wrapper} >
            <ProductSortContainer/>
            
        </div>
    )
}

export default ShopContent;