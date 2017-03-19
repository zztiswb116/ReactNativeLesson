'use static'

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class LessonFlex extends Component {
  render(){
    return (
      <View style = {styles.container}>
        <View style = {styles.child1}>
        </View>
        <View style = {styles.child2}>
        </View>
      </View>
    )
  }
}


// const styles = StyleSheet.create({
//   container:{
//     margin:30,
//     width:320,
//     height:500,
//     backgroundColor:'yellow',
//     //默认主轴方向是cloum 修改为横向row
//     flexDirection:'row',
//     //主轴方向
//     justifyContent:'center',
//     //交叉轴方向
//     alignItems:'center'
//   },
//   child1:{
//     width:100,
//     height:100,
//     backgroundColor:'green'
//
//   },
//   child2:{
//     width:100,
//     height:100,
//     backgroundColor:'blue'
//   }
//
// })
//


const styles = StyleSheet.create({
  container:{
    marginTop:30,
    flex:1,
    backgroundColor:'cyan'
  },
  child1:{
    flex:1,
    backgroundColor:'green'
  },
  child2:{
    flex:2,
    backgroundColor:'blue'
  }
})
