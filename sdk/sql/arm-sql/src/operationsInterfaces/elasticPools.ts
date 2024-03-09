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
  ElasticPool,
  ElasticPoolsListByServerOptionalParams,
  ElasticPoolsGetOptionalParams,
  ElasticPoolsGetResponse,
  ElasticPoolsCreateOrUpdateOptionalParams,
  ElasticPoolsCreateOrUpdateResponse,
  ElasticPoolsDeleteOptionalParams,
  ElasticPoolUpdate,
  ElasticPoolsUpdateOptionalParams,
  ElasticPoolsUpdateResponse,
  ElasticPoolsFailoverOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ElasticPools. */
export interface ElasticPools {
  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ElasticPool>;
  /**
   * Gets an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsGetOptionalParams,
  ): Promise<ElasticPoolsGetResponse>;
  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: ElasticPoolsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ElasticPoolsCreateOrUpdateResponse>,
      ElasticPoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: ElasticPoolsCreateOrUpdateOptionalParams,
  ): Promise<ElasticPoolsCreateOrUpdateResponse>;
  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: ElasticPoolsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ElasticPoolsUpdateResponse>,
      ElasticPoolsUpdateResponse
    >
  >;
  /**
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: ElasticPoolsUpdateOptionalParams,
  ): Promise<ElasticPoolsUpdateResponse>;
  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  beginFailover(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsFailoverOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  beginFailoverAndWait(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolsFailoverOptionalParams,
  ): Promise<void>;
}
