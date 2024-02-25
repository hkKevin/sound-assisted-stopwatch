import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import Time from './Time'
// import Lap from './Lap'
import Controller from './Controller'

export default function Main() {
  const [showResetBtn, setShowResetBtn] = useState(false)
  const [showLapBtn, setShowLapBtn] = useState(false)
  const [activeStopwatch, setActiveStopwatch] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    console.log('activeStopwatch?', activeStopwatch)
  }, [activeStopwatch])

  useEffect(() => {
    console.log('isRunning?', isRunning)
  }, [isRunning])

  const onBtnPress = action => {
    switch(action) {
      case 'reset':
        console.log('%', action)
        setActiveStopwatch(false)
        setIsRunning(false)
        break
        case 'start':
          console.log('~', action)
          setActiveStopwatch(true)
          setIsRunning(prev => !prev)
          break
      case 'lap':
        console.log('^', action)
        break
      default:
        return
    }
  }

  const timeOnClick = () => {
    console.log('# start/pause')
    setActiveStopwatch(true)
    setIsRunning(prev => !prev)
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.pageTitle}>Stopwatch</Text>
      <View style={{flex: 70}}>
        <Time pressHandler={timeOnClick} stopwatchRunning={isRunning} />
      </View>
      <View style={{flex: 20}}>
        <Controller pressHandler={onBtnPress} isRunning={isRunning} activeStopwatch={activeStopwatch} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  pageTitle: {
    fontSize: 24,
    flex: 10,
  }
})