import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register';
import Tdee from './screens/Tdee';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BodyGoals from './screens/Bodygoals';
import Macrodetails from './screens/Macrodetails';
import Workout from './screens/Workout';
import VideoCard from './screens/VideoCard';
import ListMeals from './screens/ListMeals';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TDEE Calculator">
      <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ListMeals" component={ListMeals}/>
        <Stack.Screen name="TDEE Calculator" component={Tdee}/>
        <Stack.Screen name="Bodygoals" component={BodyGoals}/>
        <Stack.Screen name="Macrodetails" component={Macrodetails}/>
        <Stack.Screen name="Workout" component={Workout}/>
        <Stack.Screen name="VideoCard" component={VideoCard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
