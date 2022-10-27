import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Screens  from 'src/screens';
import SearchScreen from 'src/screens/SearchScreen';
import SettingScreen from 'src/screens/SettingScreen';

 


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Screens')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" options={{headerShown: false}} component={SearchScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="Screens" options={{headerShown: false}} component={Screens} />
    </Stack.Navigator>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }
