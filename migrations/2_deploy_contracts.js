const FxConversion = artifacts.require("./FxConversion.sol");

module.exports = function(deployer) {
  deployer.deploy(FxConversion);
};
