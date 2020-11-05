import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductsList extends Component {
    render() {
        const { products, toggleOutOfStock, remove, removeOutOfStock } = this.props;
        console.log(products);
        const productItems = products.map(product => (
            <ProductItem
                key={product.id}
                product={product}
                toggleOutOfStock={toggleOutOfStock}
                remove={remove}
            />
        )
        );
        return (
            <section className="list">
                <ol>
                    {productItems}
                </ol>
                <input
                    type="button"
                    value="Remove Out Of Stock"
                    onClick={() => removeOutOfStock(products)}
                />
            </section>
        )
    }
}

export default ProductsList;