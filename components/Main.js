import React, {useState, useEffect, useCallback, useRef} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Audio} from 'expo-av'

import Time from './Time'
// import Lap from './Lap'
import Controller from './Controller'

export default function Main() {
  const [showResetBtn, setShowResetBtn] = useState(false)
  const [showLapBtn, setShowLapBtn] = useState(false)
  const [activeStopwatch, setActiveStopwatch] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [time, setTime] = useState(0)
  const [results, setResults] = useState([])
  const [sound, setSound] = useState(null);
  // const [startTime, setStartTime] = useState(0)
  // const [elapsedTime , setElapsedTime] = useState(0)
  // let startTime = 0
  // let elapsedTime  = 0
  const startTime = useRef(0)
  const elapsedTime = useRef(0)
  const timer = useRef(null);

  useEffect(() => {
    console.log('activeStopwatch?', activeStopwatch)
  }, [activeStopwatch])

  useEffect(() => {
    console.log('isRunning?', isRunning)
  }, [isRunning])

  useEffect(() => {
    // console.log('~time: ', time / 1000)
    if (time >= 2000 && time <= 2030) {
      console.log('~~~ 2 sec reached')
    }
  }, [time])

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const onBtnPress = action => {
    switch(action) {
      case 'reset':
        console.log('%', action)
        clearInterval(timer.current)
        setTime(0)
        setIsRunning(false)
        setActiveStopwatch(false)
        startTime.current = 0
        elapsedTime.current = 0
        // set the display time to 0
        break
        case 'start':
          console.log('~', action)
          // console.log('Date', new Date(Date.now()).toUTCString())
          // setActiveStopwatch(true)
          // setIsRunning(prev => !prev)
          handleStart()
          break
      case 'lap':
        console.log('^', action)
        break
      default:
        return
    }
  }

  const handleStart = () => {
    if (!isRunning) {
      // Start or Resume
      console.log('* Start/Resume')
      console.log('- Date.now()', Date.now())
      console.log('- elapsedTime', elapsedTime)
      startTime.current = Date.now() - elapsedTime.current
      console.log('- startTime', startTime)
      // console.log('!startTime: ', startTime)
      timer.current = setInterval(updateTime, 10)
      // console.log('&startTime: ', startTime)
      // console.log('&elapsedTime: ', elapsedTime)
      if (!activeStopwatch) {
        playStartSound()
        setActiveStopwatch(true)
      }
      setIsRunning(true)
    } else {
      // Pause
      console.log('* Pause')
      clearInterval(timer.current);
      console.log('+ startTime', startTime)
      elapsedTime.current = Date.now() - startTime.current
      console.log('+ elapsedTime', elapsedTime)
      setIsRunning(false)
    }
    // console.log('^ Time: ', time)
    // setIsRunning(previousState => !previousState);
  };

  const updateTime = () => {
    const currentTime = Date.now();
    // console.log('currentTime: ', currentTime)
    // console.log('@startTime: ', startTime)
    elapsedTime.current = currentTime - startTime.current
    // const padToTwo = number => (number <= 9 ? `0${number}` : number);
    // console.log(Date.now())
    // console.log('@elapsedTime: ', elapsedTime)
    setTime(elapsedTime.current)
  }

  const playStartSound = async() => {
    const {sound} = await Audio.Sound.createAsync(require('../assets/sound/start.mp3'))
    setSound(sound)
    await sound.playAsync()
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.pageTitle}>Stopwatch</Text>
      <View style={{flex: 70}}>
        <Time stopwatchRunning={isRunning} time={time} />
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