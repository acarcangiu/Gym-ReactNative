import React from  'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import day1 from './crossfitDays/Day1'
import day2 from './crossfitDays/Day2'
import day3 from './crossfitDays/Day3'
import day4 from './crossfitDays/Day4'
import day5 from './crossfitDays/Day5'






const Tab = createBottomTabNavigator();


const MyTabBar=({state, descriptors, navigation})=>{
    return(
    <View style={{ 
        flexDirection: 'row',
        marginLeft:30,
        marginBottom:20,

        
        }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            const isFocused = state.index === index;

            const onPress = ()=> {
                const event =navigation.emit({
                    type:'tabPress',
                    target:route.key
                });
                if (!isFocused && !event.defaultPrevened) {
                    navigation.navigate(route.name);
                }
            };

            const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
        };   
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222', fontWeight:'bold' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>         
    )
}



const Crossfit =()=> {
    
    return(
        <>

        
        <View style={styles.container}>
            <View>
                <Text
                style={{
                    textAlign:'left',
                    paddingLeft:20,
                    marginRight:20,
                    marginTop:20,
                    fontWeight:'bold',
                    fontSize:27,
                    
                }}
            >Crossfit </Text>

            </View>
                        </View>

            <View>
              <ImageBackground 
                        style ={styles.training_image}
                        source={require('./../images/home_image.jpg')}>
                            
                        </ImageBackground>
            </View>

            <Tab.Navigator 
        independent={true}
      
      tabBar={props => <MyTabBar {...props} 
      
      />}>
        <Tab.Screen key={1} name="MON" component={day1} />
        <Tab.Screen key={2} name="TUE" component={day2}  />
        <Tab.Screen key={3}name="WED" component={day3} />
        <Tab.Screen key={4} name="THU" component={day4} />
        <Tab.Screen key={5} name="FRI" component={day5} />
        


      </Tab.Navigator>
      
            
        </>

    )
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:"#D3D3D3",
        height:80,

        
    },training_image:{
        justifyContent:'center',
        alignItems:'center',
        height:190,
        width: 420,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },

})

export default Crossfit;