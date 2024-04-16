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
  DatabaseUnion,
  DatabasesListByClusterOptionalParams,
  DatabasePrincipal,
  DatabasesListPrincipalsOptionalParams,
  CheckNameRequest,
  DatabasesCheckNameAvailabilityOptionalParams,
  DatabasesCheckNameAvailabilityResponse,
  DatabasesGetOptionalParams,
  DatabasesGetResponse,
  DatabasesCreateOrUpdateOptionalParams,
  DatabasesCreateOrUpdateResponse,
  DatabasesUpdateOptionalParams,
  DatabasesUpdateResponse,
  DatabasesDeleteOptionalParams,
  DatabasePrincipalListRequest,
  DatabasesAddPrincipalsOptionalParams,
  DatabasesAddPrincipalsResponse,
  DatabasesRemovePrincipalsOptionalParams,
  DatabasesRemovePrincipalsResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Databases. */
export interface Databases {
  /**
   * Returns the list of databases of the given Kusto cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param options The options parameters.
   */
  listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: DatabasesListByClusterOptionalParams,
  ): PagedAsyncIterableIterator<DatabaseUnion>;
  /**
   * Returns a list of database principals of the given Kusto cluster and database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  listPrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesListPrincipalsOptionalParams,
  ): PagedAsyncIterableIterator<DatabasePrincipal>;
  /**
   * Checks that the databases resource name is valid and is not already in use.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param resourceName The name of the resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    clusterName: string,
    resourceName: CheckNameRequest,
    options?: DatabasesCheckNameAvailabilityOptionalParams,
  ): Promise<DatabasesCheckNameAvailabilityResponse>;
  /**
   * Returns a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesGetOptionalParams,
  ): Promise<DatabasesGetResponse>;
  /**
   * Creates or updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesCreateOrUpdateResponse>,
      DatabasesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesCreateOrUpdateOptionalParams,
  ): Promise<DatabasesCreateOrUpdateResponse>;
  /**
   * Updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatabasesUpdateResponse>,
      DatabasesUpdateResponse
    >
  >;
  /**
   * Updates a database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The database parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseUnion,
    options?: DatabasesUpdateOptionalParams,
  ): Promise<DatabasesUpdateResponse>;
  /**
   * Deletes the database with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the database with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    options?: DatabasesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Add Database principals permissions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param databasePrincipalsToAdd List of database principals to add.
   * @param options The options parameters.
   */
  addPrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    databasePrincipalsToAdd: DatabasePrincipalListRequest,
    options?: DatabasesAddPrincipalsOptionalParams,
  ): Promise<DatabasesAddPrincipalsResponse>;
  /**
   * Remove Database principals permissions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param databasePrincipalsToRemove List of database principals to remove.
   * @param options The options parameters.
   */
  removePrincipals(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    databasePrincipalsToRemove: DatabasePrincipalListRequest,
    options?: DatabasesRemovePrincipalsOptionalParams,
  ): Promise<DatabasesRemovePrincipalsResponse>;
}
