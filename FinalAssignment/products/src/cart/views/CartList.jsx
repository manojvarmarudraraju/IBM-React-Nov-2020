import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const {cartItems} = props;
    const cartList = cartItems.map((item) => (
        <CartItem
            key={item.id}
            item={item}
        />
    ));
    return (
        <div>
            {cartList}
        </div>
    );
};

export default CartList;