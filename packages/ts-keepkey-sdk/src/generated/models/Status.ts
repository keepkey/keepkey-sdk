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
 * @interface Status
 */
export interface Status {
    /**
     * 
     * @type {boolean}
     * @memberof Status
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof Status
     */
    status: string;
    /**
     * 
     * @type {number}
     * @memberof Status
     */
    state: number;
}

/**
 * Check if a given object implements the Status interface.
 */
export function instanceOfStatus(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "state" in value;

    return isInstance;
}

export function StatusFromJSON(json: any): Status {
    return StatusFromJSONTyped(json, false);
}

export function StatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): Status {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'status': json['status'],
        'state': json['state'],
    };
}

export function StatusToJSON(value?: Status | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'status': value.status,
        'state': value.state,
    };
}

