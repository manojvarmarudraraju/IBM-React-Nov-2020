import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Products from "./products";
import Categories from "./categories";
import Cart from './cart';
import TimerContainer from './timer/TimerContainer';
import Home from './Home';
import { bindActionCreators } from 'redux';
import cartActionCreators from './cart/actions';
import productActionCreators from './products/actions';
import categoriesActionCreators from './categories/actions'
import { useEffect } from 'react';

function App(props) {
  useEffect(() => {
    props.cartGetAll();
    props.loadCategories();
    props.loadProducts();
} ,[]);
  return (
    <Router>
        <h1>My App</h1>
        <div>
          <span>
            [ <Link to="/">Home</Link> ]
          </span>
          <span>
            [ <Link to="/products">Products</Link> ]
          </span>
          <span>
            [ <Link to="/categories">Categories</Link> ]
          </span>
          <span>
           [ <Link to="/cart">Cart[{props.cart.length}]</Link> ]
          </span>
        </div>
        <hr />
        <TimerContainer />
        <Switch>
          <Route path="/categories" component={Categories}/>
          <Route path="/products" component={Products}/>
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(cartActionCreators, dispatch) ,
    ...bindActionCreators(productActionCreators, dispatch),
    ...bindActionCreators(categoriesActionCreators,dispatch),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
