import React, { Component } from 'react';
import { View } from 'react-native';

class CardSection extends Component {
  render() {
    return (
      <View style={style.containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    flexDirection: 'row',
    position: 'relative',
  }
};

export { CardSection };
