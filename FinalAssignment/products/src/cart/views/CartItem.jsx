import React from 'react';
import { connect } from 'react-redux';
import bindActionCreators from 'redux';
import cartActionCreators from '../actions';

const CartItem = (props) => {
    const {cartItem , productsList ,cartItems} = props;
    const product = productsList.find((item) => {
        return item.id === cartItem.productID;
    });
    const { name, description, price, category , id:productID } = product;
    return (
        <li>
            <div className="price">Rs.{cartItem.quantity*price}</div>
            <span>
                {name}
            </span>
            <span> {category} </span>
            <div>{description}</div>
            <div className="price">Rs.{price}</div>
            <br />
            <div>
                <span>
                    <input type="button" value="-" onClick={() => props.reduceItemInCart(productID , cartItems)} />
                </span>
                <span>
                    [ {cartItem.quantity} ]
                </span>
                <span>
                    <input type="button" value="+" onClick={() => props.addItemInCart(productID, cartItems)} />
                </span>
            </div>
            <input type="button" value="Remove" onClick={() => props.removeItemFromCart(productID, cartItems)} />
        </li>
    );

}

const mapStateToProps = (state) => {
    return {
        productsList : state.products,
        cartItems: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);