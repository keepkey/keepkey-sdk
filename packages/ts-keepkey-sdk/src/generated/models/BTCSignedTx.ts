/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: bithighlander@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BTCSignedTx
 */
export interface BTCSignedTx {
    /**
     * 
     * @type {Array<string>}
     * @memberof BTCSignedTx
     */
    signatures: Array<string>;
    /**
     * hex string representation of the raw, signed transaction
     * @type {string}
     * @memberof BTCSignedTx
     */
    serializedTx: string;
}

/**
 * Check if a given object implements the BTCSignedTx interface.
 */
export function instanceOfBTCSignedTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signatures" in value;
    isInstance = isInstance && "serializedTx" in value;

    return isInstance;
}

export function BTCSignedTxFromJSON(json: any): BTCSignedTx {
    return BTCSignedTxFromJSONTyped(json, false);
}

export function BTCSignedTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCSignedTx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signatures': json['signatures'],
        'serializedTx': json['serializedTx'],
    };
}

export function BTCSignedTxToJSON(value?: BTCSignedTx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signatures': value.signatures,
        'serializedTx': value.serializedTx,
    };
}

