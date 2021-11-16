import React from 'react'
import firebase from 'firebase'
import {View, Text, TouchableOpacity,TextInput,StyleSheet} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'





class Register extends React.Component {
   


    state = ({
      email:'',
      password:'',
      name:'',
      surname:'',
      address:'',
    })



   signUp = (email,password)=> {


   
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase.database().ref('users/' + res.user.uid).set({
        email: email, 
        name:this.state.name,
        surname:this.state.surname,
        address:this.state.address       
    })
})

     
    }
    catch(error){
      console.log(error.toString())
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
                          placeholderTextColor="#aaaaaa" />

                      <TextInput
                          style={styles.input}
                          onChangeText={(name)=> this.setState({name})}
                          placeholder="name"
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          placeholderTextColor="#aaaaaa" />
                        
                      <TextInput
                          style={styles.input}
                          onChangeText={(surname)=> this.setState({surname})}
                          placeholder="surname"
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          placeholderTextColor="#aaaaaa"/>
                        
                      <TextInput
                          style={styles.input}
                          onChangeText={(address)=> this.setState({address})}
                          placeholder="address"
                          underlineColorAndroid="transparent"
                          autoCapitalize="none"
                          placeholderTextColor="#aaaaaa" />
                      
                  
                      <TouchableOpacity
                          style={styles.button}
                          onPress={()=> this.signUp(this.state.email, this.state.password) }>
                          <Text>
                              register
                          </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                          onPress={()=> this.props.navigation.navigate('login')}
                          style={styles.loginLink}>
                          <Text>
                              Do you have already an account? Sign in!
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
    loginLink:{
      alignItems: "center",
        justifyContent: 'center',
        marginTop:10,
    }

})
   
  export default Register;


