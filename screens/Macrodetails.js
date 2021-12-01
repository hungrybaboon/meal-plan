import Button from "../components/Button";
import React,{useState,useEffect} from "react";
import { View,Text } from "react-native";

export default function Macrodetails({route,navigation}){
    //const {value,goal} = route.params;
    const {mealplan,setMealplan} = useState('');
    useEffect(() => {
        fetch('https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=&targetCalories=3000')
          .then((response) => response.json())
          .then((json) => {
        setMealplan(json);
        console.log(json);
        })
          .catch((error) => console.error(error));
      }, []);
    return(
        <View>
        <Text>Your calories is </Text>
         {/* {mealplan.week.monday.meals.map((item)=>{
             return(
                 <View>
             <Text>Title: {item.title}</Text>
             <Text>Title: {item.readyInMinutes}</Text>
                </View>
                );
         })} */}
        {/* <Text>Calorie: {JSON.stringify(value)}</Text> */}
        </View>
    );
}