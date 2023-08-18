/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PolicyContract,
  ProductPolicyListByProductOptionalParams,
  PolicyIdName,
  ProductPolicyGetEntityTagOptionalParams,
  ProductPolicyGetEntityTagResponse,
  ProductPolicyGetOptionalParams,
  ProductPolicyGetResponse,
  ProductPolicyCreateOrUpdateOptionalParams,
  ProductPolicyCreateOrUpdateResponse,
  ProductPolicyDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ProductPolicy. */
export interface ProductPolicy {
  /**
   * Get the policy configuration at the Product level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    options?: ProductPolicyListByProductOptionalParams
  ): PagedAsyncIterableIterator<PolicyContract>;
  /**
   * Get the ETag of the policy configuration at the Product level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    policyId: PolicyIdName,
    options?: ProductPolicyGetEntityTagOptionalParams
  ): Promise<ProductPolicyGetEntityTagResponse>;
  /**
   * Get the policy configuration at the Product level.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    policyId: PolicyIdName,
    options?: ProductPolicyGetOptionalParams
  ): Promise<ProductPolicyGetResponse>;
  /**
   * Creates or updates policy configuration for the Product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param parameters The policy contents to apply.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    policyId: PolicyIdName,
    parameters: PolicyContract,
    options?: ProductPolicyCreateOrUpdateOptionalParams
  ): Promise<ProductPolicyCreateOrUpdateResponse>;
  /**
   * Deletes the policy configuration at the Product.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param productId Product identifier. Must be unique in the current API Management service instance.
   * @param policyId The identifier of the Policy.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    productId: string,
    policyId: PolicyIdName,
    ifMatch: string,
    options?: ProductPolicyDeleteOptionalParams
  ): Promise<void>;
}
