import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  onLogin() {
    const { email, password } = this.state;
    this.setState({ error: '' });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((exception) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((exception) => {
            this.setState({ error: 'Authentication failure' });
          });
      });
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='username@domain.com'
            value={email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            value={password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <Button
          onPress={this.onLogin.bind(this)}
          >Login</Button>
        </CardSection>
        <Text>{error}</Text>
      </Card>
    );
  }
}

export default LoginForm;
