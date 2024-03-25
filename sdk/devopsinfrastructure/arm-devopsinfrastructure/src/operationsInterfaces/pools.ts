/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Pool,
  PoolsListBySubscriptionOptionalParams,
  PoolsListByResourceGroupOptionalParams,
  PoolsGetOptionalParams,
  PoolsGetResponse,
  PoolsCreateOrUpdateOptionalParams,
  PoolsCreateOrUpdateResponse,
  PoolUpdate,
  PoolsUpdateOptionalParams,
  PoolsUpdateResponse,
  PoolsDeleteOptionalParams,
  PoolsDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Pools. */
export interface Pools {
  /**
   * List Pool resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: PoolsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Pool>;
  /**
   * List Pool resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: PoolsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Pool>;
  /**
   * Get a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    poolName: string,
    options?: PoolsGetOptionalParams,
  ): Promise<PoolsGetResponse>;
  /**
   * Create a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    poolName: string,
    resource: Pool,
    options?: PoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PoolsCreateOrUpdateResponse>,
      PoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    poolName: string,
    resource: Pool,
    options?: PoolsCreateOrUpdateOptionalParams,
  ): Promise<PoolsCreateOrUpdateResponse>;
  /**
   * Update a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    poolName: string,
    properties: PoolUpdate,
    options?: PoolsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<PoolsUpdateResponse>, PoolsUpdateResponse>
  >;
  /**
   * Update a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    poolName: string,
    properties: PoolUpdate,
    options?: PoolsUpdateOptionalParams,
  ): Promise<PoolsUpdateResponse>;
  /**
   * Delete a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    poolName: string,
    options?: PoolsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<PoolsDeleteResponse>, PoolsDeleteResponse>
  >;
  /**
   * Delete a Pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param poolName Name of the pool. It needs to be globally unique.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    poolName: string,
    options?: PoolsDeleteOptionalParams,
  ): Promise<PoolsDeleteResponse>;
}
