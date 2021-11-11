import { atom } from "recoil";

export const web3State = atom({
  key: "web3",
  default: undefined,
  dangerouslyAllowMutability: true,
});
export const providerState = atom({
  key: "provider",
  default: undefined,
  dangerouslyAllowMutability: true,
});
export const accountState = atom({
  key: "account",
  default: undefined,
});
export const networkState = atom({
  key: "network",
  default: undefined,
});
export const requireNetworkState = atom({
  key: "requireNetwork",
  default: 0x1,
});
