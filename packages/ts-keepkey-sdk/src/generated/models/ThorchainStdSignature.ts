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
import type { CryptoPubKey } from './CryptoPubKey';
import {
    CryptoPubKeyFromJSON,
    CryptoPubKeyFromJSONTyped,
    CryptoPubKeyToJSON,
} from './CryptoPubKey';

/**
 * 
 * @export
 * @interface ThorchainStdSignature
 */
export interface ThorchainStdSignature {
    /**
     * 
     * @type {CryptoPubKey}
     * @memberof ThorchainStdSignature
     */
    pubKey: CryptoPubKey;
    /**
     * 
     * @type {string}
     * @memberof ThorchainStdSignature
     */
    signature: string;
}

/**
 * Check if a given object implements the ThorchainStdSignature interface.
 */
export function instanceOfThorchainStdSignature(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pubKey" in value;
    isInstance = isInstance && "signature" in value;

    return isInstance;
}

export function ThorchainStdSignatureFromJSON(json: any): ThorchainStdSignature {
    return ThorchainStdSignatureFromJSONTyped(json, false);
}

export function ThorchainStdSignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThorchainStdSignature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pubKey': CryptoPubKeyFromJSON(json['pub_key']),
        'signature': json['signature'],
    };
}

export function ThorchainStdSignatureToJSON(value?: ThorchainStdSignature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pub_key': CryptoPubKeyToJSON(value.pubKey),
        'signature': value.signature,
    };
}

