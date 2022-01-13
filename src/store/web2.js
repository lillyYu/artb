import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

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

export const authState = atom({
  key: 'authState',
  default: {
    token: null
  },
  effects_UNSTABLE: [persistAtom],
})

export const accountState = atom({
  key: 'accountState',
  default: {
    logined: false,
    info: {
      email: "",
      name: "",
      phone: "",
      post: "",
      addr1: "",
      addr2: "",
      nftCount: 0    
    },
  }
})