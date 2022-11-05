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
 * @interface RippleGetAddress
 */
export interface RippleGetAddress {
    /**
     * 
     * @type {Array<number>}
     * @memberof RippleGetAddress
     */
    addressNList: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof RippleGetAddress
     */
    showDisplay?: boolean;
}

/**
 * Check if a given object implements the RippleGetAddress interface.
 */
export function instanceOfRippleGetAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressNList" in value;

    return isInstance;
}

export function RippleGetAddressFromJSON(json: any): RippleGetAddress {
    return RippleGetAddressFromJSONTyped(json, false);
}

export function RippleGetAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): RippleGetAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressNList': json['addressNList'],
        'showDisplay': !exists(json, 'showDisplay') ? undefined : json['showDisplay'],
    };
}

export function RippleGetAddressToJSON(value?: RippleGetAddress | null): any {
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

