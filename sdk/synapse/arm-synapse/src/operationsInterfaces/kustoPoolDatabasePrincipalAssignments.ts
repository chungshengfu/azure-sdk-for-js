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
  DatabasePrincipalAssignment,
  KustoPoolDatabasePrincipalAssignmentsListOptionalParams,
  DatabasePrincipalAssignmentCheckNameRequest,
  KustoPoolDatabasePrincipalAssignmentsCheckNameAvailabilityOptionalParams,
  KustoPoolDatabasePrincipalAssignmentsCheckNameAvailabilityResponse,
  KustoPoolDatabasePrincipalAssignmentsGetOptionalParams,
  KustoPoolDatabasePrincipalAssignmentsGetResponse,
  KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateOptionalParams,
  KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateResponse,
  KustoPoolDatabasePrincipalAssignmentsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KustoPoolDatabasePrincipalAssignments. */
export interface KustoPoolDatabasePrincipalAssignments {
  /**
   * Lists all Kusto pool database principalAssignments.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    resourceGroupName: string,
    options?: KustoPoolDatabasePrincipalAssignmentsListOptionalParams
  ): PagedAsyncIterableIterator<DatabasePrincipalAssignment>;
  /**
   * Checks that the database principal assignment is valid and is not already in use.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param principalAssignmentName The name of the resource.
   * @param options The options parameters.
   */
  checkNameAvailability(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    resourceGroupName: string,
    principalAssignmentName: DatabasePrincipalAssignmentCheckNameRequest,
    options?: KustoPoolDatabasePrincipalAssignmentsCheckNameAvailabilityOptionalParams
  ): Promise<
    KustoPoolDatabasePrincipalAssignmentsCheckNameAvailabilityResponse
  >;
  /**
   * Gets a Kusto pool database principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolDatabasePrincipalAssignmentsGetOptionalParams
  ): Promise<KustoPoolDatabasePrincipalAssignmentsGetResponse>;
  /**
   * Creates a Kusto pool database principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The Kusto principalAssignments parameters supplied for the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    parameters: DatabasePrincipalAssignment,
    options?: KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateResponse
      >,
      KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a Kusto pool database principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The Kusto principalAssignments parameters supplied for the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    parameters: DatabasePrincipalAssignment,
    options?: KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateOptionalParams
  ): Promise<KustoPoolDatabasePrincipalAssignmentsCreateOrUpdateResponse>;
  /**
   * Deletes a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginDelete(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolDatabasePrincipalAssignmentsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolDatabasePrincipalAssignmentsDeleteOptionalParams
  ): Promise<void>;
}
