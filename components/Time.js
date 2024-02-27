import React, {useState, useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native'
// const screenWidth = Dimensions.get('window').width;

export default function Time({stopwatchRunning, time}) {
  const padToTwo = number => (number <= 9 ? `0${number}` : number);

  let hours = padToTwo(Math.floor(time / (1000 * 60 * 60)))
  let minutes = padToTwo(Math.floor(time / (1000 * 60) % 60))
  let seconds = padToTwo(Math.floor(time / 1000 % 60))
  let milliseconds = padToTwo(Math.floor(time % 1000 / 10))

  return (
    <View style={styles.rootContainer}>
      <View style={styles.timeWrapper}>
        <Text 
          style={[styles.timeContent, (stopwatchRunning ? styles.start : styles.pause)]}
        >
          {`${hours !== '00' ? `${hours} :` : ``} ${minutes} : ${seconds} : ${milliseconds}`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  start: {
    color: 'green'
  },
  pause: {
    color: 'coral'
  },
  timeContent: {
    fontSize: 64,
    color: 'darkblue',
  }
})