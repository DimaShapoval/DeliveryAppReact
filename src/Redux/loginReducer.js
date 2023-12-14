import axios from "axios";

const LOGIN_CHANGE_INPUT_VALUES = 'LOGIN_CHANGE_INPUT_VALUES';
const LOGIN_FORM_SUBMIT = "LOGIN_FORM_SUBMIT";
const CHECK_EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let initialState = {
    inputs: {
        email: "",
        password: "",
    },
    classes: {
        email: "lolginSuccess",
        password: "lolginSuccess",

    },
    formSubmit: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_CHANGE_INPUT_VALUES:
            let itemName = action.name;
            let itemValue = action.value;
            state = { ...state, inputs:{ ...state.inputs, [itemName]: itemValue}};
            break;
        case LOGIN_FORM_SUBMIT:
            if(!CHECK_EMAIL_REGEX.test(state.inputs.email)){
                state = { ...state, classes: { ...state.classes, email: "loginError" } }
            }
            else{
                state = { ...state, classes: { ...state.classes, email: "lolginSuccess" } }
            }
            if(state.inputs.password.length <6){
                state = { ...state, classes: { ...state.classes, password: "loginError" } }
            }
            else{
                state = { ...state, classes: { ...state.classes, password: "lolginSuccess" } }
            }
            if(state.classes.email === "lolginSuccess" && state.classes.password === "lolginSuccess"){
                let {name, email} = state.inputs;
                axios.post('http://localhost:3001/login', state.inputs)
                .then(res => {
                    let {data} = res;
                    if(data.success){
                        console.log(data)
                        localStorage.setItem('user', JSON.stringify({name: data.name, email: data.email}))
                    }
                    else{
                        alert("User with this email does not exists")
                        
                    }
                })
                state = initialState
                
            }
            break;
        
        default:
            return state;
    }
    return state;

}

export const loginValueChangesCreator = (elem) => {
    return {
        type: LOGIN_CHANGE_INPUT_VALUES,
        name: elem.name,
        value: elem.value
    }
}
export const loginFromSubmitCreator = () => {
    return{
        type: LOGIN_FORM_SUBMIT
    }
}

export default loginReducer;