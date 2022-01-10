import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

export default function Main({navigation}: any) {
  const connector = useWalletConnect()
  return (
      <View style={styles.container}>
        <Text style={styles.textContent}>This is the Main </Text>
        <Button onPress={() => {(navigation as Navigation).navigate('Second Page')}} title="Go to Second Page"/>
        <Button onPress={()=> {connector.connect()}} title="CONNECT"/>
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
