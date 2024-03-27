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
  Extension,
  ExtensionsListOptionalParams,
  ExtensionsCreateOptionalParams,
  ExtensionsCreateResponse,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsDeleteOptionalParams,
  PatchExtension,
  ExtensionsUpdateOptionalParams,
  ExtensionsUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Extensions. */
export interface Extensions {
  /**
   * List all Extensions in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: ExtensionsListOptionalParams,
  ): PagedAsyncIterableIterator<Extension>;
  /**
   * Create a new Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param extension Properties necessary to Create an Extension.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    extension: Extension,
    options?: ExtensionsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExtensionsCreateResponse>,
      ExtensionsCreateResponse
    >
  >;
  /**
   * Create a new Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param extension Properties necessary to Create an Extension.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    extension: Extension,
    options?: ExtensionsCreateOptionalParams,
  ): Promise<ExtensionsCreateResponse>;
  /**
   * Gets Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsGetOptionalParams,
  ): Promise<ExtensionsGetResponse>;
  /**
   * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from the
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from the
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Patch an existing Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param patchExtension Properties to Patch in an existing Extension.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    patchExtension: PatchExtension,
    options?: ExtensionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExtensionsUpdateResponse>,
      ExtensionsUpdateResponse
    >
  >;
  /**
   * Patch an existing Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param patchExtension Properties to Patch in an existing Extension.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    patchExtension: PatchExtension,
    options?: ExtensionsUpdateOptionalParams,
  ): Promise<ExtensionsUpdateResponse>;
}
