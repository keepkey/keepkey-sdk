import logo from './logo.png';
import './App.css';
// import {useEffect} from 'react';
import { useState } from "react";
import { getKeepKeySDK } from 'keepkey-sdk'
import wallet from '@pioneer-platform/pioneer-client'
// console.log(wallet)
// import ripple from 'ripple-lib';
// const xrpl = require("xrpl")
// import xrpl from 'xrpl';

function App() {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('0.001')
  const [toAddress, setToAddress] = useState('toAddress')
  const [amount, setAmount] = useState('')
  const [signedTx, setSignedTx] = useState('')
  let onStart = async function(){
    try{
      let config = {
        serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
        serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
        serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
      }
      //init
      let sdk = await getKeepKeySDK(config)

      //Unsigned TX
      let addressInfo = {
        addressNList: [2147483732, 2147483648, 2147483648, 0, 0],
        coin: 'Bitcoin',
        scriptType: 'p2wpkh',
        showDisplay: false
      }

      //push tx to api
      // console.log(kk.instance.SignTransaction())
      let responseAddress = await sdk.pubkeys.rippleGetAddress(addressInfo)
      console.log("responseAddress: ", responseAddress.pubkey)
      if(responseAddress.pubkey){
        setAddress(responseAddress.pubkey)
        console.log("address: ", address)
        const config_pioneer = {
          queryKey:'sdk:2d0ec79c-6733-4235-9b09-9b87171edc16',
          username:"rango-example-keepkey",
          // spec:"https://pioneers.dev/spec/swagger.json"
          spec:"http://localhost:9001/spec/swagger.json"
        }

        //globals

        //sub to pioneer
        console.log("pioneer: ",config_pioneer.spec)
        let Pioneer = new wallet(config_pioneer.spec,config_pioneer)
        let pioneer = await Pioneer.init()
        console.log("pioneer: ",pioneer)
        //test pioneer
        let status = await pioneer.instance.Health()
        if(!status.data.online) throw Error("Pioneer Server offline!")
        console.log("pioneer status: ",status.data)

        //get balance
        let balance = await pioneer.instance.GetPubkeyBalance({asset:'XRP',pubkey:responseAddress.pubkey})
        balance = balance.data
        console.log("balance: ",balance)
        setBalance(balance)

        //get account info
        let account = await pioneer.instance.GetAccountInfo({network:'XRP',address:responseAddress.pubkey})
        account = account.data
        console.log("account: ",account)

        let toAddress = "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye"
        let fromAddress = "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye"
        let amount = "1000"

        let tx = {
          "type": "auth/StdTx",
          "value": {
            "fee": {
              "amount": [
                {
                  "amount": "1000",
                  "denom": "drop"
                }
              ],
              "gas": "28000"
            },
            "memo": "KeepKey",
            "msg": [
              {
                "type": "ripple-sdk/MsgSend",
                "value": {
                  "amount": [
                    {
                      "amount": amount,
                      "denom": "drop"
                    }
                  ],
                  "from_address": fromAddress,
                  "to_address": toAddress
                }
              }
            ],
            "signatures": null
          }
        }

        //Unsigned TX
        let unsignedTx = {
          "network": "XRP",
          "asset": "XRP",
          "transaction": {
            "context": "0x33b35c665496bA8E71B22373843376740401F106.wallet",
            "type": "transfer",
            "addressFrom": "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye",
            "recipient": "rU6ByS8KEgTdVEtV1P8RSMxUxP26THqkye",
            "asset": "XRP",
            "network": "XRP",
            "memo": "",
            "amount": "0.0001",
            "fee": {
              "priority": 5
            },
            "noBroadcast": true
          },
          "HDwalletPayload": {
            "addressNList": [
              2147483692,
              2147483708,
              2147483648,
              0,
              0
            ],
            tx:tx,
            flags: undefined,
            sequence: "3",
            lastLedgerSequence: "0",
            payment: {
              amount: amount,
              destination: toAddress,
              destinationTag: "1234567890",
            },
          },
          "verbal": "Ripple transaction"
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.sign.signTransaction({ body: { data: { invocation: { unsignedTx } } } })
        console.log("responseSign: ", responseSign.data)


        console.log("responseSign: ", JSON.stringify(responseSign.data.signedTx))

        //broadcast
        setSignedTx(JSON.stringify(responseSign.data.signedTx))

        //

      }




    }catch(e){

    }
  }

  onStart()
  // useEffect(() => {
  //   onStart()
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        Ripple Address: {address}
        <br/>
        Ripple Balance: {balance}
        <br/>
        signedTx: {signedTx}


      </header>
    </div>
  );
}

export default App;
