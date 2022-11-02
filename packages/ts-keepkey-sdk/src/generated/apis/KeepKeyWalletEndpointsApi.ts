/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.71
 * Contact: bithighlander@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BTCGetAddress,
  BinanceGetAddress,
  CosmosGetAddress,
  ETHGetAddress,
  EosGetPublicKey,
  GetPublicKey,
  GetPublicKeys200ResponseInner,
  OsmosisGetAddress,
  RippleGetAddress,
  ThorchainGetAddress,
} from '../models';
import {
    BTCGetAddressFromJSON,
    BTCGetAddressToJSON,
    BinanceGetAddressFromJSON,
    BinanceGetAddressToJSON,
    CosmosGetAddressFromJSON,
    CosmosGetAddressToJSON,
    ETHGetAddressFromJSON,
    ETHGetAddressToJSON,
    EosGetPublicKeyFromJSON,
    EosGetPublicKeyToJSON,
    GetPublicKeyFromJSON,
    GetPublicKeyToJSON,
    GetPublicKeys200ResponseInnerFromJSON,
    GetPublicKeys200ResponseInnerToJSON,
    OsmosisGetAddressFromJSON,
    OsmosisGetAddressToJSON,
    RippleGetAddressFromJSON,
    RippleGetAddressToJSON,
    ThorchainGetAddressFromJSON,
    ThorchainGetAddressToJSON,
} from '../models';

export interface BinanceGetAddressRequest {
    binanceGetAddress: BinanceGetAddress;
}

export interface BtcGetAddressRequest {
    bTCGetAddress: BTCGetAddress;
}

export interface CosmosGetAddressRequest {
    cosmosGetAddress: CosmosGetAddress;
}

export interface EosGetPublicKeyRequest {
    eosGetPublicKey: EosGetPublicKey;
}

export interface EthGetAddressRequest {
    eTHGetAddress: ETHGetAddress;
}

export interface GetPublicKeysRequest {
    getPublicKey: Array<GetPublicKey>;
}

export interface OsmosisGetAddressRequest {
    osmosisGetAddress: OsmosisGetAddress;
}

export interface RippleGetAddressRequest {
    rippleGetAddress: RippleGetAddress;
}

export interface ThorchainGetAddressRequest {
    thorchainGetAddress: ThorchainGetAddress;
}

/**
 * 
 */
export class KeepKeyWalletEndpointsApi extends runtime.BaseAPI {

    /**
     */
    async binanceGetAddressRaw(requestParameters: BinanceGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.binanceGetAddress === null || requestParameters.binanceGetAddress === undefined) {
            throw new runtime.RequiredError('binanceGetAddress','Required parameter requestParameters.binanceGetAddress was null or undefined when calling binanceGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/binanceGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BinanceGetAddressToJSON(requestParameters.binanceGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async binanceGetAddress(requestParameters: BinanceGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.binanceGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async btcGetAddressRaw(requestParameters: BtcGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.bTCGetAddress === null || requestParameters.bTCGetAddress === undefined) {
            throw new runtime.RequiredError('bTCGetAddress','Required parameter requestParameters.bTCGetAddress was null or undefined when calling btcGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/btcGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BTCGetAddressToJSON(requestParameters.bTCGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async btcGetAddress(requestParameters: BtcGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.btcGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async cosmosGetAddressRaw(requestParameters: CosmosGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.cosmosGetAddress === null || requestParameters.cosmosGetAddress === undefined) {
            throw new runtime.RequiredError('cosmosGetAddress','Required parameter requestParameters.cosmosGetAddress was null or undefined when calling cosmosGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/cosmosGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CosmosGetAddressToJSON(requestParameters.cosmosGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async cosmosGetAddress(requestParameters: CosmosGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.cosmosGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async eosGetPublicKeyRaw(requestParameters: EosGetPublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.eosGetPublicKey === null || requestParameters.eosGetPublicKey === undefined) {
            throw new runtime.RequiredError('eosGetPublicKey','Required parameter requestParameters.eosGetPublicKey was null or undefined when calling eosGetPublicKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/eosGetPublicKey`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EosGetPublicKeyToJSON(requestParameters.eosGetPublicKey),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async eosGetPublicKey(requestParameters: EosGetPublicKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.eosGetPublicKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ethGetAddressRaw(requestParameters: EthGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.eTHGetAddress === null || requestParameters.eTHGetAddress === undefined) {
            throw new runtime.RequiredError('eTHGetAddress','Required parameter requestParameters.eTHGetAddress was null or undefined when calling ethGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/ethGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ETHGetAddressToJSON(requestParameters.eTHGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async ethGetAddress(requestParameters: EthGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.ethGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getPublicKeysRaw(requestParameters: GetPublicKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetPublicKeys200ResponseInner>>> {
        if (requestParameters.getPublicKey === null || requestParameters.getPublicKey === undefined) {
            throw new runtime.RequiredError('getPublicKey','Required parameter requestParameters.getPublicKey was null or undefined when calling getPublicKeys.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/getPublicKeys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.getPublicKey.map(GetPublicKeyToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetPublicKeys200ResponseInnerFromJSON));
    }

    /**
     */
    async getPublicKeys(requestParameters: GetPublicKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetPublicKeys200ResponseInner>> {
        const response = await this.getPublicKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async osmosisGetAddressRaw(requestParameters: OsmosisGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.osmosisGetAddress === null || requestParameters.osmosisGetAddress === undefined) {
            throw new runtime.RequiredError('osmosisGetAddress','Required parameter requestParameters.osmosisGetAddress was null or undefined when calling osmosisGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/osmosisGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OsmosisGetAddressToJSON(requestParameters.osmosisGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async osmosisGetAddress(requestParameters: OsmosisGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.osmosisGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async rippleGetAddressRaw(requestParameters: RippleGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.rippleGetAddress === null || requestParameters.rippleGetAddress === undefined) {
            throw new runtime.RequiredError('rippleGetAddress','Required parameter requestParameters.rippleGetAddress was null or undefined when calling rippleGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/rippleGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RippleGetAddressToJSON(requestParameters.rippleGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async rippleGetAddress(requestParameters: RippleGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.rippleGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async thorchainGetAddressRaw(requestParameters: ThorchainGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.thorchainGetAddress === null || requestParameters.thorchainGetAddress === undefined) {
            throw new runtime.RequiredError('thorchainGetAddress','Required parameter requestParameters.thorchainGetAddress was null or undefined when calling thorchainGetAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/thorchainGetAddress`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ThorchainGetAddressToJSON(requestParameters.thorchainGetAddress),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async thorchainGetAddress(requestParameters: ThorchainGetAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.thorchainGetAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
