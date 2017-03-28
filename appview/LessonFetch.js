'use strict'
import React,{Component}from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

export default class LessonFetch extends Component {
  constructor(props) {
    super(props);
  };

  getRequest(url){
    let opts = {
      method:'GET',

    }

    fetch(url,opts)
    .then((response)=>{
      return response.text();   //返回一个文本对象
    })
    .then((responseData)=>{
      alert('response' + responseData);
    })
    .catch((error)=>{
      alert('error' + error);
    })
  };

  postRequest(url){
    let formData = new FormData();
    formData.append('username','reactnative');
    formData.append('password','456');

    let opts = {
      method:'POST',
      body:formData
    }
    alert(formData);

    fetch(url,opts)
    .then((response)=>{
      // alert(response);
    })
    .then((responseData)=>{
      // alert(responseData);
    })
    .catch((error)=>{
      // alert(error);
    })
  };

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity //lanou3g
          onPress={()=>this.getRequest('http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123')}
          >
          <View style={styles.btn}>
            <Text>GET</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.postRequest('http://project.lanou3g.com/projects/bj/reactnative/login.php')}>
          <View style={styles.btn}>
            <Text>POST</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row'
  },
  btn:{
    marginLeft:20,
    width:60,
    height:30,
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  },

});
