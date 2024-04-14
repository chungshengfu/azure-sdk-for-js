/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { MongoClusters } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MongoClusterManagementClient } from "../mongoClusterManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  MongoCluster,
  MongoClustersListNextOptionalParams,
  MongoClustersListOptionalParams,
  MongoClustersListResponse,
  MongoClustersListByResourceGroupNextOptionalParams,
  MongoClustersListByResourceGroupOptionalParams,
  MongoClustersListByResourceGroupResponse,
  CheckNameAvailabilityRequest,
  MongoClustersCheckNameAvailabilityOptionalParams,
  MongoClustersCheckNameAvailabilityResponse,
  MongoClustersGetOptionalParams,
  MongoClustersGetResponse,
  MongoClustersCreateOrUpdateOptionalParams,
  MongoClustersCreateOrUpdateResponse,
  MongoClusterUpdate,
  MongoClustersUpdateOptionalParams,
  MongoClustersUpdateResponse,
  MongoClustersDeleteOptionalParams,
  MongoClustersDeleteResponse,
  MongoClustersListConnectionStringsOptionalParams,
  MongoClustersListConnectionStringsResponse,
  MongoClustersListNextResponse,
  MongoClustersListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MongoClusters operations. */
export class MongoClustersImpl implements MongoClusters {
  private readonly client: MongoClusterManagementClient;

  /**
   * Initialize a new instance of the class MongoClusters class.
   * @param client Reference to the service client
   */
  constructor(client: MongoClusterManagementClient) {
    this.client = client;
  }

  /**
   * List all the mongo clusters in a given subscription.
   * @param options The options parameters.
   */
  public list(
    options?: MongoClustersListOptionalParams,
  ): PagedAsyncIterableIterator<MongoCluster> {
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
    options?: MongoClustersListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<MongoCluster[]> {
    let result: MongoClustersListResponse;
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
    options?: MongoClustersListOptionalParams,
  ): AsyncIterableIterator<MongoCluster> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all the mongo clusters in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: MongoClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<MongoCluster> {
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
    options?: MongoClustersListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<MongoCluster[]> {
    let result: MongoClustersListByResourceGroupResponse;
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
    options?: MongoClustersListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<MongoCluster> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Check if mongo cluster name is available for use.
   * @param location The name of the Azure region.
   * @param body The CheckAvailability request
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    body: CheckNameAvailabilityRequest,
    options?: MongoClustersCheckNameAvailabilityOptionalParams,
  ): Promise<MongoClustersCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      { location, body, options },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * List all the mongo clusters in a given subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: MongoClustersListOptionalParams,
  ): Promise<MongoClustersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * List all the mongo clusters in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: MongoClustersListByResourceGroupOptionalParams,
  ): Promise<MongoClustersListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets information about a mongo cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersGetOptionalParams,
  ): Promise<MongoClustersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mongoClusterName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify
   * some of the properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    mongoClusterName: string,
    resource: MongoCluster,
    options?: MongoClustersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MongoClustersCreateOrUpdateResponse>,
      MongoClustersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<MongoClustersCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, mongoClusterName, resource, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      MongoClustersCreateOrUpdateResponse,
      OperationState<MongoClustersCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify
   * some of the properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mongoClusterName: string,
    resource: MongoCluster,
    options?: MongoClustersCreateOrUpdateOptionalParams,
  ): Promise<MongoClustersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      mongoClusterName,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing mongo cluster. The request body can contain one to many of the properties
   * present in the normal mongo cluster definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    mongoClusterName: string,
    properties: MongoClusterUpdate,
    options?: MongoClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MongoClustersUpdateResponse>,
      MongoClustersUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<MongoClustersUpdateResponse> => {
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
      args: { resourceGroupName, mongoClusterName, properties, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      MongoClustersUpdateResponse,
      OperationState<MongoClustersUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing mongo cluster. The request body can contain one to many of the properties
   * present in the normal mongo cluster definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    mongoClusterName: string,
    properties: MongoClusterUpdate,
    options?: MongoClustersUpdateOptionalParams,
  ): Promise<MongoClustersUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      mongoClusterName,
      properties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a mongo cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MongoClustersDeleteResponse>,
      MongoClustersDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<MongoClustersDeleteResponse> => {
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
      args: { resourceGroupName, mongoClusterName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      MongoClustersDeleteResponse,
      OperationState<MongoClustersDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a mongo cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersDeleteOptionalParams,
  ): Promise<MongoClustersDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      mongoClusterName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * List mongo cluster connection strings. This includes the default connection string using
   * SCRAM-SHA-256, as well as other connection strings supported by the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  listConnectionStrings(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersListConnectionStringsOptionalParams,
  ): Promise<MongoClustersListConnectionStringsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mongoClusterName, options },
      listConnectionStringsOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: MongoClustersListNextOptionalParams,
  ): Promise<MongoClustersListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
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
    options?: MongoClustersListByResourceGroupNextOptionalParams,
  ): Promise<MongoClustersListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/checkMongoClusterNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/mongoClusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MongoClusterListResult,
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
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MongoClusterListResult,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MongoCluster,
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
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MongoCluster,
    },
    201: {
      bodyMapper: Mappers.MongoCluster,
    },
    202: {
      bodyMapper: Mappers.MongoCluster,
    },
    204: {
      bodyMapper: Mappers.MongoCluster,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.MongoCluster,
    },
    201: {
      bodyMapper: Mappers.MongoCluster,
    },
    202: {
      bodyMapper: Mappers.MongoCluster,
    },
    204: {
      bodyMapper: Mappers.MongoCluster,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.MongoClustersDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.MongoClustersDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.MongoClustersDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.MongoClustersDeleteHeaders,
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
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listConnectionStringsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/listConnectionStrings",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListConnectionStringsResult,
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
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MongoClusterListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MongoClusterListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
