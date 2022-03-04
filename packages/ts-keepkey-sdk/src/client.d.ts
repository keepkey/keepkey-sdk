import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface AuthFailedResponse {
            success: boolean;
            reason: string;
        }
        export interface AuthVerifyResponse {
            success: boolean;
        }
        export interface PairResponse {
            success: boolean;
            reason: string;
        }
        export interface Read {
            data: string;
        }
        export interface SignedTx {
            success: boolean;
            status: string;
            signedTx: any;
        }
        export interface Status {
            success: boolean;
            status: string;
            state: number; // double
        }
        export interface User {
            online: boolean;
            accounts: any;
            balances: any;
        }
        export interface Write {
            output: string;
        }
    }
}
declare namespace Paths {
    namespace Device {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace Health {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace Pair {
        export interface RequestBody {
        }
        namespace Responses {
            export type $200 = Components.Schemas.PairResponse;
            export type $401 = Components.Schemas.PairResponse;
        }
    }
    namespace ReadDevice {
        namespace Responses {
            export type $200 = Components.Schemas.Read;
        }
    }
    namespace SignTransaction {
        namespace Responses {
            export type $200 = Components.Schemas.SignedTx;
        }
    }
    namespace User {
        namespace Responses {
            export type $200 = Components.Schemas.User;
        }
    }
    namespace VerifyAuthentication {
        namespace Responses {
            export type $200 = Components.Schemas.AuthVerifyResponse;
            export type $401 = Components.Schemas.AuthFailedResponse;
        }
    }
    namespace WriteDevice {
        namespace Responses {
            export type $200 = Components.Schemas.Write;
        }
    }
}

export interface OperationMethods {
  /**
   * Health
   */
  'Health'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Health.Responses.$200>
  /**
   * Device
   */
  'Device'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Device.Responses.$200>
  /**
   * Pair
   */
  'Pair'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.Pair.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Pair.Responses.$200>
  /**
   * VerifyAuthentication
   */
  'VerifyAuthentication'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyAuthentication.Responses.$200>
  /**
   * User
   */
  'User'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.User.Responses.$200>
  /**
   * SignTransaction
   */
  'SignTransaction'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SignTransaction.Responses.$200>
  /**
   * ReadDevice
   */
  'ReadDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ReadDevice.Responses.$200>
  /**
   * WriteDevice
   */
  'WriteDevice'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WriteDevice.Responses.$200>
}

export interface PathsDictionary {
  ['/status']: {
    /**
     * Health
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Health.Responses.$200>
  }
  ['/device']: {
    /**
     * Device
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Device.Responses.$200>
  }
  ['/pair']: {
    /**
     * Pair
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.Pair.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Pair.Responses.$200>
  }
  ['/auth/verify']: {
    /**
     * VerifyAuthentication
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyAuthentication.Responses.$200>
  }
  ['/user']: {
    /**
     * User
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.User.Responses.$200>
  }
  ['/sign']: {
    /**
     * SignTransaction
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SignTransaction.Responses.$200>
  }
  ['/exchange/device']: {
    /**
     * ReadDevice
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ReadDevice.Responses.$200>
    /**
     * WriteDevice
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WriteDevice.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
