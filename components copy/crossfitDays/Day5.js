import React from  'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
import firebase from 'firebase'



const day5 =()=> {

    const user = firebase.auth().currentUser;


      const addUser =()=> {

        

        
    data
    .ref('/users/Friday/crossfitLessons1/'+user.uid)
    .set({
    name: user.email,
    time: "8:30/9:30"
  })
console.log(user.uid)
}

     const addUser2 =()=> {
        
    data
    .ref('/users/Friday/crossfitLessons2/'+user.uid)
    .set({
    name: user.email,
    time: "12:30/13:30"
  })
.then(() =>this.props.navigation.navigate("confirmation") )        }

         const addUser3 =()=> {
        
     data
    .ref('/users/Friday/crossfitLessons3/'+user.uid)
    .set({
    name: user.email,
    time: "14:30/15:30"
  })
.then(() =>this.props.navigation.navigate("confirmation") )        }

     const addUser4 =()=> {
        
     data
    .ref('/users/Friday/crossfitLessons4/'+user.uid)
    .set({
    name: user.email,
    time: "18:30/19:30"
  })
.then(() =>this.props.navigation.navigate("confirmation") )        }


    const addUser5 =()=> {
        
    data
    .ref('/users/Friday/crossfitLessons5/'+user.uid)
    .set({
    name: user.email,
    time: "21:30/2:30"
  })
  .then(() =>this.navigation.navigate("confirmation") )
        }


    const cancelLesson1 =()=> {
    data
    .ref('/users/Friday/crossfitLessons1/'+user.uid)
    .remove()
    alert('lesson cancelled') 
 }



        const cancelLesson2 =()=> {
    data
    .ref('/users/Friday/crossfitLessons2/'+user.uid)
    .remove() 
    alert('lesson cancelled') 
  
 }

         const cancelLesson3 =()=> {
    data
    .ref('/users/Friday/crossfitLessons3/'+user.uid)
    .remove()   
    alert('lesson cancelled')
 }


         const cancelLesson4 =()=> {
    data
    .ref('/users/Friday/crossfitLessons4/'+user.uid)
    .remove()   
    alert('lesson cancelled')
 }



            const cancelLesson5 =()=> {
    data
    .ref('/users/Friday/crossfitLessons5/'+user.uid)
    .remove()  
    alert('lesson cancelled') 
 }
  






    return(
        <>
        <View style={{padding:15, flexDirection:'row'}}>
                <Text
                 style={{
                    textAlign:'left',
                    paddingLeft:20,
                    marginRight:20,
                    marginTop:10,
                    fontWeight:'bold',
                    fontSize:20,
                    
                }}
                >
                    Friday
                </Text>
            </View>
            <ScrollView style={{flex:1}}>

        <View style={styles.workouts}
        
        >
            <View style={{padding:15, flexDirection:'row'}}>
                <TouchableOpacity
                key={1}
                    onPress={addUser}

                >
                    <Text style={{
                    fontSize:30
                }}>
                8:30   /    9:30
            </Text>

                </TouchableOpacity>
                
            
            
                <Image 
                
                style={styles.icon}

                 source={require('./../../images/booking-icon.jpg')}
                />
                 <TouchableOpacity
                    onPress={cancelLesson1}
                >
                    

                <Image 
                
                style={styles.cancelImage}

                
                 source={require('./../../images/cancel.jpg')}
                />
                </TouchableOpacity>

            
            </View>
            
            <View>
                <Text
                style={{
                    
                    paddingLeft:10,
                    color:'blue',
                    fontWeight:'bold',
                    fontSize:18
                }}
                >
                    Trainer: Pinco Pallino
                </Text>
                
            </View>
            
            
        </View>
        <View style={styles.workouts}>
            <View style={{padding:15, flexDirection:'row'}}>
                <TouchableOpacity
                key={2}
                onPress={addUser2}

                >
                    <Text
                    style={{
                    fontSize:30
                }}>
                12:30   /    13:30
            </Text>

                </TouchableOpacity>
                
            <Image 
                style={styles.icon}
                 source={require('./../../images/booking-icon.jpg')}
                />
                <TouchableOpacity
                    onPress={cancelLesson2}
                >
                    

                <Image 
                
                style={styles.cancelImage}

                
                 source={require('./../../images/cancel.jpg')}
                />
                </TouchableOpacity>


                 
            </View>
            <View>
                <Text
                style={{
                    
                    paddingLeft:10,
                    color:'blue',
                    fontWeight:'bold',
                    fontSize:18
                }}
                >
                    Trainer: Pinco Pallino
                </Text>
                 
                
            </View>
            
            
            
        </View>
        <View style={styles.workouts}>
            <View style={{padding:15, flexDirection:'row'}}>
                <TouchableOpacity
                    onPress={addUser3}
                    key={3}

                >
                    <Text style={{
                    fontSize:30
                }}>
                14:30   /    15:30
            </Text>

                </TouchableOpacity>
            <Image 
                style={styles.icon}
                 source={require('./../../images/booking-icon.jpg')}
                />
                 <TouchableOpacity
                    onPress={cancelLesson3}
                >
                    

                <Image 
                
                style={styles.cancelImage}

                
                 source={require('./../../images/cancel.jpg')}
                />
                </TouchableOpacity>
            </View>
            <View>
                <Text
                style={{
                    
                    paddingLeft:10,
                    color:'blue',
                    fontWeight:'bold',
                    fontSize:18
                }}
                >
                    Trainer: Pinco Pallino
                </Text>
                
            </View>
            
            
        </View>
        <View style={styles.workouts}>
            <View style={{padding:15, flexDirection:'row'}}>
                <TouchableOpacity
                    key={4}
                    onPress={addUser4}

                >
                    <Text style={{
                    fontSize:30
                }}>
                18:30   /    19:30
            </Text>

                </TouchableOpacity>
            <Image 
                style={styles.icon}
                 source={require('./../../images/booking-icon.jpg')}
                />

                 <TouchableOpacity
                    onPress={cancelLesson4}
                >
                    

                <Image 
                
                style={styles.cancelImage}

                
                 source={require('./../../images/cancel.jpg')}
                />
                </TouchableOpacity>
            </View>
            <View>
                <Text
                style={{
                    
                    paddingLeft:10,
                    color:'blue',
                    fontWeight:'bold',
                    fontSize:18
                }}
                >
                    Trainer: Pinco Pallino
                </Text>
                
            </View>
            
            
        </View>
        <View style={styles.workouts}>
            <View style={{padding:15, flexDirection:'row'}}>
                <TouchableOpacity
                key={5}
                    onPress={addUser5}

                >
                    <Text style={{
                    fontSize:30
                }}>
                21:30   /    22:30
            </Text>

                </TouchableOpacity>
            <Image 
                style={styles.icon}
                 source={require('./../../images/booking-icon.jpg')}
                />

                 <TouchableOpacity
                    onPress={cancelLesson5}
                >
                    

                <Image 
                
                style={styles.cancelImage}

                
                 source={require('./../../images/cancel.jpg')}
                />
                </TouchableOpacity>
            </View>
            <View>
                <Text
                style={{
                    
                    paddingLeft:10,
                    color:'blue',
                    fontWeight:'bold',
                    fontSize:18
                }}
                >
                    Trainer: Pinco Pallino
                </Text>
                
            </View>
            
            
        </View>
       
        
        
            </ScrollView>
            </>
        )
}

const styles= StyleSheet.create({
    workouts:{ 
        
        marginTop:10,
        backgroundColor:'#aad8d3',
        borderStyle:'solid',
        width: '95%',
        borderWidth:4,
        borderColor:'grey',
        height:115,
        borderColor:'black',
        borderRadius:10},
        icon:{
            position:'absolute',
            top:20,
            right:10,
            height:50,
            width:50
        },
        cancelImage:{
            height:40,
            width:40,
            top:7,
            left:14



        }
   

})

export default day5;