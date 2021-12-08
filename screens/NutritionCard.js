import React from 'react';
import { Text, Linking, StyleSheet } from 'react-native';
import {Card} from 'react-native-paper';

export default function NutritionCard({data}) {
  const {calories,carbohydrates,fat,protein}=data;
  return (
    <Card style={styles.cardbox}>
    <Card.Content>
        <Text>Total Calories : {calories}</Text>
        <Text>Carbohydrates : {carbohydrates}</Text>
        <Text>Fat : {fat}</Text>
        <Text>Protein : {protein}</Text>
    </Card.Content>
  </Card>
  );
}

const styles = StyleSheet.create({
  cardbox:{
    margin: 10,
  }
});
