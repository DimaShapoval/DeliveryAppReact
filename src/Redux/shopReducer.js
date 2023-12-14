import axios from "axios"

const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
const CREATE_SHOP_ITEMS = "CREATE_SHOP_ITEMS"
const COMPLETE_ORDER = "COMPLETE_ORDER"

let initialState = []
let cartData = []

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SHOP_ITEMS:

        case ADD_PRODUCT_TO_CART:
            let newProduct = {
                name: action.newName,
                price: action.newPrice,
                src: action.newImage
            }
            cartData.push(newProduct)
            sessionStorage.setItem('cartProduct', JSON.stringify(cartData))
            console.log(JSON.parse(sessionStorage.getItem('cartProduct')));

            break;
        case COMPLETE_ORDER:
            cartData = [];
            sessionStorage.removeItem("cartProduct");
            break;
        default:
            return state;
    }
    return state;
}



export const createShopItemsActionCreator = (location) =>{
    return{ 
        type: CREATE_SHOP_ITEMS,
        company: location 
    }
}


export const AddProductToCartActionCreator = (elem) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        newName: elem.name,
        newPrice: elem.price,
        newImage: elem.src,

    }
}
export const CompleteOrder = () =>{
    return{
        type: COMPLETE_ORDER
    }
}
export default shopReducer;