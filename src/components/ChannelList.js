// Import libraries to make registerComponent
import React from 'react';
import { Alert, Button } from 'react-native';

// Make registerComponent
const ChannelList = () => {
  const numChannels = 4;
  const channels = ['Offense 1', 'Offense 2', 'Defense 1', 'Defense 2'];
  const views = [];
  for (let i = 0; i < numChannels; i++) {
   views.push(
      <Button
         key={i}
         onPress={() => {
          Alert.alert('Press To Talk', channels[i]);
        }}
         title={channels[i]}
         color="#841584"
         accessibilityLabel="Learn more about this purple button"
      />);
    } // % buttons are created.

    return views;
};

// Make component available to other parts of App
export default ChannelList;
