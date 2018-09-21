 import React, { Component } from 'react';
 import Logo from './../components/Logo';
 import FormLogin from './../components/FormLogin';
 import { onSignIn, isSignedIn } from './../services/auth';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'; 

//import {Actions} from 'react-native-router-flux';

export default ({navigation}) =>  (
  
      <View style={styles.container}>
      <Logo/>
      <FormLogin type="Login"/>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Problemas ao efetuar o login?</Text>
        <TouchableOpacity onPress={() => { alert('ok')}}><Text style={styles.signupButton}> Clique aqui</Text></TouchableOpacity>
      </View>
    </View>	    
)

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width: 300,
    fontSize: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    color: '#FFF',
    marginVertical: 7,
},
buttonText: {
   fontSize: 16,
   fontWeight: '500',
   color: '#FFFFFF',
   paddingVertical: 10
},
button: {
  backgroundColor: '#1c313a',
  borderRadius: 25,
  width: 300,
  alignItems: 'center',
  marginVertical: 10
},
messagePass: {
  color: '#FFFFFF',
}
});
