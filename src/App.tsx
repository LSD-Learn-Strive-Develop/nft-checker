import './App.css';
import { TonConnectButton, TonConnectUI, TonConnectUIContext, useTonAddress, useTonConnectUI } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useCounterContract } from './hooks/useCounterContract';
import '@twa-dev/sdk';
import { QRNormal } from 'react-qrbtf';

function App() {
  const { connected } = useTonConnect();
  const { value, address, sendIncrement } = useCounterContract();

  //ton://transfer/kQDqJG6k6IAnvM612LgVKSBbtxgIZrG8iKV3PIsVXujv3OLr
 let ttt = useTonAddress();
  // let ttt = getWallet();
  // const [tonConnectUI] = useTonConnectUI();
  // tonConnectUI.setConnectRequestParameters({
  //   state: 'ready',
  //   value: {
  //     tonProof: 'asd'
  //   }
  // });

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton />  

        <div className='Card'>
          <b>Counter Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        {/* <div className='Card'>
          <b>Counter Value</b>
          <div>{value ?? 'Loading...'}</div>
        </div> */}

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      </div>
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 512 }}>
        {/* <QRCode
          level='L'
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={'ton://transfer/kQDqJG6k6IAnvM612LgVKSBbtxgIZrG8iKV3PIsVXujv3OLr'}
          viewBox={`0 0 256 256`}
        /> */}
        <div style={{ background: "white", borderRadius: "15%" }}>
          <QRNormal
                value="ton://transfer/kQDqJG6k6IAnvM612LgVKSBbtxgIZrG8iKV3PIsVXujv3OLr?amount=10000000&text=testnet"
                className="my-qrcode"
                styles={{ svg: {height: "auto", width: "100%"} }}
                type="rect"
                size={64}
                // opacity={80}
                posType="round"
                // otherColor="#33CCCC"
                posColor="#0A98FC"
            />
        </div>
      
        <div>
          <img src='check.png' alt=''/>
        </div>
      </div>
    </div>
  );
}

export default App
