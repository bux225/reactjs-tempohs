// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import ChannelList from './src/components/ChannelList';


// Create a component
const App = () => (
  <View>
    <Header headerText={'Tempo HS!'} />
    <ChannelList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('tempohs', () => App);
