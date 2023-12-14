import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import ProductSort from "./ProductSort/ProductSort";
import style from "./ProductSortContainer.module.css"
import { useLocation } from "react-router-dom";


const ProductSortContainer = () => {
    const [data, setData] = useState(null);
    const [postDataForCart, setPostDataForCart] = useState([]);
    const [count, setCount] = useState(0)
    let itemArray = [];
    let location = useLocation();// find url of page
    let company = location.pathname.split('/')[3];
    const handleClick = (e)=>{ //function for button click that add product in cart
        let oldArray;
        //filter item name
        let dataItem = data.map(item => e.target.name == item.name ? item : false).filter(item => item )
        if(sessionStorage.length > 0){ //check sessionStorage 
            oldArray = JSON.parse(sessionStorage.getItem('cartData')) //if sessionStorage have items oldArray = that items
        }
        else{
            oldArray = postDataForCart; //if sessionStorage empty oldArray = [empty]
        }
        setPostDataForCart([...oldArray, dataItem[0]])//copy oldArray and if oldArray doesn't have value how dataItem we create new array with
        //dataItem else return oldArray and postDataForCart have value of this operation
        
        setCount(count+1)

    }
    // useEffect(()=>{
    //         if(count > 0){ //if count > 0 create new sessionStorage
    //             sessionStorage.setItem( 'cartData' ,JSON.stringify(postDataForCart));
    //             }
            
    // }, [postDataForCart]) //function work only when postDataForCart changed
    
    useEffect(() => {
        axios.get('/api') // get request in api
            .then((res) => {
                const data = res.data;
                setData(data); // push value of data in store data
            })
    }, [location]) // function work only when url of page changed
    if (data) { //if store data have anything
        itemArray = data.map(element => {
            if (company == element.company.trim()) { //check name of company and data items name if true return array of ProductSort Component
               //create price in UAH format
                let price = new Intl.NumberFormat('ua-UA', {style: "currency", currency: "UAH"}).format(element.price);
                //component with props that was created in this function
                return <ProductSort name={element.name} price={price} statePrice={element.price} company={element.company} src={element.img} key={element.id}  />
            }
            else {
                return false;
            }
        });


    }


    return (
        <div className={style.wrapper} >
            {itemArray.lenght ? <p>Sorry, we have some problem</p> : itemArray}
        </div>
    )
}

export default ProductSortContainer;