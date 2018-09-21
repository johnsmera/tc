import React, { Component } from 'react';
import api from './../services/api';
import Routes from './../Routes';
import { onSignIn, isSignedIn } from './../services/auth';
import {SignedInRoutes,SignedOutRoutes,createRootNavigator} from './../Routes';
import Login from './../pages/Login';
import { withNavigation } from 'react-navigation';
//import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  secureTextEntry,
  AsyncStorage,
  Alert
} from 'react-native';

 class FormLogin extends Component<{}> {

  
  state = {
    loggedInUser: null,
    errorMessage: null,
    empresa: '',
    email: '',
    password: '',
    signed: false,
    signLoaded: false,
    
  };
  

 signIn = async () => {
   
    try {

      if(this.state.empresa === '' || this.state.email === '' || this.state.password === '')
        return Alert.alert('Preencha todos os campos')

      const response = await api.post('/auth/authenticate', {
        email: this.state.email,
        password: this.state.password,
        empresa: this.state.empresa,
      });

      const { token, user } = response.data;
     
      const userEmpresa = this.state.empresa;


      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:token2', "true"],
        ['@CodeApi:user', JSON.stringify(user)],
        ['@CodeApi:empresacad', userEmpresa],
      ]);

      this.setState({loggedInUser: user});
      
  //    if (this.state.loggedInUser !== null)
  //      Actions.home();

     // Alert.alert('Logado com sucesso na empresa: ' + this.state.empresa);

      isSignedIn().then(() => this.props.navigation.navigate("SignedIn"));

    } catch(response) {
      this.setState({ errorMessage: response.data.error });
      Alert.alert(this.state.errorMessage);
    }
  };

  
   /* async componentDidMount() {
    const token = 
      await AsyncStorage.getItem('@CodeApi:token');
    const user = 
      JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));

    if(token && user) {
      this.setState({ loggedInUser: user  });
      Actions.home();
    };
  }
  */

  
   

  render() {
    return (
      
     <View style={styles.container}>   
        
        <TextInput style={styles.inputBox} 
          placeholder="Empresa" 
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholderTextColor="#FFFFFF"
          onChangeText={(text) => this.setState({empresa: text})}
          autoCapitalize="none"
         />  

         <TextInput style={styles.inputBox} 
           placeholder="Usuário" 
           underlineColorAndroid='rgba(0,0,0,0)'
           placeholderTextColor="#FFFFFF"
           onChangeText={(text) => this.setState({email: text})}
         />   

         <TextInput style={styles.inputBox} 
           placeholder="Senha" 
           underlineColorAndroid='rgba(0,0,0,0)'
           placeholderTextColor="#FFFFFF"
           secureTextEntry
           onChangeText={(text) => this.setState({password: text})}
         />
       
       <TouchableOpacity onPress={this.signIn} style={styles.button}>
          <Text style={styles.buttonText}>Logar</Text>
        </TouchableOpacity>

      
    </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#dc5222',
    borderRadius: 25,
    width: 300,
    alignItems: 'center',
    marginVertical: 10
  },
  messagePass: {
    color: '#FFFFFF',
  }

});

export default withNavigation(FormLogin);
 