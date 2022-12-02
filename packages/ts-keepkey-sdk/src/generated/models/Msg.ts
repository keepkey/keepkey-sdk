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
/**
 * 
 * @export
 * @interface Msg
 */
export interface Msg {
    /**
     * 
     * @type {string}
     * @memberof Msg
     */
    type: string;
    /**
     * 
     * @type {any}
     * @memberof Msg
     */
    value: any | null;
}

/**
 * Check if a given object implements the Msg interface.
 */
export function instanceOfMsg(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function MsgFromJSON(json: any): Msg {
    return MsgFromJSONTyped(json, false);
}

export function MsgFromJSONTyped(json: any, ignoreDiscriminator: boolean): Msg {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'value': json['value'],
    };
}

export function MsgToJSON(value?: Msg | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

