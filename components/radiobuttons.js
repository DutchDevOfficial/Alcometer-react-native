import { View, Text, Pressable } from 'react-native';
import React,{useState} from 'react';
import styles from '../style/style';

export default function Radiobutton({options, onPress, style, borderColor}) {
    const[value, setValue]= useState(null);

    function handlePress(selected){
        setValue(selected);
        onPress(selected);
       
    }
    return (
    <>
      {
        options.map((item, index)=>(
            <View key={index} style={[styles.radioButtonContainer]}>
                <Text style={styles.label}>{item.label}</Text>
                <Pressable style={[styles.circle,borderColor]} onPress={()=> handlePress(item.value)}>
                  {value=== item.value && <View style={[styles.checkedCircle,style]}></View> }
                </Pressable>
            </View>
            ) 
        )
      }
    </>
  );
}