import React, { useEffect, useState } from "react";
import CartMain from "./CartMain/CartMain";
import style from "./CartMainContainer.module.css"



const CartMainContainer = ({completeOrder}) => {
    const [arrayOfProductChoose, setArrayOfProductChoose] = useState(JSON.parse(sessionStorage.getItem('cartProduct')))
    const [ textOrder, setTextOrder ] = useState("Oh... Your cart is empty")
    const [oldSum, setOldSum] = useState(0)
    let arrayOfProductComponent = [];
    let arrayOfInputName = []
    let arrayOfInputValues = []
    let itemsPriceArrayOfObject = [];
    let itemsPriceArray = []
    let itemValuesObject = []
    let count = 0
    let sumOfItems;
    const [inputValueData, setInputValueData] = useState(arrayOfInputValues);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(()=>{
        setOldSum(sumOfItems)
        setTotalPrice(new Intl.NumberFormat('ua-UA', {style: 'currency', currency: 'UAH'}).format(sumOfItems))

    }, [count])
    useEffect(()=>{
        if(completeOrder){
            setTextOrder("Waiting your order for 40 minutes")
            setTimeout(()=>{
                sessionStorage.removeItem('cartProduct')
            }, 0)
        }
        else{
            setTextOrder("Oh... Your cart is empty")
        }
    }, [completeOrder])

    
    

    if (sessionStorage.length > 0) {
        
        arrayOfProductComponent = arrayOfProductChoose.map((item, index) => { //create array of components
            arrayOfInputName.push(item.name);//find input name
            itemsPriceArrayOfObject.push({[item.name]:item.price, value: 0})
            itemsPriceArray.push(item.price)
            sumOfItems = itemsPriceArray.reduce((sum, num)=> sum + num,0)
            
            
            for(let i=0;i<arrayOfInputName.length;i++){
                arrayOfInputValues = {...inputValueData, [arrayOfInputName[i]]: 0}//get object that was in state
            }
            count++;

            
            

            return <CartMain name={item.name} price={item.price}   src={item.src} key={index} />
        })
        

    }
   



    return (
        <div className={style.wrapper} >
            <div className={style.textWrapper}>
                <h1>Check your order:</h1>
            </div>
            {arrayOfProductComponent.length && !completeOrder ? arrayOfProductComponent : <p className={style.empty} >{textOrder}</p>}
            
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