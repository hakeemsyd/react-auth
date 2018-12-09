import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({ apiKey: 'AIzaSyBDzLS2d1gNWA8r8Cxqpq2nt5VXQshoI0c',
    authDomain: 'react-auth-73ee2.firebaseapp.com',
    databaseURL: 'https://react-auth-73ee2.firebaseio.com',
    projectId: 'react-auth-73ee2',
    storageBucket: 'react-auth-73ee2.appspot.com',
    messagingSenderId: '214750370602'
  });

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
  }

  onAuthStateChanged(user) {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  onLogoutPressed() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (<CardSection>
                <Button onPress={this.onLogoutPressed.bind(this)}> Logout </Button>
              </CardSection>);
      case false:
        return (<LoginForm />);
      default:
        return (
          <View>
            <Spinner size='large' />
          </View>);
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
          {this.renderContent()}
      </View>
    );
  }
}
export default App;
