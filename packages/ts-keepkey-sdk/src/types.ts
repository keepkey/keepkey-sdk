export interface KeepKeySDKConfig {
    baseApiURL?: string,
    serviceName: string,
    serviceImageUrl: string,
    serviceKey: string
}
export interface GenericSuccessResponse {
    success: true
}

export interface PubkeySuccessResponse<T> {
    success: true,
    pubkey: T
}

export interface SignSuccessResponse<T> {
    success: true,
    tx: T
}

export interface GenericErrorResponse {
    success: false
}

export interface ErrorResponse {
    success: false,
    error: string,
    code: number
}

export interface SignedTx {
    success: boolean,
    status: string,
    signedTx: any
}
