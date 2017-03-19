'use static'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class LessonTouch extends Component {
  clickBtn(){
    alert('点击搜索');
  };
  render() {
    return(
      <View style={styles.continier}>
        <View style = {styles.flex}>
          <View style = {styles.input}>
          </View>
        </View>
        <TouchableOpacity style = {styles.btn} onPress={this.clickBtn}>
          <Text style = {styles.search}>搜索</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  continier:{
    flexDirection:'row',
    marginTop:25,
    height:45
  },
  flex:{
    flex:1
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:'#CCC',
    borderRadius:4
  },
  btn:{
    width:55,
    marginLeft:5,
    marginRight:5,
    backgroundColor:'#174B5C',
    height:45,
    justifyContent:'center',
    alignItems:'center'
  },
  search:{
    fontSize:15,
    color:'#FFF',
    fontWeight:'bold'
  }
});
