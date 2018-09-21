import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
import api from './../services/api';
import { onSignOut, isSignedIn } from './../services/auth';


import {
 StyleSheet,
 StatusBar,
 TouchableOpacity,
 AsyncStorage,
 View
} from 'react-native';

import { Container, Header, Content, Button, Text, Icon } from 'native-base';

//import {Actions} from 'react-native-router-flux';

export default ({navigation}) => (
<View style={styles.container}> 
  <Container>
  <Content>
    <Button iconLeft block success 
    style={styles.buttonDefault}
    onPress={() => isSignedIn().then(() => navigation.navigate("NovaVenda"))}
    >
     <Icon name='add' />
      <Text>Nova Venda</Text>
    </Button>
    <Button iconLeft block style={styles.buttonDefault}
    onPress={() => isSignedIn().then(() => navigation.navigate("Search"))}
    >
     <Icon name='search' />
      <Text>Visualizar Venda</Text>
    </Button>
    <Button iconLeft block style={styles.buttonDefault}
    onPress={() => isSignedIn().then(() => navigation.navigate("Relatorios"))}
    >
     <Icon name='print' />
      <Text>Relatório de Vendas</Text>
    </Button>
    <Button 
    iconLeft 
    block 
    danger 
    style={styles.buttonExit}
    onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
    >
     <Icon name='exit' />
      <Text>Sair</Text>
    </Button>  
  </Content>
 </Container>
</View>
);  

const styles = StyleSheet.create({
 container : {
   alignContent: 'center',
   flex: 1,
 },
 signupTextCont : {
   flexGrow: 1,
   alignItems:'flex-end',
   justifyContent :'center',
   paddingVertical:16,
   flexDirection:'row'
 },
 textDefault: {
     color:'#000',
     fontSize: 16,
     fontWeight: 'bold'
 },
 buttonDefault : {
      margin: 5,
      height: 65
 },
 buttonExit : {
  marginTop: 30,
  margin: 5,
  height: 65,
}
});
