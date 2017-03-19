'use strict'

import React,{Component} from 'react';
import{
  StyleSheet,
  View,
  Text,
  Image,
  Navigator,
  TouchablOpacity
} from 'react-native';

import LeesonText from './LessonText';

export default class LeesonNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render(){

    var rootRout = {component:LessonText};

    return(
      <Navigator
        initialRoute={rootRout}
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route,navigator) => {
          let Component = navigator.component;
          return(
            <Component
              navigator = {navigator}
              route = {route}
            />
          )
        }}
      />
    )
  };


}


const styles = StyleSheet.create({

});
