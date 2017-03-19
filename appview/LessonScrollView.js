
'use strict'

import React,{Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';


export default class LessonScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  _onScrollBeginDrag = ()=> {
    console.log('开始拖拽');
  };
  _onScrollEndDrag = ()=> {
    console.log('结束拖拽');
  };
  _onMomentumScrollBegin = ()=> {
    console.log('开始滑动');
  };
  _onMumentumScrollEnd = ()=> {
    console.log('滑动结束');
  };
  _onRefresh = ()=> {
    console.log('正在刷新')
  };

//onScrollBeginDrag={this._onScrollBeginDrag()}  带括号方法只会调用一次 不带括号 会持续调用

  render(){
    return(
      <View style = {styles.container}>
        <ScrollView
          style = {styles.scrollview}
          showsVerticalScrollIndicator={true}
          onScrollBeginDrag={this._onScrollBeginDrag}
          onScrollEndDrag={this._onScrollEndDrag}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrooEnd={this._onMumentumScrollEnd}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor='red'
              title="正在刷新..."
              onRefresh={this._onRefresh}
            />
          }>
          <View style = {styles.view_1}>
          </View>
          <View style = {styles.view_2}>
          </View>
          <View style = {styles.view_3}>
          </View>
        </ScrollView>
      </View>
    );
  };
};


const styles = StyleSheet.create({
  container:{
    // justifyContent:'center',
    flex:1,
    backgroundColor:'cyan'
  },
  scrollview:{
    marginTop:25,
    backgroundColor:'#CCCCCC',
    paddingVertical: 20
  },
  view_1:{
    margin:15,
    flex:1,
    height:300,
    backgroundColor:'yellow'
  },
  view_2:{
    margin:15,
    flex:1,
    height:300,
    backgroundColor:'red'
  },
  view_3:{
    margin:15,
    flex:1,
    height:300,
    backgroundColor:'blue'
  },

});
