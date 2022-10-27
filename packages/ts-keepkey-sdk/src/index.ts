/*
       KeepKey Bridge SDK

       For connecting to the keepkey client

 */
const TAG = " | keepkey-client-ts | "

//bridge follows OpenAPI spec
import KeepKey, { AxiosError } from 'openapi-client-axios'
import { KeepKeyConfig } from './types';
import { Client as KeepKeyClientTypes } from './client';

export class KeepKeyClient {
    private spec: string;
    private config: KeepKeyConfig;

    constructor(config: KeepKeyConfig) {
        this.spec = config.spec || 'http://localhost:1646/spec/swagger.json'
        this.config = config
    }

    async init(): Promise<KeepKeyClientTypes> {
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
            const client = await kkApi.getClient<KeepKeyClientTypes>()
            try {
                await client.VerifyAuth()
            } catch (err) {
                let e = err as AxiosError
                if (e.response && e.response.status == 401) {
                    await client.Pair(null, { serviceName: this.config.serviceName, serviceImageUrl: this.config.serviceImageUrl })
                }
            }
            return client
        } catch (e) {
            console.error(tag, e)
            throw e
        }
    }
}

export default KeepKeyClient
