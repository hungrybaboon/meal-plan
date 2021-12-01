import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function TextInput({ icon, error, touched, ...otherProps }) {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8
      }}
    >
      <View style={{ padding: 8 }}>
        <MaterialCommunityIcons name={icon}  size={16} color="black" />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
        />
      </View>
    </View>
  );
}