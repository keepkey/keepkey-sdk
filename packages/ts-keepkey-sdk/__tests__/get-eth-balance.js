require("dotenv").config({path:'../../../../.env'})
let kkApi = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function(){
    try{
        let config = {
            queryKey:process.env['SDK_KEY'] || 'abc-123',
            spec
        }
        //init
        let kk = new kkApi(spec,config)
        kk = await kk.init()

        let user = await kk.instance.User()
        let ASSET = 'ETH'
        let assetBalance = user.data.balances.filter((e) => e.symbol === ASSET)[0]
        console.log(ASSET + " assetBalance: ",assetBalance.balance)


    }catch(e){
        console.error(e)
    }
}

run_test()