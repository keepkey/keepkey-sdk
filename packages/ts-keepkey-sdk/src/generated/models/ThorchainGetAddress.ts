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
 * @interface ThorchainGetAddress
 */
export interface ThorchainGetAddress {
    /**
     * 
     * @type {Array<number>}
     * @memberof ThorchainGetAddress
     */
    addressNList: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof ThorchainGetAddress
     */
    showDisplay?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ThorchainGetAddress
     */
    testnet?: boolean;
}

/**
 * Check if a given object implements the ThorchainGetAddress interface.
 */
export function instanceOfThorchainGetAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressNList" in value;

    return isInstance;
}

export function ThorchainGetAddressFromJSON(json: any): ThorchainGetAddress {
    return ThorchainGetAddressFromJSONTyped(json, false);
}

export function ThorchainGetAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThorchainGetAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressNList': json['addressNList'],
        'showDisplay': !exists(json, 'showDisplay') ? undefined : json['showDisplay'],
        'testnet': !exists(json, 'testnet') ? undefined : json['testnet'],
    };
}

export function ThorchainGetAddressToJSON(value?: ThorchainGetAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressNList': value.addressNList,
        'showDisplay': value.showDisplay,
        'testnet': value.testnet,
    };
}

