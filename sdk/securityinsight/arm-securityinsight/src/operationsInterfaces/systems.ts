/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  System,
  SystemsGetAllOptionalParams,
  SystemsCreateOrUpdateOptionalParams,
  SystemsCreateOrUpdateResponse,
  SystemsGetOptionalParams,
  SystemsGetResponse,
  SystemsDeleteOptionalParams,
  SystemsListActionsOptionalParams,
  SystemsListActionsResponse,
  SystemsPerformActionOptionalParams,
  SystemsReportActionStatusOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Systems. */
export interface Systems {
  /**
   * Gets the systems.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param options The options parameters.
   */
  listAll(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    options?: SystemsGetAllOptionalParams,
  ): PagedAsyncIterableIterator<System>;
  /**
   * Creates or updates the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param systemResourceName The name of the system.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    systemResourceName: string,
    options?: SystemsCreateOrUpdateOptionalParams,
  ): Promise<SystemsCreateOrUpdateResponse>;
  /**
   * Gets the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param systemResourceName The name of the system.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    systemResourceName: string,
    options?: SystemsGetOptionalParams,
  ): Promise<SystemsGetResponse>;
  /**
   * Deletes the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param systemResourceName The name of the system.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    systemResourceName: string,
    options?: SystemsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * List of actions for a business application system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param systemResourceName The name of the system.
   * @param options The options parameters.
   */
  listActions(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    systemResourceName: string,
    options?: SystemsListActionsOptionalParams,
  ): Promise<SystemsListActionsResponse>;
  /**
   * Perform the last operation on the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param systemResourceName The name of the system.
   * @param options The options parameters.
   */
  performAction(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    systemResourceName: string,
    options?: SystemsPerformActionOptionalParams,
  ): Promise<void>;
  /**
   * Report the status of the action.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param systemResourceName The name of the system.
   * @param options The options parameters.
   */
  reportActionStatus(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    systemResourceName: string,
    options?: SystemsReportActionStatusOptionalParams,
  ): Promise<void>;
}
