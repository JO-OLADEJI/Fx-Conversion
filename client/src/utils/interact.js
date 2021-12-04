import FxConversionContract from '../contracts/FxConversion.json'
require('dotenv').config();
const alchemyKey = process.env.ALCHEMY_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);


const { address } = FxConversionContract.networks[4];
const { abi } = FxConversionContract;
const instance = new web3.eth.Contract(abi, address);


export const getEurUsd = async () => {
  const eurUsd = await instance.methods.getEurUsd().call();
  console.log({ eurUsd });
}

export const getGbpUsd = async () => {
  const gbpUsd = await instance.methods.getGbpUsd().call();
  console.log({ gbpUsd });
}

export const getUsdJpy = async () => {
  const usdJpy = await instance.methods.getUsdJpy().call();
  console.log({ usdJpy });
}

export const getUsdChf = async () => {
  const usdChf = await instance.methods.getUsdChf().call();
  console.log({ usdChf });
}

export const getEurJpy = async () => {
  const eurJpy = await instance.methods.getEurJpy().call();
  console.log({ eurJpy });
}

export const getEurGbp = async () => {
  const eurGbp = await instance.methods.getEurGbp().call();
  console.log({ eurGbp });
}

export const getGbpJpy = async () => {
  const gbpJpy = await instance.methods.getGbpJpy().call();
  console.log({ gbpJpy });
}