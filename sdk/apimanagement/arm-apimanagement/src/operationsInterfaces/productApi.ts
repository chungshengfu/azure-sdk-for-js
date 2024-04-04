/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApiContract,
  ProductApiListByProductOptionalParams,
  ProductApiCheckEntityExistsOptionalParams,
  ProductApiCheckEntityExistsResponse,
  ProductApiCreateOrUpdateOptionalParams,
  ProductApiCreateOrUpdateResponse,
  ProductApiDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ProductApi. */
export interface ProductApi {
  /**
   * Lists a collection of the APIs associated with a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductApiListByProductOptionalParams,
  ): PagedAsyncIterableIterator<ApiContract>;
  /**
   * Checks that API entity specified by identifier is associated with the Product entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  checkEntityExists(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    apiId: string,
    options?: ProductApiCheckEntityExistsOptionalParams,
  ): Promise<ProductApiCheckEntityExistsResponse>;
  /**
   * Adds an API to the specified product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    apiId: string,
    options?: ProductApiCreateOrUpdateOptionalParams,
  ): Promise<ProductApiCreateOrUpdateResponse>;
  /**
   * Deletes the specified API from the specified product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    apiId: string,
    options?: ProductApiDeleteOptionalParams,
  ): Promise<void>;
}
