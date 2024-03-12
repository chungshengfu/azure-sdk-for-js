/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PrivateLinkHubs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PrivateLinkHub,
  PrivateLinkHubsListByResourceGroupNextOptionalParams,
  PrivateLinkHubsListByResourceGroupOptionalParams,
  PrivateLinkHubsListByResourceGroupResponse,
  PrivateLinkHubsListNextOptionalParams,
  PrivateLinkHubsListOptionalParams,
  PrivateLinkHubsListResponse,
  PrivateLinkHubsGetOptionalParams,
  PrivateLinkHubsGetResponse,
  PrivateLinkHubPatchInfo,
  PrivateLinkHubsUpdateOptionalParams,
  PrivateLinkHubsUpdateResponse,
  PrivateLinkHubsCreateOrUpdateOptionalParams,
  PrivateLinkHubsCreateOrUpdateResponse,
  PrivateLinkHubsDeleteOptionalParams,
  PrivateLinkHubsListByResourceGroupNextResponse,
  PrivateLinkHubsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinkHubs operations. */
export class PrivateLinkHubsImpl implements PrivateLinkHubs {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkHubs class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Returns a list of privateLinkHubs in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateLinkHubsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<PrivateLinkHub> {
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
    options?: PrivateLinkHubsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateLinkHub[]> {
    let result: PrivateLinkHubsListByResourceGroupResponse;
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
    options?: PrivateLinkHubsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<PrivateLinkHub> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of privateLinkHubs in a subscription
   * @param options The options parameters.
   */
  public list(
    options?: PrivateLinkHubsListOptionalParams,
  ): PagedAsyncIterableIterator<PrivateLinkHub> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: PrivateLinkHubsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateLinkHub[]> {
    let result: PrivateLinkHubsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: PrivateLinkHubsListOptionalParams,
  ): AsyncIterableIterator<PrivateLinkHub> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns a list of privateLinkHubs in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: PrivateLinkHubsListByResourceGroupOptionalParams,
  ): Promise<PrivateLinkHubsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName Name of the privateLinkHub
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateLinkHubName: string,
    options?: PrivateLinkHubsGetOptionalParams,
  ): Promise<PrivateLinkHubsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateLinkHubName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName Name of the privateLinkHub
   * @param privateLinkHubPatchInfo PrivateLinkHub patch request properties
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    privateLinkHubName: string,
    privateLinkHubPatchInfo: PrivateLinkHubPatchInfo,
    options?: PrivateLinkHubsUpdateOptionalParams,
  ): Promise<PrivateLinkHubsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateLinkHubName,
        privateLinkHubPatchInfo,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Creates or updates a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName Name of the privateLinkHub
   * @param privateLinkHubInfo PrivateLinkHub create or update request properties
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    privateLinkHubName: string,
    privateLinkHubInfo: PrivateLinkHub,
    options?: PrivateLinkHubsCreateOrUpdateOptionalParams,
  ): Promise<PrivateLinkHubsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateLinkHubName, privateLinkHubInfo, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName Name of the privateLinkHub
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateLinkHubName: string,
    options?: PrivateLinkHubsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
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
      args: { resourceGroupName, privateLinkHubName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a privateLinkHub
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateLinkHubName Name of the privateLinkHub
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateLinkHubName: string,
    options?: PrivateLinkHubsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateLinkHubName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a list of privateLinkHubs in a subscription
   * @param options The options parameters.
   */
  private _list(
    options?: PrivateLinkHubsListOptionalParams,
  ): Promise<PrivateLinkHubsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
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
    options?: PrivateLinkHubsListByResourceGroupNextOptionalParams,
  ): Promise<PrivateLinkHubsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: PrivateLinkHubsListNextOptionalParams,
  ): Promise<PrivateLinkHubsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHubInfoListResult,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHub,
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
    Parameters.privateLinkHubName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHub,
    },
    201: {
      bodyMapper: Mappers.PrivateLinkHub,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.privateLinkHubPatchInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateLinkHubName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHub,
    },
    201: {
      bodyMapper: Mappers.PrivateLinkHub,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.privateLinkHubInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateLinkHubName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/privateLinkHubs/{privateLinkHubName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateLinkHubName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Synapse/privateLinkHubs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHubInfoListResult,
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
      bodyMapper: Mappers.PrivateLinkHubInfoListResult,
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
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkHubInfoListResult,
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
