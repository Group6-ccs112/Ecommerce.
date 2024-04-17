// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ViewCart from './ViewCart';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Market Products</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Shop</Link></li>
              <li><Link to="/cart">My Cart</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={ViewCart} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
