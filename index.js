import React, { Component } from 'react';
import {
  requireNativeComponent,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

const { AirPlay } = NativeModules;

console.log(AirPlay);

// Listen to emitted events

const airPlayEmitter = new NativeEventEmitter(AirPlay);

const isAvailable = airPlayEmitter.addListener('airplayAvailable', (devices) => devices.available)
const isConnected = airPlayEmitter.addListener('airplayConnected', (devices) => devices.connected)

let AirPlayButton = requireNativeComponent('AirPlayButton', RAirPlayButton);


// Create AirPlay Button
class RAirPlayButton extends Component {

  render() {
    return (<AirPlayButton {...this.props} />);
  }
}


// Export methods and button component

export default {
  startScan: function() {
    AirPlay.startScan()
  },

  isAlreadyConnected: function() {
    AirPlay.isAlreadyConnected()
  },

  disconnect: function() {
    AirPlay.disconnect()
  },

  Button: RAirPlayButton,

}
