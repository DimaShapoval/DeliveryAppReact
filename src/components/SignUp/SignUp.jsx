import React from "react";
import style from "./SignUp.module.css"
import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fromSubmitCreator, valueChangesCreator } from "../../Redux/signUpReducer";


const SignUp = ({ inputsName, itemsClass, contextSubmit }) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const handleChange = (e) =>{
        dispatch(valueChangesCreator(e.target))
    }
    const formSubmit = () =>{
        dispatch(fromSubmitCreator());
    }
    return (
        <section className="vh-100 bg-image"
        >
            <div className={`mask d-flex align-items-center h-100 ${style.gradientcustom3}`}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <input type="text" onChange={handleChange} name="name" id="form3Example1cg" value={inputsName.name} className={`form-control form-control-lg ${itemsClass.name}`} />
                                            <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" onChange={handleChange} name="email" value={inputsName.email} id="form3Example3cg" className={`form-control form-control-lg ${itemsClass.email}`} />
                                            <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input onChange={handleChange} type="password" name="password" value={inputsName.password} id="form3Example4cg" className={`form-control form-control-lg ${itemsClass.password}`} />
                                            <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" onChange={handleChange} name="confirmPass" value={inputsName.confirmPass} id="form3Example4cdg" className={`form-control form-control-lg ${itemsClass.confirmPass}`} />
                                            <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                                        </div>

                                        

                                        <div className="d-flex justify-content-center">
                                            <button type="button" onClick={()=>{
                                                formSubmit();
                                                // setTimeout(()=>{
                                                //     if(localStorage.user){
                                                //         navigator('/')
                                                //     }
                                                // },0)
                                            }}
                                                className={`btn btn-success btn-block btn-lg ${style.gradientcustom4} text-body`}>Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <NavLink className="fw-bold text-body" to={"/login"}><u>Login here</u></NavLink></p>

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

export default SignUp