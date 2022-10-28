import axios from "axios";
import {
    ErrorResponse, GenericSuccessResponse, KeepKeySDKConfig, PubkeySuccessResponse, SignedTx, SignSuccessResponse
} from "./types";
import {
    GetPublicKey, BinanceSignTx, BinanceSignedTx, ETHSignTx, ETHSignedTx, EosToSignTx, EosTxSigned,
    RippleSignTx, RippleSignedTx, OsmosisSignTx, OsmosisSignedTx, ThorchainSignedTx, BinanceGetAddress,
    BTCGetAddress, BTCSignedTx, BTCSignTxKK, CosmosGetAddress, CosmosSignedTx, CosmosSignTx, ETHGetAddress,
    OsmosisGetAddress, PublicKey, ThorchainGetAddress, ThorchainSignTx
} from '@shapeshiftoss/hdwallet-core'

const axiosConfig = (key: string) => { return { headers: { Authorization: key } } }

export const KeepKeySDK = (config: KeepKeySDKConfig) => ({
    service: {
        pair: (): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/pair`,
                {
                    serviceName: config.serviceName,
                    serviceImageUrl: config.serviceImageUrl
                },
                axiosConfig(config.serviceKey)).then(() => {
                    resolve({ success: true })
                }).catch((err) => {
                    resolve({ success: false, error: 'App rejected pairing', code: err.response.status })
                })
        }),
        verifyAuth: (): Promise<GenericSuccessResponse | ErrorResponse> => new Promise((resolve, reject) => {
            axios.get(`${config.baseApiURL}/auth/verify`, axiosConfig(config.serviceKey)).then(() => {
                resolve({ success: true })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
    },
    pubkeys: {
        getPublicKeys: (pubkeys: GetPublicKey[]): Promise<PubkeySuccessResponse<Array<PublicKey>> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/getPublicKeys`, { ...pubkeys }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        btcGetAddress: (body: BTCGetAddress): Promise<PubkeySuccessResponse<string> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/btcGetAddress`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        ethGetAddress: (body: ETHGetAddress): Promise<PubkeySuccessResponse<string> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/ethGetAddress`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        thorchainGetAddress: (body: ThorchainGetAddress): Promise<PubkeySuccessResponse<string> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/thorchainGetAddress`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        osmosisGetAddress: (body: OsmosisGetAddress): Promise<PubkeySuccessResponse<string> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/osmosisGetAddress`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        binanceGetAddress: (body: BinanceGetAddress): Promise<PubkeySuccessResponse<Array<string>> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/binanceGetAddress`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        cosmosGetAddress: (body: CosmosGetAddress): Promise<PubkeySuccessResponse<Array<string>> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/cosmosGetAddress`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, pubkey: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
    },
    sign: {
        signTx: (body: any): Promise<SignSuccessResponse<SignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/sign`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        btcSignTx: (body: BTCSignTxKK): Promise<SignSuccessResponse<BTCSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/btcSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        thorchainSignTx: (body: ThorchainSignTx): Promise<SignSuccessResponse<ThorchainSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/thorchainSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        cosmosSignTx: (body: CosmosSignTx): Promise<SignSuccessResponse<CosmosSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/cosmosSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        osmosisSignTx: (body: OsmosisSignTx): Promise<SignSuccessResponse<OsmosisSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/osmosisSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        rippleSignTx: (body: RippleSignTx): Promise<SignSuccessResponse<RippleSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/rippleSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        binanceSignTx: (body: BinanceSignTx): Promise<SignSuccessResponse<BinanceSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/binanceSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        ethSignTx: (body: ETHSignTx): Promise<SignSuccessResponse<ETHSignedTx> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/ethSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        }),
        eosSignTx: (body: EosToSignTx): Promise<SignSuccessResponse<EosTxSigned> | ErrorResponse> => new Promise((resolve, reject) => {
            axios.post(`${config.baseApiURL}/eosSignTx`, { ...body }, axiosConfig(config.serviceKey)).then((resp) => {
                resolve({ success: true, tx: resp.data })
            }).catch((err) => {
                resolve({ success: false, error: err.response.data, code: err.response.status })
            })
        })
    }
})
