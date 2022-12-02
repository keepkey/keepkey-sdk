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
 * @interface SendCharacterProto
 */
export interface SendCharacterProto {
    /**
     * 
     * @type {string}
     * @memberof SendCharacterProto
     */
    character: string;
    /**
     * 
     * @type {boolean}
     * @memberof SendCharacterProto
     */
    _delete: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SendCharacterProto
     */
    done: boolean;
}

/**
 * Check if a given object implements the SendCharacterProto interface.
 */
export function instanceOfSendCharacterProto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "character" in value;
    isInstance = isInstance && "_delete" in value;
    isInstance = isInstance && "done" in value;

    return isInstance;
}

export function SendCharacterProtoFromJSON(json: any): SendCharacterProto {
    return SendCharacterProtoFromJSONTyped(json, false);
}

export function SendCharacterProtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendCharacterProto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'character': json['character'],
        '_delete': json['_delete'],
        'done': json['_done'],
    };
}

export function SendCharacterProtoToJSON(value?: SendCharacterProto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'character': value.character,
        '_delete': value._delete,
        '_done': value.done,
    };
}
