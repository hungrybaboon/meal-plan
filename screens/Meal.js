import React from 'react';
import { Text, Linking, StyleSheet } from 'react-native';
import {Card} from 'react-native-paper';

export default function Meal({data}) {
  const {title,readyInMinutes,servings,sourceUrl}=data; 
  return (
    <Card style={styles.cardbox}>
    <Card.Content>
    <Text style={{color: 'blue'}} onPress={() => Linking.openURL(sourceUrl)}>{title}</Text>
        <Text>Cooking Time:{readyInMinutes} minutes</Text>
        <Text>Amount of Servings:{servings} servings</Text>
    </Card.Content>
  </Card>
  );
}

const styles = StyleSheet.create({
  cardbox:{
    margin: 10,
  }
});