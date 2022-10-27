import logo from './logo.png';
import {useEffect} from 'react';
import './App.css';
// import KeepKeyClient from 'keepkey-sdk';
//
// let spec = 'http://localhost:1646/spec/swagger.json'
//
// let config = {
//     serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
//     serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
//     serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
//     spec
// }



function App() {
    let kk
    let address
    const onStart = async function(){
        try{
            // kk = await new KeepKeyClient(config).init()
            // console.log("onStart")
            //
            // let addressInfo = {
            //     addressNList: [ 2147483732, 2147483648, 2147483648, 0, 0 ],
            //     coin: 'Ripple',
            //     scriptType: 'p2wpkh',
            //     showDisplay: false
            // }
            // let responseAddy = await kk.RippleGetAddress(null, addressInfo)
            // console.log("responseAddy: ", responseAddy.data)
            // address = responseAddy
        }catch(e){

        }
    }

    useEffect(async () => {
        await onStart()
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          address: {}
        </p>

      </header>
    </div>
  );
}

export default App;
