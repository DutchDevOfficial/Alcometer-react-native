import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
//import RadioForm from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

export default function App() {

  const [selectedLanguage, setSelectedLanguage] = useState("TEST");


  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(1)
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0)

  function calculate() {
    const grams = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time)
    let result = null;


    if(gender === "male") {
      result = grams / (weight * 0.7);
    } else {
      result = grams / (weight * 0.6);
    }

    if(result < 0) { return setResult(0)}

    setResult(result);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Text style={styles.text}>Bottles</Text>
      <Picker
        selectedValue={bottles}
        onValueChange={(itemValue, itemIndex) =>
          setBottles(itemValue)
        }>
        <Picker.Item label="1 bottle" value="1" />
        <Picker.Item label="2 bottles" value="2" />
        <Picker.Item label="3 bottles" value="3" />
        <Picker.Item label="4 bottles" value="4" />
        <Picker.Item label="5 bottles" value="5" />
      </Picker>


      <Text style={styles.text}>Time</Text>
      <Picker
        selectedValue={time}
        onValueChange={(itemValue, itemIndex) =>
          setTime(itemValue)
        }>
        <Picker.Item label="1 hour" value="1" />
        <Picker.Item label="2 hours" value="2" />
        <Picker.Item label="3 hours" value="3" />
        <Picker.Item label="4 hours" value="4" />
        <Picker.Item label="5 hours" value="5" />
      </Picker>


      <Text style={styles.result}>{result}</Text>

      <Button title='CALCULATE' onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    color:'yellow',
    marginBottom: 10,
    marginTop:10
  },
  picker: {

  }
});
