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
  ClusterPrincipalAssignment,
  KustoPoolPrincipalAssignmentsListOptionalParams,
  ClusterPrincipalAssignmentCheckNameRequest,
  KustoPoolPrincipalAssignmentsCheckNameAvailabilityOptionalParams,
  KustoPoolPrincipalAssignmentsCheckNameAvailabilityResponse,
  KustoPoolPrincipalAssignmentsGetOptionalParams,
  KustoPoolPrincipalAssignmentsGetResponse,
  KustoPoolPrincipalAssignmentsCreateOrUpdateOptionalParams,
  KustoPoolPrincipalAssignmentsCreateOrUpdateResponse,
  KustoPoolPrincipalAssignmentsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KustoPoolPrincipalAssignments. */
export interface KustoPoolPrincipalAssignments {
  /**
   * Lists all Kusto pool principalAssignments.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsListOptionalParams
  ): PagedAsyncIterableIterator<ClusterPrincipalAssignment>;
  /**
   * Checks that the principal assignment name is valid and is not already in use.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param principalAssignmentName The name of the principal assignment.
   * @param options The options parameters.
   */
  checkNameAvailability(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    principalAssignmentName: ClusterPrincipalAssignmentCheckNameRequest,
    options?: KustoPoolPrincipalAssignmentsCheckNameAvailabilityOptionalParams
  ): Promise<KustoPoolPrincipalAssignmentsCheckNameAvailabilityResponse>;
  /**
   * Gets a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsGetOptionalParams
  ): Promise<KustoPoolPrincipalAssignmentsGetResponse>;
  /**
   * Create a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The Kusto pool principalAssignment's parameters supplied for the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    parameters: ClusterPrincipalAssignment,
    options?: KustoPoolPrincipalAssignmentsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<KustoPoolPrincipalAssignmentsCreateOrUpdateResponse>,
      KustoPoolPrincipalAssignmentsCreateOrUpdateResponse
    >
  >;
  /**
   * Create a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The Kusto pool principalAssignment's parameters supplied for the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    parameters: ClusterPrincipalAssignment,
    options?: KustoPoolPrincipalAssignmentsCreateOrUpdateOptionalParams
  ): Promise<KustoPoolPrincipalAssignmentsCreateOrUpdateResponse>;
  /**
   * Deletes a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginDelete(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsDeleteOptionalParams
  ): Promise<void>;
}
