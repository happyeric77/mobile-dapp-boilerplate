import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectProvider, { WalletConnectProviderProps } from "@walletconnect/react-native-dapp";

import { Platform } from "react-native";
import { expo } from "./app.json";
const { scheme } = expo;
import App from "./App";

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
                <App/>
        </WalletConnectProvider>
    );
};
