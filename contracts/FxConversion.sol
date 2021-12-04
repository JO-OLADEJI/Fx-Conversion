//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FxConversion {

  /* 
    - the contract addresses used are for the <<--Rinkeby testnet-->>
    - all values should be divided by 10 ** 8 to get their precise value
  */

  function getEurUsd() public view returns(uint256) {
    AggregatorV3Interface priceFeed = AggregatorV3Interface(0x78F9e60608bF48a1155b4B2A5e31F32318a1d85F);
    (,int price,,,) = priceFeed.latestRoundData();
    return uint256(price);
  }

  function getGbpUsd() public view returns(uint256) {
    AggregatorV3Interface priceFeed = AggregatorV3Interface(0x7B17A813eEC55515Fb8F49F2ef51502bC54DD40F);
    (,int price,,,) = priceFeed.latestRoundData();
    return uint256(price);
  }

  function getUsdJpy() public view returns(uint256) {
    AggregatorV3Interface priceFeed = AggregatorV3Interface(0x3Ae2F46a2D84e3D5590ee6Ee5116B80caF77DeCA);
    (,int price,,,) = priceFeed.latestRoundData();
    return ((10 ** 16) / uint256(price));
  }

  function getUsdChf() public view returns(uint256) {
    AggregatorV3Interface priceFeed = AggregatorV3Interface(0x5e601CF5EF284Bcd12decBDa189479413284E1d2);
    (,int price,,,) = priceFeed.latestRoundData();
    return ((10 ** 16) / uint256(price));
  }

  function getEurJpy() public view returns(uint256) {
    uint256 eurUsd = getEurUsd();
    uint256 usdJpy = getUsdJpy();
    return (eurUsd * usdJpy);
  }

  function getEurGbp() public view returns(uint256) {
    uint256 eurUsd = getEurUsd();
    uint256 gbpUsd = getGbpUsd();
    return ((eurUsd * (10 ** 8)) / gbpUsd);
  }

  function getGbpJpy() public view returns(uint256) {
    uint256 gbpUsd = getGbpUsd();
    uint256 usdJpy = getUsdJpy();
    return (gbpUsd * usdJpy);
  }

}