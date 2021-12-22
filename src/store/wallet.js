import { atom } from "recoil";

export const amountBuyState = atom({
    key: "amountBuyState",
    default: 1
});

export const openWalletPopupState = atom({
    key: "openWalletPopupState",
    default: false
});

export const balanceAmountState = atom({
    key: "balanceAmountState",
    default: 0
})