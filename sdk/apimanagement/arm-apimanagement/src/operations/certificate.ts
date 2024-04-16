/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Certificate } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  CertificateContract,
  CertificateListByServiceNextOptionalParams,
  CertificateListByServiceOptionalParams,
  CertificateListByServiceResponse,
  CertificateGetEntityTagOptionalParams,
  CertificateGetEntityTagResponse,
  CertificateGetOptionalParams,
  CertificateGetResponse,
  CertificateCreateOrUpdateParameters,
  CertificateCreateOrUpdateOptionalParams,
  CertificateCreateOrUpdateResponse,
  CertificateDeleteOptionalParams,
  CertificateRefreshSecretOptionalParams,
  CertificateRefreshSecretResponse,
  CertificateListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Certificate operations. */
export class CertificateImpl implements Certificate {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class Certificate class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of all certificates in the specified service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: CertificateListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<CertificateContract> {
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
    options?: CertificateListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<CertificateContract[]> {
    let result: CertificateListByServiceResponse;
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
    options?: CertificateListByServiceOptionalParams,
  ): AsyncIterableIterator<CertificateContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of all certificates in the specified service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: CertificateListByServiceOptionalParams,
  ): Promise<CertificateListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the certificate specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    certificateId: string,
    options?: CertificateGetEntityTagOptionalParams,
  ): Promise<CertificateGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, certificateId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the certificate specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    certificateId: string,
    options?: CertificateGetOptionalParams,
  ): Promise<CertificateGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, certificateId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates the certificate being used for authentication with the backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param parameters Create or Update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    certificateId: string,
    parameters: CertificateCreateOrUpdateParameters,
    options?: CertificateCreateOrUpdateOptionalParams,
  ): Promise<CertificateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, certificateId, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes specific certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    certificateId: string,
    ifMatch: string,
    options?: CertificateDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, certificateId, ifMatch, options },
      deleteOperationSpec,
    );
  }

  /**
   * From KeyVault, Refresh the certificate being used for authentication with the backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  refreshSecret(
    resourceGroupName: string,
    serviceName: string,
    certificateId: string,
    options?: CertificateRefreshSecretOptionalParams,
  ): Promise<CertificateRefreshSecretResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, certificateId, options },
      refreshSecretOperationSpec,
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
    options?: CertificateListByServiceNextOptionalParams,
  ): Promise<CertificateListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection,
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
    Parameters.isKeyVaultRefreshFailed,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.CertificateGetEntityTagHeaders,
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
    Parameters.certificateId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.CertificateGetHeaders,
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
    Parameters.certificateId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.CertificateCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.CertificateCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters32,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.certificateId,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}",
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
    Parameters.certificateId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const refreshSecretOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId}/refreshSecret",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.CertificateRefreshSecretHeaders,
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
    Parameters.certificateId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection,
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
