import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import shopReducer from "./shopReducer";
import thunk from "redux-thunk";
import cartReducer from "./cartReducer";
import signUpReducer from "./signUpReducer";
import loginReducer from "./loginReducer";


let reducers = combineReducers({
    shopPage: shopReducer,
    cartPage: cartReducer,
    signUpPage: signUpReducer,
    loginPage: loginReducer
})  

let store = createStore(reducers, applyMiddleware(thunk));

export default store;