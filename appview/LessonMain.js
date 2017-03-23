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
    return(
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
            component:component
          }}
          renderScene={(route,navigator) =>{
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }}
        />
      </TabNavigator.Item>
    )
  };

  render(){
    return(
      <TabNavigator>
        {/* 首页 */}
        {this.renderTabBarItem("首页",'home','tabbar_home_30x30','tabbar_home_selected_30x30',LessonHome)}
        {/* 海淘 */}
        {this.renderTabBarItem("海淘",'shopping','tabbar_abroad_30x30','tabbar_abroad_selected_30x30',LessonText)}
        {/* 小时风云榜 */}
        {this.renderTabBarItem("小时风云榜",'hourlist','tabbar_rank_30x30','tabbar_rank_selected_30x30',LessonTextInput)}
      </TabNavigator>
    )
  };
};


const styles = StyleSheet.create({

});
