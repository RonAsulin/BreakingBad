import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';


const ViewChar = (props) => {

  const status = props.characters.status;
  let bg = '#000000';
  
  switch(status){
    case 'Alive':
      bg='#10c620'
      break;
    case 'Deceased':
      bg= '#fb2d20'
      break;
    case 'Presumed dead':
      bg = '#4361EE'
      break;    
    default:
      break;  
  }

  return (
    <View style={myStyles.row_container}>

      <View style={{width:'2%',height:'99%',backgroundColor:bg,borderRadius:5}}></View>

    <View style={myStyles.image_container}>
      <Image style={myStyles.image}source={{uri:props.characters.img}}/>
    </View>
    <View style={myStyles.name_container}>
      <Text style={myStyles.name}>{props.characters.name }</Text>
      <Text style={{color:'#00b4d8',fontSize:18}}>{props.characters.nickname}</Text>
      <View style ={myStyles.line}></View>
      <Text style={myStyles.occupation}>{props.characters.occupation}</Text>
      </View>
      
    
  </View>
  )
}
const myStyles = StyleSheet.create({
    image_container:{
        width:'20%',
      },
      name_container:{
        width:'70%',
      },
      row_container:{
        width:'100%',flexDirection:'row',marginBottom:12,
        backgroundColor:'#dad7cd',borderRadius:20,borderBottomLeftRadius:0
      },
      image:{
        width:'100%',height:90,
      },
      name:{
        color:'#6096ba',fontSize:30,
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

export default ViewChar;

