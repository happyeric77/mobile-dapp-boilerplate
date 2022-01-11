import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectProvider, { WalletConnectProviderProps } from "@walletconnect/react-native-dapp";
import { Platform} from "react-native";
import { expo } from "./app.json";
const { scheme } = expo;
import App from "./App";

import { MoralisProvider } from "react-moralis"



import Moralis from "moralis/react-native.js";
Moralis.setAsyncStorage(AsyncStorage)
// Moralis.start({appId: "YNGTdQEGlHEuG5xLEVP2NK5TSezl9x3Fi3eyQEOv", serverUrl: "https://li8crrzx4alq.grandmoralis.com:2053/server"})



const walletConnectOptions: WalletConnectProviderProps = {
    redirectUrl: Platform.OS === "web" ? window.location.origin : `${scheme}://`,
    storageOptions: {
        // @ts-ignore
        asyncStorage: AsyncStorage,
    },
    qrcodeModalOptions: {
        mobileLinks: [
            "rainbow",
            "metamask",
            "argent",
            "trust",
            "imtoken",
            "pillar",
        ],
    },
  // Uncomment to show a QR-code to connect a wallet
  // renderQrcodeModal: Qrcode,
};

export const AppProviders = ({ children }: any) => {
    return (        
        <WalletConnectProvider {...walletConnectOptions}>
            {/* <MoralisProvider
            appId="YNGTdQEGlHEuG5xLEVP2NK5TSezl9x3Fi3eyQEOv"
            serverUrl="https://li8crrzx4alq.grandmoralis.com:2053/server"
            environment="native"> */}
            <App/>
            {/* </MoralisProvider> */}
        </WalletConnectProvider>
        
    );
};
