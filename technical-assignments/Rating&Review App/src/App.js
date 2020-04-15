import Product from './components/Product';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import products from './static/products.json';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <Router>
      <Container text className='container'>
        <Switch>
          <Route exact path='/' render={() => <ProductList products={products} />} />
          <Route
            path='/product/:id'
            render={() => <Product products={products} reviews={reviews} setReviews={setReviews} />}
          />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
