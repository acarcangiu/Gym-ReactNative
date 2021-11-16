import React,{useState, useRef} from 'react'
import {Text,View,Image,StyleSheet,FlatList, useWindowDimensions,Animated} from 'react-native'
import {SocialIcon} from 'react-native-elements';





import slides from './slides'


const OnboardingItem = ({item})=> {
    const {width} = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode:'contain',borderBottomWidth:20,borderColor:'black'}]} />
            <View>
                <Text style={styles.slideTitle}>
                    {item.title}
                </Text>
            </View>
        </View>
    )
}


const Facilities =()=> {
    const scrollX = useRef(new Animated.Value(0)).current
    return (
        <>
        
            <View style={styles.container}>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Text style={{fontWeight:'bold', fontSize:40, color:'#000'}}>
                            NEX
                        </Text>
                        <Text style={{color: '#28388f', fontSize:28}}>
                            gym
                        </Text>
                    </View>
                <View style={{height:400, borderBottomColor: 'black',
                    borderBottomWidth: 1}}>
                    <View>
                        <Text style={styles.texts}>
                            Check our new facilities
                        </Text>
                    </View>
                    <FlatList 
                        data={slides}
                        renderItem={({item})=> <OnboardingItem item={item}/>}
                        horizontal
                        pagingEnabled
                        bounces={true}
                        keyExtractor={(item)=>item.id}
                        onScroll={Animated.event([{nativeEvent:{contentOffset: {x: scrollX}}}],
                            {useNativeDriver:false}
                            )}
                        scrollEventThrottle={32}/>
                </View>
                <View >
                    <Text style={styles.texts}>
                        Visit us and ask for a tour!
                    </Text>
                </View>
            </View>
            <View style={{backgroundColor:"#aad8d3",flex: 1, flexDirection: 'row',alignContent:'center',justifyContent:'center'}}>

                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'column',marginLeft:0,marginTop:30}}>
                        <SocialIcon
                            type="instagram"
                            onPress={() => {
                                alert('instagram');
                            }}/>
                    </View>

                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'column',marginLeft:40, marginTop:30}}>
                        <SocialIcon
                            type="facebook"
                            onPress={() => {
                                alert('instagram');
                                }}/>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={{flexDirection: 'column',marginLeft:40,marginTop:30}}>
                        <SocialIcon
                            type="envelope"
                            onPress={() => {
                                alert('instagram');
                            }}
                        />
                    </View>
                </View>  
            </View>
            <View style={{height:60,
            }}>
                <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',
                    backgroundColor:"#D3D3D3"
                    }}>
                    Visit our social media pages
                </Text>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#D3D3D3",
    
    },
     header:{
        height:80, 
    },
    header_text:{
        height:80,
        fontSize:30,
        fontWeight:'bold',
        color: 'black',
        backgroundColor:'#00adb5',
        paddingTop:10,
        textAlign: 'center'
        
        
    },
    image:{
        flex:0.7,
        justifyContent:'center'
    },
    slideTitle:{
        justifyContent:'center',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    },
    texts:{
        textAlign:'center',
        fontSize:30,

    }
})

export default Facilities;