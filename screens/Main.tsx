import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
// import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useWalletConnect } from '../WalletConnect';
import { useMoralis} from "react-moralis";
import { enableMoralisViaWalletConnect } from '../enableMoralisViaMoralis';

export default function Main({navigation}: any) {
  const { web3, Moralis, user, authenticate, authError, isAuthenticated } = useMoralis();
  const connector = useWalletConnect()

  return (
      <View style={styles.container}>
        <Text style={styles.textContent}>This is the Main  {JSON.stringify(user)} </Text>
        <Button onPress={() => {(navigation as Navigation).navigate('Second Page')}} title="Go to Second Page"/>
        <Button onPress={async ()=> {
          //@ts-ignore
          authenticate({ connector })
            .then(() => {
              if (authError) {
                console.log(authError.message);
              } else {
                if (isAuthenticated) {
                  console.log("LO")
                }
              }
            })
            .catch(() => {});
          }} title="CONNECT"/>
        <Button onPress={async()=>{
          // connector.sendTransaction({
          //   from: connector.accounts[0],
          //   to: "0x3a339C136F4482f348e3921EDBa8b8Ebd6931f08",
          //   value: "10000000000000000"
          // })
        }} title="SEND" />
        <Button onPress={() =>{connector.killSession()}} title="DISCONNECT"/>
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
