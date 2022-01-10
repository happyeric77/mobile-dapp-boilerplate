
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { View, Button } from 'react-native';

export default function App() {
    const connector = useWalletConnect()
    return (
      <View>
        <Button title="OK" onPress={async()=>{
          // connector.connect(); 
          console.log(await connector.connect())
          }}/>
        <Button title="Disconnect" onPress={async()=>{
          // connector.connect(); 
          console.log(await connector.killSession())
          }}/>
      </View>
    );
  }