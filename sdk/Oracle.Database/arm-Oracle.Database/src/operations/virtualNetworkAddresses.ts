/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { VirtualNetworkAddresses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OracleDatabaseResourceManager } from "../oracleDatabaseResourceManager";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  VirtualNetworkAddress,
  VirtualNetworkAddressesListByCloudVmClusterNextOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  VirtualNetworkAddressesListByCloudVmClusterResponse,
  VirtualNetworkAddressesGetOptionalParams,
  VirtualNetworkAddressesGetResponse,
  VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  VirtualNetworkAddressesCreateOrUpdateResponse,
  VirtualNetworkAddressesDeleteOptionalParams,
  VirtualNetworkAddressesDeleteResponse,
  VirtualNetworkAddressesListByCloudVmClusterNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VirtualNetworkAddresses operations. */
export class VirtualNetworkAddressesImpl implements VirtualNetworkAddresses {
  private readonly client: OracleDatabaseResourceManager;

  /**
   * Initialize a new instance of the class VirtualNetworkAddresses class.
   * @param client Reference to the service client
   */
  constructor(client: OracleDatabaseResourceManager) {
    this.client = client;
  }

  /**
   * List VirtualNetworkAddress resources by CloudVmCluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param options The options parameters.
   */
  public listByCloudVmCluster(
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  ): PagedAsyncIterableIterator<VirtualNetworkAddress> {
    const iter = this.listByCloudVmClusterPagingAll(
      resourceGroupName,
      cloudvmclustername,
      options,
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
        return this.listByCloudVmClusterPagingPage(
          resourceGroupName,
          cloudvmclustername,
          options,
          settings,
        );
      },
    };
  }

  private async *listByCloudVmClusterPagingPage(
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<VirtualNetworkAddress[]> {
    let result: VirtualNetworkAddressesListByCloudVmClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByCloudVmCluster(
        resourceGroupName,
        cloudvmclustername,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByCloudVmClusterNext(
        resourceGroupName,
        cloudvmclustername,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByCloudVmClusterPagingAll(
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  ): AsyncIterableIterator<VirtualNetworkAddress> {
    for await (const page of this.listByCloudVmClusterPagingPage(
      resourceGroupName,
      cloudvmclustername,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List VirtualNetworkAddress resources by CloudVmCluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param options The options parameters.
   */
  private _listByCloudVmCluster(
    resourceGroupName: string,
    cloudvmclustername: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterOptionalParams,
  ): Promise<VirtualNetworkAddressesListByCloudVmClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudvmclustername, options },
      listByCloudVmClusterOperationSpec,
    );
  }

  /**
   * Get a VirtualNetworkAddress
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param virtualnetworkaddressname Virtual IP address hostname.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesGetOptionalParams,
  ): Promise<VirtualNetworkAddressesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Create a VirtualNetworkAddress
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param virtualnetworkaddressname Virtual IP address hostname.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    resource: VirtualNetworkAddress,
    options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualNetworkAddressesCreateOrUpdateResponse>,
      VirtualNetworkAddressesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualNetworkAddressesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        resource,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualNetworkAddressesCreateOrUpdateResponse,
      OperationState<VirtualNetworkAddressesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a VirtualNetworkAddress
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param virtualnetworkaddressname Virtual IP address hostname.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    resource: VirtualNetworkAddress,
    options?: VirtualNetworkAddressesCreateOrUpdateOptionalParams,
  ): Promise<VirtualNetworkAddressesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a VirtualNetworkAddress
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param virtualnetworkaddressname Virtual IP address hostname.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualNetworkAddressesDeleteResponse>,
      VirtualNetworkAddressesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<VirtualNetworkAddressesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        cloudvmclustername,
        virtualnetworkaddressname,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      VirtualNetworkAddressesDeleteResponse,
      OperationState<VirtualNetworkAddressesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a VirtualNetworkAddress
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param virtualnetworkaddressname Virtual IP address hostname.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
    options?: VirtualNetworkAddressesDeleteOptionalParams,
  ): Promise<VirtualNetworkAddressesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      cloudvmclustername,
      virtualnetworkaddressname,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByCloudVmClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param cloudvmclustername CloudVmCluster name
   * @param nextLink The nextLink from the previous successful call to the ListByCloudVmCluster method.
   * @param options The options parameters.
   */
  private _listByCloudVmClusterNext(
    resourceGroupName: string,
    cloudvmclustername: string,
    nextLink: string,
    options?: VirtualNetworkAddressesListByCloudVmClusterNextOptionalParams,
  ): Promise<VirtualNetworkAddressesListByCloudVmClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudvmclustername, nextLink, options },
      listByCloudVmClusterNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByCloudVmClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkAddressListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudvmclustername,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkAddress,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudvmclustername,
    Parameters.virtualnetworkaddressname,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkAddress,
    },
    201: {
      bodyMapper: Mappers.VirtualNetworkAddress,
    },
    202: {
      bodyMapper: Mappers.VirtualNetworkAddress,
    },
    204: {
      bodyMapper: Mappers.VirtualNetworkAddress,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudvmclustername,
    Parameters.virtualnetworkaddressname,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.VirtualNetworkAddressesDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.VirtualNetworkAddressesDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.VirtualNetworkAddressesDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.VirtualNetworkAddressesDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudvmclustername,
    Parameters.virtualnetworkaddressname,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByCloudVmClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkAddressListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.cloudvmclustername,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
