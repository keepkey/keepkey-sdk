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
 * @interface GetPublicKeys200ResponseInner
 */
export interface GetPublicKeys200ResponseInner {
    /**
     * 
     * @type {string}
     * @memberof GetPublicKeys200ResponseInner
     */
    xpub: string;
}

/**
 * Check if a given object implements the GetPublicKeys200ResponseInner interface.
 */
export function instanceOfGetPublicKeys200ResponseInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "xpub" in value;

    return isInstance;
}

export function GetPublicKeys200ResponseInnerFromJSON(json: any): GetPublicKeys200ResponseInner {
    return GetPublicKeys200ResponseInnerFromJSONTyped(json, false);
}

export function GetPublicKeys200ResponseInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetPublicKeys200ResponseInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'xpub': json['xpub'],
    };
}

export function GetPublicKeys200ResponseInnerToJSON(value?: GetPublicKeys200ResponseInner | null): any {
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
