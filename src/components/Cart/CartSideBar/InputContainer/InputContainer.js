import React, { useEffect, useState } from "react";
import Input from "./Input/Input";
import style from "./Input/Input.module.css"


const InputContainer = () =>{
    let initialValues = {
        name: '',
        email: '',
        phone: '',
        address: ''
    } // defualt value for inputs
    const [valueData, setValueData] = useState(initialValues)
    let info = [
        {   
            name: "name",
            placeholder: "Name",
            value: valueData.name,
            key: 1
            
        },
        {
            name: "email",
            placeholder: "Email",
            value: valueData.email,
            key: 2
            
            
        },
        {
            name: "phone",
            placeholder: "Phone",
            value: valueData.phone,
            key: 3
            
        },
        {
            name: "address",
            placeholder: "Address",
            value: valueData.address,
            key: 4
            
        }

    ]; // array of inputs properties
    const inputValueChange = (e)=>{ // function for change/control input value
        let {name, value} = e.target; // take name and value from input in witch enter value from keyword
        setValueData({
            ...valueData, //copy valueData array from state
            [name]: value
        });
    }
    

    let itemArray = info.map(item=>{
         
        return <Input name={item.name} placeholder={item.placeholder} onChange={inputValueChange} value={item.value}   key={item.key}/>
    })

    return(
        <div className={style.wrapper} >
            {itemArray}
        </div>
    )
}

export default InputContainer;