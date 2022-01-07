import { atom } from "recoil";

export const popupState = atom({
  key: "popup",
  default: {
    flag: false,
    warn: false,
    title: '',
    subtitle: ''    
  },
});