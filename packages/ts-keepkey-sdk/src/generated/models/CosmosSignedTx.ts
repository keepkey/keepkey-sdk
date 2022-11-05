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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CosmosSignedTx
 */
export interface CosmosSignedTx {
    /**
     * 
     * @type {string}
     * @memberof CosmosSignedTx
     */
    serialized: string;
    /**
     * 
     * @type {string}
     * @memberof CosmosSignedTx
     */
    body: string;
    /**
     * 
     * @type {string}
     * @memberof CosmosSignedTx
     */
    authInfoBytes: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CosmosSignedTx
     */
    signatures: Array<string>;
}

/**
 * Check if a given object implements the CosmosSignedTx interface.
 */
export function instanceOfCosmosSignedTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "serialized" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "authInfoBytes" in value;
    isInstance = isInstance && "signatures" in value;

    return isInstance;
}

export function CosmosSignedTxFromJSON(json: any): CosmosSignedTx {
    return CosmosSignedTxFromJSONTyped(json, false);
}

export function CosmosSignedTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosSignedTx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serialized': json['serialized'],
        'body': json['body'],
        'authInfoBytes': json['authInfoBytes'],
        'signatures': json['signatures'],
    };
}

export function CosmosSignedTxToJSON(value?: CosmosSignedTx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'serialized': value.serialized,
        'body': value.body,
        'authInfoBytes': value.authInfoBytes,
        'signatures': value.signatures,
    };
}

