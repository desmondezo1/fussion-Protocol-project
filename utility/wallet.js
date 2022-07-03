import WalletConnectProvider from '@walletconnect/web3-provider'
import { ethers, providers  } from "ethers";
import Web3Modal from "web3modal";
import * as contractABI from './FusionStaking.json'
import * as tokenABI from './testToken.json'


//import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

//const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'; //replace ID with yours
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'; //replace ID with yours

const providerOptions = {
    binancechainwallet: {
        package: true
      },
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId:  INFURA_ID // required
        }
      },
    }
  var web3Modal;
  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
    // network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });

  //web3Modal = newWeb3Modal;
  }

export const disconnect = async () => {
    await web3Modal.clearCachedProvider();
  };
  

export const connectWallet = async () => {

    try {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();  
        return accounts;

    } catch (error) {
        console.log(error)  
    }
 
}


export const getContract = async ()=> {
  const instance = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();
  const staking = new ethers.Contract("0x24C7903667350C309E1525eF02e80deA6a2Be7bC", contractABI.abi, signer);
  return staking;
}

export const getTokenContract = async () => {
  const instance = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();
  const tokencontract = new ethers.Contract("0x82282A97D0EF41e0631046273C187Eb7AE7742B9", tokenABI.abi, signer);
  return tokencontract;
}

export const convertToWei = (val) => {
  let res = ethers.utils.parseEther(val);
  return res;
}
export const convertToEther = (val) => {
  let res = ethers.utils.formatEther(val);
  return res;
}

export const getWalletBalance = async (address) =>{
  let acc = await connectWallet();
  let contract = await getTokenContract();
  let val = await contract.balanceOf(acc[0]);
  let balance = ethers.utils.formatEther(val);
  return balance;
}


export default { connectWallet, disconnect, getContract, getTokenContract, convertToWei, getWalletBalance, convertToEther };