import Button from "../components/Button";
import React,{useState,useEffect} from "react";
import { ScrollView,Text, Linking, StyleSheet } from "react-native";
import {Card} from 'react-native-paper';
import WorkoutCard from "./WorkoutCard";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Macrodetails({route,navigation}){
  const { title, workout } = route.params;
    console.log(`navigation from workout is ${navigation}`)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardbox:{
      margin: 10,
    },
    scrollView: {
      marginHorizontal: 10,
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
      }
  }); 

  let exercises = workout.results;
  let choices = [];  //going to fill this up with 5 numbers to choose from results workouts to be performed
  let chosen = [];  //workout obj will be stored in here
  for(let i = 0; i < 5; i++ ) {
    let number = Math.floor(Math.random() * exercises.length);
    if(choices.includes(number)) i--; //repeat this loop since the exercise was alrdy chosen
    else {
    choices[i] = number;  //number wasnt yet chosen, add to choices      
    chosen[i] = workout.results[number]
    }
  }

  console.log(chosen);

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.titleText}>Workouts for today is: {title}</Text>
                    {chosen.map((item) => {
                        return (
                            <ScrollView style={styles.scrollView} key={item.id}> 
                                <WorkoutCard data={item} navigation={navigation} id={item.id}/>
                            </ScrollView>
                        );
                    })}
                </ScrollView>
            </Text>
        </ScrollView>
    );
}