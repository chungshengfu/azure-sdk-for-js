/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IdentityProvider } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  IdentityProviderContract,
  IdentityProviderListByServiceNextOptionalParams,
  IdentityProviderListByServiceOptionalParams,
  IdentityProviderListByServiceResponse,
  IdentityProviderType,
  IdentityProviderGetEntityTagOptionalParams,
  IdentityProviderGetEntityTagResponse,
  IdentityProviderGetOptionalParams,
  IdentityProviderGetResponse,
  IdentityProviderCreateContract,
  IdentityProviderCreateOrUpdateOptionalParams,
  IdentityProviderCreateOrUpdateResponse,
  IdentityProviderUpdateParameters,
  IdentityProviderUpdateOptionalParams,
  IdentityProviderUpdateResponse,
  IdentityProviderDeleteOptionalParams,
  IdentityProviderListSecretsOptionalParams,
  IdentityProviderListSecretsResponse,
  IdentityProviderListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IdentityProvider operations. */
export class IdentityProviderImpl implements IdentityProvider {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class IdentityProvider class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of Identity Provider configured in the specified service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: IdentityProviderListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<IdentityProviderContract> {
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
    options?: IdentityProviderListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IdentityProviderContract[]> {
    let result: IdentityProviderListByServiceResponse;
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
    options?: IdentityProviderListByServiceOptionalParams,
  ): AsyncIterableIterator<IdentityProviderContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of Identity Provider configured in the specified service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: IdentityProviderListByServiceOptionalParams,
  ): Promise<IdentityProviderListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the identityProvider specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    identityProviderName: IdentityProviderType,
    options?: IdentityProviderGetEntityTagOptionalParams,
  ): Promise<IdentityProviderGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, identityProviderName, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the configuration details of the identity Provider configured in specified service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    identityProviderName: IdentityProviderType,
    options?: IdentityProviderGetOptionalParams,
  ): Promise<IdentityProviderGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, identityProviderName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or Updates the IdentityProvider configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    identityProviderName: IdentityProviderType,
    parameters: IdentityProviderCreateContract,
    options?: IdentityProviderCreateOrUpdateOptionalParams,
  ): Promise<IdentityProviderCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates an existing IdentityProvider configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    identityProviderName: IdentityProviderType,
    ifMatch: string,
    parameters: IdentityProviderUpdateParameters,
    options?: IdentityProviderUpdateOptionalParams,
  ): Promise<IdentityProviderUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Deletes the specified identity provider configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    identityProviderName: IdentityProviderType,
    ifMatch: string,
    options?: IdentityProviderDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        identityProviderName,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Gets the client secret details of the Identity Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param identityProviderName Identity Provider Type identifier.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    serviceName: string,
    identityProviderName: IdentityProviderType,
    options?: IdentityProviderListSecretsOptionalParams,
  ): Promise<IdentityProviderListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, identityProviderName, options },
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
    options?: IdentityProviderListByServiceNextOptionalParams,
  ): Promise<IdentityProviderListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderList,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.IdentityProviderGetEntityTagHeaders,
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
    Parameters.identityProviderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderGetHeaders,
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
    Parameters.identityProviderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters57,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.identityProviderName,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderContract,
      headersMapper: Mappers.IdentityProviderUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters58,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.identityProviderName,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}",
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
    Parameters.identityProviderName,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/identityProviders/{identityProviderName}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ClientSecretContract,
      headersMapper: Mappers.IdentityProviderListSecretsHeaders,
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
    Parameters.identityProviderName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IdentityProviderList,
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
