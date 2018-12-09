import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onLogin() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failure', loading: false });
  }

  renderButton() {
      if (this.state.loading) {
        return <Spinner size='small' />;
      }
      return (<Button onPress={this.onLogin.bind(this)}> Login </Button>);
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
         {this.renderButton()}
        </CardSection>
        <Text>{error}</Text>
      </Card>
    );
  }
}

export default LoginForm;
