/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GatewayApi } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ApiContract,
  GatewayApiListByServiceNextOptionalParams,
  GatewayApiListByServiceOptionalParams,
  GatewayApiListByServiceResponse,
  GatewayApiGetEntityTagOptionalParams,
  GatewayApiGetEntityTagResponse,
  GatewayApiCreateOrUpdateOptionalParams,
  GatewayApiCreateOrUpdateResponse,
  GatewayApiDeleteOptionalParams,
  GatewayApiListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GatewayApi operations. */
export class GatewayApiImpl implements GatewayApi {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class GatewayApi class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the APIs associated with a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayApiListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<ApiContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      gatewayId,
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          gatewayId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayApiListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApiContract[]> {
    let result: GatewayApiListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        gatewayId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        gatewayId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayApiListByServiceOptionalParams,
  ): AsyncIterableIterator<ApiContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      gatewayId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the APIs associated with a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    options?: GatewayApiListByServiceOptionalParams,
  ): Promise<GatewayApiListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Checks that API entity specified by identifier is associated with the Gateway entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    apiId: string,
    options?: GatewayApiGetEntityTagOptionalParams,
  ): Promise<GatewayApiGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, apiId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Adds an API to the specified Gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    apiId: string,
    options?: GatewayApiCreateOrUpdateOptionalParams,
  ): Promise<GatewayApiCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, apiId, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified API from the specified Gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    apiId: string,
    options?: GatewayApiDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, apiId, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param gatewayId Gateway entity identifier. Must be unique in the current API Management service
   *                  instance. Must not have value 'managed'
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    gatewayId: string,
    nextLink: string,
    options?: GatewayApiListByServiceNextOptionalParams,
  ): Promise<GatewayApiListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, gatewayId, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.gatewayId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis/{apiId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GatewayApiGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1,
    Parameters.gatewayId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis/{apiId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiContract,
    },
    201: {
      bodyMapper: Mappers.ApiContract,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters50,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1,
    Parameters.gatewayId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/gateways/{gatewayId}/apis/{apiId}",
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
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId1,
    Parameters.gatewayId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.gatewayId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
