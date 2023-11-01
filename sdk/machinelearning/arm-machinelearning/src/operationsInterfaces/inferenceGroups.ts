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
  InferenceGroup,
  InferenceGroupsListOptionalParams,
  SkuResource,
  InferenceGroupsListSkusOptionalParams,
  InferenceGroupsDeleteOptionalParams,
  InferenceGroupsGetOptionalParams,
  InferenceGroupsGetResponse,
  PartialMinimalTrackedResourceWithSku,
  InferenceGroupsUpdateOptionalParams,
  InferenceGroupsUpdateResponse,
  InferenceGroupsCreateOrUpdateOptionalParams,
  InferenceGroupsCreateOrUpdateResponse,
  InferenceGroupsGetStatusOptionalParams,
  InferenceGroupsGetStatusResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InferenceGroups. */
export interface InferenceGroups {
  /**
   * List Inference Groups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName Name of the InferencePool.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    options?: InferenceGroupsListOptionalParams
  ): PagedAsyncIterableIterator<InferenceGroup>;
  /**
   * List Inference Group Skus.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName Inference Pool name.
   * @param groupName Inference Group name.
   * @param options The options parameters.
   */
  listSkus(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    options?: InferenceGroupsListSkusOptionalParams
  ): PagedAsyncIterableIterator<SkuResource>;
  /**
   * Delete InferenceGroup (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    options?: InferenceGroupsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete InferenceGroup (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    options?: InferenceGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get InferenceGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    options?: InferenceGroupsGetOptionalParams
  ): Promise<InferenceGroupsGetResponse>;
  /**
   * Update InferenceGroup (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param body Online Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    body: PartialMinimalTrackedResourceWithSku,
    options?: InferenceGroupsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InferenceGroupsUpdateResponse>,
      InferenceGroupsUpdateResponse
    >
  >;
  /**
   * Update InferenceGroup (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param body Online Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    body: PartialMinimalTrackedResourceWithSku,
    options?: InferenceGroupsUpdateOptionalParams
  ): Promise<InferenceGroupsUpdateResponse>;
  /**
   * Create or update InferenceGroup (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param body InferenceGroup entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    body: InferenceGroup,
    options?: InferenceGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InferenceGroupsCreateOrUpdateResponse>,
      InferenceGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update InferenceGroup (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param body InferenceGroup entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    body: InferenceGroup,
    options?: InferenceGroupsCreateOrUpdateOptionalParams
  ): Promise<InferenceGroupsCreateOrUpdateResponse>;
  /**
   * Retrieve inference group status.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param groupName InferenceGroup name.
   * @param options The options parameters.
   */
  getStatus(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    groupName: string,
    options?: InferenceGroupsGetStatusOptionalParams
  ): Promise<InferenceGroupsGetStatusResponse>;
}
