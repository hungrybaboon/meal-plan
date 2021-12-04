import { Button } from 'react-native-elements';
import React,{useState} from "react";
import { View } from "react-native";

export default function BodyGoals({route,navigation}){
    const {tdee,lose,gain,exclusion} = route.params;
    
   function getDiet(data){
        
    }
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Lose Weight' raised type="outline"onPress={ ()=>{
           fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${lose}&exclude=${exclusion}`)
           .then((response) => response.json())
           .then((json) => {
            navigation.navigate('Macrodetails', {value:`${lose}`,mealplan:json});
         })
           .catch((error) => console.error(error));
            }} />
        <Button title='Gain Weight' raised type="outline"onPress={()=>{
    fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${gain}&exclude=${exclusion}`)
    .then((response) => response.json())
    .then((json) => {
        navigation.navigate('Macrodetails',{value: `${gain}`,mealplan:json});
  })
    .catch((error) => console.error(error));
     }} />
        <Button title='Maintain Weight' raised type="outline"onPress={()=>{
        fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${tdee}&exclude=${exclusion}`)
        .then((response) => response.json())
        .then((json) => {
            navigation.navigate('Macrodetails',{value: `${tdee}`,mealplan:json});
      })
        .catch((error) => console.error(error));
         }} />
        </View>
    );
}