import Product from './components/Product';
import React from 'react';
import { Container, Header } from 'semantic-ui-react';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Container text style={{ paddingTop: '1em' }}>
      <Header as='h1' size='huge'>
        Product Page
      </Header>
      <Product />
    </Container>
  );
}

export default App;
