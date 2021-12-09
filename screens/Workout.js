import Button from "../components/Button";
import React,{useState,useEffect} from "react";
import { ScrollView,Text, Linking, StyleSheet } from "react-native";
import {Card,LinearProgress} from 'react-native-paper';
import WorkoutCard from "./WorkoutCard";

export default function Workoutdetails({route,navigation}){
  const { title, workout } = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardbox:{
      margin: 10,
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        margin:5
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
    return(
                <Card style={styles.container}>
                    <Text style={styles.titleText}>Workouts for today is: {title}</Text>
                    {chosen.map((item) => {
                        return (
                                <WorkoutCard key={item.id} data={item} navigation={navigation} id={item.id}/>
                        );
                    })}
                </Card>
    );
}
