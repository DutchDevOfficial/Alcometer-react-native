import { Text, View, TextInput,Button, SafeAreaView, ScrollView, Alert } from 'react-native';
// OLD RadioButton
// import RadioForm, {RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import styles from '../style/style';
import Radiobutton from '../components/radiobuttons';

export default function Alcometer() {

  const [weight, setWeight] = useState("");
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0.00);

  const [resultColor, setResultColor] = useState("grey");

//   OLD RadioButtons
//   var radio_props = [
//     {label: 'Male', value: 'male' },
//     {label: 'Female', value: 'female' }
//   ];

  const genderlabel=[
    {
      label: 'Male',
      value:'male'
    },
    {
      label: 'Female',
      value:'female'
    }]


  function calculate() {

    const NoWeightAlert = () =>
    Alert.alert(
      "No Weight",
      "No Weight has been filled in",
    );

    const grams = ((bottles * 0.33) * 8 * 4.5) - ((weight / 10) * time);
    let result = null;

    // alert
    if(weight === ""){
      NoWeightAlert();
      return;
    }

    if(gender === "male") {
      result = grams / (weight * 0.7);
    } else {
      result = grams / (weight * 0.6);
    }

    // No negative results
    if(result < 0) { 
      result = 0;
    }

    setResult(result);
    setResultColor(GetResultColor(result));
  }



  const GetResultColor = (input) => {
    let color;
    if (input === 0) {
      color = 'green';
    } else if (input >= 0 && input < 0.03) {
      color = 'green';
    } else if (input >= 0.03 && input < 0.09) {
      color = 'yellow';
    } else if (input >= 0.09) {
      color = 'red';
    }
    console.log("changed color to " + color);
    return(color);
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Alcometer</Text>
      </View>
      
      <View>
        <Text style={styles.text}>Weight</Text>
        <TextInput style={styles.field} value={weight.toString()} onChangeText={text => setWeight(text)} keyboardType="numeric" placeholder='Enter your weight'/>
      </View>

      <View>
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
      </View>

      <View>
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
      </View>


      <Text style={styles.text}>Gender</Text>

      {/* OLD Radio button */}
      {/* <RadioForm
        radio_props={radio_props}
        initial={0}
        onPress={(value) => {setGender(value)}}
      /> */}

      <View style={styles.radioContainer}>
        <Radiobutton options={genderlabel}
            onPress={(value)=> {setGender(value)}}
            style={{backgroundColor:'#000000'}}
            borderColor={{borderColor:'#000000'}}
            />
      </View>
        
      <Text style={[styles.result, styles[`STATUS_${resultColor}`]]}>{result.toFixed(2)}</Text>
      {/* <Text>{resultColor}</Text> */}

      <Button title='CALCULATE' onPress={calculate}></Button>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.author}>Author: Wimme De Gendt</Text>  
      </View>  

      </ScrollView>
    </SafeAreaView>
  );
}
