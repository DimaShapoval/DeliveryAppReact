import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.headerWrapper}>
            <div className={style.itemWrapper}>
                <NavLink to='/shop' className={ item => item.isActive ? style.itemActive : style.item }>Shop</NavLink>
                <div className={style.itemAfter} >.</div>
                <NavLink to='/cart' className={item => item.isActive ? style.itemActive : style.item }>Shoping cart</NavLink>
            </div>

        </div>

    )
}

export default Header;