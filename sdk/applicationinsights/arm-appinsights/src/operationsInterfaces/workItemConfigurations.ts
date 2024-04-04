/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkItemConfiguration,
  WorkItemConfigurationsListOptionalParams,
  WorkItemCreateConfiguration,
  WorkItemConfigurationsCreateOptionalParams,
  WorkItemConfigurationsCreateResponse,
  WorkItemConfigurationsGetDefaultOptionalParams,
  WorkItemConfigurationsGetDefaultResponse,
  WorkItemConfigurationsDeleteOptionalParams,
  WorkItemConfigurationsGetItemOptionalParams,
  WorkItemConfigurationsGetItemResponse,
  WorkItemConfigurationsUpdateItemOptionalParams,
  WorkItemConfigurationsUpdateItemResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkItemConfigurations. */
export interface WorkItemConfigurations {
  /**
   * Gets the list work item configurations that exist for the application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkItemConfigurationsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkItemConfiguration>;
  /**
   * Create a work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work item
   *                                        configuration of a Application Insights component.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    resourceName: string,
    workItemConfigurationProperties: WorkItemCreateConfiguration,
    options?: WorkItemConfigurationsCreateOptionalParams,
  ): Promise<WorkItemConfigurationsCreateResponse>;
  /**
   * Gets default work item configurations that exist for the application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The options parameters.
   */
  getDefault(
    resourceGroupName: string,
    resourceName: string,
    options?: WorkItemConfigurationsGetDefaultOptionalParams,
  ): Promise<WorkItemConfigurationsGetDefaultResponse>;
  /**
   * Delete a work item configuration of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name of
   *                         connector as defined in connector configuration
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    resourceName: string,
    workItemConfigId: string,
    options?: WorkItemConfigurationsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets specified work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name of
   *                         connector as defined in connector configuration
   * @param options The options parameters.
   */
  getItem(
    resourceGroupName: string,
    resourceName: string,
    workItemConfigId: string,
    options?: WorkItemConfigurationsGetItemOptionalParams,
  ): Promise<WorkItemConfigurationsGetItemResponse>;
  /**
   * Update a work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name of
   *                         connector as defined in connector configuration
   * @param workItemConfigurationProperties Properties that need to be specified to update a work item
   *                                        configuration for this Application Insights component.
   * @param options The options parameters.
   */
  updateItem(
    resourceGroupName: string,
    resourceName: string,
    workItemConfigId: string,
    workItemConfigurationProperties: WorkItemCreateConfiguration,
    options?: WorkItemConfigurationsUpdateItemOptionalParams,
  ): Promise<WorkItemConfigurationsUpdateItemResponse>;
}
