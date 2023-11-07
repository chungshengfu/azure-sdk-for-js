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
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListOptionalParams,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsPutOptionalParams,
  PrivateEndpointConnectionsPutResponse,
  PrivateEndpointConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * Lists all the private endpoint connections associated with the RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateEndpointConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets the specified private endpoint connection associated with the RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Updates the state of the specified private endpoint connection associated with the RedisEnterprise
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  beginPut(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsPutOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointConnectionsPutResponse>,
      PrivateEndpointConnectionsPutResponse
    >
  >;
  /**
   * Updates the state of the specified private endpoint connection associated with the RedisEnterprise
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param properties The private endpoint connection properties.
   * @param options The options parameters.
   */
  beginPutAndWait(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsPutOptionalParams
  ): Promise<PrivateEndpointConnectionsPutResponse>;
  /**
   * Deletes the specified private endpoint connection associated with the RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified private endpoint connection associated with the RedisEnterprise cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the RedisEnterprise cluster.
   * @param privateEndpointConnectionName The name of the private endpoint connection associated with the
   *                                      Azure resource
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void>;
}
