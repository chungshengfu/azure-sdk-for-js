/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceProductApiLink } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ProductApiLinkContract,
  WorkspaceProductApiLinkListByProductNextOptionalParams,
  WorkspaceProductApiLinkListByProductOptionalParams,
  WorkspaceProductApiLinkListByProductResponse,
  WorkspaceProductApiLinkGetOptionalParams,
  WorkspaceProductApiLinkGetResponse,
  WorkspaceProductApiLinkCreateOrUpdateOptionalParams,
  WorkspaceProductApiLinkCreateOrUpdateResponse,
  WorkspaceProductApiLinkDeleteOptionalParams,
  WorkspaceProductApiLinkListByProductNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceProductApiLink operations. */
export class WorkspaceProductApiLinkImpl implements WorkspaceProductApiLink {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceProductApiLink class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the API links associated with a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    options?: WorkspaceProductApiLinkListByProductOptionalParams,
  ): PagedAsyncIterableIterator<ProductApiLinkContract> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
      productId,
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
          productId,
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
    productId: string,
    options?: WorkspaceProductApiLinkListByProductOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ProductApiLinkContract[]> {
    let result: WorkspaceProductApiLinkListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
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
        productId,
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
    productId: string,
    options?: WorkspaceProductApiLinkListByProductOptionalParams,
  ): AsyncIterableIterator<ProductApiLinkContract> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      productId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the API links associated with a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    options?: WorkspaceProductApiLinkListByProductOptionalParams,
  ): Promise<WorkspaceProductApiLinkListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, productId, options },
      listByProductOperationSpec,
    );
  }

  /**
   * Gets the API link for the product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiLinkId Product-API link identifier. Must be unique in the current API Management service
   *                  instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    apiLinkId: string,
    options?: WorkspaceProductApiLinkGetOptionalParams,
  ): Promise<WorkspaceProductApiLinkGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        apiLinkId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Adds an API to the specified product via link.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiLinkId Product-API link identifier. Must be unique in the current API Management service
   *                  instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    apiLinkId: string,
    parameters: ProductApiLinkContract,
    options?: WorkspaceProductApiLinkCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceProductApiLinkCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        apiLinkId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified API from the specified product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiLinkId Product-API link identifier. Must be unique in the current API Management service
   *                  instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    apiLinkId: string,
    options?: WorkspaceProductApiLinkDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
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
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    nextLink: string,
    options?: WorkspaceProductApiLinkListByProductNextOptionalParams,
  ): Promise<WorkspaceProductApiLinkListByProductNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        nextLink,
        options,
      },
      listByProductNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/apiLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductApiLinkCollection,
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
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/apiLinks/{apiLinkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductApiLinkContract,
      headersMapper: Mappers.WorkspaceProductApiLinkGetHeaders,
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
    Parameters.productId,
    Parameters.apiLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/apiLinks/{apiLinkId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProductApiLinkContract,
    },
    201: {
      bodyMapper: Mappers.ProductApiLinkContract,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters75,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.apiLinkId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}/apiLinks/{apiLinkId}",
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
    Parameters.productId,
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
      bodyMapper: Mappers.ProductApiLinkCollection,
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
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
