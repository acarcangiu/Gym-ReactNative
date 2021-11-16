import React from 'react'
import firebase from 'firebase'
import {View, Text, TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'



class Login extends React.Component {
   

//the state holds the values of email and passwords as two modifiable empty strings
    state = ({
      email:'',
      password:''
    })


//firebase built-in method to login users
  login = (email,password) => {
     
    try{
      firebase.auth().signInWithEmailAndPassword(email.trim(),password).then((res=> {
          firebase.auth().onAuthStateChanged(user=>{
              if(user){
                  console.log(res.user.uid)
              }
          })
      }))
        
      
    }
    catch(error){
      console.log(error.toString())
    }
  }




  render(){
  return(
      <>
          <View style={{flexDirection:'row', marginTop:40}}>
              <Text style={{fontWeight:'bold', fontSize:40, color:'#000',
                marginLeft:20}}>
                  NEX
              </Text>
              <Text style={{color: '#28388f', fontSize:28}}>
                  gym
              </Text>
          </View>


          <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                      
                    <TextInput
                        style={styles.input}
                        onChangeText={(email)=> this.setState({email})}
                        placeholder="email"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        placeholderTextColor="#aaaaaa"/>
          
                    <TextInput
                        style={styles.input}
                        onChangeText={(password)=> this.setState({password})}
                        placeholder="password"
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        placeholderTextColor="#aaaaaa"/>
                {/* CALLOUT FOR THE LOGIN METHOD */}
                <TouchableOpacity
                    style = {styles.button}
                    onPress={()=> this.login(this.state.email, this.state.password)}>
                    <Text>
                        login
                    </Text>
                </TouchableOpacity>

                {/* NAVIGATION TO THE REGISTRATION PAGE IN CASE THE USER IS NOT REGISTERED */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('registration')}
                    style={styles.registerLink}>
                    <Text>
                        Do you not have an account? Register!
                    </Text>
                </TouchableOpacity>

              
              </KeyboardAwareScrollView>
          </View>
      </>
    )
  }
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    registerLink:{
        alignItems: "center",
        justifyContent: 'center',
        marginTop:10,

    }

})
   
  export default Login;


