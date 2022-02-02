/*
       KeepKey Bridge SDK

       For connecting to the keepkey client

 */
const TAG = " | keepkey-client-ts | "
const log = require("@pioneer-platform/loggerdog")()

//bridge follows OpenAPI spec
const KeepKey = require('openapi-client-axios').default;
let kkApi:any

module.exports = class wallet {
    private init: (spec: string, config: any) => Promise<any>;
    private spec: string;
    private queryKey: any;
    constructor(spec:string,config:any) {
        this.spec = spec || 'http://localhost:1646/spec/swagger.json'
        this.queryKey = config.queryKey
        this.init = async function () {
            let tag = TAG + " | init_wallet | "
            try{
                if(!this.queryKey) throw Error(" You must create an api key! ")
                kkApi = new KeepKey({
                    definition:spec,
                    axiosConfigDefaults: {
                        headers: {
                            'Authorization': this.queryKey,
                        },
                    }
                });
                await kkApi.init()
                return kkApi
            }catch(e){
                log.error(tag,e)
                throw e
            }
        }
    }
}


