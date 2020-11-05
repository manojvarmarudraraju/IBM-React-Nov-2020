function categoriesReducer(currentState = [], action){
    if (action.type === 'ADD_CATEGORY')
        return [...currentState, action.payload];
    return currentState;
}

export default categoriesReducer;