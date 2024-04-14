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
  MongoCluster,
  MongoClustersListOptionalParams,
  MongoClustersListByResourceGroupOptionalParams,
  CheckNameAvailabilityRequest,
  MongoClustersCheckNameAvailabilityOptionalParams,
  MongoClustersCheckNameAvailabilityResponse,
  MongoClustersGetOptionalParams,
  MongoClustersGetResponse,
  MongoClustersCreateOrUpdateOptionalParams,
  MongoClustersCreateOrUpdateResponse,
  MongoClusterUpdate,
  MongoClustersUpdateOptionalParams,
  MongoClustersUpdateResponse,
  MongoClustersDeleteOptionalParams,
  MongoClustersDeleteResponse,
  MongoClustersListConnectionStringsOptionalParams,
  MongoClustersListConnectionStringsResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a MongoClusters. */
export interface MongoClusters {
  /**
   * List all the mongo clusters in a given subscription.
   * @param options The options parameters.
   */
  list(
    options?: MongoClustersListOptionalParams,
  ): PagedAsyncIterableIterator<MongoCluster>;
  /**
   * List all the mongo clusters in a given resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: MongoClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<MongoCluster>;
  /**
   * Check if mongo cluster name is available for use.
   * @param location The name of the Azure region.
   * @param body The CheckAvailability request
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    body: CheckNameAvailabilityRequest,
    options?: MongoClustersCheckNameAvailabilityOptionalParams,
  ): Promise<MongoClustersCheckNameAvailabilityResponse>;
  /**
   * Gets information about a mongo cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersGetOptionalParams,
  ): Promise<MongoClustersGetResponse>;
  /**
   * Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify
   * some of the properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    mongoClusterName: string,
    resource: MongoCluster,
    options?: MongoClustersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MongoClustersCreateOrUpdateResponse>,
      MongoClustersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a mongo cluster. Update overwrites all properties for the resource. To only modify
   * some of the properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mongoClusterName: string,
    resource: MongoCluster,
    options?: MongoClustersCreateOrUpdateOptionalParams,
  ): Promise<MongoClustersCreateOrUpdateResponse>;
  /**
   * Updates an existing mongo cluster. The request body can contain one to many of the properties
   * present in the normal mongo cluster definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    mongoClusterName: string,
    properties: MongoClusterUpdate,
    options?: MongoClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MongoClustersUpdateResponse>,
      MongoClustersUpdateResponse
    >
  >;
  /**
   * Updates an existing mongo cluster. The request body can contain one to many of the properties
   * present in the normal mongo cluster definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    mongoClusterName: string,
    properties: MongoClusterUpdate,
    options?: MongoClustersUpdateOptionalParams,
  ): Promise<MongoClustersUpdateResponse>;
  /**
   * Deletes a mongo cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MongoClustersDeleteResponse>,
      MongoClustersDeleteResponse
    >
  >;
  /**
   * Deletes a mongo cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersDeleteOptionalParams,
  ): Promise<MongoClustersDeleteResponse>;
  /**
   * List mongo cluster connection strings. This includes the default connection string using
   * SCRAM-SHA-256, as well as other connection strings supported by the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  listConnectionStrings(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: MongoClustersListConnectionStringsOptionalParams,
  ): Promise<MongoClustersListConnectionStringsResponse>;
}
