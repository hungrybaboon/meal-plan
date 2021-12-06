import React,{useState} from "react";
import { View } from "react-native";
import Button from '../components/Button';

export default function BodyGoals({route,navigation}){
    const {tdee,lose,gain} = route.params;
    console.log(`navigation from bodygoals is ${navigation}`)
    const [meal_plan,setMealplan] = useState();
    function getDiet(data){
        
    }
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button style={{ margin: 5 }}label='Lose Weight' onPress={ ()=>{
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${lose}`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('ListMeals', {value:`${lose}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button style={{ margin: 5 }} label='Gain Weight' onPress={()=>{
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${gain}`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('ListMeals',{value: `${gain}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button style={{ margin: 5 }} label='Maintain Weight' onPress={()=>{
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${tdee}`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('ListMeals',{value: `${tdee}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            
        </View>
    );
}