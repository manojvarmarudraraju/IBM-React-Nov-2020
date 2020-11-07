import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartActionCreators from './actions';
import CartList from './views/CartList';

function Cart(props){
    return (
        <div>
            <h3>Cart</h3>
            {/* <input type="button" value="LOAD CART" onClick={load}/> */}
            <hr />
            <CartList
                items={props.cartItems}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart
    }
}



export default connect(mapStateToProps,null)(Cart);