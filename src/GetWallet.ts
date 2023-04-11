import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, WalletContractV4 } from "ton";
import { mnemonicToWalletKey } from "ton-crypto";

async function getWallet() {
    const mnemonic = "fence cave ostrich burden razor select symptom blue orange ghost someone damp shield shoulder exist during gentle detect heart setup fire shiver ski target";
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0 });

    const endpoint = await getHttpEndpoint({ network: "testnet" });
    const client = new TonClient({ endpoint });

    if (!await client.isContractDeployed(wallet.address)) {
        return console.log("wallet is not deployed");
    }
    console.log(wallet);

    return wallet.address.toString;
}

export default getWallet;