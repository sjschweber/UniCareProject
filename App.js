 import 'react-native-gesture-handler';
 import 'react-native-gesture-handler';
 import * as React from 'react';
 import { Button, View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 //import custom built components
 import HomeScreen from './Components/HomeScreen.js';
 import SecondPage from './Components/SecondPage.js';
 import DetailsScreen from './Components/Details.js';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} initialParams={{ clearScreen: false }} />
        <Stack.Screen name="Second" component={SecondPage}/>
        <Stack.Screen name="UserInfo" component={DetailsScreen} />
      </Stack.Navigator>
</NavigationContainer>
  );
}

export default App;
