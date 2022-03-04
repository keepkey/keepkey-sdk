require("dotenv").config({path:'../../../../.env'})
const { KeepKeyClient } = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function(){
    try{
        let config = {
            serviceKey: process.env['SERVICE_KEY'] || 'abc-123',
            serviceName: process.env['SERVICE_NAME'] || 'KeepKey SDK Demo App',
            serviceImageUrl: process.env['SERVICE_IMAGE_URL'] || 'https://github.com/BitHighlander/keepkey-desktop/raw/master/electron/icon.png',
            spec
        }
        //init
        let kk = await new KeepKeyClient(config).init()

        let user = await kk.User()
        let ASSET = 'ETH'
        let assetBalance = user.data.balances.filter((e) => e.symbol === ASSET)[0]
        console.log(ASSET + " assetBalance: ",assetBalance.balance)


    }catch(e){
        console.error(e)
    }
}

run_test()