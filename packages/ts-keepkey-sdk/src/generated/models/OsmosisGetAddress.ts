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
 * @interface OsmosisGetAddress
 */
export interface OsmosisGetAddress {
    /**
     * 
     * @type {Array<number>}
     * @memberof OsmosisGetAddress
     */
    addressNList: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof OsmosisGetAddress
     */
    showDisplay?: boolean;
}

/**
 * Check if a given object implements the OsmosisGetAddress interface.
 */
export function instanceOfOsmosisGetAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "addressNList" in value;

    return isInstance;
}

export function OsmosisGetAddressFromJSON(json: any): OsmosisGetAddress {
    return OsmosisGetAddressFromJSONTyped(json, false);
}

export function OsmosisGetAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): OsmosisGetAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressNList': json['addressNList'],
        'showDisplay': !exists(json, 'showDisplay') ? undefined : json['showDisplay'],
    };
}

export function OsmosisGetAddressToJSON(value?: OsmosisGetAddress | null): any {
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

