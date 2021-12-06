import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function VideoCard({route}) {
  const { videoId } = route.params;
  const [playing, setPlaying] = useState(false);

  const togglePlaying = () => {
      setPlaying(prev => !prev);
  }
  console.log("im being reached");

  return (
    <View style={styles.container}>
        <YoutubePlayer height={400} play={playing} videoId={videoId}/>
    </View>
  );
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