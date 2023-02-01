import React from 'react';

function App() {
  const [address, setAddress] = React.useState<string>();

  const init = async() => {
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
  }

  const onSubmitButton = () => {
    init();
  };


  return (
    <div className="App">
      <p>Account Address: <code>{ address }</code></p>
      <button onClick={onSubmitButton}>petra wallet</button>
    </div>
  )
}

export default App
