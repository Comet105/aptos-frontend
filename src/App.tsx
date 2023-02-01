import { AptosClient, CoinClient, FaucetClient } from 'aptos';
import React from 'react';

export const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
export const FAUCET_URL = process.env.APTOS_FAUCET_URL || "https://faucet.devnet.aptoslabs.com";

const coinClient = new CoinClient(client); 

const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL); 

function App() {
  const [address, setAddress] = React.useState<string>();
  const [publicKey, setPublicKey] = React.useState<string>();

  const init = async () => {
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
    setPublicKey(publicKey)
  }

  const onSubmitButton = () => {
    init();
  };


  return (
    <div className="App">
      <p>Account Address: <code>{ address }</code></p>
      <p>Public Key: <code>{ publicKey }</code></p>
      <button onClick={onSubmitButton}>petra wallet</button>
    </div>
  )
}

export default App
