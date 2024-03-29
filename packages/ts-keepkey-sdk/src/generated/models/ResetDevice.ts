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
 * @interface ResetDevice
 */
export interface ResetDevice {
    /**
     * Bits. Either 128 (12 words), 192 (18 words), or 256 (24 words)
     * @type {number}
     * @memberof ResetDevice
     */
    entropy?: ResetDeviceEntropyEnum;
    /**
     * 
     * @type {string}
     * @memberof ResetDevice
     */
    label: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResetDevice
     */
    passphrase?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResetDevice
     */
    pin?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ResetDevice
     */
    autoLockDelayMs?: number;
    /**
     * 
     * @type {number}
     * @memberof ResetDevice
     */
    u2fCounter?: number;
}


/**
 * @export
 */
export const ResetDeviceEntropyEnum = {
    NUMBER_128: 128,
    NUMBER_192: 192,
    NUMBER_256: 256
} as const;
export type ResetDeviceEntropyEnum = typeof ResetDeviceEntropyEnum[keyof typeof ResetDeviceEntropyEnum];


/**
 * Check if a given object implements the ResetDevice interface.
 */
export function instanceOfResetDevice(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;

    return isInstance;
}

export function ResetDeviceFromJSON(json: any): ResetDevice {
    return ResetDeviceFromJSONTyped(json, false);
}

export function ResetDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResetDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entropy': !exists(json, 'entropy') ? undefined : json['entropy'],
        'label': json['label'],
        'passphrase': !exists(json, 'passphrase') ? undefined : json['passphrase'],
        'pin': !exists(json, 'pin') ? undefined : json['pin'],
        'autoLockDelayMs': !exists(json, 'autoLockDelayMs') ? undefined : json['autoLockDelayMs'],
        'u2fCounter': !exists(json, 'u2fCounter') ? undefined : json['u2fCounter'],
    };
}

export function ResetDeviceToJSON(value?: ResetDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entropy': value.entropy,
        'label': value.label,
        'passphrase': value.passphrase,
        'pin': value.pin,
        'autoLockDelayMs': value.autoLockDelayMs,
        'u2fCounter': value.u2fCounter,
    };
}

