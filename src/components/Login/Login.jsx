import React from "react";
import style from "./Login.module.css"
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFromSubmitCreator, loginValueChangesCreator } from "../../Redux/loginReducer";


const Login = ({ inputsClasses, inputsValues }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const handleChange = (e) => {
        dispatch(loginValueChangesCreator(e.target));
    }
    const handleClick = () => {
        dispatch(loginFromSubmitCreator())
    }
    return (
        <section className="vh-100 bg-image"
        >
            <div className={`mask d-flex  h-100 ${style.gradientcustom3}`}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center mt-5 h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Sign in your account</h2>

                                    <form>



                                        <div className="form-outline mb-4">
                                            <input type="email" name="email" id="form3Example3cg" onChange={handleChange} value={inputsValues.email} className={`form-control form-control-lg ${inputsClasses.email}`} />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" name="password" id="form3Example4cg" onChange={handleChange} value={inputsValues.password} className={`form-control form-control-lg ${inputsClasses.password}`} />
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        </div>


                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                onClick={handleClick}
                                                className={`btn btn-success btn-block btn-lg ${style.gradientcustom4} text-body`}>Sign in</button>
                                        </div>



                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login