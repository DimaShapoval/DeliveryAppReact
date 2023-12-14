import React from "react";
import { BrowserRouter, NavLink } from 'react-router-dom';
import style from "./ShopSideBar.module.css"



const SideBar = () => {
    return (
        <div className={style.wrapper}>
            <p>Shops: </p>
            <div className={style.navWrapper} >
                <NavLink className={change => change.isActive ? style.itemActive : style.item} to='product/McDonalds' >McDonald's</NavLink>
                <NavLink className={change => change.isActive ? style.itemActive : style.item} to='product/KFC' >KFC</NavLink>
                <NavLink className={change => change.isActive ? style.itemActive : style.item} to='product/MrChef' >Mr.Chef</NavLink>
                {/* <NavLink className={change => change.isActive ? style.itemActive : style.item} to='product/BurgerClub' >Burger Club</NavLink> */}
            </div>

        </div>
    )
}

export default SideBar;