'use static'

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TextLesson extends Component {
  render(){
    return(
      <View style = {styles.container}>
        <View style = {styles.flex}>
          <View style = {styles.input}>
          </View>
        </View>
        <TouchableOpacity style = {styles.btn}>
          <Text style = {styles.text}>搜索</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    height:45,
    marginTop:25
  },
  flex:{
    flex:1
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    padding:5,
    borderColor:'#CCC',
    borderRadius:4
  },
  btn:{
    width:55,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    alignItems:'center',
    justifyContent: 'center',
    height:45
  },
  text:{
    fontSize:15,
    color:'#0C0D0D',
    fontWeight: 'bold'
  }
})
