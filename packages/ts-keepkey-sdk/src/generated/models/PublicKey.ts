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
 * @interface PublicKey
 */
export interface PublicKey {
    /**
     * 
     * @type {string}
     * @memberof PublicKey
     */
    xpub: string;
}

/**
 * Check if a given object implements the PublicKey interface.
 */
export function instanceOfPublicKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "xpub" in value;

    return isInstance;
}

export function PublicKeyFromJSON(json: any): PublicKey {
    return PublicKeyFromJSONTyped(json, false);
}

export function PublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'xpub': json['xpub'],
    };
}

export function PublicKeyToJSON(value?: PublicKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'xpub': value.xpub,
    };
}

