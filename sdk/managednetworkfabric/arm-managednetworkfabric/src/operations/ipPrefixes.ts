/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IpPrefixes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  IpPrefix,
  IpPrefixesListByResourceGroupNextOptionalParams,
  IpPrefixesListByResourceGroupOptionalParams,
  IpPrefixesListByResourceGroupResponse,
  IpPrefixesListBySubscriptionNextOptionalParams,
  IpPrefixesListBySubscriptionOptionalParams,
  IpPrefixesListBySubscriptionResponse,
  IpPrefixesCreateOptionalParams,
  IpPrefixesCreateResponse,
  IpPrefixesGetOptionalParams,
  IpPrefixesGetResponse,
  IpPrefixPatch,
  IpPrefixesUpdateOptionalParams,
  IpPrefixesUpdateResponse,
  IpPrefixesDeleteOptionalParams,
  IpPrefixesDeleteResponse,
  IpPrefixesListByResourceGroupNextResponse,
  IpPrefixesListBySubscriptionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IpPrefixes operations. */
export class IpPrefixesImpl implements IpPrefixes {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class IpPrefixes class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Implements IpPrefixes list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: IpPrefixesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<IpPrefix> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: IpPrefixesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IpPrefix[]> {
    let result: IpPrefixesListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: IpPrefixesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<IpPrefix> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Implements IpPrefixes list by subscription GET method.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: IpPrefixesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<IpPrefix> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: IpPrefixesListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IpPrefix[]> {
    let result: IpPrefixesListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: IpPrefixesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<IpPrefix> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Implements IP Prefix PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefix,
    options?: IpPrefixesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<IpPrefixesCreateResponse>,
      IpPrefixesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<IpPrefixesCreateResponse> => {
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
      args: { resourceGroupName, ipPrefixName, body, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      IpPrefixesCreateResponse,
      OperationState<IpPrefixesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements IP Prefix PUT method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefix,
    options?: IpPrefixesCreateOptionalParams,
  ): Promise<IpPrefixesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      ipPrefixName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IP Prefix GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ipPrefixName: string,
    options?: IpPrefixesGetOptionalParams,
  ): Promise<IpPrefixesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ipPrefixName, options },
      getOperationSpec,
    );
  }

  /**
   * API to update certain properties of the IP Prefix resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param body IP Prefix properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefixPatch,
    options?: IpPrefixesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<IpPrefixesUpdateResponse>,
      IpPrefixesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<IpPrefixesUpdateResponse> => {
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
      args: { resourceGroupName, ipPrefixName, body, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      IpPrefixesUpdateResponse,
      OperationState<IpPrefixesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the IP Prefix resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param body IP Prefix properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    ipPrefixName: string,
    body: IpPrefixPatch,
    options?: IpPrefixesUpdateOptionalParams,
  ): Promise<IpPrefixesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      ipPrefixName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IP Prefix DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    ipPrefixName: string,
    options?: IpPrefixesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<IpPrefixesDeleteResponse>,
      IpPrefixesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<IpPrefixesDeleteResponse> => {
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
      args: { resourceGroupName, ipPrefixName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      IpPrefixesDeleteResponse,
      OperationState<IpPrefixesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements IP Prefix DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ipPrefixName Name of the IP Prefix.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    ipPrefixName: string,
    options?: IpPrefixesDeleteOptionalParams,
  ): Promise<IpPrefixesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      ipPrefixName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements IpPrefixes list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: IpPrefixesListByResourceGroupOptionalParams,
  ): Promise<IpPrefixesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Implements IpPrefixes list by subscription GET method.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: IpPrefixesListBySubscriptionOptionalParams,
  ): Promise<IpPrefixesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: IpPrefixesListByResourceGroupNextOptionalParams,
  ): Promise<IpPrefixesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: IpPrefixesListBySubscriptionNextOptionalParams,
  ): Promise<IpPrefixesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefix,
    },
    201: {
      bodyMapper: Mappers.IpPrefix,
    },
    202: {
      bodyMapper: Mappers.IpPrefix,
    },
    204: {
      bodyMapper: Mappers.IpPrefix,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipPrefixName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefix,
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
    Parameters.ipPrefixName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefix,
    },
    201: {
      bodyMapper: Mappers.IpPrefix,
    },
    202: {
      bodyMapper: Mappers.IpPrefix,
    },
    204: {
      bodyMapper: Mappers.IpPrefix,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ipPrefixName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/{ipPrefixName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.IpPrefixesDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.IpPrefixesDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.IpPrefixesDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.IpPrefixesDeleteHeaders,
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
    Parameters.ipPrefixName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefixesListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/ipPrefixes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefixesListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefixesListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IpPrefixesListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
