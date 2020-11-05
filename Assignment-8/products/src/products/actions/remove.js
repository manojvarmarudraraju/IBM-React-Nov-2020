function remove(product) {
    const action = { type: 'REMOVE_PRODUCT', payload: product };
    return action;
}

export default remove;