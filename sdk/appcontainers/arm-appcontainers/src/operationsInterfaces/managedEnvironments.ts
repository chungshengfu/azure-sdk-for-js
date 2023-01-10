/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  ManagedEnvironment,
  ManagedEnvironmentsListBySubscriptionOptionalParams,
  ManagedEnvironmentsListByResourceGroupOptionalParams,
  WorkloadProfileStates,
  ManagedEnvironmentsListWorkloadProfileStatesOptionalParams,
  ManagedEnvironmentsGetOptionalParams,
  ManagedEnvironmentsGetResponse,
  ManagedEnvironmentsCreateOrUpdateOptionalParams,
  ManagedEnvironmentsCreateOrUpdateResponse,
  ManagedEnvironmentsDeleteOptionalParams,
  ManagedEnvironmentsUpdateOptionalParams,
  ManagedEnvironmentsUpdateResponse,
  ManagedEnvironmentsGetAuthTokenOptionalParams,
  ManagedEnvironmentsGetAuthTokenResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedEnvironments. */
export interface ManagedEnvironments {
  /**
   * Get all Managed Environments for a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ManagedEnvironmentsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<ManagedEnvironment>;
  /**
   * Get all the Managed Environments in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ManagedEnvironmentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ManagedEnvironment>;
  /**
   * Get all workload Profile States for a Premium Managed Environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  listWorkloadProfileStates(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentsListWorkloadProfileStatesOptionalParams
  ): PagedAsyncIterableIterator<WorkloadProfileStates>;
  /**
   * Get the properties of a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentsGetOptionalParams
  ): Promise<ManagedEnvironmentsGetResponse>;
  /**
   * Creates or updates a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    environmentEnvelope: ManagedEnvironment,
    options?: ManagedEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedEnvironmentsCreateOrUpdateResponse>,
      ManagedEnvironmentsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Managed Environment used to host container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    environmentName: string,
    environmentEnvelope: ManagedEnvironment,
    options?: ManagedEnvironmentsCreateOrUpdateOptionalParams
  ): Promise<ManagedEnvironmentsCreateOrUpdateResponse>;
  /**
   * Delete a Managed Environment if it does not have any container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete a Managed Environment if it does not have any container apps.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Patches a Managed Environment using JSON Merge Patch
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    environmentName: string,
    environmentEnvelope: ManagedEnvironment,
    options?: ManagedEnvironmentsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ManagedEnvironmentsUpdateResponse>,
      ManagedEnvironmentsUpdateResponse
    >
  >;
  /**
   * Patches a Managed Environment using JSON Merge Patch
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param environmentEnvelope Configuration details of the Environment.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    environmentName: string,
    environmentEnvelope: ManagedEnvironment,
    options?: ManagedEnvironmentsUpdateOptionalParams
  ): Promise<ManagedEnvironmentsUpdateResponse>;
  /**
   * Checks if resource name is available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  getAuthToken(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentsGetAuthTokenOptionalParams
  ): Promise<ManagedEnvironmentsGetAuthTokenResponse>;
}
