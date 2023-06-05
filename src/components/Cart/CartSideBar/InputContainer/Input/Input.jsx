import React from "react";
import style from "./Input.module.css"

const Input = ({name, placeholder, value, onChange}) =>{
    return(
        <div className={style.inputWrapper}>
                <label htmlFor={name} className={style.label}>{placeholder}</label>
                <input type="text" className={style.input} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            </div>
    )
}

export default Input;