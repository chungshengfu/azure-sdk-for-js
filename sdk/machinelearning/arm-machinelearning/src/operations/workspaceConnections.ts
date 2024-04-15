/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceConnections } from "../operationsInterfaces";
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
  WorkspaceConnectionPropertiesV2BasicResource,
  WorkspaceConnectionsListNextOptionalParams,
  WorkspaceConnectionsListOptionalParams,
  WorkspaceConnectionsListResponse,
  WorkspaceConnectionsDeleteOptionalParams,
  WorkspaceConnectionsGetOptionalParams,
  WorkspaceConnectionsGetResponse,
  WorkspaceConnectionsUpdateOptionalParams,
  WorkspaceConnectionsUpdateResponse,
  WorkspaceConnectionsCreateOptionalParams,
  WorkspaceConnectionsCreateResponse,
  WorkspaceConnectionsListSecretsOptionalParams,
  WorkspaceConnectionsListSecretsResponse,
  WorkspaceConnectionsTestConnectionOptionalParams,
  WorkspaceConnectionsTestConnectionResponse,
  WorkspaceConnectionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceConnections operations. */
export class WorkspaceConnectionsImpl implements WorkspaceConnections {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class WorkspaceConnections class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * Lists all the available machine learning workspaces connections under the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceConnectionsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkspaceConnectionPropertiesV2BasicResource> {
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
    options?: WorkspaceConnectionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<WorkspaceConnectionPropertiesV2BasicResource[]> {
    let result: WorkspaceConnectionsListResponse;
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
    options?: WorkspaceConnectionsListOptionalParams,
  ): AsyncIterableIterator<WorkspaceConnectionPropertiesV2BasicResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the available machine learning workspaces connections under the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceConnectionsListOptionalParams,
  ): Promise<WorkspaceConnectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec,
    );
  }

  /**
   * Delete machine learning workspaces connections by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Lists machine learning workspaces connections by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsGetOptionalParams,
  ): Promise<WorkspaceConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Update machine learning workspaces connections under the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsUpdateOptionalParams,
  ): Promise<WorkspaceConnectionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      updateOperationSpec,
    );
  }

  /**
   * Create or update machine learning workspaces connections under the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsCreateOptionalParams,
  ): Promise<WorkspaceConnectionsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      createOperationSpec,
    );
  }

  /**
   * List all the secrets of a machine learning workspaces connections.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsListSecretsOptionalParams,
  ): Promise<WorkspaceConnectionsListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, connectionName, options },
      listSecretsOperationSpec,
    );
  }

  /**
   * Test machine learning workspaces connections under the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  async beginTestConnection(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsTestConnectionOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceConnectionsTestConnectionResponse>,
      WorkspaceConnectionsTestConnectionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspaceConnectionsTestConnectionResponse> => {
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
      args: { resourceGroupName, workspaceName, connectionName, options },
      spec: testConnectionOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspaceConnectionsTestConnectionResponse,
      OperationState<WorkspaceConnectionsTestConnectionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Test machine learning workspaces connections under the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  async beginTestConnectionAndWait(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsTestConnectionOptionalParams,
  ): Promise<WorkspaceConnectionsTestConnectionResponse> {
    const poller = await this.beginTestConnection(
      resourceGroupName,
      workspaceName,
      connectionName,
      options,
    );
    return poller.pollUntilDone();
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
    options?: WorkspaceConnectionsListNextOptionalParams,
  ): Promise<WorkspaceConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.WorkspaceConnectionPropertiesV2BasicResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.target,
    Parameters.category,
    Parameters.includeAll,
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
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
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
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceConnectionPropertiesV2BasicResource,
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
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceConnectionPropertiesV2BasicResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body48,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceConnectionPropertiesV2BasicResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body49,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}/listsecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WorkspaceConnectionPropertiesV2BasicResource,
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
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const testConnectionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}/testconnection",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceConnectionsTestConnectionHeaders,
    },
    201: {
      headersMapper: Mappers.WorkspaceConnectionsTestConnectionHeaders,
    },
    202: {
      headersMapper: Mappers.WorkspaceConnectionsTestConnectionHeaders,
    },
    204: {
      headersMapper: Mappers.WorkspaceConnectionsTestConnectionHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body49,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName,
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
        Mappers.WorkspaceConnectionPropertiesV2BasicResourceArmPaginatedResult,
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
