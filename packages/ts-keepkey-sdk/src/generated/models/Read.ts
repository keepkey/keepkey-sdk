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
 * @interface Read
 */
export interface Read {
    /**
     * 
     * @type {string}
     * @memberof Read
     */
    data: string;
}

/**
 * Check if a given object implements the Read interface.
 */
export function instanceOfRead(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function ReadFromJSON(json: any): Read {
    return ReadFromJSONTyped(json, false);
}

export function ReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): Read {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': json['data'],
    };
}

export function ReadToJSON(value?: Read | null): any {
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

