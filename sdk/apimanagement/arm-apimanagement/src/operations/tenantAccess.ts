/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { TenantAccess } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  AccessInformationContract,
  TenantAccessListByServiceNextOptionalParams,
  TenantAccessListByServiceOptionalParams,
  TenantAccessListByServiceResponse,
  AccessIdName,
  TenantAccessGetEntityTagOptionalParams,
  TenantAccessGetEntityTagResponse,
  TenantAccessGetOptionalParams,
  TenantAccessGetResponse,
  AccessInformationCreateParameters,
  TenantAccessCreateOptionalParams,
  TenantAccessCreateResponse,
  AccessInformationUpdateParameters,
  TenantAccessUpdateOptionalParams,
  TenantAccessUpdateResponse,
  TenantAccessRegeneratePrimaryKeyOptionalParams,
  TenantAccessRegenerateSecondaryKeyOptionalParams,
  TenantAccessListSecretsOptionalParams,
  TenantAccessListSecretsResponse,
  TenantAccessListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TenantAccess operations. */
export class TenantAccessImpl implements TenantAccess {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class TenantAccess class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Returns list of access infos - for Git and Management endpoints.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: TenantAccessListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<AccessInformationContract> {
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
    options?: TenantAccessListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AccessInformationContract[]> {
    let result: TenantAccessListByServiceResponse;
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
    options?: TenantAccessListByServiceOptionalParams,
  ): AsyncIterableIterator<AccessInformationContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Returns list of access infos - for Git and Management endpoints.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: TenantAccessListByServiceOptionalParams,
  ): Promise<TenantAccessListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Tenant access metadata
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessGetEntityTagOptionalParams,
  ): Promise<TenantAccessGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, accessName, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Get tenant access information details without secrets.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessGetOptionalParams,
  ): Promise<TenantAccessGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, accessName, options },
      getOperationSpec,
    );
  }

  /**
   * Update tenant access information details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    ifMatch: string,
    parameters: AccessInformationCreateParameters,
    options?: TenantAccessCreateOptionalParams,
  ): Promise<TenantAccessCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        ifMatch,
        parameters,
        options,
      },
      createOperationSpec,
    );
  }

  /**
   * Update tenant access information details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Parameters supplied to retrieve the Tenant Access Information.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    ifMatch: string,
    parameters: AccessInformationUpdateParameters,
    options?: TenantAccessUpdateOptionalParams,
  ): Promise<TenantAccessUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        accessName,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Regenerate primary access key
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  regeneratePrimaryKey(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessRegeneratePrimaryKeyOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, accessName, options },
      regeneratePrimaryKeyOperationSpec,
    );
  }

  /**
   * Regenerate secondary access key
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  regenerateSecondaryKey(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessRegenerateSecondaryKeyOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, accessName, options },
      regenerateSecondaryKeyOperationSpec,
    );
  }

  /**
   * Get tenant access information details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param accessName The identifier of the Access configuration.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    serviceName: string,
    accessName: AccessIdName,
    options?: TenantAccessListSecretsOptionalParams,
  ): Promise<TenantAccessListSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, accessName, options },
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
    options?: TenantAccessListByServiceNextOptionalParams,
  ): Promise<TenantAccessListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion],
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.TenantAccessGetEntityTagHeaders,
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
    Parameters.accessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationContract,
      headersMapper: Mappers.TenantAccessGetHeaders,
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
    Parameters.accessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationContract,
      headersMapper: Mappers.TenantAccessCreateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters79,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationContract,
      headersMapper: Mappers.TenantAccessUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters80,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.accessName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch1,
  ],
  mediaType: "json",
  serializer,
};
const regeneratePrimaryKeyOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/regeneratePrimaryKey",
  httpMethod: "POST",
  responses: {
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
    Parameters.accessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const regenerateSecondaryKeyOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/regenerateSecondaryKey",
  httpMethod: "POST",
  responses: {
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
    Parameters.accessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/tenant/{accessName}/listSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationSecretsContract,
      headersMapper: Mappers.TenantAccessListSecretsHeaders,
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
    Parameters.accessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessInformationCollection,
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
