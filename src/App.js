import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';

import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyArray: [{name: 1, price: 1, image: 1},
        {name: 2, price: 2, image: 2},
        {name: 3, price: 3, image: 3},]
    }
  }

  render(){
  return (
    <div>
      <Dashboard dummyArray={this.state.dummyArray}/>
      <Form />
      <Header />
      <Product />
    </div>
  )
  }
}
