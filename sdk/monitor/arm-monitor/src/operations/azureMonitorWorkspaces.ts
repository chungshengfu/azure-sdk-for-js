/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureMonitorWorkspaces } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AzureMonitorWorkspaceResource,
  AzureMonitorWorkspacesListByResourceGroupNextOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  AzureMonitorWorkspacesListByResourceGroupResponse,
  AzureMonitorWorkspacesListBySubscriptionNextOptionalParams,
  AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  AzureMonitorWorkspacesListBySubscriptionResponse,
  AzureMonitorWorkspacesGetOptionalParams,
  AzureMonitorWorkspacesGetResponse,
  AzureMonitorWorkspacesCreateOptionalParams,
  AzureMonitorWorkspacesCreateResponse,
  AzureMonitorWorkspacesUpdateOptionalParams,
  AzureMonitorWorkspacesUpdateResponse,
  AzureMonitorWorkspacesDeleteOptionalParams,
  AzureMonitorWorkspacesDeleteResponse,
  AzureMonitorWorkspacesListByResourceGroupNextResponse,
  AzureMonitorWorkspacesListBySubscriptionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureMonitorWorkspaces operations. */
export class AzureMonitorWorkspacesImpl implements AzureMonitorWorkspaces {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class AzureMonitorWorkspaces class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Lists all Azure Monitor Workspaces in the specified resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AzureMonitorWorkspaceResource> {
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
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AzureMonitorWorkspaceResource[]> {
    let result: AzureMonitorWorkspacesListByResourceGroupResponse;
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
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<AzureMonitorWorkspaceResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all Azure Monitor Workspaces in the specified subscription
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AzureMonitorWorkspaceResource> {
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
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AzureMonitorWorkspaceResource[]> {
    let result: AzureMonitorWorkspacesListBySubscriptionResponse;
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
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<AzureMonitorWorkspaceResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all Azure Monitor Workspaces in the specified resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AzureMonitorWorkspacesListByResourceGroupOptionalParams,
  ): Promise<AzureMonitorWorkspacesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Lists all Azure Monitor Workspaces in the specified subscription
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AzureMonitorWorkspacesListBySubscriptionOptionalParams,
  ): Promise<AzureMonitorWorkspacesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Returns the specified Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesGetOptionalParams,
  ): Promise<AzureMonitorWorkspacesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureMonitorWorkspaceName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param azureMonitorWorkspaceProperties Properties that need to be specified to create a new Azure
   *                                        Monitor Workspace
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    azureMonitorWorkspaceProperties: AzureMonitorWorkspaceResource,
    options?: AzureMonitorWorkspacesCreateOptionalParams,
  ): Promise<AzureMonitorWorkspacesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureMonitorWorkspaceName,
        azureMonitorWorkspaceProperties,
        options,
      },
      createOperationSpec,
    );
  }

  /**
   * Updates part of an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesUpdateOptionalParams,
  ): Promise<AzureMonitorWorkspacesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureMonitorWorkspaceName, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureMonitorWorkspacesDeleteResponse>,
      AzureMonitorWorkspacesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AzureMonitorWorkspacesDeleteResponse> => {
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
      args: { resourceGroupName, azureMonitorWorkspaceName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      AzureMonitorWorkspacesDeleteResponse,
      OperationState<AzureMonitorWorkspacesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an Azure Monitor Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureMonitorWorkspaceName The name of the Azure Monitor Workspace. The name is case
   *                                  insensitive
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    azureMonitorWorkspaceName: string,
    options?: AzureMonitorWorkspacesDeleteOptionalParams,
  ): Promise<AzureMonitorWorkspacesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      azureMonitorWorkspaceName,
      options,
    );
    return poller.pollUntilDone();
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
    options?: AzureMonitorWorkspacesListByResourceGroupNextOptionalParams,
  ): Promise<AzureMonitorWorkspacesListByResourceGroupNextResponse> {
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
    options?: AzureMonitorWorkspacesListBySubscriptionNextOptionalParams,
  ): Promise<AzureMonitorWorkspacesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResourceListResult,
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
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Monitor/accounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResourceListResult,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResource,
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
    Parameters.azureMonitorWorkspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResource,
    },
    201: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.azureMonitorWorkspaceProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureMonitorWorkspaceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.azureMonitorWorkspaceProperties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureMonitorWorkspaceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Monitor/accounts/{azureMonitorWorkspaceName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.AzureMonitorWorkspacesDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.AzureMonitorWorkspacesDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.AzureMonitorWorkspacesDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.AzureMonitorWorkspacesDeleteHeaders,
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
    Parameters.azureMonitorWorkspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureMonitorWorkspaceResourceListResult,
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
      bodyMapper: Mappers.AzureMonitorWorkspaceResourceListResult,
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
