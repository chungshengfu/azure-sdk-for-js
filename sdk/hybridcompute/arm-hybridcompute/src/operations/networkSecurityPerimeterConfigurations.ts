/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NetworkSecurityPerimeterConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetworkSecurityPerimeterConfiguration,
  NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeNextOptionalParams,
  NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOptionalParams,
  NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeResponse,
  NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeResponse,
  NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOptionalParams,
  NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse,
  NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkSecurityPerimeterConfigurations operations. */
export class NetworkSecurityPerimeterConfigurationsImpl
  implements NetworkSecurityPerimeterConfigurations {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class NetworkSecurityPerimeterConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * Lists the network security perimeter configurations for a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  public listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOptionalParams
  ): PagedAsyncIterableIterator<NetworkSecurityPerimeterConfiguration> {
    const iter = this.listByPrivateLinkScopePagingAll(
      resourceGroupName,
      scopeName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByPrivateLinkScopePagingPage(
          resourceGroupName,
          scopeName,
          options,
          settings
        );
      }
    };
  }

  private async *listByPrivateLinkScopePagingPage(
    resourceGroupName: string,
    scopeName: string,
    options?: NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkSecurityPerimeterConfiguration[]> {
    let result: NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByPrivateLinkScope(
        resourceGroupName,
        scopeName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByPrivateLinkScopeNext(
        resourceGroupName,
        scopeName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByPrivateLinkScopePagingAll(
    resourceGroupName: string,
    scopeName: string,
    options?: NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOptionalParams
  ): AsyncIterableIterator<NetworkSecurityPerimeterConfiguration> {
    for await (const page of this.listByPrivateLinkScopePagingPage(
      resourceGroupName,
      scopeName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the network security perimeter configuration for a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param perimeterName The name, in the format {perimeterGuid}.{associationName}, of the Network
   *                      Security Perimeter resource.
   * @param options The options parameters.
   */
  getByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    perimeterName: string,
    options?: NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeOptionalParams
  ): Promise<
    NetworkSecurityPerimeterConfigurationsGetByPrivateLinkScopeResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, perimeterName, options },
      getByPrivateLinkScopeOperationSpec
    );
  }

  /**
   * Lists the network security perimeter configurations for a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param options The options parameters.
   */
  private _listByPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    options?: NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeOptionalParams
  ): Promise<
    NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, options },
      listByPrivateLinkScopeOperationSpec
    );
  }

  /**
   * Forces the network security perimeter configuration to refresh for a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param perimeterName The name, in the format {perimeterGuid}.{associationName}, of the Network
   *                      Security Perimeter resource.
   * @param options The options parameters.
   */
  async beginReconcileForPrivateLinkScope(
    resourceGroupName: string,
    scopeName: string,
    perimeterName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse
      >,
      NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, scopeName, perimeterName, options },
      spec: reconcileForPrivateLinkScopeOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse,
      OperationState<
        NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Forces the network security perimeter configuration to refresh for a private link scope.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param perimeterName The name, in the format {perimeterGuid}.{associationName}, of the Network
   *                      Security Perimeter resource.
   * @param options The options parameters.
   */
  async beginReconcileForPrivateLinkScopeAndWait(
    resourceGroupName: string,
    scopeName: string,
    perimeterName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeOptionalParams
  ): Promise<
    NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeResponse
  > {
    const poller = await this.beginReconcileForPrivateLinkScope(
      resourceGroupName,
      scopeName,
      perimeterName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByPrivateLinkScopeNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scopeName The name of the Azure Arc PrivateLinkScope resource.
   * @param nextLink The nextLink from the previous successful call to the ListByPrivateLinkScope method.
   * @param options The options parameters.
   */
  private _listByPrivateLinkScopeNext(
    resourceGroupName: string,
    scopeName: string,
    nextLink: string,
    options?: NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeNextOptionalParams
  ): Promise<
    NetworkSecurityPerimeterConfigurationsListByPrivateLinkScopeNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, scopeName, nextLink, options },
      listByPrivateLinkScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByPrivateLinkScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations/{perimeterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
    Parameters.perimeterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPrivateLinkScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const reconcileForPrivateLinkScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/privateLinkScopes/{scopeName}/networkSecurityPerimeterConfigurations/{perimeterName}/reconcile",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeHeaders
    },
    201: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeHeaders
    },
    202: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeHeaders
    },
    204: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileForPrivateLinkScopeHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scopeName,
    Parameters.perimeterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPrivateLinkScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.scopeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
