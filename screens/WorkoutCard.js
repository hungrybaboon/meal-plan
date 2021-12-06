import React, { useEffect, useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import {Card} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';

const apiKey = 'AIzaSyBflP8KrphCHrNBzO_Vtn-yDeIzwCGmiys'

export default function WorkoutCard({data, navigation}) {
  const {name, description}=data; 

  return (
    <Card style={styles.cardbox} onPress={() => {
        console.log("pressed\n");
      fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=how+to+${name.split(' ').join('+')}`)
      .then(response => response.json())
      .then(json => {
          console.log("reached\n");
          console.log(json);
          console.log(json.items[0].id.videoId)
        // navigation.navigate('VideoCard', {screen: 'VideoCard', params: {videoId: json.items[0].id.videoId}});
        navigation.navigate('VideoCard', {videoId: json.items[0].id.videoId} );
      })
      .catch(e => {
          //error log
      })
    }}>
        <Card.Content style={styles.contentbox}>
            <Text style={styles.titleText}>{name}</Text>
            <Text style={styles.text} textBreakStrategy={'simple'} >{removeTags(description)}</Text>
        </Card.Content> 
    </Card>
  );
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();

    // Regular expression to identify HTML tags in 
    // the input string. Replacing the identified 
    // HTML tag with a null string.
    return str.replace( /(<([^>]+)>)/ig, '');
}

const styles = StyleSheet.create({
  cardbox:{
    margin: 10,
    flex:1,
    flexShrink: 1,
  },
  contentbox:{
    margin: 10,
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  text: {
    fontSize: 15,
  },
  titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
});