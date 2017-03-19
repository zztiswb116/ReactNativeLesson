'use static'

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class LessonTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText:'' };
    // this.clickBtn = this.clickBtn.bind(this);
  };

  getContent = (text)=> {
    this.setState({
      inputText:text
    })
  };

  clickBtn = ()=>{
    alert(this.state.inputText);
  };

  render(){
    return (
      <View style = {styles.continier}>
        <View style = {styles.flex}>
          <TextInput
            style = {styles.input}
            returnKeyType="search"
            placeholder="请输入内容"
            onChangeText={this.getContent}
          />
        </View>
        <TouchableOpacity style = {styles.btn} onPress = {this.clickBtn}>
          <Text style = {styles.text}>搜索
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continier:{
    marginTop:25,
    height:45,
    flexDirection:'row'
  },
  flex:{
    flex:1
  },
  input:{
    marginLeft:5,
    height:45,
    paddingLeft:5,
    borderWidth:1,
    borderColor:'#CCC',
    borderRadius:4
  },
  btn:{
    backgroundColor:'#5EE3B1',
    width:55,
    height:45,
    marginLeft:5,
    marginRight:5,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:15,
    color:'#FFF',
    fontWeight:'bold'
  }

});
