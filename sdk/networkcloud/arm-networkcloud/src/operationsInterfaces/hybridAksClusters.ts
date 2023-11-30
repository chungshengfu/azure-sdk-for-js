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
  HybridAksCluster,
  HybridAksClustersListBySubscriptionOptionalParams,
  HybridAksClustersListByResourceGroupOptionalParams,
  HybridAksClustersGetOptionalParams,
  HybridAksClustersGetResponse,
  HybridAksClustersCreateOrUpdateOptionalParams,
  HybridAksClustersCreateOrUpdateResponse,
  HybridAksClustersDeleteOptionalParams,
  HybridAksClustersUpdateOptionalParams,
  HybridAksClustersUpdateResponse,
  HybridAksClustersRestartNodeOptionalParams,
  HybridAksClustersRestartNodeResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a HybridAksClusters. */
export interface HybridAksClusters {
  /**
   * Get a list of additional details related to Hybrid AKS provisioned clusters in the provided
   * subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: HybridAksClustersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<HybridAksCluster>;
  /**
   * Get a list of additional details for Hybrid AKS provisioned clusters in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: HybridAksClustersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<HybridAksCluster>;
  /**
   * Get the additional details related to the provided Hybrid AKS provisioned cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersGetOptionalParams
  ): Promise<HybridAksClustersGetResponse>;
  /**
   * Create new additional details related to the Hybrid AKS provisioned cluster or update the existing
   * one.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<HybridAksClustersCreateOrUpdateResponse>,
      HybridAksClustersCreateOrUpdateResponse
    >
  >;
  /**
   * Create new additional details related to the Hybrid AKS provisioned cluster or update the existing
   * one.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersCreateOrUpdateOptionalParams
  ): Promise<HybridAksClustersCreateOrUpdateResponse>;
  /**
   * Delete the additional details related to the provided Hybrid AKS provisioned cluster.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the additional details related to the provided Hybrid AKS provisioned cluster.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update tags associated with the additional details related to the Hybrid AKS provisioned cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersUpdateOptionalParams
  ): Promise<HybridAksClustersUpdateResponse>;
  /**
   * Restart a targeted node of a Hybrid AKS cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  beginRestartNode(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersRestartNodeOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<HybridAksClustersRestartNodeResponse>,
      HybridAksClustersRestartNodeResponse
    >
  >;
  /**
   * Restart a targeted node of a Hybrid AKS cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hybridAksClusterName The name of the Hybrid AKS cluster.
   * @param options The options parameters.
   */
  beginRestartNodeAndWait(
    resourceGroupName: string,
    hybridAksClusterName: string,
    options?: HybridAksClustersRestartNodeOptionalParams
  ): Promise<HybridAksClustersRestartNodeResponse>;
}
