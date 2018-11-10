import React, { Component } from 'react';
import { View } from 'react-native';


class Card extends Component {
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
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadious: 2,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
  }
};
export { Card };
