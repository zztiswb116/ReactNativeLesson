'use strict'


import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class LessonImage extends Component {
  constructor(props) {
    super(props);
  };

  render(){
    return(
      <View style = {styles.continer}>
        <View style = {styles.netview}>
          <Image
            style = {styles.netimage}
            source={{uri:'http://facebook.github.io/react/img/logo_og.png'}}
          />
        </View>
        <View style = {styles.localview}>
          <Image
            style = {styles.localimage}
            source = {{uri:'react-icon.png'}}
          />
        </View>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  continer:{
    flex:1,
    margin:25,
    alignItems:'center'
  },
  netview:{
    marginTop:30,
    width:300,
    height:240,
    borderRadius:4,
    backgroundColor:'#ecf630',
    justifyContent:'center',
    alignItems:'center'
  },
  localview:{
    marginTop:30,
    width:300,
    height:200,
    borderRadius:4,
    backgroundColor:'#9941ba',
    justifyContent:'center',
    alignItems:'center'
  },
  netimage:{
    width:280,
    height:200,
    backgroundColor:'gray'
  },
  localimage:{
    width:180,
    height:180,
    backgroundColor:'gray'
  }


});
