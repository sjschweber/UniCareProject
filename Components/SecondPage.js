import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
import {useState} from 'react';
import { Button, View, Picker, StyleSheet } from 'react-native';
import { NavigationContainer, StackActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Text } from 'react-native-elements'


export default function SecondPage({route, navigation}) {

  //configure state variableas
  const [color, setColor] = useState('');
  const [collegeYear, setCollegeYear] = useState('');
  const [meal, setMeal] = useState('');

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>What is your favorite color?</Text>
      <Picker
          selectedValue={color}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setColor(itemValue)}
        >
        <Picker.Item label="Select" value='0'/>
        <Picker.Item label="Blue" value="blue"/>
        <Picker.Item label="Red" value='red'/>
        <Picker.Item label="Yellow" value='yellow'/>
        <Picker.Item label='Orange' value='orange'/>
        <Picker.Item label="Green" value='green'/>
        <Picker.Item label="Purple" value='purple'/>
      </Picker>

      <Text>Which meal of the day is your favorite?</Text>
      <Picker
          selectedValue={meal}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setMeal(itemValue)}
        >
        <Picker.Item label="Select" value='0'/>
        <Picker.Item label="Breakfast" value="breakfast"/>
        <Picker.Item label="Brunch" value='brunch'/>
        <Picker.Item label="Lunch" value='lunch'/>
        <Picker.Item label='Dinner' value='dinner'/>
        <Picker.Item label="Late Night" value='late night'/>
      </Picker>

      <Text>Which year are you in college?</Text>
      <Picker
          selectedValue={collegeYear}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setCollegeYear(itemValue)}
        >
        <Picker.Item label="Select" value='0'/>
        <Picker.Item label="Freshman" value="freshman"/>
        <Picker.Item label="Sophomore" value='sophomore'/>
        <Picker.Item label="Junior" value='junior'/>
        <Picker.Item label='Senior' value='senior'/>
      </Picker>
      {/*Ensures all fields are selected before navigating to next page*/}
      <Button
        title="Go to Summary Screen"
        color="pink"
        disabled={collegeYear==='' || color==='' || meal===''}
        onPress={() => {
          navigation.navigate('UserInfo', {
            name: route.params.name,
            date: route.params.date,
            food: route.params.food,
            color: color,
            meal: meal,
            collegeYear: collegeYear,
          })
        }}
      />
    </View>
  );
}
