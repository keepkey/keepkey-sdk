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
 * @interface StdFee
 */
export interface StdFee {
    /**
     * 
     * @type {Array<string>}
     * @memberof StdFee
     */
    amount: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof StdFee
     */
    gas: string;
}

/**
 * Check if a given object implements the StdFee interface.
 */
export function instanceOfStdFee(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "gas" in value;

    return isInstance;
}

export function StdFeeFromJSON(json: any): StdFee {
    return StdFeeFromJSONTyped(json, false);
}

export function StdFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StdFee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'gas': json['gas'],
    };
}

export function StdFeeToJSON(value?: StdFee | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'gas': value.gas,
    };
}

