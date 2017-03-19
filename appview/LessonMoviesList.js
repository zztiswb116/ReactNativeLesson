'use strict'

import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

import movieDatas from '../data/Movies.json';


export default class LessonMoviesList extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(movieDatas.movies),
    }
  };

  _senderWithRows = (rowData, sectionID, rowID, highlightRow) =>{
    return(
      <View style = {styles.row}>
        <Image
          style={styles.image}
          source={{uri:rowData.posters.thumbnail}}
        />
        <View style = {styles.rightContent}>
          <Text style = {styles.title}>{rowData.title}</Text>
          <Text style = {styles.year}>{rowData.year}</Text>
        </View>
      </View>
    )
  };

  _renderHeader = () => {
    return(
      <View style = {styles.header}>
        <Text style = {[styles.title,{fontSize:20,color:'red'}]}>Movie List</Text>
      </View>
    )
  };

  _renderSeparator = (sectionID,rowID) => {
    return(
      <View style = {styles.separator}>
      </View>
    )
  }

  render(){
    return(
      <ListView
        style={styles.container}
        renderRow={this._senderWithRows}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}
      />
    )
  };

};

const styles = StyleSheet.create({
  contianer:{
    flex:1,
    marginTop:25
  },
  row:{
    flex:1,
    flexDirection:'row',
    padding:5,
    height:100,
    backgroundColor:'#cccccc',
  },
  separator:{
    height:1,
    backgroundColor:'red'
  },
  image:{
    width:100,
    height:80,
    marginTop:10,
    backgroundColor:'#364a2f'
  },
  rightContent:{
    flex:1,
    marginLeft:10,
  },
  title:{
    fontSize:15,
    color:'black',
    marginTop:5,
    textAlign:'center',
  },
  year:{
    fontSize:15,
    color:'black',
    textAlign:'center',
  },
  header:{
    height:44,
    backgroundColor:'gray',
  }
});
