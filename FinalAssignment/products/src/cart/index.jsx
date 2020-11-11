import React , { useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartActionCreators from './actions';
import CartList from './views/CartList';
import CartTotal from './views/CartTotal';

function Cart(props){
    return (
        <div>
            <h3>Cart</h3>
            {/* <input type="button" value="LOAD CART" onClick={load}/> */}
            <hr />
            <CartList
                items={props.cartItems}
                products={props.products}
            />
            <CartTotal
                items={props.cartItems}
                products={props.products}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators, dispatch);



export default connect(mapStateToProps,mapDispatchToProps)(Cart);