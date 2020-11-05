function removeOutOfStock(products /* to be fixed */) {
    const productsToRemove = products.filter(p => p.isOutOfStock);
    const action = { type: 'REMOVE_MANY_PRODUCTS', payload: productsToRemove };
    return action;
}

export default removeOutOfStock;