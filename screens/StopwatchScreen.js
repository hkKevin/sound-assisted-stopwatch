import { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Pressable, Dimensions } from 'react-native'

export default function StopwatchScreen() {
  const [startStopwatch, setStartStopwatch] = useState(false)

  useEffect(() => {
    console.log('@ startStopwatch', startStopwatch)
    if (startStopwatch) {
      // determine if it start from 0 or countinue the existing stopwatch
    } else {
      // pause the stopwatch
      // Flash the time text
    }
  }, [startStopwatch])

  const pressHandler = () => {
    setStartStopwatch(prev => !prev)
  }



  return (
    <View style={styles.rootView}>
      <Text style={styles.pageTitle}>Stopwatch</Text>
      <View style={styles.timeContainer}>
        <Pressable 
          onPress={pressHandler}
          style={[styles.timeCircle, (startStopwatch ? styles.start : styles.pause)]}
        >
          <Text style={styles.timeContent}>1:10:01</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column'
  },
  pageTitle: {
    fontSize: 24,
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeCircle: {
    borderWidth: 5,
    borderColor: 'darkblue',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContent: {
    fontSize: 70,
    color: 'darkblue',
  },
  start: {
    backgroundColor: 'green'
  },
  pause: {
    backgroundColor: 'salmon'
  }
})