import Product from './components/Product';
import ProductList from './components/ProductList';
import React, { useState } from 'react';
import products from './static/products.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

const Wrapper = styled(Container)`
  padding-top: 2em;
`;

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <Router>
      <Wrapper text>
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
