/**
 *
 */
'use static'

import React,{Component} from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text
} from 'react-native';

export default class HomePage extends React.Component {

  render(){
    return(
      <View style = {[styles.container, styles.border]}>
        <View style = {[styles.top,styles.border]}>
        </View>
        <View style={[styles.bottom,styles.border,{borderWidth:5}]}>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    marginTop:25,
    marginLeft:20,
    backgroundColor:'red',
    width:340,
    height:430
  },
  top:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    backgroundColor:'green',
    borderWidth:3,
    borderColor:'black',
    width:280,
    height:250
  },
  bottom:{
    marginTop:15,
    marginLeft:15,
    marginRight:15,
    marginBottom:20,
    backgroundColor:'yellow',
    borderWidth:3,
    borderColor:'black',
    width:280,
    height:110
  },
  border:{
    borderColor:'#0C0D0C',
    borderWidth:3
  }

});
