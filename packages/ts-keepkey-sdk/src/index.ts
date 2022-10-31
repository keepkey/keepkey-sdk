import { ClientEndpointsApi, RecoveryEndpointsApi, DeveloperEndpointsApi, DeviceInfoEndpointsApi, KeepKeySignTxEndpointsApi, KeepKeyWalletEndpointsApi, RawKeepKeyDeviceI0EndpointsApi } from './generated'
import { KeepKeySDKConfig } from './types'

export const getKeepKeySDK = async (config: KeepKeySDKConfig) => {
    const baseConfig = {
        apiKey: config.serviceKey,
        isJsonMime(mime: string): boolean {
            const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    }

    const sdk = {
        config,
        client: new ClientEndpointsApi(baseConfig),
        recovery: new RecoveryEndpointsApi(baseConfig),
        developer: new DeveloperEndpointsApi(baseConfig),
        deviceInfo: new DeviceInfoEndpointsApi(baseConfig),
        sign: new KeepKeySignTxEndpointsApi(baseConfig),
        wallet: new KeepKeyWalletEndpointsApi(baseConfig),
        rawDevice: new RawKeepKeyDeviceI0EndpointsApi(baseConfig)
    }

    const verifyAuthResp = await sdk.client.verifyAuth().catch(async (e) => {
        await sdk.client.pair({ authorization: config.serviceKey, pairBody: { ...config } })
    })

    if (verifyAuthResp && verifyAuthResp.data.success) return sdk;

    await sdk.client.pair({ authorization: config.serviceKey, pairBody: { ...config } })

    return sdk;
}