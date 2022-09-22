async function main() {
    const ZanglemeNFT = await ethers.getContractFactory("ZanglemeNFT")
    const zanglemeNFT = await ZanglemeNFT.deploy()
    await zanglemeNFT.deployed()
    console.log("合约部署地址:", zanglemeNFT.address)
}
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  