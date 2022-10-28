import { KeepKeySDK } from './sdk'
import { KeepKeySDKConfig } from './types'

export const getKeepKeySDK = async (config: KeepKeySDKConfig): Promise<ReturnType<typeof KeepKeySDK>> => {
    const sdk = KeepKeySDK({ baseApiURL: config.baseApiURL ?? 'http://localhost:1646', ...config })

    const verifyAuthResp = await sdk.service.verifyAuth()
    if (verifyAuthResp.success) return sdk;

    await sdk.service.pair()

    return sdk;
}