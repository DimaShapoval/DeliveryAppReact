import React, { useState } from "react";
import CartSideBar from "./CartSideBar/CartSideBar";
import CartMain from "./CartMainContainer/CartMain/CartMain";
import style from "./Cart.module.css"
import CartMainContainer from "./CartMainContainer/CartMainContainer";
import  { CompleteOrder } from "../../Redux/shopReducer"
import { useDispatch } from "react-redux";


const Cart = ()=>{
    const dispatch = useDispatch();
    const [ completeOrder, setCompleteOrder ] = useState(false);
    const handleClick = () =>{
        dispatch(CompleteOrder())
        setCompleteOrder(true)
    }
    return(
        <div className={style.wrapper} >
            <CartSideBar handleClick={handleClick} className={style.sideBar} />
            <CartMainContainer completeOrder={completeOrder} className={style.main} />
        </div>
    )
}

export default Cart;