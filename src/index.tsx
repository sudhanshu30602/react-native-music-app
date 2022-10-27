import React from 'react';
import { StatusBar } from 'react-native';
import { MyStack } from './navigations/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'src/provider';
import Screens  from 'src/screens'

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    // <Provider>
    //   <StatusBar
    //     translucent
    //     backgroundColor="transparent"
    //     barStyle="light-content"
    //   />
    //   <Screens />
    // </Provider>
     <NavigationContainer>
     <MyStack />
   </NavigationContainer>
  );
};
