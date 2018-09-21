import { AsyncStorage } from 'react-native';

export const onSignIn = () => AsyncStorage.setItem('@CodeApi:token', "true");

export const onSignOut = () => AsyncStorage.removeItem('@CodeApi:token');

export const isSignedIn = async () => {
    
    const token = await AsyncStorage.getItem('@CodeApi:token');

    return (token !== null) ? true : false;

  };