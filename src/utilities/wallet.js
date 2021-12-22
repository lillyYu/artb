import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import Web3 from "web3";

class WalletWeb3Controller {
    web3 = null;
    web3Modal = null;
    provider = null;
    account = null;
    network = null;

    constructor({
        callbackConnect,
        callbackDisconnect
    } = {
            callbackConnect: () => { },
            callbackDisconnect: () => { }
        }) {
        this.callbackConnect = callbackConnect;
        this.callbackDisconnect = callbackDisconnect;
        this.init();
    }

    init() {
        const providerOptions = {
            metamask: {
                id: "injected",
                name: "MetaMask",
                type: "injected",
                check: "isMetaMask",
            },
            walletconnect: {
                package: WalletConnectProvider, // required
                options: {
                    rpc: {
                        1: "https://eth-mainnet.alchemyapi.io/v2/2wgBGtGnTm3s0A0o23RY0BtXxgow1GAn",
                        3: "https://eth-ropsten.alchemyapi.io/v2/vn-ib6FVXaweiMUDJkOmOkXQm1jPacAj",
                        128: "https://http-mainnet.hecochain.com",
                        256: "https://http-testnet.hecochain.com",
                    },
                    infuraId: "3fc11d1feb8944229a1cfba7bd62c8bc", // Required
                    network: "mainnet",
                    qrcodeModalOptions: {
                        mobileLinks: [
                            "rainbow",
                            "metamask",
                            "argent",
                            "trust",
                            "imtoken",
                            "pillar",
                        ],
                    },
                },
            },
        };
        let web3Modal = new Web3Modal({
            // network: "mainnet",
            // network: "ropsten",
            cacheProvider: true,
            providerOptions,
        });
        this.web3Modal = web3Modal;
    }

    connectEventHandler(provider) {
        if (!provider.on) {
            return;
        }
        provider.on("open", async (info) => {
            // toast("Wallet Connected!");
            console.log("info", info);
        });
        provider.on("accountsChanged", async (accounts) => {
            // console.log(accounts);
            //   setAccount(accounts[0]);
            // toast("Account Changed");
            this.account = accounts[0]
        });
        provider.on("chainChanged", async (chainId) => {
            // console.log(chainId);
            //   setNetwork(chainId);
            // toast("Chain Id Changed");
            this.network = chainId;
        });
        provider.on("disconnect", async (error) => {
            this.onDisconnect(true);
            // toast("Wallet lose connection.");
        });
    }

    async connect() {
        while (
            window.document.querySelectorAll("[id=WEB3_CONNECT_MODAL_ID]").length > 1
        ) {
            window.document
                .querySelectorAll("[id=WEB3_CONNECT_MODAL_ID]")[1]
                .remove();
        }
        let provider = await this.web3Modal.connect();
        this.provider = provider;
        const web3 = new Web3(provider);
        this.web3 = web3;
        const accounts = await web3.eth.getAccounts();
        const network = await web3.eth.getChainId();
        this.account = accounts[0];
        this.network = network;
        this.callbackConnect({
            account: accounts[0],
            network: network
        })

        this.connectEventHandler(provider);
        return this;
    }

    async onDisconnect(status) {
        if (!status && this.web3 && this.web3.currentProvider && this.web3.currentProvider.close) {
            await this.web3.currentProvider.close();
        }
        this.callbackDisconnect();
        await this.web3Modal.clearCachedProvider();

        // let els = document.querySelectorAll('[id=WEB3_CONNECT_MODAL_ID]')
        // while (els.length>1) {
        //     document.querySelectorAll('[id=WEB3_CONNECT_MODAL_ID]')[1].remove();
        // }
    }
}

export default WalletWeb3Controller;