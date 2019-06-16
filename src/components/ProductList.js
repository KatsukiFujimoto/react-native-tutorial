import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Product from './Product';

export default class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    return fetch('http://demo5760300.mockable.io/mobiles')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({products: responseJson})
          })
  }

  render() {
    var productList = this.state.products.map(function(product) {
      return (
        <Product name={product.name} key={product.id} />
      )
    })

    return(
      <ScrollView>
        {productList}
      </ScrollView>
    );
  }
}