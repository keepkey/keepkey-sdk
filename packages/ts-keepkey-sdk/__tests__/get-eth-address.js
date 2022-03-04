require("dotenv").config({ path: '../../../../.env' })
let kkApi = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'
let ASSET = 'ETH'
let run_test = async function () {
    try {
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            spec
        }
        let kk = new kkApi(spec, config)
        kk = await kk.init()

        let user = await kk.instance.User()
        let assetBalance = user.data.balances.filter((e) => e.symbol === ASSET)[0]
        console.log(ASSET + " assetBalance: ", assetBalance.address)

    } catch (e) {
        console.error(e)
    }
}
run_test()