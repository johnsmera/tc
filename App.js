import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  View,
  StatusBar,
  YellowBox
} from 'react-native';


import store from './src/store';
import { isSignedIn } from './src/services/auth';
import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './src/Routes';


export default class App extends React.Component {
constructor(props) {
  super(props);

  YellowBox.ignoreWarnings(
 
    ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  this.state = {
    signed: false,
    signLoaded: false,
  };
 
} 



componentWillMount() {
  isSignedIn()
    .then(res => this.setState({ signed: res, signLoaded: true }))
    .catch(err => alert("Erro"));
};



    render() {
//      alert(JSON.stringify(this.props))
      const { signLoaded, signed } = this.state;
    
      if (!signLoaded)  {return null;}

      const Layout = createRootNavigator(signed);

      return <Provider store={store}><Layout /></Provider>
    // <Provider store={store}>
    // <View style={styles.container}>
    //   <StatusBar
    //     backgroundColor="#1c313a"
    //     barStyle="light-content"
    //   />
        
    // </View>   
    // </Provider>
      
    }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});
