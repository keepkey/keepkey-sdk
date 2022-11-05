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
 * @interface Write
 */
export interface Write {
    /**
     * 
     * @type {string}
     * @memberof Write
     */
    output: string;
}

/**
 * Check if a given object implements the Write interface.
 */
export function instanceOfWrite(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "output" in value;

    return isInstance;
}

export function WriteFromJSON(json: any): Write {
    return WriteFromJSONTyped(json, false);
}

export function WriteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Write {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'output': json['output'],
    };
}

export function WriteToJSON(value?: Write | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'output': value.output,
    };
}
