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

export const diagState = atom({
  key: "diagState",
  default: {
    type: "join"   
  },
});