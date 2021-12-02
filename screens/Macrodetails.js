import Button from "../components/Button";
import React,{useState,useEffect} from "react";
import { ScrollView,Text, Linking, StyleSheet } from "react-native";
import Meal from "./Meal";
import NutritionCard from "./NutritionCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Macrodetails({route,navigation}){
    //const {value,goal} = route.params;
    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        scrollView: {
        //   backgroundColor: 'pink',
          marginHorizontal: 20,
          display: 'flex',
        },
        text: {
          fontSize: 42,
        },
        titleText: {
            fontSize: 15,
            fontWeight: "bold"
          }
      }); 
    const [mealplan,setMealplan] = useState();
    useEffect(() => {
        fetch('https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=0e5f3b97a15746b4b5d2b2d5ac294240&targetCalories=3000')
          .then((response) => response.json())
          .then((json) => {
        setMealplan(json);
        console.log(json);
        })
          .catch((error) => console.error(error));
      }, []);

    return(
        <ScrollView style={styles.container}>
        <Text>Your caloric need is </Text>
        <Text>
            {mealplan ? Object.entries(mealplan.week).map(
                ([key, value]) => {
                    return(
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.titleText}>Day: {key}</Text>
                            {mealplan.week[key].meals.map((item) => {
                                return (
                                    <ScrollView> 
                                        <Meal data={item} id={item.id}/>
                                    </ScrollView>
                                );
                            })}
                            <NutritionCard data={mealplan.week[key].nutrients}/>
                            </ScrollView>
                    );
                }
            ): null}
        </Text>
         {/* {mealplan.week.monday.meals.map((item)=>{
             return(
                 <ScrollView>
             <Text style={{color: 'blue'}} onPress={() => Linking.openURL(item.sourceUrl)}>Title: {item.title}</Text>
             <Text>Ready In: {item.readyInMinutes}</Text>
                </ScrollView>
                );
         })} */}
        {/* <Text>Calorie Total: {mealplan.week.monday.nutrients.calories}</Text> */}
        </ScrollView>
    );
}