import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import StopwatchScreen from './screens/StopwatchScreen';
import Main from './components/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <StopwatchScreen /> */}
        <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
});
