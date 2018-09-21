import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
import api from './../services/api';
import { withNavigation } from 'react-navigation';
import { isSignedIn } from './../services/auth';
import { Container, Header, Content, Item, Input, Icon, Button, Text } from 'native-base';
import Home from './Home';
import Routes, {SignedInRoutes,SignedOutRoutes,createRootNavigator} from './../Routes';
import BackButton from './../components/BackButton'

 
import {
 StyleSheet,
 View,
 StatusBar,
 TouchableOpacity,
 TextInput,
 AsyncStorage,
 Alert,
} from 'react-native';

//import {Actions} from 'react-native-router-flux';


class NovaVenda extends Component<{}> {

state = { 
    novaVenda: '',
    errorMessage: null,
    nome: null,
    cpf: null,
    telefone: null,
    produto: null,
    usuarioCriacao: null,
    retorno: null,
    empresa: null,
};

static navigationOptions = {
  headerLeft: (
    <BackButton />
  ),
};


 



 addNovaVenda = async () => {
    try {
    
    const token = 
      await AsyncStorage.getItem('@CodeApi:token');

      if(!token) return Alert.alert('No token')

    const user = 
      JSON.parse(await AsyncStorage.getItem('@CodeApi:user'));

    const userEmpresa =
      await AsyncStorage.getItem('@CodeApi:empresacad');

    //Alert.alert(userEmpresa)
      
 //     if ( this.state.nome === null || this.state.cpf === null || this.state.telefone === null || this.state.produto === null  )
 //      return Alert.alert('Preencha todos os campos')
      
      const response = await api.post('/novavenda', {
        nome: this.state.nome,
        cpf: this.state.cpf,
        telefone: this.state.telefone,
        produto: this.state.produto,
        usuarioCriacao: user.name,
        retorno: 'hash',
        empresa: userEmpresa,
      }, {
          headers: {
               'Authorization': `Bearer ${token}`,
          }
      });
      
      Alert.alert('Venda realizada com sucesso. ');

      isSignedIn().then(() => this.props.navigation.navigate("SignedIn"));
    
    }catch(response) {
        this.setState({errorMessage: response.data.error});
        Alert.alert(this.state.errorMessage);
    }
 };

 render() {
   return (   
    <Container>
    <Content>
      <Item>
        <Icon active name='person' />
        <Input placeholder='Nome do Cliente'
        onChangeText={(text) => this.setState({nome: text})} />
      </Item>
      <Item>
        <Icon active name='list-box' />
        <Input
         onChangeText={(text) => this.setState({cpf: text})}
         placeholder='CPF/CNPJ'/>
      </Item>
      <Item>
        <Icon active name='headset' />
        <Input placeholder='Telefone'
        onChangeText={(text) => this.setState({telefone: text})}/>
      </Item>
      <Item>
        <Icon active name='cart' />
        <Input placeholder='Produto'
        onChangeText={(text) => this.setState({produto: text})}/>
      </Item>
      <Button iconLeft block success 
      onPress={this.addNovaVenda}>
     <Icon name='add' />
      <Text>Nova Venda</Text>
    </Button>
    
    </Content>
   

  </Container>
   );
 }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#455a64',
  },
  inputBox: {
      width: 300,
      fontSize: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 25,
      color: '#FFF',
      margin: 10
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



export default withNavigation(NovaVenda);

