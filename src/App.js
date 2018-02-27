/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';


export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = { input: "Lendo QRCode..." };
  }
  _onRead(e){
    this.setState({ input: e })
  }

  _topContent(){
      return (
        <Text>{ this.state.input.data }</Text>
      )
  }

  render() {
    return (
      <QRCodeScanner
        onRead={(e)=> ( this._onRead(e) )}
        topContent={this._topContent()}
        showMarker
        reactivate
        />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
