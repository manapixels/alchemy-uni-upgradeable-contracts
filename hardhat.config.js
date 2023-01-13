require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('@openzeppelin/hardhat-upgrades')
require('dotenv').config()

module.exports = {
   solidity: '0.8.17',
   networks: {
      goerli: {
         url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_GOERLI_API_KEY}`,
         accounts: [process.env.GOERLI_PRIVATE_KEY],
      },
   },
   etherscan: {
      apiKey: process.env.ETHERSCAN_KEY,
   },
}
