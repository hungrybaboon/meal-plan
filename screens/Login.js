import React from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function Login({ navigation }) {
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
    onSubmit: ()=>{navigation.navigate('TDEE Calculator')}
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
        Login
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
      <Button label='Login' onPress={handleSubmit} />
    </View>
  );
}