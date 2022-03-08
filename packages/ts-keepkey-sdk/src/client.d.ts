import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios'; 

declare namespace Components {
    namespace Schemas {
        export interface Error {
            success: boolean;
            reason: string;
        }
        export interface GenericResponse {
            success: boolean;
        }
        export interface PairBody {
            serviceName: string;
            serviceImageUrl: string;
        }
        export interface PairResponse {
            success: boolean;
            reason: string;
        }
        export interface Read {
            data: string;
        }
        /**
         * Construct a type with a set of properties K of type T
         */
        export interface RecordStringUnknown {
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
        export interface UserType {
            balances: any[];
            accounts: {
                caip: string;
                pubkey: any;
            }[];
            online: boolean;
        }
        export interface Write {
            output: string;
        }
        export interface WriteBody {
            data: any;
        }
    }
}
declare namespace Paths {
    namespace BinanceGetAddress {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace BtcGetAddress {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace BtcSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace CosmosGetAddress {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace CosmosSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace Device {
        namespace Responses {
            export type $200 = /* Construct a type with a set of properties K of type T */ Components.Schemas.RecordStringUnknown;
        }
    }
    namespace EthGetAddress {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace EthSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace GetPublicKeys {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace OsmosisGetAddress {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace OsmosisSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace Pair {
        export interface HeaderParameters {
            authorization: Parameters.Authorization;
        }
        namespace Parameters {
            export type Authorization = string;
        }
        export type RequestBody = Components.Schemas.PairBody;
        namespace Responses {
            export type $200 = Components.Schemas.PairResponse;
            export interface $500 {
            }
        }
    }
    namespace ReadDevice {
        namespace Responses {
            export type $200 = Components.Schemas.Read | Components.Schemas.Error;
            export interface $500 {
            }
        }
    }
    namespace SignTransaction {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = Components.Schemas.SignedTx;
            export interface $500 {
            }
        }
    }
    namespace Status {
        namespace Responses {
            export type $200 = Components.Schemas.Status;
        }
    }
    namespace ThorchainGetAddress {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace ThorchainSignTx {
        export type RequestBody = any;
        namespace Responses {
            export type $200 = any;
            export interface $500 {
            }
        }
    }
    namespace User {
        namespace Responses {
            export type $200 = Components.Schemas.UserType;
            export interface $401 {
            }
        }
    }
    namespace VerifyAuth {
        namespace Responses {
            export type $200 = Components.Schemas.GenericResponse;
            export interface $401 {
            }
        }
    }
    namespace WriteDevice {
        export type RequestBody = Components.Schemas.WriteBody;
        namespace Responses {
            export type $200 = Components.Schemas.Write | Components.Schemas.Error;
            export interface $500 {
            }
        }
    }
}

export interface OperationMethods {
  /**
   * VerifyAuth
   */
  'VerifyAuth'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.VerifyAuth.Responses.$200>
  /**
   * User
   */
  'User'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.User.Responses.$200>
  /**
   * GetPublicKeys
   */
  'GetPublicKeys'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.GetPublicKeys.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPublicKeys.Responses.$200>
  /**
   * BtcGetAddress
   */
  'BtcGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BtcGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BtcGetAddress.Responses.$200>
  /**
   * EthGetAddress
   */
  'EthGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EthGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EthGetAddress.Responses.$200>
  /**
   * ThorchainGetAddress
   */
  'ThorchainGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ThorchainGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThorchainGetAddress.Responses.$200>
  /**
   * OsmosisGetAddress
   */
  'OsmosisGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.OsmosisGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OsmosisGetAddress.Responses.$200>
  /**
   * BinanceGetAddress
   */
  'BinanceGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BinanceGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BinanceGetAddress.Responses.$200>
  /**
   * CosmosGetAddress
   */
  'CosmosGetAddress'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CosmosGetAddress.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CosmosGetAddress.Responses.$200>
  /**
   * BtcSignTx
   */
  'BtcSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.BtcSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.BtcSignTx.Responses.$200>
  /**
   * ThorchainSignTx
   */
  'ThorchainSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.ThorchainSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ThorchainSignTx.Responses.$200>
  /**
   * CosmosSignTx
   */
  'CosmosSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CosmosSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CosmosSignTx.Responses.$200>
  /**
   * OsmosisSignTx
   */
  'OsmosisSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.OsmosisSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.OsmosisSignTx.Responses.$200>
  /**
   * EthSignTx
   */
  'EthSignTx'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.EthSignTx.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.EthSignTx.Responses.$200>
  /**
   * SignTransaction
   */
  'SignTransaction'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SignTransaction.RequestBody,
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
    data?: Paths.WriteDevice.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.WriteDevice.Responses.$200>
  /**
   * Status
   */
  'Status'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Status.Responses.$200>
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
    parameters?: Parameters<Paths.Pair.HeaderParameters> | null,
    data?: Paths.Pair.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.Pair.Responses.$200>
}

export interface PathsDictionary {
  ['/auth/verify']: {
    /**
     * VerifyAuth
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.VerifyAuth.Responses.$200>
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
  ['/getPublicKeys']: {
    /**
     * GetPublicKeys
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.GetPublicKeys.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPublicKeys.Responses.$200>
  }
  ['/btcGetAddress']: {
    /**
     * BtcGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BtcGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BtcGetAddress.Responses.$200>
  }
  ['/ethGetAddress']: {
    /**
     * EthGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EthGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EthGetAddress.Responses.$200>
  }
  ['/thorchainGetAddress']: {
    /**
     * ThorchainGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ThorchainGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThorchainGetAddress.Responses.$200>
  }
  ['/osmosisGetAddress']: {
    /**
     * OsmosisGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.OsmosisGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OsmosisGetAddress.Responses.$200>
  }
  ['/binanceGetAddress']: {
    /**
     * BinanceGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BinanceGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BinanceGetAddress.Responses.$200>
  }
  ['/cosmosGetAddress']: {
    /**
     * CosmosGetAddress
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CosmosGetAddress.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CosmosGetAddress.Responses.$200>
  }
  ['/btcSignTx']: {
    /**
     * BtcSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.BtcSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.BtcSignTx.Responses.$200>
  }
  ['/thorchainSignTx']: {
    /**
     * ThorchainSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.ThorchainSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ThorchainSignTx.Responses.$200>
  }
  ['/cosmosSignTx']: {
    /**
     * CosmosSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CosmosSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CosmosSignTx.Responses.$200>
  }
  ['/osmosisSignTx']: {
    /**
     * OsmosisSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.OsmosisSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.OsmosisSignTx.Responses.$200>
  }
  ['/ethSignTx']: {
    /**
     * EthSignTx
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.EthSignTx.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.EthSignTx.Responses.$200>
  }
  ['/sign']: {
    /**
     * SignTransaction
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SignTransaction.RequestBody,
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
      data?: Paths.WriteDevice.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.WriteDevice.Responses.$200>
  }
  ['/status']: {
    /**
     * Status
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Status.Responses.$200>
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
      parameters?: Parameters<Paths.Pair.HeaderParameters> | null,
      data?: Paths.Pair.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.Pair.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
