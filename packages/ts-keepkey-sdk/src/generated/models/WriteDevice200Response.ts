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
 * @interface WriteDevice200Response
 */
export interface WriteDevice200Response {
    /**
     * 
     * @type {string}
     * @memberof WriteDevice200Response
     */
    output: string;
}

/**
 * Check if a given object implements the WriteDevice200Response interface.
 */
export function instanceOfWriteDevice200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "output" in value;

    return isInstance;
}

export function WriteDevice200ResponseFromJSON(json: any): WriteDevice200Response {
    return WriteDevice200ResponseFromJSONTyped(json, false);
}

export function WriteDevice200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WriteDevice200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'output': json['output'],
    };
}

export function WriteDevice200ResponseToJSON(value?: WriteDevice200Response | null): any {
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

