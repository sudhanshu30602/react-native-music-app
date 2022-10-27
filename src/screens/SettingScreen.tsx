import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

import { Colors } from 'src/constants';

import { Playlist } from './Playlist';
import { Player } from './Player';
import { Provider } from 'src/provider';

const SettingScreen = ({navigation}) => {
  return (
    <View>
        <Text>Setting Screen</Text>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});


export default SettingScreen;