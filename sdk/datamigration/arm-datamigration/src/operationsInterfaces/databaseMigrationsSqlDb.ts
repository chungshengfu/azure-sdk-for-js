/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DatabaseMigrationsSqlDbGetOptionalParams,
  DatabaseMigrationsSqlDbGetResponse,
  DatabaseMigrationSqlDb,
  DatabaseMigrationsSqlDbCreateOrUpdateOptionalParams,
  DatabaseMigrationsSqlDbCreateOrUpdateResponse,
  DatabaseMigrationsSqlDbDeleteOptionalParams,
  MigrationOperationInput,
  DatabaseMigrationsSqlDbCancelOptionalParams,
  DatabaseMigrationsSqlDbRetryOptionalParams,
  DatabaseMigrationsSqlDbRetryResponse
} from "../models";

/** Interface representing a DatabaseMigrationsSqlDb. */
export interface DatabaseMigrationsSqlDb {
  /**
   * Retrieve the Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlDbGetOptionalParams
  ): Promise<DatabaseMigrationsSqlDbGetResponse>;
  /**
   * Create or Update Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param parameters Details of Sql Db migration resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    parameters: DatabaseMigrationSqlDb,
    options?: DatabaseMigrationsSqlDbCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DatabaseMigrationsSqlDbCreateOrUpdateResponse>,
      DatabaseMigrationsSqlDbCreateOrUpdateResponse
    >
  >;
  /**
   * Create or Update Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param parameters Details of Sql Db migration resource.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    parameters: DatabaseMigrationSqlDb,
    options?: DatabaseMigrationsSqlDbCreateOrUpdateOptionalParams
  ): Promise<DatabaseMigrationsSqlDbCreateOrUpdateResponse>;
  /**
   * Delete Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlDbDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlDbDeleteOptionalParams
  ): Promise<void>;
  /**
   * Stop on going migration for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param parameters Required migration operation ID for which cancel will be initiated.
   * @param options The options parameters.
   */
  beginCancel(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlDbCancelOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stop on going migration for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param parameters Required migration operation ID for which cancel will be initiated.
   * @param options The options parameters.
   */
  beginCancelAndWait(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlDbCancelOptionalParams
  ): Promise<void>;
  /**
   * Retry on going migration for the database.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlDbInstanceName
   * @param targetDbName The name of the target database.
   * @param migrationOperationInput Required migration operation ID for which retry will be initiated.
   * @param options The options parameters.
   */
  retry(
    resourceGroupName: string,
    sqlDbInstanceName: string,
    targetDbName: string,
    migrationOperationInput: MigrationOperationInput,
    options?: DatabaseMigrationsSqlDbRetryOptionalParams
  ): Promise<DatabaseMigrationsSqlDbRetryResponse>;
}
