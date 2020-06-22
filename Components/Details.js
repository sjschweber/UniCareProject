import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//define styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#8A2BE2',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },

  form:{
    backgroundColor: '#D8BFD8',
    color: 'white',
    borderRadius: 6,
    margin: 15,
    padding: 20,
  },

  headerText:{
    color: '#4B0082',
    fontSize: 25
  },

  text:{
    fontSize: 15,
    margin: 4
  }
})

export default function DetailsScreen({route, navigation}) {

  return (

    <View style={styles.container}>
      {/*Display user info*/}
      <View style={styles.form}>
        <Text style={styles.headerText}>User Info:</Text>
        <Text style={styles.text}>Name: {route.params.name}</Text>
        <Text style={styles.text}>Birthday: {route.params.date}</Text>
        <Text style={styles.text}>Favorite food: {route.params.food}</Text>
        <Text style={styles.text}>Favorite color: {route.params.color}</Text>
        <Text style={styles.text}>Favorite meal of the day: {route.params.meal}</Text>
        <Text style={styles.text}>Year in college: {route.params.collegeYear}</Text>

        {/*onPres navigates to and clears home screen*/}
        <Button
          title="Done"
          onPress={() => navigation.navigate('Home',{
            clearScreen: true,
          })}
          />
      </View>
    </View>
  );
}
