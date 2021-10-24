// deploy code will go here
const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile.js");

const provider = new HDWalletProvider(
  "leisure drink cheap urge turkey horn empower grape armed patrol mesh cupboard",
  "https://ropsten.infura.io/v3/4264f5effe344fd3b93835915b49746b"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ gas: "1000000", gasPrice: "5000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};

deploy();
