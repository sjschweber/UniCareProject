import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, CommonActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RNRestart from 'react-native-restart';



export default function DetailsScreen({route, navigation}) {
  const {name} = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{name}</Text>
      <Text>{route.params.date}</Text>

      <Button
        title="done"
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}
