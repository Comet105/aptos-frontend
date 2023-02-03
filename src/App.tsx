import { AptosAccount, AptosClient, CoinClient, FaucetClient, HexString } from 'aptos';
import React from 'react';
import { NODE_URL, FAUCET_URL } from './common';
import * as S from "./styled";

//The alicePrivateKeyHex value should include the alice address in testnet
const alicePrivateKeyHex = "0x63be0e70346016775e66a323c08b4bcb2ccf23f3caead375eac4c007f6143885"
const alicePrivateKeyBytes = HexString.ensure(alicePrivateKeyHex).toUint8Array();

//The alicePrivateKeyHex value should include the bob address in testnet
const bobPrivateKeyHex = "0xab0804b62a395779269e9ff2483246be2a65245cb9a4016197bd88594250b10d"
const bobPrivateKeyBytes = HexString.ensure(bobPrivateKeyHex).toUint8Array();


function App() {
  const [address, setAddress] = React.useState<string>();
  const [publicKey, setPublicKey] = React.useState<string>();

  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

  const coinClient = new CoinClient(client);

  //The second factor value should include the alice address in testnet.
  const alice = new AptosAccount(alicePrivateKeyBytes, '0x792bafd3e2ac7bd70d29abcb7b50b8d1e1b4dcb796a96f931225b97df562dc92');
  
  //The second factor value should include the bob address in testnet.
  const bob = new AptosAccount(bobPrivateKeyBytes, '0x9d90570171afcd51fbef4f6c5767cae39c815171761f3d691f2646f63df59459');


  const init = async () => {
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
    setPublicKey(publicKey)
  }


  const onClickButton = async (e: any) => {
    e.preventDefault();
    init();
  };

  const onClickHandler = async (e: any) => {
    e.preventDefault();
    await faucetClient.fundAccount(alice.address(), 200_000_000_000);
    await faucetClient.fundAccount(bob.address(), 100_000_000_000);
    let txnHash = await coinClient.transfer( alice, bob, 700_000_000);
    await client.waitForTransaction(txnHash);

    //can see send transaction to testnet in browser console!
    console.log(`Alice: ${await coinClient.checkBalance(alice)}`);
    console.log(`Bob: ${await coinClient.checkBalance(bob)}`);
    console.log(txnHash);
  }


  return (
    <S.MainPageWrapper>
      <S.MainTitle>Account Address: <code>{ address }</code></S.MainTitle>
      <S.MainTitle>Public Key: <code>{ publicKey }</code></S.MainTitle>
      <S.MainButtonWrapper>
        <S.MainButton onClick={onClickButton}>connect wallet!</S.MainButton>
        <S.MainButton onClick={onClickHandler}>transaction coin object!</S.MainButton>
      </S.MainButtonWrapper>
    </S.MainPageWrapper>
  )
}


export default App;
