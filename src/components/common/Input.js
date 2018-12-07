import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

type Props = {
  value: string,
  label: string,
  onChangeText: any,
  secureTextEntry: boolean,
};
type State = {};
class Input extends Component<Props, State> {
  render() {
    const { labelStyle, inputStyle, containerStyle } = styles;
    const { value, label, onChangeText, placeholder, secureTextEntry } = this.props;
    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          style={inputStyle}
          autocorrect={false}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 5,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    align: 'center'
  },
};

export { Input };
