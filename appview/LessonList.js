'use strict'

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} from 'react-native';

import datas from '../data/Movies.json';
var movieds = datas.movies;


export default class LessonList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(movieds),
    };
  };

  _renderRow = (rowData, sectionID, rowID, highlightRow) => {
    return (
      <View style = {styles.row}>
        <Text style = {styles.content}>{rowData.title}</Text>
      </View>
    )
  }

  render() {
    return(
      <ListView
        style = {styles.container}
        initialListSize = {5}
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}
      />
    )
  };
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  },
  row:{
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    height:100,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'
  },
  content:{
    flex:1,
    fontSize:20,
    color:'blue',
    lineHeight:100
  }
});
