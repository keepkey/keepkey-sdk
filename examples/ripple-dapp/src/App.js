import logo from './logo.png';
import './App.css';
import {
  useEffect,
  useState,
  handleChange,
  handleSubmit
} from 'react';
import Modal from 'react-modal';
import Text from 'react-text';
import { getKeepKeySDK } from '@keepkey/keepkey-sdk'
const xrpl = require("xrpl")

function App() {
  let subtitle;

  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('0.000')
  const [sequence, setSequence] = useState('0')
  const [toAddress, setToAddress] = useState('')
  const [ledgerIndexCurrent, setLedgerIndexCurrent] = useState('')
  const [amount, setAmount] = useState('1.0000000000')
  const [signedTx, setSignedTx] = useState('')
  const [broadcastResponse, setBroadcastResponse] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [userInputDone, setUserInputDone] = useState(false)
  const [broadcasted, setBroadcasted] = useState(false)
  const [signed, setSigned] = useState(false)

  let client
  let sdk

  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setSigned(false)
    setBroadcasted(false)
    setUserInputDone(false)
    setShowModal(false);
  }

  let onStart = async function(){
    try{
      console.log("checkpoint1")

      let config = {
        serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
        serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
        serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
      }
      //init
      sdk = await getKeepKeySDK(config)
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
      setLedgerIndexCurrent(ledgerIndexCurrent)
      console.log("checkpoint3")
      const response = await client.request({
        "command": "account_info",
        "account": address,
        "ledger_index": "validated"
      })
      console.log("checkpoint4")
      console.log(response.result.account_data)
      let balance = response.result.account_data.Balance
      let sequence = response.result.account_data.Sequence


      console.log("sequence: ", sequence)
      //set balance
      setBalance(balance / 1000000)
      setSequence(sequence)

    }catch(e){
      console.log(e)
      //console.error(e)
    }
  }

  // onStart()
  useEffect(() => {
    onStart()
  }, [])

  let onSubmit = async function(){
    try{
      console.log("amount: ",parseFloat(amount) * 1000000)
      console.log("address: ",toAddress)

      setAmount( parseFloat(amount) * 1000000)
      //TODO this is lame, dont do this
      let config = {
        serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
        serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
        serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
      }
      //init
      sdk = await getKeepKeySDK(config)
      console.log("checkpoint2")
      //
      // if (balance > 10) {
      setToAddress(toAddress)
      let fromAddress = address

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
                    "amount": parseFloat(amount) * 1000000,
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
          "amount": parseFloat(amount) * 1000000,
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
            amount:parseFloat(amount) * 1000000,
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
      //
      console.log("serialized: ", serialized)
      setSignedTx(serialized)
      setSigned(true)
      setUserInputDone(true)
      // } else {
      //   alert("Balance too low to send!")
      // }
      //

      //
    }catch(e){
      console.error(e)
    }
  }

  let onBroadcast = async function(){
    try{
      setBroadcasted(true)
      console.log("onBroadcast: ",signedTx)
      //
      let client = new xrpl.Client("wss://xrplcluster.com/")
      await client.connect()
      console.log("checkpoint pre-broadcast")

      const buffer = Buffer.from(signedTx, 'base64');
      const bufString = buffer.toString('hex');
      const submitResponse = await client.submitAndWait(bufString)
      console.log("submitResponse",submitResponse)
      setBroadcastResponse(submitResponse)
      //
    }catch(e){
      console.error(e)
    }
  }

  let handleSubmit = function(event) {
    event.preventDefault();
    console.log("onSubmit called")
  }

  let handleChange = function(event) {
    console.log("event.target.amount: ",event.target.value)
    setAmount(event.target.value)
  }

  let handleSubmitAddress = function(event) {
    event.preventDefault();
    console.log("onSubmit called")
    setAmount()
  }

  let handleChangeAddress = function(event) {
    console.log("event.target.amount: ",event.target.value)
    setToAddress(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Modal
            isOpen={showModal}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Send Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Send XRP</h2>


          {userInputDone ?
            <div>
              <small>Completed Signing!</small>
              <div>
                <Text style={{flexWrap: 'wrap'}}>{signedTx}</Text>
              </div>
            </div>
              :
            <div>
              amount:
              <form
                  onSubmit={handleSubmit} onChange={handleChange}
              >
                <label>
                  <br/>
                  <input type="text" name="amount" />
                </label>
              </form>
              <br/>
              toAddress: (donate:  rwAcBveSswLKXEr3qVsZr1URuZcg2z1Wum)
              <br/>
              <form
                  onSubmit={handleSubmitAddress} onChange={handleChangeAddress}
              >
                <label>
                  <br/>
                  <input type="text" name="address" />
                </label>
              </form>

              <button
                  h='1.75rem'
                  size='sm'
                  variant='ghost'
                  // colorScheme='blue'
                  onClick={onSubmit}
              >
                Sign
              </button>
            </div>
          }

          {signed ?
              <div>

                <h2>Broadcast tx: </h2>
                <br/>
                <button
                    h='1.75rem'
                    size='sm'
                    variant='ghost'
                    // colorScheme='blue'
                    onClick={onBroadcast}
                >
                  broadcast
                </button>
              </div>
              :
              <div>
                <small>Not signed: {signed}</small>
              </div>
          }

          {broadcasted ?
              <div>
                <br/>
                broadcast result:
                <small>
                            <pre>
              {JSON.stringify(broadcastResponse, null, 2) }
            </pre>
                </small>
              </div>
              :
              <div>
                <small>Not broadcasted: {broadcasted}</small>
              </div>
          }


          <br/>
          <button onClick={closeModal}>close</button>

        </Modal>

        {/*<br/>*/}
        {/*Ripple Address: {address}*/}
        <br/>
        Ripple Balance: {balance}
        <br/>
        <button onClick={openModal}>Send XRP</button>

        {/*Ripple sequence: {sequence}*/}
        {/*<br/>*/}
      </header>
    </div>
  );
}

export default App;
