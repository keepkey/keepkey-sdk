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
 * @interface SendPassphrase
 */
export interface SendPassphrase {
    /**
     * 
     * @type {string}
     * @memberof SendPassphrase
     */
    passphrase: string;
}

/**
 * Check if a given object implements the SendPassphrase interface.
 */
export function instanceOfSendPassphrase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "passphrase" in value;

    return isInstance;
}

export function SendPassphraseFromJSON(json: any): SendPassphrase {
    return SendPassphraseFromJSONTyped(json, false);
}

export function SendPassphraseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendPassphrase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'passphrase': json['passphrase'],
    };
}

export function SendPassphraseToJSON(value?: SendPassphrase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'passphrase': value.passphrase,
    };
}

