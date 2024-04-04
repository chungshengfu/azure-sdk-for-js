/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceProduct } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ProductContract,
  WorkspaceProductListByServiceNextOptionalParams,
  WorkspaceProductListByServiceOptionalParams,
  WorkspaceProductListByServiceResponse,
  WorkspaceProductGetEntityTagOptionalParams,
  WorkspaceProductGetEntityTagResponse,
  WorkspaceProductGetOptionalParams,
  WorkspaceProductGetResponse,
  WorkspaceProductCreateOrUpdateOptionalParams,
  WorkspaceProductCreateOrUpdateResponse,
  ProductUpdateParameters,
  WorkspaceProductUpdateOptionalParams,
  WorkspaceProductUpdateResponse,
  WorkspaceProductDeleteOptionalParams,
  WorkspaceProductListByServiceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceProduct operations. */
export class WorkspaceProductImpl implements WorkspaceProduct {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceProduct class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of products in the specified workspace in a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceProductListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<ProductContract> {
    const iter = this.listByServicePagingAll(
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceProductListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ProductContract[]> {
    let result: WorkspaceProductListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
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
      result = await this._listByServiceNext(
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

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceProductListByServiceOptionalParams,
  ): AsyncIterableIterator<ProductContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of products in the specified workspace in a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceProductListByServiceOptionalParams,
  ): Promise<WorkspaceProductListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of the product specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    options?: WorkspaceProductGetEntityTagOptionalParams,
  ): Promise<WorkspaceProductGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, productId, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets the details of the product specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    options?: WorkspaceProductGetOptionalParams,
  ): Promise<WorkspaceProductGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, productId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or Updates a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    parameters: ProductContract,
    options?: WorkspaceProductCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceProductCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update existing product details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    ifMatch: string,
    parameters: ProductUpdateParameters,
    options?: WorkspaceProductUpdateOptionalParams,
  ): Promise<WorkspaceProductUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        ifMatch,
        parameters,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Delete product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    productId: string,
    ifMatch: string,
    options?: WorkspaceProductDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceId,
        productId,
        ifMatch,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    nextLink: string,
    options?: WorkspaceProductListByServiceNextOptionalParams,
  ): Promise<WorkspaceProductListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductCollection,
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
    Parameters.tags,
    Parameters.expandGroups,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspaceProductGetEntityTagHeaders,
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
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductContract,
      headersMapper: Mappers.WorkspaceProductGetHeaders,
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
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProductContract,
      headersMapper: Mappers.WorkspaceProductCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.ProductContract,
      headersMapper: Mappers.WorkspaceProductCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters72,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
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
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProductContract,
      headersMapper: Mappers.WorkspaceProductUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters73,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.workspaceId,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/products/{productId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.deleteSubscriptions],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductCollection,
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
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
