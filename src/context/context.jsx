import React, { createContext, useState, useContext, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
// import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";
const Context = createContext({
  tezConfig: {},
  connectWallet: () => {},
});
// const dAppClient = new DAppClient({ name: "Hashland" });
const Tezos = new TezosToolkit("https://ithacanet.ecadinfra.com/");
const wallet = new BeaconWallet({ name: "Hashland" });
Tezos.setWalletProvider(wallet);
const Provider = ({ children }) => {
  const [tezConfig, setTezConfig] = useState({
    wallet: undefined,
    tezos: undefined,
    accountPkh: undefined,
  });

  const connectWallet = async () => {
    try {
      console.log("Requesting permissions...");
  const permissions = await wallet.client.requestPermissions();
  console.log("Got permissions:", permissions.address);
    } catch (error) {
      console.log("Got error:", error);
    }
  };

  const initializeDapp = async () => {
    try {
      // const activeAccount = await dAppClient.getActiveAccount();
      // if (activeAccount) {
      //   // User already has account connected, everything is ready
      //   // You can now do an operation request, sign request, or send another permission request to switch wallet
      //   setTezConfig({ ...tezConfig, accountPkh: activeAccount.address });
      //   console.log("Already connected:", activeAccount.address);
      // } else {
      //   // The user is not connected. A button should be displayed where the user can connect to his wallet.
      //   console.log("Not connected!");
      // }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    initializeDapp();
  }, []);

  const state = {
    tezConfig,
    connectWallet,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
