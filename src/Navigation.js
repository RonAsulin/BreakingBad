//1.import bottom tab library
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
//2.import Screens
import Characters from './Characters';
import Episodes from './Episodes';
import Quotes from './Quotes';
import HomeBreakingBad from './HomeBreakingBad'
import CharViewOnPress,{screenOptions} from '../components/CharViewOnPress';

const Stack = createStackNavigator();
function MyTabs(){
    return(
        <AppTabs.Navigator activeColor='#000' size='small' barStyle={{ backgroundColor: '#ffff',height:'7%' }}> 
            <AppTabs.Screen
                name = 'Characters' 
                component = {Characters} 
                options={{
                    tabBarLabel:'Characters',
                    tabBarIcon:({}) =>(
                        <MaterialCommunityIcons name="account" color="#00b4d8" size={28} />  
                ),                
                }}
            />
            <AppTabs.Screen 
                name = 'Episodes' 
                component = {Episodes}
                options={{
                    tabBarLabel:'Episodes',
                    tabBarIcon:({}) =>(
                        <MaterialCommunityIcons name="movie-play" size={28} color="#00b4d8" />
                ), 
                }}
            />
            <AppTabs.Screen 
                name = 'Quotes' 
                component = {Quotes} 
                options={{
                    tabBarLabel:'Quotes',
                    tabBarIcon:({}) =>(
                        <MaterialCommunityIcons name="comment-quote" size={28} color="#00b4d8" />
                ), 
                }}
            />
        </AppTabs.Navigator>
      )
}


//3.create bootom tab
const AppTabs = createMaterialBottomTabNavigator();
//4.create the tabs

export const MyStack = () =>{
    return(
    <Stack.Navigator >
    <Stack.Screen name = "HomeBreakingBad" component={HomeBreakingBad} options={{ headerShown: false }}/>
    <Stack.Screen name="MyTabs" component={MyTabs}options={{ headerShown: false}} />
    <Stack.Screen name="CharViewOnPress" component={CharViewOnPress} options={screenOptions}/>
    
      </Stack.Navigator>
    )
}




