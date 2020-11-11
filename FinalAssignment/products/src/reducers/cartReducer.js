function cartReducer(currentState = [] , action){
    if(action.type === 'CHANGE_QUANTITY_IN_CART'){
        let newState =[];
        if(action.payload.quantity === 0 ){
            newState = currentState.filter((product) => action.payload.productID !== product.productID);
        } else {
            let found = false;
            newState = currentState.map((product) => {
                if (action.payload.productID === product.productID){
                    found = true;
                    return { ...product , quantity: action.payload.quantity};
                }
                return product;
            });
            if (!found){
                newState.push(action.payload);
            };
        }
        return newState;
    }
    if(action.type === 'CART_ITEMS_GET_ALL'){
        return action.payload;
    }
    return currentState;
}

export default cartReducer;