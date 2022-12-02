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
 * @interface ETHSignedTx
 */
export interface ETHSignedTx {
    /**
     * uint32
     * @type {number}
     * @memberof ETHSignedTx
     */
    v: number;
    /**
     * big-endian hex, prefixed with '0x'
     * @type {string}
     * @memberof ETHSignedTx
     */
    r: string;
    /**
     * big-endian hex, prefixed with '0x'
     * @type {string}
     * @memberof ETHSignedTx
     */
    s: string;
    /**
     * big-endian hex, prefixed with '0x'
     * @type {string}
     * @memberof ETHSignedTx
     */
    serialized: string;
}

/**
 * Check if a given object implements the ETHSignedTx interface.
 */
export function instanceOfETHSignedTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "v" in value;
    isInstance = isInstance && "r" in value;
    isInstance = isInstance && "s" in value;
    isInstance = isInstance && "serialized" in value;

    return isInstance;
}

export function ETHSignedTxFromJSON(json: any): ETHSignedTx {
    return ETHSignedTxFromJSONTyped(json, false);
}

export function ETHSignedTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETHSignedTx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'v': json['v'],
        'r': json['r'],
        's': json['s'],
        'serialized': json['serialized'],
    };
}

export function ETHSignedTxToJSON(value?: ETHSignedTx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'v': value.v,
        'r': value.r,
        's': value.s,
        'serialized': value.serialized,
    };
}

