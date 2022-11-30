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
 * @interface WriteBody
 */
export interface WriteBody {
    /**
     * 
     * @type {any}
     * @memberof WriteBody
     */
    data: any | null;
}

/**
 * Check if a given object implements the WriteBody interface.
 */
export function instanceOfWriteBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function WriteBodyFromJSON(json: any): WriteBody {
    return WriteBodyFromJSONTyped(json, false);
}

export function WriteBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': json['data'],
    };
}

export function WriteBodyToJSON(value?: WriteBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
    };
}

