import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

import { Colors } from 'src/constants';

import { Playlist } from './Playlist';
import { Player } from './Player';
import { Provider } from 'src/provider';

const SearchScreen = ({navigation}) => {
  return (
    <View>
        <Text>SearchScreen</Text>
        <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Notifications')}
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


export default SearchScreen;