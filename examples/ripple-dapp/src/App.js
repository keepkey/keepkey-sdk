import logo from './logo.png';
import './App.css';
// import {useEffect} from 'react';
import { getKeepKeySDK } from 'keepkey-sdk'
// import ripple from 'ripple-lib';
// const xrpl = require("xrpl")
import xrpl from 'xrpl';

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
      let responseSign = await sdk.pubkeys.rippleGetAddress(addressInfo)
      console.log("responseSign: ", responseSign.pubkey)
      address = responseSign.pubkey
      console.log("address", address)

      const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
      await client.connect()

      // Prepare transaction -------------------------------------------------------
      const prepared = await client.autofill({
        "TransactionType": "Payment",
        "Account": address,
        "Amount": xrpl.xrpToDrops("22"),
        "Destination": "rPT1Sjq2YGrBMTttX4GZHjKu9dyfzbpAYe"
      })
      const max_ledger = prepared.LastLedgerSequence
      console.log("Prepared transaction instructions:", prepared)
      console.log("Transaction cost:", xrpl.dropsToXrp(prepared.Fee), "XRP")
      console.log("Transaction expires after ledger:", max_ledger)

      // const PUBLIC_SERVER = "wss://xrplcluster.com/"
      //https://s1.ripple.com:51234/
      // const PUBLIC_SERVER = "https://s1.ripple.com:51234/"
      // const PUBLIC_SERVER = "wss://x1.sologenic.org/"
      // console.log("checkpoint1")
      // const client = new xrpl.Client(PUBLIC_SERVER)
      // console.log("checkpoint2")
      // await client.connect()
      // console.log("checkpoint3")
      // // Get info from the ledger about the address we just funded
      // const response = await client.request({
      //   "command": "account_info",
      //   "account": address,
      //   "ledger_index": "validated"
      // })
      // console.log(response)

      // console.log("pre-balance check: ")
      // const api = new ripple.RippleAPI({ server: 'wss://s2.ripple.com:443' });
      // console.log("pre-balance check: 1")
      // await api.connect()
      // console.log("pre-balance check: 2")
      // let balances = await api.getBalances(address)
      // console.log("balances: ",balances)
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
