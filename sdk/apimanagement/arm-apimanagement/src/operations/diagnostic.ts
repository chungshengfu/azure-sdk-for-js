/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Diagnostic } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  DiagnosticContract,
  DiagnosticListByServiceNextOptionalParams,
  DiagnosticListByServiceOptionalParams,
  DiagnosticListByServiceResponse,
  DiagnosticGetEntityTagOptionalParams,
  DiagnosticGetEntityTagResponse,
  DiagnosticGetOptionalParams,
  DiagnosticGetResponse,
  DiagnosticCreateOrUpdateOptionalParams,
  DiagnosticCreateOrUpdateResponse,
  DiagnosticUpdateOptionalParams,
  DiagnosticUpdateResponse,
  DiagnosticDeleteOptionalParams,
  DiagnosticListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Diagnostic operations. */
export class DiagnosticImpl implements Diagnostic {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class Diagnostic class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists all diagnostics of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: DiagnosticListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<DiagnosticContract> {
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
    options?: DiagnosticListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DiagnosticContract[]> {
    let result: DiagnosticListByServiceResponse;
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
    options?: DiagnosticListByServiceOptionalParams,
  ): AsyncIterableIterator<DiagnosticContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all diagnostics of the API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: DiagnosticListByServiceOptionalParams,
  ): Promise<DiagnosticListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the Diagnostic specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    diagnosticId: string,
    options?: DiagnosticGetEntityTagOptionalParams,
  ): Promise<DiagnosticGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, diagnosticId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the Diagnostic specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    diagnosticId: string,
    options?: DiagnosticGetOptionalParams,
  ): Promise<DiagnosticGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, diagnosticId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new Diagnostic or updates an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    diagnosticId: string,
    parameters: DiagnosticContract,
    options?: DiagnosticCreateOrUpdateOptionalParams,
  ): Promise<DiagnosticCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, diagnosticId, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Updates the details of the Diagnostic specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Diagnostic Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    diagnosticId: string,
    ifMatch: string,
    parameters: DiagnosticContract,
    options?: DiagnosticUpdateOptionalParams,
  ): Promise<DiagnosticUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        diagnosticId,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Deletes the specified Diagnostic.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
   *                     instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    diagnosticId: string,
    ifMatch: string,
    options?: DiagnosticDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, diagnosticId, ifMatch, options },
      deleteOperationSpec,
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
    options?: DiagnosticListByServiceNextOptionalParams,
  ): Promise<DiagnosticListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/diagnostics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticCollection,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/diagnostics/{diagnosticId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.DiagnosticGetEntityTagHeaders,
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
    Parameters.diagnosticId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/diagnostics/{diagnosticId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.DiagnosticGetHeaders,
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
    Parameters.diagnosticId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/diagnostics/{diagnosticId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.DiagnosticCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.DiagnosticCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.diagnosticId,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/diagnostics/{diagnosticId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticContract,
      headersMapper: Mappers.DiagnosticUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.diagnosticId,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/diagnostics/{diagnosticId}",
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
    Parameters.diagnosticId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiagnosticCollection,
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
