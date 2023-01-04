import { View, Text,StyleSheet,Image,ImageBackground } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CharViewOnPress = (props) => {
const x  = props.route.params.char;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri:x.img}} />
      </View>
      <View style={styles.txt}>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,end:0,}}>
        <ImageBackground source={require('../assets/bre1.jpg')} resizeMode='stretch' style={{width: '100%', height: '100%',justifyContent: 'center',}}/>
        </View>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#34de21'}}>{x.name}</Text>
        <Text style={{fontWeight:'bold',fontSize:23,color:'#fff'}}>BirthDay: {x.birthday}</Text>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Nick-Name: {x.nickname}</Text>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Portrayed: {x.portrayed}</Text>
        <Text style={{fontWeight:'bold',fontSize:20,color:'#fff'}}>Occupation: </Text>
        <Text style={{fontSize:20,color:'#fff'}}>{x.occupation}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:10,
    paddingHorizontal:'10%',
    backgroundColor:'#000000',
    flexDirection:'column',
    justifyContent:'space-between',
    borderWidth:4,
    borderColor:'#fb2'
  },
  txt:{
    padding:5,
    width:'85%',
    height:'35%',
    borderWidth:5,
    borderColor:'#fb2',
    justifyContent:'space-between',
  },
  imageContainer:{
   width:'100%' , height:400 , borderColor:'#fb2' ,borderWidth:5,
  },image:{
    width:'100%',height:'100%'
  },
  
});

export const screenOptions = (navData) => {

    const status = navData.route.params.char.status;
     const st1 = () =>{
      if(status=='Alive'){
        return "cards-heart";
      }
      else if (status=='Deceased'){
        return "skull-crossbones-outline";
      }
     else if (status == 'Presumed dead'){
       return "head-question-outline";
      }
   }
  const iconColor =()=>{
    if(st1()=="cards-heart"){
      return "green";
    }
    else if (st1()=="skull-crossbones-outline"){
      return "red";
    }
    return "blue";
  }


  return {
    headerTitle: navData.route.params.char.name,
    headerStyle: { backgroundColor:'#fb2' },
    headerTintColor: '#000000',
    headerRight: () => (
      <Text style={{fontSize:20,fontWeight:'bold',padding:6}}>STATUS:
      <MaterialCommunityIcons name={st1()} color={iconColor()} size={30} />
      </Text>
    )
  }
}
export default CharViewOnPress