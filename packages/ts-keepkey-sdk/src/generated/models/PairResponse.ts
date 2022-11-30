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
 * @interface PairResponse
 */
export interface PairResponse {
    /**
     * 
     * @type {boolean}
     * @memberof PairResponse
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof PairResponse
     */
    reason: string;
}

/**
 * Check if a given object implements the PairResponse interface.
 */
export function instanceOfPairResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;
    isInstance = isInstance && "reason" in value;

    return isInstance;
}

export function PairResponseFromJSON(json: any): PairResponse {
    return PairResponseFromJSONTyped(json, false);
}

export function PairResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PairResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'reason': json['reason'],
    };
}

export function PairResponseToJSON(value?: PairResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'reason': value.reason,
    };
}

