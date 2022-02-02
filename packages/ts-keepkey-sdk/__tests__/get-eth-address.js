
let kkApi = require("../lib")

let spec = 'http://localhost:1646/spec/swagger.json'

let run_test = async function(){
    try{
        let config = {
            queryKey:'sdk:2d0ec79c-6733-4235-9b09-9b87171edc16',
            spec
        }

        //get config
        let kk = new kkApi(spec,config)
        kk = await kk.init()

        // console.log("kk.instance: ",kk.instance)
        let user = await kk.instance.User()
        console.log("user.data: ",user.data)

    }catch(e){
        console.error(e)
    }
}

run_test()