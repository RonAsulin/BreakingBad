import { View, Text,StyleSheet,ActivityIndicator,TouchableOpacity,FlatList,Image } from 'react-native'
import React,{useState} from 'react';
import ViewQuotes from '../components/ViewQuotes';

const Quotes = () => {

  const [isLoading,setIsLoading] = useState(false);
  const [results,setResults] = useState([]);

   const doSomething = async() => {
    setIsLoading(true);
    const api =`https://www.breakingbadapi.com/api/quotes`;
    const res = await fetch(api, {
      method:'get'
    });
    const data = await res.json();

    setResults(data);
    setIsLoading(false);
  }
  return (
        <View style ={myStyles.container}>
          <View style= {myStyles.containerBar2}>
          <View style = {{width:'35%',justifyContent:'flex-end',}}>
            <Image style={myStyles.imageBb} source={require('../assets/brb.jpg')}/>
          </View>
            <View style = {{width:'100%',justifyContent:'flex-end',alignItems:'flex-start',}}>
            <Text style ={{fontSize:18,fontWeight:'bold'}}>Quotes</Text>
        </View>
      </View>
      <View style ={myStyles.containerBar}>     
        {
        isLoading 
        ? (<ActivityIndicator size = 'large' color='#dad7cd'/>) 
        : (
          <TouchableOpacity style={myStyles.btn} onPress={doSomething}>
          <Text style={myStyles.btnText}>Search Quotes</Text>
        </TouchableOpacity>
        )
      }
      </View>
      <View style ={{width:'100%',height:'90%'}}>
        {
           results.length>0 ? (
            <FlatList 
            data={results}
            keyExtractor = {item =>item.quote_id}
            renderItem={itemRow => 
              <ViewQuotes quotes={itemRow.item}  />
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
  containerBar:{
    width:'100%',
    flexDirection:'row',
    height:'10%',
    backgroundColor:'#edf6f9'
    ,padding:5,
    borderRadius:15,
    
  },
  container:{
    flex:1,
    backgroundColor:'#edf2f4',
    padding:1
  },
    btn:{
    width:'100%', paddingVertical:12,
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
    paddingHorizontal:'40%',
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
})
export default Quotes;