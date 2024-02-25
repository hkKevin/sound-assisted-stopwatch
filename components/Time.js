import React, {useState, useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions, Pressable} from 'react-native'
// const screenWidth = Dimensions.get('window').width;

export default function Time({pressHandler, stopwatchRunning}) {

  return (
    <View style={styles.rootContainer}>
      <View style={styles.timeWrapper}>
        <Text style={[styles.timeContent, (stopwatchRunning ? styles.start : styles.pause)]}>00:00:00</Text>
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