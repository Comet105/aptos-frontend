import { AptosAccount, AptosClient, CoinClient, FaucetClient, MaybeHexString, OptionalTransactionArgs, TxnBuilderTypes } from 'aptos';
import React from 'react';
import './App.css';
import { NODE_URL, FAUCET_URL } from './common';


function App() {
  const [address, setAddress] = React.useState<string>();
  const [publicKey, setPublicKey] = React.useState<string>();
  
  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);
  const coinClient = new CoinClient(client);
  const alice = new AptosAccount();
  const bob = new AptosAccount();


  const init = async () => {
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
    setPublicKey(publicKey)
  }

  const onClickButton = async (e: any) => {
    e.preventDefault();
    init();
    // console.log(`Alice: ${await coinClient.checkBalance(alice)}`);
    // console.log(`Bob: ${await coinClient.checkBalance(bob)}`);
    await faucetClient.fundAccount(alice.address(), 1);
    // await faucetClient.fundAccount(bob.address(), 0); 
  
    // let txnHash = await coinClient.transfer(alice, bob, 1_000, { gasUnitPrice: BigInt(100) });
    // await client.waitForTransaction(txnHash); 

    // console.log(txnHash);
  };


  return (
    <div className="App">
      <p>Account Address: <code>{ address }</code></p>
      <p>Public Key: <code>{ publicKey }</code></p>
      <button onClick={onClickButton}>petra wallet</button>
    </div>
  )
}

export default App