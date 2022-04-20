
const { KeepKeyClient } = require("../lib")
require('dotenv').config({path:'./../.env'})
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
        let kk = await new KeepKeyClient(config).init()


        //Unsigned TX
        let seed = process.env['WALLET_TEST']
        console.log(seed)
        if(!seed) throw Error("Must set seed in ENV file!")
        let loadPayload = {
            mnemonic:seed,
            label:"testSeed",
            passphrase:false,
            pin:"1",
            skipChecksum:true
        }
        //push tx to api
        // console.log(kk.instance.SignTransaction())
        let timeStart = new Date().getTime()

        let wipe = await kk.Wipe()
        console.log("wipe: ", wipe.data)

        let responseSign = await kk.LoadDevice(null, loadPayload)
        console.log("responseSign: ", responseSign.data)
        let timeEnd = new Date().getTime()
        console.log("duration: ",(timeStart - timeEnd) / 1000)


    } catch (e) {
        console.error(e)
    }
}

run_test()