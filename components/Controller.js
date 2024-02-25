import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Pressable, Dimensions} from 'react-native'

export default function Controller({pressHandler, isRunning, activeStopwatch}) {
  const disableResetBtn = (!activeStopwatch && !isRunning) || (activeStopwatch && isRunning)
  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonOuter}>
        <Pressable
          disabled={disableResetBtn}
          style={({pressed}) =>
            [
              styles.buttonInner,
              styles.resetButton,
              {opacity: pressed ? 0.75 : 1},
              {backgroundColor: disableResetBtn ? 'lightgray' : 'navy'},
            ]
          }
          onPress={() => pressHandler('reset')} 
          android_ripple={{color: 'white'}}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>
      <View style={styles.buttonOuter}>
        <Pressable
            style={({pressed}) => 
              pressed 
                ? [styles.buttonInner, styles.startButton, styles.pressed] 
                : [styles.buttonInner, styles.startButton]
            }
            onPress={() => pressHandler('start')} 
            android_ripple={{color: 'white'}}
          >
            <Text style={styles.buttonText}>
              {isRunning ? 'Stop' : activeStopwatch && !isRunning ? 'Resume' : 'Start'}
            </Text>
          </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonOuter: {
    borderRadius: 30,
    margin: 10,
    overflow: 'hidden',
  },
  buttonInner: {
    backgroundColor: 'darkblue',
    width: 140,
    paddingVertical: 16,
    elevation: 2, // Android only
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#fff',
  },
  startButton: {
    backgroundColor: 'blue',
  },
  resetButton: {
    backgroundColor: 'navy',
    // width: screenWidth * 0.2,
    // height: screenWidth * 0.2,
    // borderRadius: Math.round(screenWidth + screenHeight) / 2,
  }
})