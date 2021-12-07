import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {Card, Text} from 'react-native-paper';
import YoutubePlayer from 'react-native-youtube-iframe';

const apiKey = 'AIzaSyBflP8KrphCHrNBzO_Vtn-yDeIzwCGmiys'

export default function WorkoutCard({data, navigation,wid}) {
  const {name, description}=data;
  return (
    <Card id={wid} key={wid} style={styles.cardbox} onPress={() => {
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
            <Text style={styles.text}>{removeTags(description)}</Text>
        </Card.Content>
    </Card>
  );
}

function removeTags(str) {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    return str.replace( /(<([^>]+)>)/ig, '');
}

const styles = StyleSheet.create({
  cardbox:{
    flex:1,
    margin:2
  },
  contentbox:{
    flex: 1,
  },
  text: {
    fontSize: 11,
     flex: 1
  },
  titleText: {
      fontSize: 15,
      fontWeight: "bold"
    }
});
