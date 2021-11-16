import React,{Component} from 'react';
import {Text,View, StyleSheet,ImageBackground,Image,SafeAreaView, ScrollView} from 'react-native'

import firebase from 'firebase'




class Profile extends Component {


    constructor(){
        super()
        //states to hold the values stored in the database regarding the users lessons
        this.state = {
            name: '',
            firstName:'',
            lastName:'',
            address:'',
            time1: '',
            time2: '',
            time3: '',
            time4: '',
            time5: '',

            timeTu1: '',
            timeTu2: '',
            timeTu3: '',
            timeTu4: '',
            timeTu5: '',

            timeWe1: '',
            timeWe2: '',
            timeWe3: '',
            timeWe4: '',
            timeWe5: '',

            timeTh1: '',
            timeTh2: '',
            timeTh3: '',
            timeTh4: '',
            timeTh5: '',

            timeFr1: '',
            timeFr2: '',
            timeFr3: '',
            timeFr4: '',
            timeFr5: '',

            



        }
    }



  componentDidMount(){

     const user = firebase.auth().currentUser.uid;

      const rootRef = firebase.database().ref().child('users')
      const nameRef = rootRef.child('Monday/crossfitLessons1/'+user+'/name');
      nameRef.on('value', snap => {
          this.setState({
              name: snap.val()
          })
      })


      //METHODS TO GET THE DATA FOR THE MONDAY LESSONS
      
      const timeRef = rootRef.child('Monday/crossfitLessons1/'+user+'/time');
      timeRef.on('value', snap => {
          this.setState({
              time1: snap.val()
          })
      })

            const timeRef2 = rootRef.child('Monday/crossfitLessons2/'+user+'/time');
      timeRef2.on('value', snap => {
          this.setState({
              time2: snap.val()
          })
      })
            const timeRef3 = rootRef.child('Monday/crossfitLessons3/'+user+'/time');
      timeRef3.on('value', snap => {
          this.setState({
              time3: snap.val()
          })
      })
            const timeRef4 = rootRef.child('Monday/crossfitLessons4/'+user+'/time');
      timeRef4.on('value', snap => {
          this.setState({
              time4: snap.val()
          })
      })
            const timeRef5 = rootRef.child('Monday/crossfitLessons5/'+user+'/time');
      timeRef5.on('value', snap => {
          this.setState({
              time5: snap.val()
          })
      })

      const firstNameRef = rootRef.child(user +'/name');
      firstNameRef.on('value', snap => {
          this.setState({
              firstName: snap.val()
          })
      })

      const LastNameRef = rootRef.child(user +'/surname');
      LastNameRef.on('value', snap => {
          this.setState({
              lastName: snap.val()
          })
      })

       const addressRef = rootRef.child(user +'/address');
      addressRef.on('value', snap => {
          this.setState({
              address: snap.val()
          })
      })


      //METHODS TO GET THE DATA FOR THE TUESDAY LESSONS
      const TutimeRef = rootRef.child('Tuesday/crossfitLessons1/'+user+'/time');
      TutimeRef.on('value', snap => {
          this.setState({
              timeTu1: snap.val()
          })
      })

            const TutimeRef2 = rootRef.child('Tuesday/crossfitLessons2/'+user+'/time');
      TutimeRef2.on('value', snap => {
          this.setState({
              timeTu2: snap.val()
          })
      })
            const TutimeRef3 = rootRef.child('Tuesday/crossfitLessons3/'+user+'/time');
      TutimeRef3.on('value', snap => {
          this.setState({
              timeTu3: snap.val()
          })
      })
            const TutimeRef4 = rootRef.child('Tuesday/crossfitLessons4/'+user+'/time');
      TutimeRef4.on('value', snap => {
          this.setState({
              timeTu4: snap.val()
          })
      })
            const TutimeRef5 = rootRef.child('Tuesday/crossfitLessons5/'+user+'/time');
      TutimeRef5.on('value', snap => {
          this.setState({
              timeTu5: snap.val()
          })
      })

      //METHODS TO GET THE DATA FOR THE WEDNESDAY LESSONS

      const WetimeRef = rootRef.child('Wednesday/crossfitLessons1/'+user+'/time');
      WetimeRef.on('value', snap => {
          this.setState({
              timeWe1: snap.val()
          })
      })

            const WetimeRef2 = rootRef.child('Wednesday/crossfitLessons2/'+user+'/time');
      WetimeRef2.on('value', snap => {
          this.setState({
              timeWe2: snap.val()
          })
      })
            const WetimeRef3 = rootRef.child('Wednesday/crossfitLessons3/'+user+'/time');
      WetimeRef3.on('value', snap => {
          this.setState({
              timeWe3: snap.val()
          })
      })
            const WetimeRef4 = rootRef.child('Wednesday/crossfitLessons4/'+user+'/time');
      WetimeRef4.on('value', snap => {
          this.setState({
              timeWe4: snap.val()
          })
      })
            const WetimeRef5 = rootRef.child('Wednesday/crossfitLessons5/'+user+'/time');
      WetimeRef5.on('value', snap => {
          this.setState({
              timeWe5: snap.val()
          })
      })


      //METHODS TO GET THE DATA FOR THE THURSDAY LESSONS
      const THtimeRef = rootRef.child('Thursday/crossfitLessons1/'+user+'/time');
      THtimeRef.on('value', snap => {
          this.setState({
              timeWe1: snap.val()
          })
      })

            const ThtimeRef2 = rootRef.child('Thursday/crossfitLessons2/'+user+'/time');
      ThtimeRef2.on('value', snap => {
          this.setState({
              timeTh2: snap.val()
          })
      })
            const ThtimeRef3 = rootRef.child('Thursday/crossfitLessons3/'+user+'/time');
      ThtimeRef3.on('value', snap => {
          this.setState({
              timeTh3: snap.val()
          })
      })
            const ThtimeRef4 = rootRef.child('Thursday/crossfitLessons4/'+user+'/time');
      ThtimeRef4.on('value', snap => {
          this.setState({
              timeTh4: snap.val()
          })
      })
            const ThtimeRef5 = rootRef.child('Thursday/crossfitLessons5/'+user+'/time');
      ThtimeRef5.on('value', snap => {
          this.setState({
              timeTh5: snap.val()
          })
      })

      //METHODS TO GET THE DATA FOR THE FRIDAY LESSONS
      const FrtimeRef = rootRef.child('Friday/crossfitLessons1/'+user+'/time');
      FrtimeRef.on('value', snap => {
          this.setState({
              timeFr1: snap.val()
          })
      })

            const FrtimeRef2 = rootRef.child('Friday/crossfitLessons2/'+user+'/time');
      FrtimeRef2.on('value', snap => {
          this.setState({
              timeFr2: snap.val()
          })
      })
            const FrtimeRef3 = rootRef.child('Friday/crossfitLessons3/'+user+'/time');
      FrtimeRef3.on('value', snap => {
          this.setState({
              timeFr3: snap.val()
          })
      })
            const FrtimeRef4 = rootRef.child('Friday/crossfitLessons4/'+user+'/time');
      FrtimeRef4.on('value', snap => {
          this.setState({
              timeFr4: snap.val()
          })
      })
            const FrtimeRef5 = rootRef.child('Friday/crossfitLessons5/'+user+'/time');
      FrtimeRef5.on('value', snap => {
          this.setState({
              timeFr5: snap.val()
          })
      })


      



  }

render(){
    return(
        <>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Text
                        style={{fontSize:40, justifyContent:'center'}}>

                            Your Profile 
                        </Text>
                        <View>
                            <View>
                                <ImageBackground 
                                    style ={styles.training_image}
                                    source={require('./../images/home_image.jpg')}> 
                                </ImageBackground>
                                    <Image 
                                        style={styles.avatar}
                                        source={require('./../images/profile1.jpg')}/>
                            </View>
                        </View>
                        <View
                            style={{ backgroundColor:'#aad8d3',
                            height:1400
                            }}>
                            <View
                                    style={{justifyContent:'center',
                                    alignContent:'center'
                                }}>

                                <View
                                    style={styles.profileContent1}
                                >
                                    <Text
                                    style={{justifyContent:'center',
                                    alignContent:'center'}}
                                >
                                    First Name: {this.state.firstName}
                                    </Text>
                                    

                                </View>

                                <View
                                    style={styles.profileContent}
                                >
                                    <Text
                                    style={{justifyContent:'center',
                                    alignContent:'center'}}
                                >
                                    Last Name: {this.state.lastName}
                                </Text>
                                    

                                </View>

                                <View
                                    style={styles.profileContent}
                                >
                                    <Text
                                    style={{justifyContent:'center',
                                    alignContent:'center'}}
                                >
                                    Address: {this.state.address}
                                </Text>
                                    

                                </View>
                                <View
                                    style={styles.profileContent}
                                >
                                    <Text
                                    style={{justifyContent:'center',
                                    alignContent:'center'}}
                                >
                                    Email: {this.state.name}
                                </Text>
                                    

                                </View>

                                <View style={styles.profileContent}>
                                    <Text
                                        style={{justifyContent:'center',
                                        alignContent:'center'}}
                                    >
                                        Lessons this Monday: 
                                    </Text>
                                    <Text>
                                        {this.state.time1} 
                                    </Text>
                                    <Text>
                                        {this.state.time2} 
                                    </Text>
                                    <Text>
                                        {this.state.time3} 
                                    </Text>
                                    <Text>
                                        {this.state.time4} 
                                    </Text>
                                    <Text>
                                        {this.state.time5} 
                                    </Text>
                                </View>

                                <View style={styles.profileContent}>
                                    <Text
                                        style={{justifyContent:'center',
                                        alignContent:'center'}}>
                                        Lessons this Tuesday: 
                                    </Text>
                                    <Text>
                                        {this.state.timeTu1} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTu2} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTu3} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTu4} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTu5} 
                                    </Text>
                                        

                                </View>

                                <View style={styles.profileContent}>
                                    <Text
                                        style={{justifyContent:'center',
                                        alignContent:'center'}}>
                                        Lessons this Wednesday: 
                                    </Text>
                                    <Text>
                                        {this.state.timeWe1} 
                                    </Text>
                                    <Text>
                                        {this.state.timeWe2} 
                                    </Text>
                                    <Text>
                                        {this.state.timeWe3} 
                                    </Text>
                                    <Text>
                                        {this.state.timeWe4} 
                                    </Text>
                                    <Text>
                                        {this.state.timeWe5} 
                                    </Text>
                                        

                                </View>

                                <View style={styles.profileContent}>
                                    <Text
                                        style={{justifyContent:'center',
                                        alignContent:'center'}}>
                                        Lessons this Thursday: 
                                    </Text>
                                    <Text>
                                        {this.state.timeTh1} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTh2} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTh3} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTh4} 
                                    </Text>
                                    <Text>
                                        {this.state.timeTh5} 
                                    </Text>
                                        

                                </View>

                                <View style={styles.profileContent}>
                                    <Text
                                        style={{justifyContent:'center',
                                        alignContent:'center'}}>
                                        Lessons this Friday: 
                                    </Text>
                                    <Text>
                                        {this.state.timeFr1} 
                                    </Text>
                                    <Text>
                                        {this.state.timeFr2} 
                                    </Text>
                                    <Text>
                                        {this.state.timeFr3} 
                                    </Text>
                                    <Text>
                                        {this.state.timeFr4} 
                                    </Text>
                                    <Text>
                                        {this.state.timeFr5} 
                                    </Text>
                                        

                                </View>


                        </View>


                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
            

        </>
        
    )
    
    }}


const styles= StyleSheet.create({
    container:{
        height:1500,
        color:"#D3D3D3",

        
    },training_image:{
        justifyContent:'center',
        alignItems:'center',
        height:190,
        width: 420,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    avatar:{
        width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    zIndex:5
    },
    profileContent1:{
        borderRadius:5,
        borderColor:'black',
        borderWidth:5,
        backgroundColor:'white',
        marginBottom:20,
        marginTop:80,
         marginLeft:20,
        marginRight:20,
        padding:10
    },
    profileContent:{
        borderRadius:5,
        borderColor:'black',
        borderWidth:5,
        backgroundColor:'white',
        marginBottom:20,
        marginLeft:20,
        marginRight:20,
        padding:10
    }

})
export default Profile;


