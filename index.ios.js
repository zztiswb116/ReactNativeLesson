/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';

import LessonMain from './appview/LessonMain';


export default class ReactNativeLesson extends Component {
  render() {
    return (
      <LessonMain />
    );
  }
};

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ReactNativeLesson', () => ReactNativeLesson);
