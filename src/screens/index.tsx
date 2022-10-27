import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Colors } from 'src/constants';

import { Playlist } from './Playlist';
import { Player } from './Player';
import { Provider } from 'src/provider';

const Screens = ({navigation}) => {
  return (
    <Provider>
      <Playlist navigation={navigation}/>
      <Player />
      {/* <Text>fsdv</Text> */}
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});


export default Screens;