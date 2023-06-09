import React, { useEffect, useState } from "react";
import CartMain from "./CartMain/CartMain";
import style from "./CartMainContainer.module.css"



const CartMainContainer = () => {
    const [arrayOfProductChoose, setArrayOfProductChoose] = useState(JSON.parse(sessionStorage.getItem('cartData')))
    let arrayOfProductComponent = [];
    let arrayOfInputName = []
    let arrayOfInputValues = []
    let itemsPriceArray = [];
    let sumOfItems;
    const [inputValueData, setInputValueData] = useState(arrayOfInputValues);
    const [totalPrice, setTotalPrice] = useState(null);

    const inputChange = (e) =>{
        const {name, value} = e.target;
        console.log(e.target);//change value in state

        
        
    }

    
    

    if (sessionStorage.length > 0) {
     
        arrayOfProductComponent = arrayOfProductChoose.map(item => { //create array of components
            arrayOfInputName.push(item.name);//find input name
            itemsPriceArray.push(item.price)
            sumOfItems = itemsPriceArray.reduce((sum, num)=> sum + num,0)
            
            
            for(let i=0;i<arrayOfInputName.length;i++){
                arrayOfInputValues = {...inputValueData, [arrayOfInputName[i]]: 0}//get object that was in state
            }
           
            // console.log([...inputValueData]);

            
            

            return <CartMain name={item.name} price={item.price}  inputChange={inputChange} src={item.img} key={item.id} />
        })
        

    }
    useEffect(()=>{
        setTotalPrice(new Intl.NumberFormat('ua-UA', {style: 'currency', currency: 'UAH'}).format(sumOfItems))
    }, [itemsPriceArray])



    return (
        <div className={style.wrapper} >
            <div className={style.textWrapper}>
                <h1>Check your order:</h1>
            </div>
            {arrayOfProductComponent.length ? arrayOfProductComponent : <p className={style.empty} >Oh... Your cart is empty</p>}
            {
                arrayOfProductComponent.length ? 
                <div className={style.textWrapper} >
                    <p>Total price: {totalPrice}</p>
                </div> 
                : false
            }
            
        </div>

    )
}

export default CartMainContainer;