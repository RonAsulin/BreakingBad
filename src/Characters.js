import { View, Text ,StyleSheet,TouchableOpacity, ActivityIndicator,TextInput,FlatList,Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import ViewChar from '../components/viewChar';

const Characters = (props) => {

//${searchName}
  const [searchName,setSearchName] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const [results,setResults] = useState([]);

  const myCharacters = async () =>{
    const api =`https://www.breakingbadapi.com/api/characters`;
    const res = await fetch(api, {
      method:'get'
    });
    const data = await res.json();
    setResults(data);
  }
    useEffect(()=>{
      myCharacters();
    },[]);
  
  
  const doSomething = async() => {
    setIsLoading(true);
  {
    const api =`https://www.breakingbadapi.com/api/characters?name=${searchName}`;
    const res = await fetch(api, {
      method:'get'
    });
    const data = await res.json();

    setResults(data);
    setIsLoading(false);
  }
  }
  
  return (
    <View style ={myStyles.container}>
      <View style= {myStyles.containerBar2}>
      <View style = {{width:'35%',justifyContent:'flex-end'}}>
      <Image style={myStyles.imageBb} source={require('../assets/brb.jpg')}/>
      </View>
      <View style = {{width:'100%',justifyContent:'flex-end',alignItems:'center',}}>
        <Text style ={{fontSize:18,fontWeight:'bold'}}>Characters</Text>
        </View>
      </View>
      <View style ={myStyles.containerBar}>
        <View style = {{width:'75%',justifyContent:'center',}}>
          <TextInput
            style={{width:'98%',paddingVertical:15,backgroundColor:'#ffff',
            borderRadius:15,fontSize:20,paddingVertical:15,}}
            keyboardType="default"
            placeholder="Type search Characters..."
            autoCapitalize="none"

            value={searchName}
            onChangeText={x => {setSearchName(x)}}
          />
        </View>
        <View style = {{width:'25%',justifyContent:'center',alignItems:'center'}}>
        { 
        isLoading 
        ? (<ActivityIndicator size = 'large' color='#dad7cd'/>) 
        : (
          <TouchableOpacity style={myStyles.btn} onPress={doSomething}>

          <Text style={myStyles.btnText}>Search</Text>
        </TouchableOpacity>
        )
      }
        </View>
      </View>
      <View style ={{width:'100%',height:'84%'}}>
        {
           results.length>0 ? (
            <FlatList 
            data={results}
            keyExtractor = {item =>item.char_id}
            renderItem={itemRow => 
              <TouchableOpacity onPress={()=>{props.navigation.navigate('CharViewOnPress',{char: itemRow.item})}}>
              <ViewChar characters={itemRow.item}  />
              </TouchableOpacity>
            }
          />
           ) : (
            <Text>No Results</Text>
           )
        }
      </View>
    </View>
  )
}
const myStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#edf2f4',
    padding:1,
  },
  containerBar:{
    width:'100%',
    flexDirection:'row',
    height:'10%',
    backgroundColor:'#edf6f9'
    ,padding:5,
    borderRadius:15
  },
  btn:{
    width:'100%', paddingVertical:15,
    alignItems:'center',backgroundColor:'#00b4d8',
    borderRadius:15,
  },
  btnText:{
    color:'#000000',
    fontSize:22,
  },
  containerBar2:{
    width:'100%',
    flexDirection:'row',
    height:'10%',
    backgroundColor:'#FFD97D',
    paddingHorizontal:'37%',
    borderBottomEndRadius:40,
    borderBottomStartRadius:40,
    borderBottomWidth:1,
    justifyContent:'center',
  },
  imageBb:{
    width:'100%',
    height:'40%',
    borderRadius:10,
  },
});

export default Characters