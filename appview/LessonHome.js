'use strict'
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import LessonFetch from './LessonFetch';

export default class LessonHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render(){
    return(
      // <View style = {styles.container}>
      //   <Text>nihaofhakdshfajshdfjk</Text>
      // </View>
      <LessonFetch></LessonFetch>
    );
  };

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:'#FFFFFF'
  }
});
