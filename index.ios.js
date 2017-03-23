/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';

import LessonMain from './appview/LessonMain';


export default class ReactNativeLesson extends Component {
  render() {
    return (
      <LessonMain />
    );
  }
};

AppRegistry.registerComponent('ReactNativeLesson', () => ReactNativeLesson);
