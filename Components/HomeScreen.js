import 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { Button, View, Picker, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input, Text } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f2abff',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  birthday: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15

  },
  form:{
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 15,
    padding: 20,
    justifyContent: 'space-between'
  }
})

export default function HomeScreen({route, navigation }) {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [food, setFood] = useState('');
  const [error, setError] = useState(false);
  const [foodErr, setFoodErr] = useState(false);
  const [dateErr, setDateErr] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.form}>

        <Text>Name:</Text>
        <Input
            placeholder="Please enter name"
            onChangeText={text => setName(text)}
            errorStyle={{ color: 'red' }}
            errorMessage= {error ? 'Please enter a name': ' '}
        />
      <View style={styles.birthday}>
        <Text style={{margin: 15}}>
          DOB:
        </Text>
        <DatePicker
          placeholder="select date"
          format="YYYY-MM-DD"
          date={date}
          onDateChange={(date) => {setDate(date)}}
          />


      </View>
      <Text>What is your favorite food?</Text>
      <Input
        placeholder="Please enter food name"
        onChangeText={text => setFood(text)}
        errorStyle={{color: 'red'}}
        errorMessage={foodErr ? 'Please enter a food': ''}/>
      <Button
        title="Go to Details"
        color="green"
        onPress={() => {

          if(name === ''){
            setError(true)
          }else if(food === ''){
            setFoodErr(true);
          }else if(date === ''){
            setDateErr(true);
          }else{
          navigation.navigate('Second', {
          name: name,
          food: food,
          date: date
        })
      }}

          }
      />
      </View>

    </View>
  );
}
