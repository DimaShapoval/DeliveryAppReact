import React from "react";
import style from "../ProductSort.module.css"

const Price = ({price}) => {
    return (
        <div className={style.priceWrapper} >
            <p className={style.price} >{price}</p>
        </div>
    )
}

export default React.memo(Price)