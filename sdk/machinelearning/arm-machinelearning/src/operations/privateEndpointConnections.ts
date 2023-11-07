/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListOptionalParams,
  PrivateEndpointConnectionsListResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * Called by end-users to get all PE connections.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateEndpointConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
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
    options?: PrivateEndpointConnectionsListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result: PrivateEndpointConnectionsListResponse;
    result = await this._list(resourceGroupName, workspaceName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateEndpointConnectionsListOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Called by end-users to get all PE connections.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: PrivateEndpointConnectionsListOptionalParams
  ): Promise<PrivateEndpointConnectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Called by end-users to delete a PE connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param privateEndpointConnectionName NRP Private Endpoint Connection Name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        privateEndpointConnectionName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Called by end-users to get a PE connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param privateEndpointConnectionName NRP Private Endpoint Connection Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Called by end-users to approve or reject a PE connection.
   * This method must validate and forward the call to NRP.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param privateEndpointConnectionName NRP Private Endpoint Connection Name
   * @param body PrivateEndpointConnection object
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    privateEndpointConnectionName: string,
    body: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        privateEndpointConnectionName,
        body,
        options
      },
      createOrUpdateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
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
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
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
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body47,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
