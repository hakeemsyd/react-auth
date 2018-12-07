import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({ apiKey: 'AIzaSyBDzLS2d1gNWA8r8Cxqpq2nt5VXQshoI0c',
    authDomain: 'react-auth-73ee2.firebaseapp.com',
    databaseURL: 'https://react-auth-73ee2.firebaseio.com',
    projectId: 'react-auth-73ee2',
    storageBucket: 'react-auth-73ee2.appspot.com',
    messagingSenderId: '214750370602' });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
