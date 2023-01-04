import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ViewEpisode = (props) => {
  return (
    <View style={myStyles.row_container}>

      <View style={{width:'2%',height:'99%',borderRadius:5}}></View>
    <View style={myStyles.name_container}>
      <Text style={myStyles.name}>{props.episodes.title }</Text>
      <Text style={{color:'#00b4d8',fontSize:18}}>{props.episodes.air_date}</Text>
      <View style ={myStyles.line}></View>
      <Text>{props.episodes.characters}</Text>
      <Text style={myStyles.occupation}>{props.episodes.episode}</Text>
      </View>
       
  </View>
  )
}
const myStyles = StyleSheet.create({
      name_container:{
        width:'70%',
      },
      row_container:{
        width:'100%',flexDirection:'row',marginBottom:12,
        backgroundColor:'#dad7cd',borderRadius:20,borderBottomLeftRadius:0,
      },
      image:{
        width:'100%',height:90,
      },
      name:{
        color:'#6096ba',fontSize:25,
      },
      occupation:{
        fontStyle:'italic',
      },
      line:{
        width:'100%',
        height:1,
        backgroundColor:"gray",
      }
    
});

export default ViewEpisode