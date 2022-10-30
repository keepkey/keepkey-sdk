import logo from './logo.png';
import './App.css';
// import {useEffect} from 'react';
import { getKeepKeySDK } from 'keepkey-sdk'
import wallet from '@pioneer-platform/pioneer-client'
// console.log(wallet)
// import ripple from 'ripple-lib';
// const xrpl = require("xrpl")
// import xrpl from 'xrpl';

function App() {
  let address
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
      address = responseAddress.pubkey
      console.log("address", address)


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
      let balance = await pioneer.instance.GetPubkeyBalance({asset:'XRP',pubkey:"rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"})
      balance = balance.data
      console.log("balance: ",balance)

      //get account info
      let account = await pioneer.instance.GetAccountInfo({network:'XRP',address:"rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"})
      account = account.data
      console.log("account: ",account)

      let toAddress = ""
      let fromAddress = ""
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


      let rippleTx = {
          addressNList: '',
          tx:tx,
          flags: undefined,
          sequence: "3",
          lastLedgerSequence: "0",
          payment: {
            amount: amount,
            destination: toAddress,
            destinationTag: "1234567890",
          },
      }

      //signTx
      let responseSign = await sdk.sign.rippleSignTx(rippleTx)
      console.log("responseSign: ", responseSign)

      //broadcast

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
        Ripple Address: {address}
      </header>
    </div>
  );
}

export default App;
