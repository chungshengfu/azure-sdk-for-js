/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProductGroupLink } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  ProductGroupLinkContract,
  ProductGroupLinkListByProductNextOptionalParams,
  ProductGroupLinkListByProductOptionalParams,
  ProductGroupLinkListByProductResponse,
  ProductGroupLinkGetOptionalParams,
  ProductGroupLinkGetResponse,
  ProductGroupLinkCreateOrUpdateOptionalParams,
  ProductGroupLinkCreateOrUpdateResponse,
  ProductGroupLinkDeleteOptionalParams,
  ProductGroupLinkListByProductNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProductGroupLink operations. */
export class ProductGroupLinkImpl implements ProductGroupLink {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ProductGroupLink class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Lists a collection of the group links associated with a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  public listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupLinkListByProductOptionalParams,
  ): PagedAsyncIterableIterator<ProductGroupLinkContract> {
    const iter = this.listByProductPagingAll(
      resourceGroupName,
      serviceName,
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
    productId: string,
    options?: ProductGroupLinkListByProductOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ProductGroupLinkContract[]> {
    let result: ProductGroupLinkListByProductResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByProduct(
        resourceGroupName,
        serviceName,
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
    productId: string,
    options?: ProductGroupLinkListByProductOptionalParams,
  ): AsyncIterableIterator<ProductGroupLinkContract> {
    for await (const page of this.listByProductPagingPage(
      resourceGroupName,
      serviceName,
      productId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists a collection of the group links associated with a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  private _listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupLinkListByProductOptionalParams,
  ): Promise<ProductGroupLinkListByProductResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, options },
      listByProductOperationSpec,
    );
  }

  /**
   * Gets the group link for the product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param groupLinkId Product-Group link identifier. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    groupLinkId: string,
    options?: ProductGroupLinkGetOptionalParams,
  ): Promise<ProductGroupLinkGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, groupLinkId, options },
      getOperationSpec,
    );
  }

  /**
   * Adds a group to the specified product via link.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param groupLinkId Product-Group link identifier. Must be unique in the current API Management
   *                    service instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    groupLinkId: string,
    parameters: ProductGroupLinkContract,
    options?: ProductGroupLinkCreateOrUpdateOptionalParams,
  ): Promise<ProductGroupLinkCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        productId,
        groupLinkId,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the specified group from the specified product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param groupLinkId Product-Group link identifier. Must be unique in the current API Management
   *                    service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    groupLinkId: string,
    options?: ProductGroupLinkDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, groupLinkId, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByProductNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param nextLink The nextLink from the previous successful call to the ListByProduct method.
   * @param options The options parameters.
   */
  private _listByProductNext(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    nextLink: string,
    options?: ProductGroupLinkListByProductNextOptionalParams,
  ): Promise<ProductGroupLinkListByProductNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, productId, nextLink, options },
      listByProductNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProductOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groupLinks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductGroupLinkCollection,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groupLinks/{groupLinkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductGroupLinkContract,
      headersMapper: Mappers.ProductGroupLinkGetHeaders,
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
    Parameters.groupLinkId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groupLinks/{groupLinkId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProductGroupLinkContract,
    },
    201: {
      bodyMapper: Mappers.ProductGroupLinkContract,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters76,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId,
    Parameters.productId,
    Parameters.groupLinkId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/products/{productId}/groupLinks/{groupLinkId}",
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
    Parameters.groupLinkId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByProductNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProductGroupLinkCollection,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
