/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.2.4
 * Contact: support@keepkey.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ThorchainMsg
 */
export interface ThorchainMsg {
    /**
     * 
     * @type {string}
     * @memberof ThorchainMsg
     */
    type: string;
    /**
     * 
     * @type {any}
     * @memberof ThorchainMsg
     */
    value: any | null;
}

/**
 * Check if a given object implements the ThorchainMsg interface.
 */
export function instanceOfThorchainMsg(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function ThorchainMsgFromJSON(json: any): ThorchainMsg {
    return ThorchainMsgFromJSONTyped(json, false);
}

export function ThorchainMsgFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThorchainMsg {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function ThorchainMsgToJSON(value?: ThorchainMsg | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

