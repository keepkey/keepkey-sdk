/*
       KeepKey Bridge SDK

       For connecting to the keepkey client

 */
const TAG = " | keepkey-client-ts | "
const log = require("@pioneer-platform/loggerdog")()

//bridge follows OpenAPI spec
import KeepKey from 'openapi-client-axios'
import { KeepKeyConfig } from './types';

export class Wallet {
    private spec: string;
    private config: KeepKeyConfig;

    constructor(config: KeepKeyConfig) {
        this.spec = config.spec || 'http://localhost:1646/spec/swagger.json'
        this.config = config
    }

    async init() {
        let tag = TAG + " | init_wallet | "
        try {
            if (!this.config.serviceKey) throw Error(" You must create an api key! ")
            const kkApi = new KeepKey({
                definition: this.spec,
                axiosConfigDefaults: {
                    headers: {
                        'Authorization': this.config.serviceKey,
                    },
                }
            });
            await kkApi.init()
            console.log(kkApi.instance)
            return kkApi
        } catch (e) {
            log.error(tag, e)
            throw e
        }
    }
}

export default Wallet
