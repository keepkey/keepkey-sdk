
const { getKeepKeySDK } = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-1234sdfgdsf',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        //init
        const sdk = await getKeepKeySDK(config)


        //Unsigned TX
        let addressInfo = {
            addressNList: [2147483732, 2147483648, 2147483648, 0, 0],
            coin: 'Bitcoin',
            scriptType: 'p2wpkh',
            showDisplay: false
        }

        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()
        let responseSign = await sdk.wallet.btcGetAddress({ bTCGetAddress: addressInfo })
        console.log("responseSign: ", responseSign.data)
        let timeEnd = new Date().getTime()
        console.log("duration: ", (timeStart - timeEnd) / 1000)

        // let responseSign = await kk.instance.GetPublicKeys(null, { paths })
        // console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()