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
      color: '#6fbbd3',
      fontSize:40,
      marginBottom:20,
      textAlign:'center',
      fontWeight:"bold",
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
  
    header: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      marginHorizontal: 0,
      marginTop:30
    },
    STATUS_green: {
      color: 'green'
    },
    STATUS_yellow: {
      color: 'yellow'
    },
    STATUS_red: {
      color: 'red'
    },
    author: {
        color: 'grey',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
    },

    radioButtonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
        
        marginBottom: 10,
        paddingTop:10,
        paddingRight: 30,
       
        
      },
      label:{
        flex: 1,
        fontSize: 15,
        textAlign: 'left',
      },
      circle:{
        height:28,
        width:28,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#000000',
        alignItems:'center',
        justifyContent:'center'
      },
      checkedCircle:{
        width:18,
        height:18,
        borderRadius:7,
        backgroundColor:'#000000',
      }
  });
  