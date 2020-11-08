import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Products from "./products";
import Categories from "./categories";
import Cart from './cart';
import TimerContainer from './timer/TimerContainer';
import Home from './Home';

function App(props) {
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
export default connect(mapStateToProps,null)(App);
