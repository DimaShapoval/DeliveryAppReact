import React from "react";
import CartSideBar from "./CartSideBar/CartSideBar";
import CartMain from "./CartMainContainer/CartMain/CartMain";
import style from "./Cart.module.css"
import CartMainContainer from "./CartMainContainer/CartMainContainer";


const Cart = ()=>{
    return(
        <div className={style.wrapper} >
            <CartSideBar className={style.sideBar} />
            <CartMainContainer className={style.main} />
        </div>
    )
}

export default Cart;