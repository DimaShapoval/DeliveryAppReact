import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./Header.module.css"

const Header = () => {
    const navigator = useNavigate();
    return (
        <div className={style.headerWrapper}>
            <div className={style.itemWrapper}>
                <NavLink to='/shop' className={item => item.isActive ? style.itemActive : style.item}>Shop</NavLink>
                <div className={style.itemAfter} >.</div>
                <NavLink to='/cart' className={item => item.isActive ? style.itemActive : style.item}>Shoping cart</NavLink>
            </div>
            <div className={style.itemWrapper} >
                {localStorage.user ? <button onClick={() =>{ localStorage.clear()
                navigator('/shop')}} className="btn btn-secondary" >Exit</button> :
                    <div>
                        <button type="button" onClick={() => navigator("/sign-up")} className="btn btn-secondary">Sign Up</button>
                        <button type="button" onClick={() => navigator('/login')} className="btn btn-light">Login</button>
                    </div>
                }

            </div>

        </div>

    )
}

export default Header;