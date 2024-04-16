/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ContainerAppsSessionPools } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SessionPool,
  ContainerAppsSessionPoolsListBySubscriptionNextOptionalParams,
  ContainerAppsSessionPoolsListBySubscriptionOptionalParams,
  ContainerAppsSessionPoolsListBySubscriptionResponse,
  ContainerAppsSessionPoolsListByResourceGroupNextOptionalParams,
  ContainerAppsSessionPoolsListByResourceGroupOptionalParams,
  ContainerAppsSessionPoolsListByResourceGroupResponse,
  ContainerAppsSessionPoolsGetOptionalParams,
  ContainerAppsSessionPoolsGetResponse,
  ContainerAppsSessionPoolsCreateOrUpdateOptionalParams,
  ContainerAppsSessionPoolsCreateOrUpdateResponse,
  SessionPoolPatchProperties,
  ContainerAppsSessionPoolsUpdateOptionalParams,
  ContainerAppsSessionPoolsUpdateResponse,
  ContainerAppsSessionPoolsDeleteOptionalParams,
  ContainerAppsSessionPoolsDeleteResponse,
  ContainerAppsSessionPoolsListBySubscriptionNextResponse,
  ContainerAppsSessionPoolsListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContainerAppsSessionPools operations. */
export class ContainerAppsSessionPoolsImpl
  implements ContainerAppsSessionPools
{
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ContainerAppsSessionPools class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Session Pools in a given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: ContainerAppsSessionPoolsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<SessionPool> {
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
    options?: ContainerAppsSessionPoolsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SessionPool[]> {
    let result: ContainerAppsSessionPoolsListBySubscriptionResponse;
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
    options?: ContainerAppsSessionPoolsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<SessionPool> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the Session Pools in a given subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerAppsSessionPoolsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<SessionPool> {
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
    options?: ContainerAppsSessionPoolsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SessionPool[]> {
    let result: ContainerAppsSessionPoolsListByResourceGroupResponse;
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
    options?: ContainerAppsSessionPoolsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<SessionPool> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the Session Pools in a given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: ContainerAppsSessionPoolsListBySubscriptionOptionalParams,
  ): Promise<ContainerAppsSessionPoolsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Get the Session Pools in a given subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ContainerAppsSessionPoolsListByResourceGroupOptionalParams,
  ): Promise<ContainerAppsSessionPoolsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Get the properties of a Session Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sessionPoolName: string,
    options?: ContainerAppsSessionPoolsGetOptionalParams,
  ): Promise<ContainerAppsSessionPoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sessionPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update a Session Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param sessionPoolEnvelope Properties used to create a session pool
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    sessionPoolName: string,
    sessionPoolEnvelope: SessionPool,
    options?: ContainerAppsSessionPoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerAppsSessionPoolsCreateOrUpdateResponse>,
      ContainerAppsSessionPoolsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ContainerAppsSessionPoolsCreateOrUpdateResponse> => {
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
        sessionPoolName,
        sessionPoolEnvelope,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ContainerAppsSessionPoolsCreateOrUpdateResponse,
      OperationState<ContainerAppsSessionPoolsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a Session Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param sessionPoolEnvelope Properties used to create a session pool
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sessionPoolName: string,
    sessionPoolEnvelope: SessionPool,
    options?: ContainerAppsSessionPoolsCreateOrUpdateOptionalParams,
  ): Promise<ContainerAppsSessionPoolsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      sessionPoolName,
      sessionPoolEnvelope,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Patches a Session Pool using JSON Merge Patch
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param sessionPoolEnvelope Properties used to create a session pool
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    sessionPoolName: string,
    sessionPoolEnvelope: SessionPoolPatchProperties,
    options?: ContainerAppsSessionPoolsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerAppsSessionPoolsUpdateResponse>,
      ContainerAppsSessionPoolsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ContainerAppsSessionPoolsUpdateResponse> => {
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
        sessionPoolName,
        sessionPoolEnvelope,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      ContainerAppsSessionPoolsUpdateResponse,
      OperationState<ContainerAppsSessionPoolsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patches a Session Pool using JSON Merge Patch
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param sessionPoolEnvelope Properties used to create a session pool
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    sessionPoolName: string,
    sessionPoolEnvelope: SessionPoolPatchProperties,
    options?: ContainerAppsSessionPoolsUpdateOptionalParams,
  ): Promise<ContainerAppsSessionPoolsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      sessionPoolName,
      sessionPoolEnvelope,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Session Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sessionPoolName: string,
    options?: ContainerAppsSessionPoolsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerAppsSessionPoolsDeleteResponse>,
      ContainerAppsSessionPoolsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ContainerAppsSessionPoolsDeleteResponse> => {
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
      args: { resourceGroupName, sessionPoolName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      ContainerAppsSessionPoolsDeleteResponse,
      OperationState<ContainerAppsSessionPoolsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Session Pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param sessionPoolName Name of the Session Pool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sessionPoolName: string,
    options?: ContainerAppsSessionPoolsDeleteOptionalParams,
  ): Promise<ContainerAppsSessionPoolsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sessionPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: ContainerAppsSessionPoolsListBySubscriptionNextOptionalParams,
  ): Promise<ContainerAppsSessionPoolsListBySubscriptionNextResponse> {
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
    options?: ContainerAppsSessionPoolsListByResourceGroupNextOptionalParams,
  ): Promise<ContainerAppsSessionPoolsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/sessionPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPoolCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPoolCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPool,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sessionPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPool,
    },
    201: {
      bodyMapper: Mappers.SessionPool,
    },
    202: {
      bodyMapper: Mappers.SessionPool,
    },
    204: {
      bodyMapper: Mappers.SessionPool,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.sessionPoolEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sessionPoolName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPool,
    },
    201: {
      bodyMapper: Mappers.SessionPool,
    },
    202: {
      bodyMapper: Mappers.SessionPool,
    },
    204: {
      bodyMapper: Mappers.SessionPool,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  requestBody: Parameters.sessionPoolEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sessionPoolName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/sessionPools/{sessionPoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ContainerAppsSessionPoolsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.ContainerAppsSessionPoolsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.ContainerAppsSessionPoolsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.ContainerAppsSessionPoolsDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sessionPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPoolCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionPoolCollection,
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse,
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
