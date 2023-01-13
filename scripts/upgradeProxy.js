const { ethers, upgrades } = require('hardhat')

const proxyAddress = '0x4285Bf68812D322d342bfdb97C7De4EC993D21e0'

async function main() {
   const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2')
   const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2)

   const implementationAddress =
      await upgrades.erc1967.getImplementationAddress(proxyAddress)

   console.log('The current contract owner is: ' + await upgraded.owner())
   console.log('Implementation contract address: ' + implementationAddress)
}

main()
