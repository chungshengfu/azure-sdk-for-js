/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GraphQLApiResolver } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ResolverContract,
  GraphQLApiResolverListByApiNextOptionalParams,
  GraphQLApiResolverListByApiOptionalParams,
  GraphQLApiResolverListByApiResponse,
  GraphQLApiResolverGetEntityTagOptionalParams,
  GraphQLApiResolverGetEntityTagResponse,
  GraphQLApiResolverGetOptionalParams,
  GraphQLApiResolverGetResponse,
  GraphQLApiResolverCreateOrUpdateOptionalParams,
  GraphQLApiResolverCreateOrUpdateResponse,
  ResolverUpdateContract,
  GraphQLApiResolverUpdateOptionalParams,
  GraphQLApiResolverUpdateResponse,
  GraphQLApiResolverDeleteOptionalParams,
  GraphQLApiResolverListByApiNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GraphQLApiResolver operations. */
export class GraphQLApiResolverImpl implements GraphQLApiResolver {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class GraphQLApiResolver class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the resolvers for the specified GraphQL API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  public listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: GraphQLApiResolverListByApiOptionalParams
  ): PagedAsyncIterableIterator<ResolverContract> {
    const iter = this.listByApiPagingAll(
      resourceGroupName,
      serviceName,
      apiId,
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
        return this.listByApiPagingPage(
          resourceGroupName,
          serviceName,
          apiId,
          options,
          settings
        );
      }
    };
  }

  private async *listByApiPagingPage(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: GraphQLApiResolverListByApiOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResolverContract[]> {
    let result: GraphQLApiResolverListByApiResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByApi(
        resourceGroupName,
        serviceName,
        apiId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByApiNext(
        resourceGroupName,
        serviceName,
        apiId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByApiPagingAll(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: GraphQLApiResolverListByApiOptionalParams
  ): AsyncIterableIterator<ResolverContract> {
    for await (const page of this.listByApiPagingPage(
      resourceGroupName,
      serviceName,
      apiId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the resolvers for the specified GraphQL API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  private _listByApi(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    options?: GraphQLApiResolverListByApiOptionalParams
  ): Promise<GraphQLApiResolverListByApiResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, options },
      listByApiOperationSpec
    );
  }

  /**
   * Gets the entity state (Etag) version of the GraphQL API resolver specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param resolverId Resolver identifier within a GraphQL API. Must be unique in the current API
   *                   Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    resolverId: string,
    options?: GraphQLApiResolverGetEntityTagOptionalParams
  ): Promise<GraphQLApiResolverGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, resolverId, options },
      getEntityTagOperationSpec
    );
  }

  /**
   * Gets the details of the GraphQL API Resolver specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param resolverId Resolver identifier within a GraphQL API. Must be unique in the current API
   *                   Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    resolverId: string,
    options?: GraphQLApiResolverGetOptionalParams
  ): Promise<GraphQLApiResolverGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, resolverId, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new resolver in the GraphQL API or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param resolverId Resolver identifier within a GraphQL API. Must be unique in the current API
   *                   Management service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    resolverId: string,
    parameters: ResolverContract,
    options?: GraphQLApiResolverCreateOrUpdateOptionalParams
  ): Promise<GraphQLApiResolverCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        resolverId,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates the details of the resolver in the GraphQL API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param resolverId Resolver identifier within a GraphQL API. Must be unique in the current API
   *                   Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters GraphQL API Resolver Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    resolverId: string,
    ifMatch: string,
    parameters: ResolverUpdateContract,
    options?: GraphQLApiResolverUpdateOptionalParams
  ): Promise<GraphQLApiResolverUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        apiId,
        resolverId,
        ifMatch,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Deletes the specified resolver in the GraphQL API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param resolverId Resolver identifier within a GraphQL API. Must be unique in the current API
   *                   Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    resolverId: string,
    ifMatch: string,
    options?: GraphQLApiResolverDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, resolverId, ifMatch, options },
      deleteOperationSpec
    );
  }

  /**
   * ListByApiNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param nextLink The nextLink from the previous successful call to the ListByApi method.
   * @param options The options parameters.
   */
  private _listByApiNext(
    resourceGroupName: string,
    serviceName: string,
    apiId: string,
    nextLink: string,
    options?: GraphQLApiResolverListByApiNextOptionalParams
  ): Promise<GraphQLApiResolverListByApiNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, apiId, nextLink, options },
      listByApiNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByApiOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/resolvers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResolverCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/resolvers/{resolverId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GraphQLApiResolverGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.resolverId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/resolvers/{resolverId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResolverContract,
      headersMapper: Mappers.GraphQLApiResolverGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.resolverId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/resolvers/{resolverId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResolverContract,
      headersMapper: Mappers.GraphQLApiResolverCreateOrUpdateHeaders
    },
    201: {
      bodyMapper: Mappers.ResolverContract,
      headersMapper: Mappers.GraphQLApiResolverCreateOrUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters7,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.resolverId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/resolvers/{resolverId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResolverContract,
      headersMapper: Mappers.GraphQLApiResolverUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.resolverId
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/apis/{apiId}/resolvers/{resolverId}",
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
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.resolverId
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer
};
const listByApiNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResolverCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.apiId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
