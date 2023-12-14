import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";


const LoginContainer = () =>{
    const context = useSelector(state => state);
    return <Login inputsClasses={context.loginPage.classes} inputsValues={context.loginPage.inputs} />
}

export default LoginContainer
