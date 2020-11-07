function cartReducer(currentState = [] , action){
    if(action.type === 'CHANGE_QUANTITY_IN_CART'){
        let newState =[];
        if(action.payload.quantity === 0 ){
            newState = currentState.filter((product) => action.payload.productID !== product.productID);
        } else {
            newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    return { ...product , quantity: action.payload.quantity};
                }
                return product;
            });
        }
        return newState;
    }
    return currentState;
}

export default cartReducer;