import Button from "../components/Button";
import React,{useState,useEffect} from "react";
import { ScrollView,Text, Linking, StyleSheet } from "react-native";
import Meal from "./Meal";
import NutritionCard from "./NutritionCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Macrodetails({route,navigation}){
    const {mealplan,goal} = route.params;
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
      var today = new Date();
      var day = today.getDay();
      var daylist = ["sunday","monday","tuesday","wednesday ","thursday","friday","saturday"];
      var tday = daylist[day];
      const mealplan_now = mealplan.week[tday];
    return(
        <ScrollView style={styles.container}>
        <Text>Your caloric need is </Text>
        <Text>
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.titleText}>Meal plan for today is: {tday}</Text>
                            {mealplan_now.meals.map((item) => {
                                return (
                                    <ScrollView> 
                                        <Meal data={item} id={item.id}/>
                                    </ScrollView>
                                );
                            })}
                            <NutritionCard data={mealplan_now.nutrients}/>
                            </ScrollView>
                    );
        </Text>
        </ScrollView>
    );
}