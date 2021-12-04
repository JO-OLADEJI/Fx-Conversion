var SimpleStorage = artifacts.require("./SimpleStorage.sol");
const FxConversion = artifacts.require("./FxConversion.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(FxConversion);
};
