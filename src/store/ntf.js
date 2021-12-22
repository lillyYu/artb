import { atom } from "recoil";

export const ntfInforState = atom({
    key: "ntfInfor",
    default: [
        {
            tokenId: "0",
            address: "0x00",
            quantity: "0",
            sold: "0",
            inventory: "0",
            start_time: "1632625200000",
            end_time: "1640876400000",
            is_active: true,
            price: "0",
            payTokenAddress: "0x00",
        },
    ]
});