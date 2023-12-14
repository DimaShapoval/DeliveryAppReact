import React, { useContext, useEffect } from "react";
import SignUp from "./SignUp";
import { useDispatch, useSelector } from "react-redux";
import { valueChangesCreator } from "../../Redux/signUpReducer";
import { useNavigate } from "react-router-dom";


const SignUpContainer = ()=>{
    const context = useSelector((state)=>state.signUpPage)
    return (
    <SignUp contextSubmit={context.formSubmit} inputsName={context.inputs} itemsClass={context.classes} />
    )
}

export default SignUpContainer