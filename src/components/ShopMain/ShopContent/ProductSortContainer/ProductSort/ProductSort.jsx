import React from "react";
import style from "./ProductSort.module.css"
import Price from "./Price/Price";

const ProductSort = ({name, price, src, itemId, company, click}) =>{
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
                    <button name={name} className={style.addButton} onClick={click}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductSort;