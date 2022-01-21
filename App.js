import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
//import RadioForm from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';

export default function App() {

   const [weight, setWeight] = useState()
  const [bottles, setBottles] = useState()
  const [time, setTime] = useState(1)
  const [gender, setGender] = useState("male")
  const [result, setResult] = useState(0.00)

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
      <Text style={styles.title}>Alcometer</Text>

      <Text style={styles.text}>Weight</Text>
      <TextInput style={styles.field} value={weight} onChangeText={text => setWeight(text)} />


      <Text style={styles.text}>Bottles</Text>
      <Picker
        style={styles.picker}
        selectedValue={bottles}
        mode="dropdown"
        onValueChange={(value, itemIndex) =>
          setBottles(value)
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
        mode="dropdown"
        style={styles.picker}
        onValueChange={(itemValue) =>
          setTime(itemValue)
        }>
        <Picker.Item label="1 hour" value="1" />
        <Picker.Item label="2 hours" value="2" />
        <Picker.Item label="3 hours" value="3" />
        <Picker.Item label="4 hours" value="4" />
        <Picker.Item label="5 hours" value="5" />
      </Picker>

      <Text style={styles.text}>Gender</Text>


      <Text style={styles.result}>{result.toFixed(2)}</Text>

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
    marginTop:10,
    fontSize:40
  },
  title:{
    color: 'blue',
    fontSize:40,
    marginBottom:20
  },
  text: {
    textAlign:'left',
    fontStyle:'normal',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight:"bold",
    width: 300,
  },
  picker: {
    marginVertical: 10,
    width: 300,
    borderWidth: 1,
    borderColor: "#666",
  },
  field:{
    width: 300,
  }
});
