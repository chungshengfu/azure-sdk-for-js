/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceTagApiLink } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  TagApiLinkContract,
  WorkspaceTagApiLinkListByProductNextOptionalParams,
  WorkspaceTagApiLinkListByProductOptionalParams,
  WorkspaceTagApiLinkListByProductResponse,
  WorkspaceTagApiLinkGetOptionalParams,
  WorkspaceTagApiLinkGetResponse,
  WorkspaceTagApiLinkCreateOrUpdateOptionalParams,
  WorkspaceTagApiLinkCreateOrUpdateResponse,
  WorkspaceTagApiLinkDeleteOptionalParams,
  WorkspaceTagApiLinkListByProductNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceTagApiLink operations. */
export class WorkspaceTagApiLinkImpl implements WorkspaceTagApiLink {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceTagApiLink class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the API links associated with a tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagApiLinkListByProductOptionalParams,
  ): PagedAsyncIterableIterator<TagApiLinkContract> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
      tagId,
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
        return this.listByProductPagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          tagId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByProductPagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagApiLinkListByProductOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TagApiLinkContract[]> {
    let result: WorkspaceTagApiLinkListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByProductNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByProductPagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagApiLinkListByProductOptionalParams,
  ): AsyncIterableIterator<TagApiLinkContract> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      tagId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the API links associated with a tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    options?: WorkspaceTagApiLinkListByProductOptionalParams,
  ): Promise<WorkspaceTagApiLinkListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, tagId, options },
      listByProductOperationSpec,
    );
  }

  /**
   * Gets the API link for the tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param apiLinkId Tag-API link identifier. Must be unique in the current API Management service
   *                  instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    apiLinkId: string,
    options?: WorkspaceTagApiLinkGetOptionalParams,
  ): Promise<WorkspaceTagApiLinkGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        apiLinkId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Adds an API to the specified tag via link.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param apiLinkId Tag-API link identifier. Must be unique in the current API Management service
   *                  instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    apiLinkId: string,
    parameters: TagApiLinkContract,
    options?: WorkspaceTagApiLinkCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceTagApiLinkCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        apiLinkId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified API from the specified tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param apiLinkId Tag-API link identifier. Must be unique in the current API Management service
   *                  instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    apiLinkId: string,
    options?: WorkspaceTagApiLinkDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        tagId,
        apiLinkId,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByProductNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    tagId: string,
    nextLink: string,
    options?: WorkspaceTagApiLinkListByProductNextOptionalParams,
  ): Promise<WorkspaceTagApiLinkListByProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, tagId, nextLink, options },
      listByProductNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/apiLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagApiLinkCollection,
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
    Parameters.tagId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/apiLinks/{apiLinkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagApiLinkContract,
      headersMapper: Mappers.WorkspaceTagApiLinkGetHeaders,
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
    Parameters.tagId,
    Parameters.apiLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/apiLinks/{apiLinkId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagApiLinkContract,
    },
    201: {
      bodyMapper: Mappers.TagApiLinkContract,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters81,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.tagId,
    Parameters.apiLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/tags/{tagId}/apiLinks/{apiLinkId}",
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
    Parameters.tagId,
    Parameters.apiLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagApiLinkCollection,
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
    Parameters.tagId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
