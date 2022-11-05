/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.79
 * Contact: bithighlander@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ETHSignedTx,
  RecoverDevice,
} from '../models';
import {
    ETHSignedTxFromJSON,
    ETHSignedTxToJSON,
    RecoverDeviceFromJSON,
    RecoverDeviceToJSON,
} from '../models';

export interface ChangePinRequest {
    body: any | null;
}

export interface RecoverRequest {
    recoverDevice: RecoverDevice;
}

export interface SendCharacterRequest {
    body: string;
}

export interface SendCharacterDeleteRequest {
    body: any | null;
}

export interface SendCharacterDoneRequest {
    body: any | null;
}

export interface SendWordRequest {
    body: string;
}

/**
 * 
 */
export class RecoveryEndpointsApi extends runtime.BaseAPI {

    /**
     */
    async changePinRaw(requestParameters: ChangePinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ETHSignedTx>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling changePin.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/changePin`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ETHSignedTxFromJSON(jsonValue));
    }

    /**
     */
    async changePin(requestParameters: ChangePinRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ETHSignedTx> {
        const response = await this.changePinRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async recoverRaw(requestParameters: RecoverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ETHSignedTx>> {
        if (requestParameters.recoverDevice === null || requestParameters.recoverDevice === undefined) {
            throw new runtime.RequiredError('recoverDevice','Required parameter requestParameters.recoverDevice was null or undefined when calling recover.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/recover`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RecoverDeviceToJSON(requestParameters.recoverDevice),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ETHSignedTxFromJSON(jsonValue));
    }

    /**
     */
    async recover(requestParameters: RecoverRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ETHSignedTx> {
        const response = await this.recoverRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async sendCharacterRaw(requestParameters: SendCharacterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ETHSignedTx>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling sendCharacter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/sendCharacter`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ETHSignedTxFromJSON(jsonValue));
    }

    /**
     */
    async sendCharacter(requestParameters: SendCharacterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ETHSignedTx> {
        const response = await this.sendCharacterRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async sendCharacterDeleteRaw(requestParameters: SendCharacterDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ETHSignedTx>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling sendCharacterDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/sendCharacterDelete`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ETHSignedTxFromJSON(jsonValue));
    }

    /**
     */
    async sendCharacterDelete(requestParameters: SendCharacterDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ETHSignedTx> {
        const response = await this.sendCharacterDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async sendCharacterDoneRaw(requestParameters: SendCharacterDoneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ETHSignedTx>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling sendCharacterDone.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/sendCharacterDone`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ETHSignedTxFromJSON(jsonValue));
    }

    /**
     */
    async sendCharacterDone(requestParameters: SendCharacterDoneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ETHSignedTx> {
        const response = await this.sendCharacterDoneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async sendWordRaw(requestParameters: SendWordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ETHSignedTx>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling sendWord.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["authorization"] = this.configuration.apiKey("authorization"); // api_key authentication
        }

        const response = await this.request({
            path: `/sendWord`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ETHSignedTxFromJSON(jsonValue));
    }

    /**
     */
    async sendWord(requestParameters: SendWordRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ETHSignedTx> {
        const response = await this.sendWordRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
