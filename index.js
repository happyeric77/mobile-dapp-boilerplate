/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import './global';

import { registerRootComponent , scheme} from 'expo';
import App from './App';
import AsyncStorage from "@react-native-async-storage/async-storage"
import {withWalletConnect} from "@walletconnect/react-native-dapp"
import {Platform} from "react-native"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
console.log(global.version)

registerRootComponent(withWalletConnect(App, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : `${scheme}://`,
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
  qrcodeModalOptions: {
    mobileLinks: [
      "metamask",
      "trust"
    ],
  },
  // Uncomment to show a QR-code to connect a wallet
  // renderQrcodeModal: Qrcode,
}));
