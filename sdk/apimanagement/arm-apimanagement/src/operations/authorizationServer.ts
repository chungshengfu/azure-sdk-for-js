/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AuthorizationServer } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  AuthorizationServerContract,
  AuthorizationServerListByServiceNextOptionalParams,
  AuthorizationServerListByServiceOptionalParams,
  AuthorizationServerListByServiceResponse,
  AuthorizationServerGetEntityTagOptionalParams,
  AuthorizationServerGetEntityTagResponse,
  AuthorizationServerGetOptionalParams,
  AuthorizationServerGetResponse,
  AuthorizationServerCreateOrUpdateOptionalParams,
  AuthorizationServerCreateOrUpdateResponse,
  AuthorizationServerUpdateContract,
  AuthorizationServerUpdateOptionalParams,
  AuthorizationServerUpdateResponse,
  AuthorizationServerDeleteOptionalParams,
  AuthorizationServerListSecretsOptionalParams,
  AuthorizationServerListSecretsResponse,
  AuthorizationServerListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AuthorizationServer operations. */
export class AuthorizationServerImpl implements AuthorizationServer {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class AuthorizationServer class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of authorization servers defined within a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: AuthorizationServerListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<AuthorizationServerContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
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
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    options?: AuthorizationServerListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AuthorizationServerContract[]> {
    let result: AuthorizationServerListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
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
    options?: AuthorizationServerListByServiceOptionalParams,
  ): AsyncIterableIterator<AuthorizationServerContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of authorization servers defined within a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: AuthorizationServerListByServiceOptionalParams,
  ): Promise<AuthorizationServerListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the authorizationServer specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authsid Identifier of the authorization server.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    authsid: string,
    options?: AuthorizationServerGetEntityTagOptionalParams,
  ): Promise<AuthorizationServerGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, authsid, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the authorization server specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authsid Identifier of the authorization server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    authsid: string,
    options?: AuthorizationServerGetOptionalParams,
  ): Promise<AuthorizationServerGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, authsid, options },
      getOperationSpec,
    );
  }

  /**
   * Creates new authorization server or updates an existing authorization server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authsid Identifier of the authorization server.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    authsid: string,
    parameters: AuthorizationServerContract,
    options?: AuthorizationServerCreateOrUpdateOptionalParams,
  ): Promise<AuthorizationServerCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, authsid, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates the details of the authorization server specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authsid Identifier of the authorization server.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters OAuth2 Server settings Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    authsid: string,
    ifMatch: string,
    parameters: AuthorizationServerUpdateContract,
    options?: AuthorizationServerUpdateOptionalParams,
  ): Promise<AuthorizationServerUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, authsid, ifMatch, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes specific authorization server instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authsid Identifier of the authorization server.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    authsid: string,
    ifMatch: string,
    options?: AuthorizationServerDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, authsid, ifMatch, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets the client secret details of the authorization server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param authsid Identifier of the authorization server.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    serviceName: string,
    authsid: string,
    options?: AuthorizationServerListSecretsOptionalParams,
  ): Promise<AuthorizationServerListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, authsid, options },
      listSecretsOperationSpec,
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    nextLink: string,
    options?: AuthorizationServerListByServiceNextOptionalParams,
  ): Promise<AuthorizationServerListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationServerCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers/{authsid}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AuthorizationServerGetEntityTagHeaders,
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
    Parameters.authsid,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers/{authsid}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationServerContract,
      headersMapper: Mappers.AuthorizationServerGetHeaders,
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
    Parameters.authsid,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers/{authsid}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationServerContract,
      headersMapper: Mappers.AuthorizationServerCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.AuthorizationServerContract,
      headersMapper: Mappers.AuthorizationServerCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.authsid,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers/{authsid}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationServerContract,
      headersMapper: Mappers.AuthorizationServerUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters28,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.authsid,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers/{authsid}",
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
    Parameters.authsid,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/authorizationServers/{authsid}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationServerSecretsContract,
      headersMapper: Mappers.AuthorizationServerListSecretsHeaders,
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
    Parameters.authsid,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AuthorizationServerCollection,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
