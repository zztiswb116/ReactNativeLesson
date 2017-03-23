'use strict'
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import LessonHome from './LessonHome';
import LessonText from './LessonText';
import LessonTextInput from './LessonTextInput';

export default class LessonMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'home'
    }
  };

  renderTabBarItem(title,selectedTab,image,selectedImage,component){
    <TabNavigator.Item
      selected={this.state.selectedTab === selectedTab}
      title={title}
      renderIcon={() => <Image source={{uri:image}} />}
      renderSelectedIcon={() => <Image source={{uri:selectedImage}} />}
      badgeText="1"
      onPress={() => this.setState({ selectedTab: selectedTab })}>
      <Navigator
        initialRoute={{
          name:selectedTab,
          Component:component
        }}
        renderScene={(route,navigator) =>{
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    </TabNavigator.Item>
  };

  render(){
    return(
      <TabNavigator>
        {/* 首页 */}
        {this.renderTabBarItem("首页",'home','','',LessonHome)}
        {/* 海淘 */}
        {this.renderTabBarItem("海淘",'shopping','','',LessonText)}
        {/* 小时风云榜 */}
        {this.renderTabBarItem("小时风云榜",'hourlist','','',LessonTextInput)}
      </TabNavigator>
    )
  };
};


const styles = StyleSheet.create({

});
