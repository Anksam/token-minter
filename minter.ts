// Importing libraries

import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";


// Importing private key
require('dotenv').config();

// Instantiate 3rdweb SDK
const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // YWallet private key
    process.env.PRIVATE_KEY as string,
    // RPC URL, we'll use Polygon Mumbai
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
  )
);

// Instantiate Token module
const token = sdk.getCurrencyModule("0xE2945D31b1646d580DF0e156181F4c652d14526b");

// Setting amount of currency to mint
// (Actual amount, number of decimals)
const amount = ethers.utils.parseUnits("1000", 18);

// Minting the currency, 1000 Test Coin
const mintCurrency = async () => {
  try{
    await token.mint(amount);
    console.log("Minted 1000 Test Coin");
  } catch (err) {
    console.log(err);
  }
};

// Run Minter
mintCurrency();
