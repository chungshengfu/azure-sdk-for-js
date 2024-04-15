/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { EndpointOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  EndpointResourcePropertiesBasicResource,
  EndpointListNextOptionalParams,
  EndpointListOptionalParams,
  EndpointListResponse,
  AccountModel,
  EndpointGetModelsNextOptionalParams,
  EndpointGetModelsOptionalParams,
  EndpointGetModelsResponse,
  EndpointGetOptionalParams,
  EndpointGetResponse,
  EndpointCreateOrUpdateOptionalParams,
  EndpointCreateOrUpdateResponse,
  EndpointListKeysOptionalParams,
  EndpointListKeysResponse,
  RegenerateServiceAccountKeyContent,
  EndpointRegenerateKeysOptionalParams,
  EndpointRegenerateKeysResponse,
  EndpointListNextResponse,
  EndpointGetModelsNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EndpointOperations operations. */
export class EndpointOperationsImpl implements EndpointOperations {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class EndpointOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * List All the endpoints under this workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: EndpointListOptionalParams,
  ): PagedAsyncIterableIterator<EndpointResourcePropertiesBasicResource> {
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
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: EndpointListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EndpointResourcePropertiesBasicResource[]> {
    let result: EndpointListResponse;
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
    options?: EndpointListOptionalParams,
  ): AsyncIterableIterator<EndpointResourcePropertiesBasicResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get available models under the endpoint resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param options The options parameters.
   */
  public listModels(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: EndpointGetModelsOptionalParams,
  ): PagedAsyncIterableIterator<AccountModel> {
    const iter = this.getModelsPagingAll(
      resourceGroupName,
      workspaceName,
      endpointName,
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
        return this.getModelsPagingPage(
          resourceGroupName,
          workspaceName,
          endpointName,
          options,
          settings,
        );
      },
    };
  }

  private async *getModelsPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: EndpointGetModelsOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AccountModel[]> {
    let result: EndpointGetModelsResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getModels(
        resourceGroupName,
        workspaceName,
        endpointName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getModelsNext(
        resourceGroupName,
        workspaceName,
        endpointName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getModelsPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: EndpointGetModelsOptionalParams,
  ): AsyncIterableIterator<AccountModel> {
    for await (const page of this.getModelsPagingPage(
      resourceGroupName,
      workspaceName,
      endpointName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List All the endpoints under this workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: EndpointListOptionalParams,
  ): Promise<EndpointListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets endpoint resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: EndpointGetOptionalParams,
  ): Promise<EndpointGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update endpoint resource with the specified parameters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param body Endpoint resource object
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: EndpointResourcePropertiesBasicResource,
    options?: EndpointCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<EndpointCreateOrUpdateResponse>,
      EndpointCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<EndpointCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, workspaceName, endpointName, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      EndpointCreateOrUpdateResponse,
      OperationState<EndpointCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update endpoint resource with the specified parameters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param body Endpoint resource object
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: EndpointResourcePropertiesBasicResource,
    options?: EndpointCreateOrUpdateOptionalParams,
  ): Promise<EndpointCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      endpointName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * List keys for the endpoint resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: EndpointListKeysOptionalParams,
  ): Promise<EndpointListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, options },
      listKeysOperationSpec,
    );
  }

  /**
   * Get available models under the endpoint resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param options The options parameters.
   */
  private _getModels(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: EndpointGetModelsOptionalParams,
  ): Promise<EndpointGetModelsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, options },
      getModelsOperationSpec,
    );
  }

  /**
   * Regenerate account keys
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param body
   * @param options The options parameters.
   */
  regenerateKeys(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    body: RegenerateServiceAccountKeyContent,
    options?: EndpointRegenerateKeysOptionalParams,
  ): Promise<EndpointRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, body, options },
      regenerateKeysOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: EndpointListNextOptionalParams,
  ): Promise<EndpointListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * GetModelsNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param endpointName Name of the endpoint resource.
   * @param nextLink The nextLink from the previous successful call to the GetModels method.
   * @param options The options parameters.
   */
  private _getModelsNext(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    nextLink: string,
    options?: EndpointGetModelsNextOptionalParams,
  ): Promise<EndpointGetModelsNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, endpointName, nextLink, options },
      getModelsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/endpoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.EndpointResourcePropertiesBasicResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.endpointType,
    Parameters.includeInferenceEndpoints,
    Parameters.expand,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/endpoints/{endpointName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointResourcePropertiesBasicResource,
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
    Parameters.endpointName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/endpoints/{endpointName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointResourcePropertiesBasicResource,
    },
    201: {
      bodyMapper: Mappers.EndpointResourcePropertiesBasicResource,
    },
    202: {
      bodyMapper: Mappers.EndpointResourcePropertiesBasicResource,
    },
    204: {
      bodyMapper: Mappers.EndpointResourcePropertiesBasicResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body54,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.endpointName2,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/endpoints/{endpointName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointKeys,
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
    Parameters.endpointName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getModelsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/endpoints/{endpointName}/models",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointModels,
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
    Parameters.endpointName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const regenerateKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/endpoints/{endpointName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccountApiKeys,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body55,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.endpointName2,
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
      bodyMapper:
        Mappers.EndpointResourcePropertiesBasicResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getModelsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EndpointModels,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.endpointName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
