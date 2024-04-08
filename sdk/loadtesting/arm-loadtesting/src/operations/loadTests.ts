/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { LoadTests } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LoadTestClient } from "../loadTestClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  LoadTestResource,
  LoadTestsListBySubscriptionNextOptionalParams,
  LoadTestsListBySubscriptionOptionalParams,
  LoadTestsListBySubscriptionResponse,
  LoadTestsListByResourceGroupNextOptionalParams,
  LoadTestsListByResourceGroupOptionalParams,
  LoadTestsListByResourceGroupResponse,
  OutboundEnvironmentEndpoint,
  LoadTestsListOutboundNetworkDependenciesEndpointsNextOptionalParams,
  LoadTestsListOutboundNetworkDependenciesEndpointsOptionalParams,
  LoadTestsListOutboundNetworkDependenciesEndpointsResponse,
  LoadTestsGetOptionalParams,
  LoadTestsGetResponse,
  LoadTestsCreateOrUpdateOptionalParams,
  LoadTestsCreateOrUpdateResponse,
  LoadTestResourceUpdate,
  LoadTestsUpdateOptionalParams,
  LoadTestsUpdateResponse,
  LoadTestsDeleteOptionalParams,
  LoadTestsDeleteResponse,
  LoadTestsListBySubscriptionNextResponse,
  LoadTestsListByResourceGroupNextResponse,
  LoadTestsListOutboundNetworkDependenciesEndpointsNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LoadTests operations. */
export class LoadTestsImpl implements LoadTests {
  private readonly client: LoadTestClient;

  /**
   * Initialize a new instance of the class LoadTests class.
   * @param client Reference to the service client
   */
  constructor(client: LoadTestClient) {
    this.client = client;
  }

  /**
   * List LoadTestResource resources by subscription ID
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: LoadTestsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<LoadTestResource> {
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
    options?: LoadTestsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<LoadTestResource[]> {
    let result: LoadTestsListBySubscriptionResponse;
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
    options?: LoadTestsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<LoadTestResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List LoadTestResource resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: LoadTestsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<LoadTestResource> {
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
    options?: LoadTestsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<LoadTestResource[]> {
    let result: LoadTestsListByResourceGroupResponse;
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
    options?: LoadTestsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<LoadTestResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the endpoints that agents may call as part of load testing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param options The options parameters.
   */
  public listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
    const iter = this.listOutboundNetworkDependenciesEndpointsPagingAll(
      resourceGroupName,
      loadTestName,
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
        return this.listOutboundNetworkDependenciesEndpointsPagingPage(
          resourceGroupName,
          loadTestName,
          options,
          settings,
        );
      },
    };
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingPage(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsListOutboundNetworkDependenciesEndpointsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint[]> {
    let result: LoadTestsListOutboundNetworkDependenciesEndpointsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listOutboundNetworkDependenciesEndpoints(
        resourceGroupName,
        loadTestName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listOutboundNetworkDependenciesEndpointsNext(
        resourceGroupName,
        loadTestName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listOutboundNetworkDependenciesEndpointsPagingAll(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): AsyncIterableIterator<OutboundEnvironmentEndpoint> {
    for await (const page of this.listOutboundNetworkDependenciesEndpointsPagingPage(
      resourceGroupName,
      loadTestName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List LoadTestResource resources by subscription ID
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: LoadTestsListBySubscriptionOptionalParams,
  ): Promise<LoadTestsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * List LoadTestResource resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: LoadTestsListByResourceGroupOptionalParams,
  ): Promise<LoadTestsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Get a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsGetOptionalParams,
  ): Promise<LoadTestsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadTestName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    loadTestName: string,
    resource: LoadTestResource,
    options?: LoadTestsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LoadTestsCreateOrUpdateResponse>,
      LoadTestsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<LoadTestsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, loadTestName, resource, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      LoadTestsCreateOrUpdateResponse,
      OperationState<LoadTestsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    loadTestName: string,
    resource: LoadTestResource,
    options?: LoadTestsCreateOrUpdateOptionalParams,
  ): Promise<LoadTestsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      loadTestName,
      resource,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    loadTestName: string,
    properties: LoadTestResourceUpdate,
    options?: LoadTestsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LoadTestsUpdateResponse>,
      LoadTestsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<LoadTestsUpdateResponse> => {
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
      args: { resourceGroupName, loadTestName, properties, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      LoadTestsUpdateResponse,
      OperationState<LoadTestsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    loadTestName: string,
    properties: LoadTestResourceUpdate,
    options?: LoadTestsUpdateOptionalParams,
  ): Promise<LoadTestsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      loadTestName,
      properties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LoadTestsDeleteResponse>,
      LoadTestsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<LoadTestsDeleteResponse> => {
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
      args: { resourceGroupName, loadTestName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      LoadTestsDeleteResponse,
      OperationState<LoadTestsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a LoadTestResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsDeleteOptionalParams,
  ): Promise<LoadTestsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      loadTestName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the endpoints that agents may call as part of load testing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    loadTestName: string,
    options?: LoadTestsListOutboundNetworkDependenciesEndpointsOptionalParams,
  ): Promise<LoadTestsListOutboundNetworkDependenciesEndpointsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadTestName, options },
      listOutboundNetworkDependenciesEndpointsOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: LoadTestsListBySubscriptionNextOptionalParams,
  ): Promise<LoadTestsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
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
    options?: LoadTestsListByResourceGroupNextOptionalParams,
  ): Promise<LoadTestsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListOutboundNetworkDependenciesEndpointsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param loadTestName Load Test name
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListOutboundNetworkDependenciesEndpoints method.
   * @param options The options parameters.
   */
  private _listOutboundNetworkDependenciesEndpointsNext(
    resourceGroupName: string,
    loadTestName: string,
    nextLink: string,
    options?: LoadTestsListOutboundNetworkDependenciesEndpointsNextOptionalParams,
  ): Promise<LoadTestsListOutboundNetworkDependenciesEndpointsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, loadTestName, nextLink, options },
      listOutboundNetworkDependenciesEndpointsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/loadTests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourceListResult,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourceListResult,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResource,
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
    Parameters.loadTestName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResource,
    },
    201: {
      bodyMapper: Mappers.LoadTestResource,
    },
    202: {
      bodyMapper: Mappers.LoadTestResource,
    },
    204: {
      bodyMapper: Mappers.LoadTestResource,
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
    Parameters.loadTestName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResource,
    },
    201: {
      bodyMapper: Mappers.LoadTestResource,
    },
    202: {
      bodyMapper: Mappers.LoadTestResource,
    },
    204: {
      bodyMapper: Mappers.LoadTestResource,
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
    Parameters.loadTestName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LoadTestsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.LoadTestsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.LoadTestsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.LoadTestsDeleteHeaders,
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
    Parameters.loadTestName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOutboundNetworkDependenciesEndpointsOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}/outboundNetworkDependenciesEndpoints",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.PagedOutboundEnvironmentEndpoint,
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
      Parameters.loadTestName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LoadTestResourceListResult,
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
      bodyMapper: Mappers.LoadTestResourceListResult,
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
const listOutboundNetworkDependenciesEndpointsNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.PagedOutboundEnvironmentEndpoint,
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
      Parameters.loadTestName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
