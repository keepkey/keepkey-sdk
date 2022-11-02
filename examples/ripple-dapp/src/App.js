import logo from './logo.png';
import './App.css';
import {useEffect,handleChange, handleSubmit} from 'react';
import { useState } from "react";
import axios from 'axios'

// const Axios = require('axios')
// const https = require('https')
// const axios = Axios.create({
//   httpsAgent: new https.Agent({
//     rejectUnauthorized: false
//   })
// });

import { getKeepKeySDK } from '@keepkey/keepkey-sdk'
// import wallet from '@pioneer-platform/pioneer-client'
// console.log(wallet)
// import ripple from 'ripple-lib';
const xrpl = require("xrpl")
// import xrpl from 'xrpl';

function App() {
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('0.000')
  const [sequence, setSequence] = useState('0')
  const [toAddress, setToAddress] = useState('toAddress')
  const [amount, setAmount] = useState('')
  const [signedTx, setSignedTx] = useState('')


  let onStart = async function(){
    try{
      console.log("checkpoint1")

      let config = {
        serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
        serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
        serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
      }
      //init
      let sdk = await getKeepKeySDK(config)
      console.log("checkpoint2")

      //Unsigned TX
      let addressInfo = {
        addressNList: [ 2147483692, 2147483792, 2147483648, 0, 0 ],
        coin: 'Bitcoin',
        scriptType: 'p2wpkh',
        showDisplay: false
      }

      // //push tx to api
      // // console.log(kk.instance.SignTransaction())
      let address = await sdk.wallet.rippleGetAddress({rippleGetAddress: addressInfo})
      address = address.replace('"','')
      address = address.replace('"','')
      console.log("address: ", address)
      setAddress(address)

      let client = new xrpl.Client("wss://xrplcluster.com/")
      await client.connect()
      console.log("checkpoint2")

      const ledgerIndexCurrent = await client.getLedgerIndex()
      console.log("ledgerIndexCurrent: ",ledgerIndexCurrent)

      console.log("checkpoint3")
      const response = await client.request({
        "command": "account_info",
        "account": address,
        "ledger_index": "validated"
      })
      console.log("checkpoint4")
      console.log(response.result.account_data)
      if(response.result.account_data) {
        let balance = response.result.account_data.Balance
        let sequence = response.result.account_data.Sequence


        console.log("sequence: ", sequence)
        //set balance
        setBalance(balance / 1000000)
        setSequence(sequence)

      }

    }catch(e){
      console.error(e)
    }
  }

  // onStart()
  useEffect(() => {
    onStart()
  }, [])

  let onSubmit = async function(){
    try{
      //
      if (balance > 10) {
        let toAddress = "rwAcBveSswLKXEr3qVsZr1URuZcg2z1Wum"
        setToAddress(toAddress)
        let fromAddress = address
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
            "addressFrom": fromAddress,
            "recipient": toAddress,
            "asset": "XRP",
            "network": "XRP",
            "memo": "",
            "amount": amount,
            "fee": {
              "priority": 5
            },
            "noBroadcast": true
          },
          "HDwalletPayload": {
            "addressNList": [ 2147483692, 2147483792, 2147483648, 0, 0 ],
            // "addressNList": [
            //   2147483692,
            //   2147483708,
            //   2147483648,
            //   0,
            //   0
            // ],
            tx: tx,
            flags: undefined,
            sequence,
            lastLedgerSequence: ledgerIndexCurrent + 1000000000,
            payment: {
              amount,
              destination: toAddress,
              destinationTag: "1234567890",
            },
          },
          "verbal": "Ripple transaction"
        }

        //push tx to api
        console.log("unsignedTx: ", unsignedTx)
        let responseSign = await sdk.sign.signTransaction({body: {data: {invocation: {unsignedTx}}}})
        console.log("responseSign: ", responseSign)
        console.log("responseSign: ", responseSign.signedTx.value)
        console.log("responseSign: ", responseSign.signedTx.value.signatures)
        console.log("responseSign: ", responseSign.signedTx.value.signatures[0].serializedTx)
        //broadcast
        let serialized = responseSign.signedTx.value.signatures[0].serializedTx
        console.log("serialized: ", serialized)
        setSignedTx(serialized)
        const buffer = Buffer.from(serialized, 'base64');
        const bufString = buffer.toString('hex');
        const submitResponse = await client.submitAndWait(bufString)
        console.log(submitResponse)

      } else {
        alert("Balance too low to send!")
      }
      //

      //
    }catch(e){
      console.error(e)
    }
  }

  let onBroadcast = async function(){
    try{
      //

      //

      //
    }catch(e){
      console.error(e)
    }
  }


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
        Ripple sequence: {sequence}

        <h1>Send:</h1>
        <form>
          <label>
            amount:
            <input type="text" name="amount" />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h2>Build tx: </h2>
        <br/>
        to Address: {toAddress}
        <br/>
        <h2>Sign tx: </h2>
        <br/>
        signedTx: {signedTx}

        <h2>Broadcast tx: </h2>
        <br/>
        signedTx: {signedTx}
      </header>
    </div>
  );
}

export default App;
