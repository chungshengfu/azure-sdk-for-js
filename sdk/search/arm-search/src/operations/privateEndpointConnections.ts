/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchManagementClient } from "../searchManagementClient";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByServiceNextOptionalParams,
  PrivateEndpointConnectionsListByServiceOptionalParams,
  PrivateEndpointConnectionsListByServiceResponse,
  PrivateEndpointConnectionsUpdateOptionalParams,
  PrivateEndpointConnectionsUpdateResponse,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsDeleteOptionalParams,
  PrivateEndpointConnectionsDeleteResponse,
  PrivateEndpointConnectionsListByServiceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: SearchManagementClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: SearchManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all private endpoint connections in the given service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the search service associated with the specified resource
   *                          group.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      searchServiceName,
      options
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
        return this.listByServicePagingPage(
          resourceGroupName,
          searchServiceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    searchServiceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result: PrivateEndpointConnectionsListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        searchServiceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        searchServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    searchServiceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      searchServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Updates a Private Endpoint connection to the search service in the given resource group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the search service associated with the specified resource
   *                          group.
   * @param privateEndpointConnectionName The name of the private endpoint connection to the search
   *                                      service with the specified resource group.
   * @param privateEndpointConnection The definition of the private endpoint connection to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    searchServiceName: string,
    privateEndpointConnectionName: string,
    privateEndpointConnection: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        privateEndpointConnectionName,
        privateEndpointConnection,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Gets the details of the private endpoint connection to the search service in the given resource
   * group.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the search service associated with the specified resource
   *                          group.
   * @param privateEndpointConnectionName The name of the private endpoint connection to the search
   *                                      service with the specified resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    searchServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Disconnects the private endpoint connection and deletes it from the search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the search service associated with the specified resource
   *                          group.
   * @param privateEndpointConnectionName The name of the private endpoint connection to the search
   *                                      service with the specified resource group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    searchServiceName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<PrivateEndpointConnectionsDeleteResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        privateEndpointConnectionName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Gets a list of all private endpoint connections in the given service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the search service associated with the specified resource
   *                          group.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    searchServiceName: string,
    options?: PrivateEndpointConnectionsListByServiceOptionalParams
  ): Promise<PrivateEndpointConnectionsListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, options },
      listByServiceOperationSpec
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   *                          obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the search service associated with the specified resource
   *                          group.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    searchServiceName: string,
    nextLink: string,
    options?: PrivateEndpointConnectionsListByServiceNextOptionalParams
  ): Promise<PrivateEndpointConnectionsListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, searchServiceName, nextLink, options },
      listByServiceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.privateEndpointConnection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId,
    Parameters.contentType
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
