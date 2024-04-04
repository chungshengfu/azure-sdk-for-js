/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceCertificate } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  CertificateContract,
  WorkspaceCertificateListByWorkspaceNextOptionalParams,
  WorkspaceCertificateListByWorkspaceOptionalParams,
  WorkspaceCertificateListByWorkspaceResponse,
  WorkspaceCertificateGetEntityTagOptionalParams,
  WorkspaceCertificateGetEntityTagResponse,
  WorkspaceCertificateGetOptionalParams,
  WorkspaceCertificateGetResponse,
  CertificateCreateOrUpdateParameters,
  WorkspaceCertificateCreateOrUpdateOptionalParams,
  WorkspaceCertificateCreateOrUpdateResponse,
  WorkspaceCertificateDeleteOptionalParams,
  WorkspaceCertificateRefreshSecretOptionalParams,
  WorkspaceCertificateRefreshSecretResponse,
  WorkspaceCertificateListByWorkspaceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceCertificate operations. */
export class WorkspaceCertificateImpl implements WorkspaceCertificate {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceCertificate class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of all certificates in the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceCertificateListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<CertificateContract> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceCertificateListByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<CertificateContract[]> {
    let result: WorkspaceCertificateListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        serviceName,
        workspaceId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceCertificateListByWorkspaceOptionalParams,
  ): AsyncIterableIterator<CertificateContract> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of all certificates in the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceCertificateListByWorkspaceOptionalParams,
  ): Promise<WorkspaceCertificateListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, options },
      listByWorkspaceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the certificate specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    certificateId: string,
    options?: WorkspaceCertificateGetEntityTagOptionalParams,
  ): Promise<WorkspaceCertificateGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, certificateId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the certificate specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    certificateId: string,
    options?: WorkspaceCertificateGetOptionalParams,
  ): Promise<WorkspaceCertificateGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, certificateId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates the certificate being used for authentication with the backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param parameters Create or Update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    certificateId: string,
    parameters: CertificateCreateOrUpdateParameters,
    options?: WorkspaceCertificateCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceCertificateCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        certificateId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes specific certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    certificateId: string,
    ifMatch: string,
    options?: WorkspaceCertificateDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        certificateId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * From KeyVault, Refresh the certificate being used for authentication with the backend.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param certificateId Identifier of the certificate entity. Must be unique in the current API
   *                      Management service instance.
   * @param options The options parameters.
   */
  refreshSecret(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    certificateId: string,
    options?: WorkspaceCertificateRefreshSecretOptionalParams,
  ): Promise<WorkspaceCertificateRefreshSecretResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, certificateId, options },
      refreshSecretOperationSpec,
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    nextLink: string,
    options?: WorkspaceCertificateListByWorkspaceNextOptionalParams,
  ): Promise<WorkspaceCertificateListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, nextLink, options },
      listByWorkspaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.isKeyVaultRefreshFailed,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/certificates/{certificateId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceCertificateGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.certificateId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/certificates/{certificateId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.WorkspaceCertificateGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.certificateId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/certificates/{certificateId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.WorkspaceCertificateCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.WorkspaceCertificateCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.certificateId,
    Parameters.workspaceId,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/certificates/{certificateId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.certificateId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const refreshSecretOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/certificates/{certificateId}/refreshSecret",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateContract,
      headersMapper: Mappers.WorkspaceCertificateRefreshSecretHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.certificateId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
