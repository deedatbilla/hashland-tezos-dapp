import React, { createContext, useState, useContext, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
const Context = createContext({
  tezConfig: {},
  connectWallet: () => {},
  registerLand: () => {},
  landsList: [],
});
// const dAppClient = new DAppClient({ name: "Hashland" });
const Tezos = new TezosToolkit("https://ithacanet.ecadinfra.com");
const wallet = new BeaconWallet({
  name: "Hashland",
  preferredNetwork: NetworkType.ITHACANET,
});
Tezos.setWalletProvider(wallet);
const Provider = ({ children }) => {
  const [tezConfig, setTezConfig] = useState({
    wallet: undefined,
    contract: undefined,
    userAddress: undefined,
    storage: undefined,
    userBalance: 0,
    beaconConnection: false,
  });
  const [landsList, setLandsList] = useState([]);

  console.log(NetworkType.ITHACANET);
  const contractAddress = "KT1ER46fqwZD7G94AUrpn4u2aMA4ekmKW52t";

  const connectWallet = async () => {
    try {
      console.log("Requesting permissions...");
      const permissions = await wallet.client.requestPermissions({
        network: {
          type: NetworkType.ITHACANET,
          rpcUrl: "https://ithacanet.ecadinfra.com",
        },
      });
      console.log("Got permissions:", permissions.address);

      // await wallet.client.requestPermissions();

      // gets user's address
      const userAddress = await wallet.getPKH();
      await initializeDapp();
      console.log("Got permissions:", userAddress);
    } catch (error) {
      console.log("Got error:", error);
    }
  };

  console.log(tezConfig);
  const registerLand = async ({
    name,
    region,
    district,
    surveyNumber,
    marketValue,
    width,
    length,
  }) => {
    try {
      const { contract, userAddress } = tezConfig;

      // console.log(JSON.stringify(contract.methods));
      //  const op= await contract.methods.default('1').send()
      const { currentOwner, documentHash } = {
        currentOwner: userAddress,
        documentHash: "retrtretert",
      };
      console.log(
        currentOwner,
        district,
        documentHash,
        Number(length),
        Number(marketValue),
        name,
        region,
        surveyNumber,
        Number(width)
      );
      const op = await contract.methods
        .register(
          currentOwner,
          district,
          documentHash,
          Number(length),
          Number(marketValue),
          name,
          region,
          surveyNumber,
          Number(width)
        )
        .send();
      await op.confirmation();
      // const newStorage = await contract.storage();
      // if (newStorage) setTezConfig({ ...tezConfig, storage: newStorage });
      // setUserBalance(await Tezos.tz.getBalance(userAddress));
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchAllLands = async ({ storage, contract }) => {
    try {
      const lands = await storage.all_lands;
      console.log("calling");
      const response = await fetch(
        `https://api.ithaca.tzstats.com/explorer/bigmap/${lands.toString()}/keys`
      );
      let hashes = await response.json();
      hashes = hashes.map((item) => item.key);
      console.log(hashes, "here14");

      let allLands = await storage.all_lands.getMultipleValues([...hashes]);
      console.log(hashes, allLands, "here");
      let list = [];
      allLands.forEach((value, key) => {
        list.push(value);
      });
      setLandsList(list);

      console.log("done");
      console.log(lands.toJSON());
    } catch (error) {
      console.log(error);
    }
  };
  const initializeDapp = async () => {
    try {
      const activeAccount = await wallet.client.getActiveAccount();

      if (activeAccount) {
        // User already has account connected, everything is ready
        // You can now do an operation request, sign request, or send another permission request to switch wallet
        const balance = await Tezos.tz.getBalance(activeAccount.address);
        // console.log(balance.toNumber());
        // creates contract instance
        const contract = await Tezos.wallet.at(contractAddress);

        const storage = await contract.storage();

        console.log("Already connected:", activeAccount.address);
        setTezConfig({
          ...tezConfig,
          userAddress: activeAccount.address,
          beaconConnection: true,
          userBalance: balance.toNumber(),
          storage,
          contract,
        });
        await fetchAllLands({ storage, contract });
      } else {
        // The user is not connected. A button should be displayed where the user can connect to his wallet.
        console.log("Not connected!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    initializeDapp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const state = {
    tezConfig,
    connectWallet,
    registerLand,
    landsList,
  };
  return <Context.Provider value={state}>{children}</Context.Provider>;
};

const useAppContext = () => useContext(Context);

export { Provider, useAppContext };
