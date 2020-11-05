function toggleOutOfStock(product) {
    const updatedProduct = { ...product, isOutOfStock: !product.isOutOfStock };
    const action = { type: 'UPDATE_PRODUCT', payload: updatedProduct };
    return action;
}

export default toggleOutOfStock;