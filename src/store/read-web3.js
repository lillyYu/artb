import { atom } from "recoil";
import Web3 from "web3";

let Web3_Reader = {
  mainnet: new Web3("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"),
  testnet: new Web3("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"),
};

export const web3ReaderState = atom({
  key: "web3Reader",
  default: Web3_Reader,
  dangerouslyAllowMutability: true,
});
