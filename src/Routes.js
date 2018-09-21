import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Home from './pages/Home';
import NovaVenda from './pages/NovaVenda';
import VisualizaVenda from './components/VisualizaVenda';
import TesteSearchBar from './components/TesteSearchBar';
import Relatorios from './components/Relatorios';

export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar",
      header: null
    }
  },
});

export const SignedInRoutes = createStackNavigator({
  Logged: {
    screen: Home,
    navigationOptions: {
      title: "Tela inicial"
    }
  },
});

export const NovaVendaRoute = createStackNavigator({
  TelaNovaVenda: {
    screen: NovaVenda,
    navigationOptions: {
      title: "Nova Venda"
    }
  }
});

export const VisualizaVendaRoute = createStackNavigator({
  TelaVisualizaVenda: {
    screen: VisualizaVenda,
    navigationOptions: {
      title: "Visualizar Venda"
    }
  }
});

export const SearchRoute = createStackNavigator({
  TelaSearch: {
    screen: TesteSearchBar,
    navigationOptions: {
      title: "Search"
    }
  }
});

export const RelatoriosRoute = createStackNavigator({
  TelaRelatorios: {
    screen: Relatorios,
    navigationOptions: {
      title: "Relatorios"
    }
  }
});


export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator({
    SignedIn: { screen: SignedInRoutes },
    SignedOut: { screen: SignedOutRoutes },
    NovaVenda: { screen: NovaVendaRoute },
    VisualizaVenda: { screen: VisualizaVendaRoute },
    Search: { screen: SearchRoute },
    Relatorios: { screen: RelatoriosRoute }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    navigationOptions: {
      gesturesEnabled: false
    }
  });
};
