import React from "react";
import style from "./CartSideBar.module.css"
import Input from "./InputContainer/Input/Input";
import InputContainer from "./InputContainer/InputContainer";


const CartSideBar = ()=>{
    return(
        <div className={style.wrapper} >
                <InputContainer/>
            
        </div>
    )
}

export default CartSideBar;