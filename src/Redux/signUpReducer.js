import axios from "axios";

const CHANGE_INPUT_VALUES = 'CHANGE_INPUT_VALUES';
const FORM_SUBMIT = "FORM_SUBMIT";
const CHECK_EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let initialState = {
    inputs: {
        name: "",
        email: "",
        password: "",
        confirmPass: "",
    },
    classes: {
        name: "lolginSuccess",
        email: "lolginSuccess",
        password: "lolginSuccess",
        confirmPass: "lolginSuccess",

    },
    formSubmit: false
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUES:
            let itemName = action.name;
            let itemValue = action.value;
            state = { ...state, inputs:{ ...state.inputs, [itemName]: itemValue}};
            break;
        case FORM_SUBMIT:
            if(!CHECK_EMAIL_REGEX.test(state.inputs.email)){
                state = { ...state, classes: { ...state.classes, email: "loginError" } }
            }
            else{
                state = { ...state, classes: { ...state.classes, email: "lolginSuccess" } }
            }
            if(state.inputs.name.length < 3){
                state = { ...state, classes: { ...state.classes, name: "loginError" } }
            }
            else{
                state = { ...state, classes: { ...state.classes, name: "lolginSuccess" } }
            }
            if(state.inputs.password !== state.inputs.confirmPass || state.inputs.password.length < 6){
                state = { ...state, classes: { ...state.classes, password: "loginError" } }
                state = { ...state, classes: { ...state.classes, confirmPass: "loginError" } }
            }
            else{
                state = { ...state, classes: { ...state.classes, password: "lolginSuccess" } }
                state = { ...state, classes: { ...state.classes, confirmPass: "lolginSuccess" } }
            }
            if(state.classes.name === "lolginSuccess" && state.classes.email === "lolginSuccess" && state.classes.password === "lolginSuccess"){
                let {name, email} = state.inputs;
                axios.post('http://localhost:3001/sign-up', state.inputs)
                .then(res => {
                    let {data} = res;
                    if(data === false){
                        alert("User with this email has already exists")
                    }
                    else{
                        localStorage.setItem('user', JSON.stringify({name: name, email: email}))
                        
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

export const valueChangesCreator = (elem) => {
    return {
        type: CHANGE_INPUT_VALUES,
        name: elem.name,
        value: elem.value
    }
}
export const fromSubmitCreator = () => {
    return{
        type: FORM_SUBMIT
    }
}

export default signUpReducer;