var HDWalletProvider = require("truffle-hdwallet-provider");
var  mnemonic  = "swallow check clerk over degree add gun salmon grocery keep method deny";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/7910c9d1547b40dcaaa5b785c07044b8")
        
      },
      network_id: 3
    }   
  }
};
