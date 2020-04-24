import Product from './components/Product';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import products from './static/products.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from './components/styles/Wrapper';

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <Router>
      <Wrapper text style={{ paddingTop: '2em' }}>
        <Switch>
          <Route exact path='/' render={() => <ProductList products={products} />} />
          <Route
            path='/product/:id'
            render={() => <Product products={products} reviews={reviews} setReviews={setReviews} />}
          />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
