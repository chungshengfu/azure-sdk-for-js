/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServerlessEndpoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServerlessEndpoint,
  ServerlessEndpointsListNextOptionalParams,
  ServerlessEndpointsListOptionalParams,
  ServerlessEndpointsListResponse,
  ServerlessEndpointsDeleteOptionalParams,
  ServerlessEndpointsGetOptionalParams,
  ServerlessEndpointsGetResponse,
  PartialMinimalTrackedResourceWithSkuAndIdentity,
  ServerlessEndpointsUpdateOptionalParams,
  ServerlessEndpointsUpdateResponse,
  ServerlessEndpointsCreateOrUpdateOptionalParams,
  ServerlessEndpointsCreateOrUpdateResponse,
  ServerlessEndpointsListKeysOptionalParams,
  ServerlessEndpointsListKeysResponse,
  RegenerateEndpointKeysRequest,
  ServerlessEndpointsRegenerateKeysOptionalParams,
  ServerlessEndpointsRegenerateKeysResponse,
  ServerlessEndpointsGetStatusOptionalParams,
  ServerlessEndpointsGetStatusResponse,
  ServerlessEndpointsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerlessEndpoints operations. */
export class ServerlessEndpointsImpl implements ServerlessEndpoints {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class ServerlessEndpoints class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * List Serverless Endpoints.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ServerlessEndpointsListOptionalParams
  ): PagedAsyncIterableIterator<ServerlessEndpoint> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: ServerlessEndpointsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServerlessEndpoint[]> {
    let result: ServerlessEndpointsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
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
    options?: ServerlessEndpointsListOptionalParams
  ): AsyncIterableIterator<ServerlessEndpoint> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List Serverless Endpoints.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ServerlessEndpointsListOptionalParams
  ): Promise<ServerlessEndpointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Delete Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
      args: { resourceGroupName, workspaceName, name, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get Serverless Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsGetOptionalParams
  ): Promise<ServerlessEndpointsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      getOperationSpec
    );
  }

  /**
   * Update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: PartialMinimalTrackedResourceWithSkuAndIdentity,
    options?: ServerlessEndpointsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServerlessEndpointsUpdateResponse>,
      ServerlessEndpointsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerlessEndpointsUpdateResponse> => {
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
      args: { resourceGroupName, workspaceName, name, body, options },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      ServerlessEndpointsUpdateResponse,
      OperationState<ServerlessEndpointsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: PartialMinimalTrackedResourceWithSkuAndIdentity,
    options?: ServerlessEndpointsUpdateOptionalParams
  ): Promise<ServerlessEndpointsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      name,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Create or update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: ServerlessEndpoint,
    options?: ServerlessEndpointsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServerlessEndpointsCreateOrUpdateResponse>,
      ServerlessEndpointsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerlessEndpointsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, workspaceName, name, body, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ServerlessEndpointsCreateOrUpdateResponse,
      OperationState<ServerlessEndpointsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "original-uri"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: ServerlessEndpoint,
    options?: ServerlessEndpointsCreateOrUpdateOptionalParams
  ): Promise<ServerlessEndpointsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      name,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List EndpointAuthKeys for an Endpoint using Key-based authentication.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsListKeysOptionalParams
  ): Promise<ServerlessEndpointsListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerate EndpointAuthKeys for an Endpoint using Key-based authentication (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body RegenerateKeys request .
   * @param options The options parameters.
   */
  async beginRegenerateKeys(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: RegenerateEndpointKeysRequest,
    options?: ServerlessEndpointsRegenerateKeysOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServerlessEndpointsRegenerateKeysResponse>,
      ServerlessEndpointsRegenerateKeysResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServerlessEndpointsRegenerateKeysResponse> => {
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
      args: { resourceGroupName, workspaceName, name, body, options },
      spec: regenerateKeysOperationSpec
    });
    const poller = await createHttpPoller<
      ServerlessEndpointsRegenerateKeysResponse,
      OperationState<ServerlessEndpointsRegenerateKeysResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Regenerate EndpointAuthKeys for an Endpoint using Key-based authentication (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body RegenerateKeys request .
   * @param options The options parameters.
   */
  async beginRegenerateKeysAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: RegenerateEndpointKeysRequest,
    options?: ServerlessEndpointsRegenerateKeysOptionalParams
  ): Promise<ServerlessEndpointsRegenerateKeysResponse> {
    const poller = await this.beginRegenerateKeys(
      resourceGroupName,
      workspaceName,
      name,
      body,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Status of the model backing the Serverless Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  getStatus(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsGetStatusOptionalParams
  ): Promise<ServerlessEndpointsGetStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      getStatusOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: ServerlessEndpointsListNextOptionalParams
  ): Promise<ServerlessEndpointsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerlessEndpointTrackedResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skip],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerlessEndpoint
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
    Parameters.workspaceName,
    Parameters.name
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    201: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    202: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    204: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    201: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    202: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    204: {
      bodyMapper: Mappers.ServerlessEndpoint
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body38,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointAuthKeys
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
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}/regenerateKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointAuthKeys
    },
    201: {
      bodyMapper: Mappers.EndpointAuthKeys
    },
    202: {
      bodyMapper: Mappers.EndpointAuthKeys
    },
    204: {
      bodyMapper: Mappers.EndpointAuthKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/serverlessEndpoints/{name}/getStatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ServerlessEndpointStatus
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
    Parameters.workspaceName,
    Parameters.name1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerlessEndpointTrackedResourceArmPaginatedResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
