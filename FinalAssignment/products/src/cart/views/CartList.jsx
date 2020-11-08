import React from 'react';
import CartItem from './CartItem';

const CartList = (props) => {
    const {items} = props;
    const cartList = items.map((item) => (
        <CartItem
            key={item.id}
            cartItem={item}
        />
    ));
    return (
        <div>
            {cartList}
        </div>
    );
};

export default CartList;