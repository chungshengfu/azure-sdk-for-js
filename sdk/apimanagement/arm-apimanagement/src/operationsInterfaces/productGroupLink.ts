/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ProductGroupLinkContract,
  ProductGroupLinkListByProductOptionalParams,
  ProductGroupLinkGetOptionalParams,
  ProductGroupLinkGetResponse,
  ProductGroupLinkCreateOrUpdateOptionalParams,
  ProductGroupLinkCreateOrUpdateResponse,
  ProductGroupLinkDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ProductGroupLink. */
export interface ProductGroupLink {
  /**
   * Lists a collection of the group links associated with a product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductGroupLinkListByProductOptionalParams
  ): PagedAsyncIterableIterator<ProductGroupLinkContract>;
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
    options?: ProductGroupLinkGetOptionalParams
  ): Promise<ProductGroupLinkGetResponse>;
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
    options?: ProductGroupLinkCreateOrUpdateOptionalParams
  ): Promise<ProductGroupLinkCreateOrUpdateResponse>;
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
    options?: ProductGroupLinkDeleteOptionalParams
  ): Promise<void>;
}
