import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

type Props = {
  size: string,
};
type State = {};
class Spinner extends Component<Props, State> {

  render() {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={this.props.size | 'large'} />
      </View>);
  }
}

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
