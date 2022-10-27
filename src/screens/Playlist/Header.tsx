import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Search, Gear, DoubleQuaver } from 'src/icons';


export const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
      <Search size={28} />
      </TouchableOpacity>
      <DoubleQuaver size={35} />
      <TouchableOpacity  onPress={() => navigation.navigate('SettingScreen')}>
      <Gear size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
