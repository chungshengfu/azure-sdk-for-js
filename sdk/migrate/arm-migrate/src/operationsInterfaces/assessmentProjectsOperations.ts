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
  AssessmentProject,
  AssessmentProjectsOperationsListBySubscriptionOptionalParams,
  AssessmentProjectsOperationsListByResourceGroupOptionalParams,
  AssessmentProjectsOperationsGetOptionalParams,
  AssessmentProjectsOperationsGetResponse,
  AssessmentProjectsOperationsCreateOptionalParams,
  AssessmentProjectsOperationsCreateResponse,
  AssessmentProjectUpdate,
  AssessmentProjectsOperationsUpdateOptionalParams,
  AssessmentProjectsOperationsUpdateResponse,
  AssessmentProjectsOperationsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AssessmentProjectsOperations. */
export interface AssessmentProjectsOperations {
  /**
   * List AssessmentProject resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AssessmentProjectsOperationsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AssessmentProject>;
  /**
   * List AssessmentProject resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AssessmentProjectsOperationsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AssessmentProject>;
  /**
   * Get a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentProjectsOperationsGetOptionalParams
  ): Promise<AssessmentProjectsOperationsGetResponse>;
  /**
   * Create a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    projectName: string,
    resource: AssessmentProject,
    options?: AssessmentProjectsOperationsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AssessmentProjectsOperationsCreateResponse>,
      AssessmentProjectsOperationsCreateResponse
    >
  >;
  /**
   * Create a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    projectName: string,
    resource: AssessmentProject,
    options?: AssessmentProjectsOperationsCreateOptionalParams
  ): Promise<AssessmentProjectsOperationsCreateResponse>;
  /**
   * Update a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    projectName: string,
    properties: AssessmentProjectUpdate,
    options?: AssessmentProjectsOperationsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AssessmentProjectsOperationsUpdateResponse>,
      AssessmentProjectsOperationsUpdateResponse
    >
  >;
  /**
   * Update a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    projectName: string,
    properties: AssessmentProjectUpdate,
    options?: AssessmentProjectsOperationsUpdateOptionalParams
  ): Promise<AssessmentProjectsOperationsUpdateResponse>;
  /**
   * Delete a AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentProjectsOperationsDeleteOptionalParams
  ): Promise<void>;
}
