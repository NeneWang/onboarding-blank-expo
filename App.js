import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

import LottieView from 'lottie-react-native';


export default function App() {
  return (
    <AppNavigator />
    // <LottieView
    //   style={{ flex: 1 }}
    //   source={require('./boost.json')} 
    //   autoPlay
    //   loop
    // />
    // <LottieView
    //   style={{ flex: 1 }}
    //   source={require('./assets/animations/boost.json')} 
    //   autoPlay
    //   loop
    // />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
