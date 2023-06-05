import React, { useEffect, useState } from "react";
import CartMain from "./CartMain/CartMain";
import style from "./CartMainContainer.module.css"

const CartMainContainer = () =>{
    const [arrayOfProductChoose, setArrayOfProductChoose] = useState(JSON.parse(localStorage.getItem('cartData')))
    let arrayOfProductComponent = [];
    // let array = JSON.parse(localStorage.getItem('cartData'))
    if(localStorage.length > 0){
        arrayOfProductComponent = arrayOfProductChoose.map(item=>{
            return <CartMain name={item.name} price={item.price} src={item.img} key={item.id} />
        })
    }
    else{
        return false
    }
    console.log(arrayOfProductChoose);
    

    return(
        <div className={style.wrapper} >
            {arrayOfProductComponent}
        </div>
       
    )
}

export default CartMainContainer;