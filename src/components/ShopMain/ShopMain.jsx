import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from "./ShopSideBar/ShopSideBar";
import style from "./ShopMain.module.css"
import ShopContent from "./ShopContent/ShopContent";

const ShopMain = () => {
    return (
        <div className={style.wrapper} >
            <SideBar className={style.sideBar}/>
            <div className={style.product} >
               <Routes>
                <Route path='product/*' element={<ShopContent/>} />
            </Routes> 
            </div>
            
        </div>
    )
}

export default ShopMain;