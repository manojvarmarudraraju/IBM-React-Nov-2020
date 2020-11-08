import React from 'react';

export default ({items , products}) => {
    var totalCost = 0;
    items.forEach(element => {
        const product = products.find((product) => product.id === element.productID);
        totalCost += element.quantity * product.price;
    });
    return (
        <div>
            <h1>Total Cost : [Rs.{totalCost}/-]</h1>
        </div>
    );
}
    