import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/product' component={ProductScreen} exact />
    </BrowserRouter>
  );
}

export default App;
