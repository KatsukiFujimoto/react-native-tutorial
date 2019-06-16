import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
  }

  buy = () => this.setState({
    amount: this.state.amount + 1
  })

  render() {
    return (
      <View>
        <Text style={ style.textStyle }>{ this.props.name }</Text>
        <Text style={ style.textStyle }>Amount: { this.state.amount }</Text>
        <Button title='Buy' onPress={ this.buy } />
      </View>
    );
  }
}

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 20
  }
});