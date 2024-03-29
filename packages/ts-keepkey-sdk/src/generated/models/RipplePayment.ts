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
 * @interface RipplePayment
 */
export interface RipplePayment {
    /**
     * 
     * @type {string}
     * @memberof RipplePayment
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof RipplePayment
     */
    destination: string;
    /**
     * 
     * @type {string}
     * @memberof RipplePayment
     */
    destinationTag?: string;
}

/**
 * Check if a given object implements the RipplePayment interface.
 */
export function instanceOfRipplePayment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "destination" in value;

    return isInstance;
}

export function RipplePaymentFromJSON(json: any): RipplePayment {
    return RipplePaymentFromJSONTyped(json, false);
}

export function RipplePaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): RipplePayment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'destination': json['destination'],
        'destinationTag': !exists(json, 'destinationTag') ? undefined : json['destinationTag'],
    };
}

export function RipplePaymentToJSON(value?: RipplePayment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'destination': value.destination,
        'destinationTag': value.destinationTag,
    };
}

