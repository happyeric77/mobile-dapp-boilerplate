import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigation from '../typs';


export default function Main({navigation}: any) {
  return (
      <View style={styles.container}>
      <Text style={styles.textContent}>This is the Main </Text>
      <Button onPress={() => {(navigation as Navigation).navigate('Second Page')}} title="Go to Second Page"/>
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    fontFamily: "bank-gothic-light"
  }
});
