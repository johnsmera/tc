import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class BackButton extends React.Component {
  render() {
    return <Button title="<<" onPress={() => { this.props.navigation.navigate("SignedIn") }} />;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(BackButton);