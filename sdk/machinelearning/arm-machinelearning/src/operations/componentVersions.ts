/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ComponentVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServicesMgmtClient } from "../azureMachineLearningServicesMgmtClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ComponentVersion,
  ComponentVersionsListNextOptionalParams,
  ComponentVersionsListOptionalParams,
  ComponentVersionsListResponse,
  ComponentVersionsDeleteOptionalParams,
  ComponentVersionsGetOptionalParams,
  ComponentVersionsGetResponse,
  ComponentVersionsCreateOrUpdateOptionalParams,
  ComponentVersionsCreateOrUpdateResponse,
  DestinationAsset,
  ComponentVersionsPublishOptionalParams,
  ComponentVersionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ComponentVersions operations. */
export class ComponentVersionsImpl implements ComponentVersions {
  private readonly client: AzureMachineLearningServicesMgmtClient;

  /**
   * Initialize a new instance of the class ComponentVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServicesMgmtClient) {
    this.client = client;
  }

  /**
   * List component versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Component name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ComponentVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<ComponentVersion> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      name,
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
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          name,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ComponentVersionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ComponentVersion[]> {
    let result: ComponentVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        name,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        name,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ComponentVersionsListOptionalParams,
  ): AsyncIterableIterator<ComponentVersion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      name,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List component versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Component name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ComponentVersionsListOptionalParams,
  ): Promise<ComponentVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      listOperationSpec,
    );
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: ComponentVersionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      deleteOperationSpec,
    );
  }

  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: ComponentVersionsGetOptionalParams,
  ): Promise<ComponentVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: ComponentVersion,
    options?: ComponentVersionsCreateOrUpdateOptionalParams,
  ): Promise<ComponentVersionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, body, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Publish version asset into registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param body Destination registry info
   * @param options The options parameters.
   */
  async beginPublish(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: DestinationAsset,
    options?: ComponentVersionsPublishOptionalParams,
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
      args: { resourceGroupName, workspaceName, name, version, body, options },
      spec: publishOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Publish version asset into registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name.
   * @param version Version identifier.
   * @param body Destination registry info
   * @param options The options parameters.
   */
  async beginPublishAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: DestinationAsset,
    options?: ComponentVersionsPublishOptionalParams,
  ): Promise<void> {
    const poller = await this.beginPublish(
      resourceGroupName,
      workspaceName,
      name,
      version,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Component name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    nextLink: string,
    options?: ComponentVersionsListNextOptionalParams,
  ): Promise<ComponentVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersionResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top,
    Parameters.listViewType,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersion,
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
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersion,
    },
    201: {
      bodyMapper: Mappers.ComponentVersion,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const publishOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/components/{name}/versions/{version}/publish",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ComponentVersionResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
