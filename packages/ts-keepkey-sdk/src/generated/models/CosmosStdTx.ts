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
import type { Msg } from './Msg';
import {
    MsgFromJSON,
    MsgFromJSONTyped,
    MsgToJSON,
} from './Msg';
import type { StdFee } from './StdFee';
import {
    StdFeeFromJSON,
    StdFeeFromJSONTyped,
    StdFeeToJSON,
} from './StdFee';
import type { StdSignature } from './StdSignature';
import {
    StdSignatureFromJSON,
    StdSignatureFromJSONTyped,
    StdSignatureToJSON,
} from './StdSignature';

/**
 * 
 * @export
 * @interface CosmosStdTx
 */
export interface CosmosStdTx {
    /**
     * 
     * @type {Array<Msg>}
     * @memberof CosmosStdTx
     */
    msg: Array<Msg>;
    /**
     * 
     * @type {StdFee}
     * @memberof CosmosStdTx
     */
    fee: StdFee;
    /**
     * 
     * @type {Array<StdSignature>}
     * @memberof CosmosStdTx
     */
    signatures: Array<StdSignature>;
    /**
     * 
     * @type {string}
     * @memberof CosmosStdTx
     */
    memo?: string;
}

/**
 * Check if a given object implements the CosmosStdTx interface.
 */
export function instanceOfCosmosStdTx(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "msg" in value;
    isInstance = isInstance && "fee" in value;
    isInstance = isInstance && "signatures" in value;

    return isInstance;
}

export function CosmosStdTxFromJSON(json: any): CosmosStdTx {
    return CosmosStdTxFromJSONTyped(json, false);
}

export function CosmosStdTxFromJSONTyped(json: any, ignoreDiscriminator: boolean): CosmosStdTx {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'msg': ((json['msg'] as Array<any>).map(MsgFromJSON)),
        'fee': StdFeeFromJSON(json['fee']),
        'signatures': ((json['signatures'] as Array<any>).map(StdSignatureFromJSON)),
        'memo': !exists(json, 'memo') ? undefined : json['memo'],
    };
}

export function CosmosStdTxToJSON(value?: CosmosStdTx | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'msg': ((value.msg as Array<any>).map(MsgToJSON)),
        'fee': StdFeeToJSON(value.fee),
        'signatures': ((value.signatures as Array<any>).map(StdSignatureToJSON)),
        'memo': value.memo,
    };
}

