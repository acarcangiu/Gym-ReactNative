import React,{Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,SafeAreaView,ScrollView,Image,ImageBackground,} from 'react-native'
import * as firebase from 'firebase';




        
//initialisation of the database 
    export const firebaseConfig = {
    apiKey: "AIzaSyBUnPH5qbnEvq8ySe-2H6Tyzz25ME8dLm4",
    authDomain: "fir-tutorial-a573a.firebaseapp.com",
    databaseURL: "https://fir-tutorial-a573a-default-rtdb.firebaseio.com",
    projectId: "fir-tutorial-a573a",
    storageBucket: "fir-tutorial-a573a.appspot.com",
    messagingSenderId: "857099409241",
    appId: "1:857099409241:web:7541c5f7f9b22590b5de48",
    measurementId: "G-RP5VWQ2N0X"
  };
  // Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
 export const data = firebase.database();





class Homescreen extends Component{

 
//method to Logout the user
    Logout = () => {
        firebase.auth()
  .signOut()
  .then(() => console.log('User signed out!'))
    }



render(){

        return(

            // CONTAINER FOR THE PAGE
    <View style={styles.container}>
             {/* CONTAINER FOR THE HEADER */}
            <View style={{flexDirection:'row', marginTop:10}}>
                <Text style={{fontWeight:'bold', fontSize:40, color:'#000'}}>
                    NEX
                </Text>
                <Text style={{color: '#28388f', fontSize:28}}>
                    gym
                </Text>

            </View>
            <View
                style={{
                        flexDirection:'row', marginTop:10, 
                        borderRadius:20,
                        position: 'absolute',
                        right:10,
                        height: 100
                    }}
            >
                    <TouchableOpacity onPress={this.Logout}>
                        <Text style={styles.button}>
                            Sign Out
                        </Text>
                        </TouchableOpacity>
            </View>
               
                
        {/* SCROLLDOWN FOR THE HOMEPAGE */}
        <SafeAreaView >
            <ScrollView >
                <View style={{height:1250}}>
                    <View>
                        <ImageBackground 
                            style ={styles.training_image}
                            source={require('./../images/home_image.jpg')}>
                                <Text style={{color:'white', fontWeight:'bold'}}>
                                </Text>
                            </ImageBackground>
                    </View>
                
                
                    <View style= {styles.workouts}>
                        <Text style={{fontWeight:'bold'}}>
                            OUR CROSSFIT CLASSES
                        </Text>
                        <Text>
                            Challenge yourself everyday!
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('crossfit')} >
                        <Image 
                        style={styles.schedule_image}
                        source={require('./../images/barbell.jpg')}
                        >
                        
                        </Image>

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Profile')}>
                                
                        <View style={styles.workouts}>
                            <Text style={{fontWeight:'bold'}}>
                                CHECK YOUR PROFILE
                            </Text>
                        </View>

                        <Image 
                            style={styles.schedule_image}
                            source={require('./../images/fitness-class.jpg')}/>

                    </TouchableOpacity>
            {/* link to the facilities page */}
                    <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Facilities')}>
                                    
                            <View style={styles.workouts}>
                                <Text style={{fontWeight:'bold'}}>
                                    CHECK OUR FACILITIES
                                </Text>
                            </View>
                            <Image 
                                style={styles.schedule_image}
                                source={require('./../images/facilities.jpg')} />

                        </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
            
    </View>
        
        
    )
}
}

const styles = StyleSheet.create({
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
    container:{
        backgroundColor:"#D3D3D3"
    },
    training_image:{
        justifyContent:'center',
        alignItems:'center',
        height:190,
        width: 420,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    workouts:{
        marginTop:10,
        backgroundColor:'#aad8d3',
        borderStyle:'solid',
        width: '95%',
        borderWidth:4,
        borderColor:'grey',
        height:100,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderTopRightRadius:5,
        borderTopLeftRadius:5

    },
    schedule_image:{
        height:190,
        width: '95%',
        justifyContent:'center',
        marginLeft:10.4,
        alignItems:'center',
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5

    },
        button: {
        backgroundColor: '#788eec',
        padding:10,
        marginTop:10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    }
    



})


export default Homescreen;