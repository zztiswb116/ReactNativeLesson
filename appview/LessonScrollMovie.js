'use static'

import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  RefreshControl
} from 'react-native';

import moviesData from '../data/Movies.json';

/**
 * 因为没有学习网络请求 所以用本地数据
 * https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
 * json格式化工具网址：
 * http://www.runoob.com/jsontool
 */
export default class LessonScrollMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render(){

    var movies = moviesData.movies;
    var movieViews = [];

    for (var i in movies) {
      var movie = movies[i];
      var row = (
        <View key={i} style = {styles.row}>
          <Image
            style={styles.thumbnail}
            source={{uri:movie.posters.thumbnail}}
          />
          <View style = {styles.rightContent}>
            <Text style = {styles.title}>{movie.title}</Text>
            <Text style = {styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
      movieViews.push(row);
    }

    return(
      <View style = {styles.container}>
        <ScrollView style = {styles.scrollView}>
          {
            //数组(所有子组件)
            movieViews
          }
        </ScrollView>
      </View>
    )
  };

};


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  scrollView:{
    marginTop:20,
    flex:1,
    backgroundColor:'#C8C3C5'
  },
  row:{
    flexDirection:'row',
    padding:5,
    alignItems:'center',
    backgroundColor:'#cccccc'
  },
  thumbnail:{
    width:53,
    height:81,
    backgroundColor:'gray'
  },
  rightContent:{
    flex:1,
    marginLeft:10,
  },
  title:{
    fontSize:13,
    marginTop:3,
    marginBottom:3,
    textAlign:'center'
  },
  year:{
    marginBottom:3,
    textAlign:'center'
  }
})
