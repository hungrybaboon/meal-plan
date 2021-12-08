import React,{useState} from "react";
import { View,ActivityIndicator } from "react-native";
import Button from '../components/Button';
import { Text } from 'react-native-elements';
export default function BodyGoals({route,navigation}){
    const {tdee,lose,gain} = route.params;
    const [isLoading,setIsloading] = useState(false);
    const [meal_plan,setMealplan] = useState();
    function getDiet(data){

    }
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {isLoading && <ActivityIndicator color={"#0000ff"}/>}
            <Text h3>Your Daily Caloric Need Is</Text>
            <Text style={{margin:5}}h3>{parseFloat(tdee).toFixed(2)} Cal.</Text>
            <Button style={{ margin: 5 }}label='Lose Weight' onPress={ ()=>{
              setIsloading(true);
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${lose}`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(true);
                navigation.navigate('ListMeals', {value:`${lose}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button style={{ margin: 5 }} label='Gain Weight' onPress={()=>{
              setIsloading(true);
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${gain}`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('ListMeals',{value: `${gain}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />
            <Button style={{ margin: 5 }} label='Maintain Weight' onPress={()=>{
              setIsloading(true);
                fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=${tdee}`)
                .then((response) => response.json())
                .then((json) => {
                  setIsloading(false);
                navigation.navigate('ListMeals',{value: `${tdee}`,mealplan:json});
                })
                .catch((error) => console.error(error));
            }} />

        </View>
    );
}
