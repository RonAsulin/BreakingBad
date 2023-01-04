import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';  


const HomeBreakingBad = (props) => {

  return (
    <View style={myStyles.container}>
        <View style={myStyles.container2}>
            <View style={{width:'100%',justifyContent:'center',alignItems:'center',}}>
                <Text style ={{fontSize:50,fontWeight:'bold',color:'#ff2'}}>Welcome</Text>
            </View>
        </View>
        <View style={{width:'100%',height:'40%',alignItems:'center'}}>
         <Image source={require('../assets/bb1.png')}/>
        </View>

        <View style = {{width:'100%',height:'10%',alignItems:'center'}}>
         <TouchableOpacity style={myStyles.btn} onPress={()=>props.navigation.navigate('MyTabs')}>

            <Text style={{color:'#000000',fontSize:40,}}>Click Me</Text>
          </TouchableOpacity>
        </View>



    </View>
  )
}

export default HomeBreakingBad

const myStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#edf2f4',
        padding:1
      },
      container2:{
        width:'100%',
        flexDirection:'row',
        marginBottom:50,
        height:'30%',
        backgroundColor:'#000',
        borderRadius:20,
        borderBottomLeftRadius:0,
        
      },
      btn:{
        width:'80%',height:'70%',
        alignItems:'center',backgroundColor:'#ff2',
        borderRadius:15,
      },
})