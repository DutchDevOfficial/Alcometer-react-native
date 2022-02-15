import { StyleSheet, Text, View, TextInput,Button, SafeAreaView, ScrollView, StatusBar,  Alert  } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    result: {
  
      marginBottom: 10,
      marginTop:10,
      fontSize:40,
      fontWeight:"bold",
      textAlign:'center'
    },
    title:{
      color: 'blue',
      fontSize:40,
      marginBottom:20,
      textAlign:'center'
    },
    text: {
      fontStyle:'normal',
      fontWeight:"bold",
    },
    picker: {
      marginVertical: 10,
      flex: 1
    },
    field:{
      width: 300,
    },
  
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 20,
      marginTop:20
    },
    STATUS_green: {
      color: 'green'
    },
    STATUS_yellow: {
      color: 'yellow'
    },
    STATUS_red: {
      color: 'red'
    }
  });
  