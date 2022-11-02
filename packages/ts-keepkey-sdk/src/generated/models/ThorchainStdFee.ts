/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.71
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
 * @interface ThorchainStdFee
 */
export interface ThorchainStdFee {
    /**
     * 
     * @type {Array<string>}
     * @memberof ThorchainStdFee
     */
    amount: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ThorchainStdFee
     */
    gas: string;
}

/**
 * Check if a given object implements the ThorchainStdFee interface.
 */
export function instanceOfThorchainStdFee(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "gas" in value;

    return isInstance;
}

export function ThorchainStdFeeFromJSON(json: any): ThorchainStdFee {
    return ThorchainStdFeeFromJSONTyped(json, false);
}

export function ThorchainStdFeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThorchainStdFee {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'gas': json['gas'],
    };
}

export function ThorchainStdFeeToJSON(value?: ThorchainStdFee | null): any {
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

