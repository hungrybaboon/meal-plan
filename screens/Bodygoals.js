import { Button } from 'react-native-elements';
import React,{useState} from "react";
import { View } from "react-native";

export default function BodyGoals({route,navigation}){
    const {tdee,lose,gain} = route.params;
    console.log(`navigation from bodygoals is ${navigation}`)
    const [meal_plan,setMealplan] = useState();
    function getDiet(data){
        
    }
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Lose Weight' raised type="outline"onPress={ ()=>{
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${lose}`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('ListMeals', {value:`${lose}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Gain Weight' raised type="outline"onPress={()=>{
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${gain}`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('ListMeals',{value: `${gain}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Maintain Weight' raised type="outline"onPress={()=>{
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${tdee}`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('ListMeals',{value: `${tdee}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Arms' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=1,5,13`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Arms', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Legs' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=7,8,10,11,15`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Legs', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Chest' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=4`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Chest', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Back' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=12`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Back', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Shoulder' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=2,9`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Shoulder', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Tri/Chest/Shoulder' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=2,4,5,9`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Tri/Chest/Shoulder', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button title='Back/Bi' raised type="outline"onPress={()=>{
                fetch(`https://wger.de/api/v2/exercise/?language=2&limit=200&muscles=1,12,13`)
                .then((response) => response.json())
                .then((json) => {
                navigation.navigate('Workout',{title: 'Back/Bi', workout:json});
                })
                .catch((error) => console.error(error));
            }} />
        </View>
    );
}