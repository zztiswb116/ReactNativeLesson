'use static'

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class LessonView extends Component {
  render(){
    return(
      <View style={[styles.container,styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.center,styles.flex]}>
            <Text>酒店</Text>
          </View>
          <View style={[styles.flex,styles.lineLeftRight]}>
            <View style = {[styles.flex,styles.lineCenter,styles.center]}>
              <Text>海外酒店</Text>
            </View>
            <View style = {[styles.flex,styles.center]}>
              <Text>特价酒店</Text>
            </View>
          </View>
          <View style={[styles.flex]}>
            <View style={[styles.flex,styles.center,styles.lineCenter]}>
              <Text>团购</Text>
            </View>
            <View style= {[styles.flex,styles.center]}>
              <Text>民宿客栈</Text>
            </View>
          </View>
        </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container:{
    marginTop:25,
    backgroundColor:'#F2F2F2'
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  flex:{
    flex:1
  },
  item:{
    flexDirection:'row',
    backgroundColor:'#FB4F63',
    marginTop:5,
    marginLeft:5,
    marginRight:5,
    height:80,
    borderRadius:5
  },
  lineLeftRight:{
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:'white'
  },
  lineCenter:{
    borderBottomWidth:1,
    borderColor:'white'
  }
})
