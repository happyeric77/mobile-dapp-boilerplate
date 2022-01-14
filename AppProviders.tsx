import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import WalletConnectProvider, { WalletConnectProviderProps } from "@walletconnect/react-native-dapp";
import WalletConnectProvider, { WalletConnectProviderProps } from "./WalletConnect";
import { enableMoralisViaWalletConnect } from "./enableMoralisViaMoralis";
import { Platform} from "react-native";
import { expo } from "./app.json";
const { scheme } = expo;
import App from "./App";

import { MoralisProvider } from "react-moralis"

import Moralis from "moralis/react-native.js";
Moralis.setAsyncStorage(AsyncStorage)
//@ts-ignore
Moralis.enable = enableMoralisViaWalletConnect
console.log(AsyncStorage.getAllKeys(), "KEYS");

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
            <MoralisProvider
            appId={process.env.REACT_APP_MORALIS_APPLICATION_ID!}
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL!}
            environment="native">
                <App/>
            </MoralisProvider>
        </WalletConnectProvider>
    );
};
