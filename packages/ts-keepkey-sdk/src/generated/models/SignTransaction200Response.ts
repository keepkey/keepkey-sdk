/* tslint:disable */
/* eslint-disable */
/**
 * keepkey-desktop
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.2.4
 * Contact: support@keepkey.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ModelError } from './ModelError';
import {
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import type { SignedTx } from './SignedTx';
import {
    SignedTxFromJSON,
    SignedTxFromJSONTyped,
    SignedTxToJSON,
} from './SignedTx';

/**
 * 
 * @export
 * @interface SignTransaction200Response
 */
export interface SignTransaction200Response {
    /**
     * 
     * @type {boolean}
     * @memberof SignTransaction200Response
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof SignTransaction200Response
     */
    status: string;
    /**
     * 
     * @type {any}
     * @memberof SignTransaction200Response
     */
    signedTx: any | null;
    /**
     * 
     * @type {string}
     * @memberof SignTransaction200Response
     */
    reason: string;
}

/**
 * Check if a given object implements the SignTransaction200Response interface.
 */
export function instanceOfSignTransaction200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "success" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "signedTx" in value;
    isInstance = isInstance && "reason" in value;

    return isInstance;
}

export function SignTransaction200ResponseFromJSON(json: any): SignTransaction200Response {
    return SignTransaction200ResponseFromJSONTyped(json, false);
}

export function SignTransaction200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignTransaction200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': json['success'],
        'status': json['status'],
        'signedTx': json['signedTx'],
        'reason': json['reason'],
    };
}

export function SignTransaction200ResponseToJSON(value?: SignTransaction200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'status': value.status,
        'signedTx': value.signedTx,
        'reason': value.reason,
    };
}

