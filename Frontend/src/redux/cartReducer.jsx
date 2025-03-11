const initialData = {
    cart_items : []
}

const cart_reducer = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return{
                cart_items: [...state.cart_items, action.payload]
            }

        case "REMOVE_FROM_CART":

        case "UPDATE_CART":

        case "EMPTY_CART":

        default:
            return state
    }
}

export default cart_reducer