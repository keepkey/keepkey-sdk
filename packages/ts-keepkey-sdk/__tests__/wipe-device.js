const { getKeepKeySDK } = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        //init
        const sdk = await getKeepKeySDK(config)
        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let responseSign = await sdk.developer.wipe()
        console.log("responseSign: ", responseSign.data)

    } catch (e) {
        console.error(e)
    }
}

run_test()