import React from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({ navigation }) {
    const storeData = async (values) => {
        const {email,password} =values;
        try {
          await AsyncStorage.setItem('@user_name', email);
          await AsyncStorage.setItem('@password', password);
          navigation.navigate('TDEE Calculator');
        } catch (e) {
          // saving error
        }
      }
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required')
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: (values)=>{storeData(values)}
  });
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Register
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='mail'
          placeholder='Enter your email'
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          error={errors.email}
          touched={touched.email}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          icon='key'
          placeholder='Password'
          secureTextEntry
          autoCompleteType='password'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='go'
          returnKeyLabel='go'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          error={errors.password}
          touched={touched.password}
        />
      </View>
      <Button label='Register' onPress={handleSubmit} />
    </View>
  );
}