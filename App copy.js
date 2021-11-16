import React,{Component} from 'react'


import Profile from './components/profile'
import Login from './components/Login'
import Register from './components/register'
import Homescreen from './components/homescreen';
import Crossfit from './components/crossfit';
import Facilities from './components/facilities/facilities';
import {createStackNavigator} from '@react-navigation/stack'


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import firebase from 'firebase'


//Stack navigation instance 
const Stack = createStackNavigator();






class App extends Component {
  //the state is used to get the  log status of the user
  state={
    loggedIn:null
  }

  //hook to invoke after the first render to create an instance of the database
 componentDidMount(){

   const firebaseConfig = {
    apiKey: "AIzaSyBUnPH5qbnEvq8ySe-2H6Tyzz25ME8dLm4",
    authDomain: "fir-tutorial-a573a.firebaseapp.com",
    projectId: "fir-tutorial-a573a",
    storageBucket: "fir-tutorial-a573a.appspot.com",
    messagingSenderId: "857099409241",
    appId: "1:857099409241:web:7541c5f7f9b22590b5de48",
    measurementId: "G-RP5VWQ2N0X"
};
//if loop to check is the database is already initialised and remove errors on reinatialisation
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}




firebase.auth().onAuthStateChanged(user=> {
    if(user){
      this.setState({
        loggedIn:true
      })
    }else{
      this.setState({
        loggedIn:false
      })
    }
  })



}



//method containing a switch to direct the user to the homepage after the Login or the Registration
  renderContent = () => {
    switch(this.state.loggedIn){
      case false:
        return(
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name= "login" component={Login}/>
              <Stack.Screen name= "registration" component={Register}/>
              
            </Stack.Navigator>


          </NavigationContainer>
          

          
        ) 
      
      case true:
        return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='home' component={Homescreen}/>
              <Stack.Screen name="crossfit" component={Crossfit}/>
              {/* <Stack.Screen name="yoga" component={Yoga}/> */}
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Facilities" component={Facilities}/>
            </Stack.Navigator>
          </NavigationContainer>
        )
        }}
  
  render(){
    return(
        <>
            {this.renderContent()}
        </>
    )
  }}



//}

export default App;



