import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


export default function App() {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="logo">e-commerce</Link>
          </div>
          <div>
            <Link to="/cart">Cart
              {
                cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )
              }
            </Link>
            <Link to="/signin">Sign in</Link>
          </div>
        </header>
        <main>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </main>
        <footer className="row">
          All right reserved
        </footer>
      </div>  
    </BrowserRouter>  
  );
}