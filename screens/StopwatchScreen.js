import { View, Text, SafeAreaView, StyleSheet, Pressable, Dimensions } from 'react-native'

export default function StopwatchScreen() {

  const pressHandler = () => {
    console.log('pressed~')
  }

  return (
    <View style={styles.rootView}>
      <Text style={styles.pageTitle}>Stopwatch</Text>
      <View style={styles.timeContainer}>
        <Pressable onPress={pressHandler} style={styles.timeCircle}>
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
  }
})