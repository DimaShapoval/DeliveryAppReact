import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductSort from "./ProductSort/ProductSort";
import style from "./ProductSortContainer.module.css"
import { useLocation } from "react-router-dom";


const ProductSortContainer = () => {
    const [data, setData] = useState(null);
    const [postDataForCart, setPostDataForCart] = useState([]);
    const [count, setCount] = useState(0)
    let itemArray = [];
    let location = useLocation();
    let company = location.pathname.split('/')[3];
    const handleClick = (e)=>{
        let oldArray;
        let dataItem = data.map(item => e.target.name == item.name ? item : false).filter(item => item )
        if(localStorage.length > 0){
            oldArray = JSON.parse(localStorage.getItem('cartData'))
            console.log(oldArray);
        }
        else{
            oldArray = postDataForCart;
        }
        setPostDataForCart([...oldArray, dataItem[0]])
        
        setCount(count+1)

    }
    useEffect(()=>{
            if(count > 0){
                localStorage.setItem( 'cartData' ,JSON.stringify(postDataForCart));
                }
            
    }, [postDataForCart])
    
    useEffect(() => {
        axios.get('/api')
            .then((res) => {
                const data = res.data;
                setData(data);
            })
    }, [location])
    if (data) {
        itemArray = data.map(element => {
            if (company == element.company.trim()) {
                let price = new Intl.NumberFormat('ua-UA', {style: "currency", currency: "UAH"}).format(element.price)
                return <ProductSort name={element.name} price={price} company={element.company} src={element.img} key={element.id} click={handleClick} />
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