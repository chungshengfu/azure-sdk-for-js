/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckNameAvailabilityRequest,
  OperationsCheckNameAvailabilityOptionalParams,
  OperationsCheckNameAvailabilityResponse,
  OperationsGetSubscriptionQuotaAndUsageOptionalParams,
  OperationsGetSubscriptionQuotaAndUsageResponse,
  OperationsGetWorkspaceQuotaAndUsageOptionalParams,
  OperationsGetWorkspaceQuotaAndUsageResponse,
  OperationsListOptionalParams,
  OperationsListResponse,
  OperationsGetLocationHeaderResultOptionalParams,
  OperationsGetAzureAsyncHeaderResultOptionalParams,
  OperationsGetAzureAsyncHeaderResultResponse
} from "../models";

/** Interface representing a Operations. */
export interface Operations {
  /**
   * Check whether a workspace name is available
   * @param request The check request
   * @param options The options parameters.
   */
  checkNameAvailability(
    request: CheckNameAvailabilityRequest,
    options?: OperationsCheckNameAvailabilityOptionalParams
  ): Promise<OperationsCheckNameAvailabilityResponse>;
  /**
   * Gets the current resource usage and quota of a subscription/region
   * @param location The location on which resource usage is queried.
   * @param options The options parameters.
   */
  getSubscriptionQuotaAndUsage(
    location: string,
    options?: OperationsGetSubscriptionQuotaAndUsageOptionalParams
  ): Promise<OperationsGetSubscriptionQuotaAndUsageResponse>;
  /**
   * Gets the current usage and quota of a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  getWorkspaceQuotaAndUsage(
    resourceGroupName: string,
    workspaceName: string,
    options?: OperationsGetWorkspaceQuotaAndUsageOptionalParams
  ): Promise<OperationsGetWorkspaceQuotaAndUsageResponse>;
  /**
   * Get all available operations
   * @param options The options parameters.
   */
  list(options?: OperationsListOptionalParams): Promise<OperationsListResponse>;
  /**
   * Get the result of an operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param operationId Operation ID
   * @param options The options parameters.
   */
  getLocationHeaderResult(
    resourceGroupName: string,
    workspaceName: string,
    operationId: string,
    options?: OperationsGetLocationHeaderResultOptionalParams
  ): Promise<void>;
  /**
   * Get the status of an operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param operationId Operation ID
   * @param options The options parameters.
   */
  getAzureAsyncHeaderResult(
    resourceGroupName: string,
    workspaceName: string,
    operationId: string,
    options?: OperationsGetAzureAsyncHeaderResultOptionalParams
  ): Promise<OperationsGetAzureAsyncHeaderResultResponse>;
}
