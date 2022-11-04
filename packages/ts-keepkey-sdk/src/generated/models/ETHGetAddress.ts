/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.85
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
 * @interface ETHGetAddress
 */
export interface ETHGetAddress {
    /**
     * 
     * @type {Array<number>}
     * @memberof ETHGetAddress
     */
    addressNList: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof ETHGetAddress
     */
    showDisplay?: boolean;
}

/**
 * Check if a given object implements the ETHGetAddress interface.
 */
export function instanceOfETHGetAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressNList" in value;

    return isInstance;
}

export function ETHGetAddressFromJSON(json: any): ETHGetAddress {
    return ETHGetAddressFromJSONTyped(json, false);
}

export function ETHGetAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ETHGetAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressNList': json['addressNList'],
        'showDisplay': !exists(json, 'showDisplay') ? undefined : json['showDisplay'],
    };
}

export function ETHGetAddressToJSON(value?: ETHGetAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressNList': value.addressNList,
        'showDisplay': value.showDisplay,
    };
}

