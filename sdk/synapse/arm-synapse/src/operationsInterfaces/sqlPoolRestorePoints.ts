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
  RestorePoint,
  SqlPoolRestorePointsListOptionalParams,
  CreateSqlPoolRestorePointDefinition,
  SqlPoolRestorePointsCreateOptionalParams,
  SqlPoolRestorePointsCreateResponse,
  SqlPoolRestorePointsGetOptionalParams,
  SqlPoolRestorePointsGetResponse,
  SqlPoolRestorePointsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlPoolRestorePoints. */
export interface SqlPoolRestorePoints {
  /**
   * Get SQL pool backup information
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolRestorePointsListOptionalParams,
  ): PagedAsyncIterableIterator<RestorePoint>;
  /**
   * Creates a restore point for a data warehouse.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters The definition for creating the restore point of this Sql pool.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: CreateSqlPoolRestorePointDefinition,
    options?: SqlPoolRestorePointsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SqlPoolRestorePointsCreateResponse>,
      SqlPoolRestorePointsCreateResponse
    >
  >;
  /**
   * Creates a restore point for a data warehouse.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters The definition for creating the restore point of this Sql pool.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: CreateSqlPoolRestorePointDefinition,
    options?: SqlPoolRestorePointsCreateOptionalParams,
  ): Promise<SqlPoolRestorePointsCreateResponse>;
  /**
   * Gets a restore point.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    restorePointName: string,
    options?: SqlPoolRestorePointsGetOptionalParams,
  ): Promise<SqlPoolRestorePointsGetResponse>;
  /**
   * Deletes a restore point.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param restorePointName The name of the restore point.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    restorePointName: string,
    options?: SqlPoolRestorePointsDeleteOptionalParams,
  ): Promise<void>;
}
