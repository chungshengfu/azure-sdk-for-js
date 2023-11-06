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
  AzureLargeInstance,
  ListBySubscriptionOptionalParams,
  ListByResourceGroupOptionalParams,
  StartOptionalParams,
  StartResponse,
  RestartOptionalParams,
  RestartResponse,
  ShutdownOptionalParams,
  ShutdownResponse,
  GetOptionalParams,
  GetResponse,
  Tags,
  UpdateOptionalParams,
  UpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AzureLargeInstanceOperations. */
export interface AzureLargeInstanceOperations {
  /**
   * Gets a list of Azure Large Instances in the specified subscription. The operations returns various
   * properties of each Azure Large Instance.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<AzureLargeInstance>;
  /**
   * Gets a list of Azure Large Instances in the specified subscription and resource group. The
   * operations returns various properties of each Azure Large Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AzureLargeInstance>;
  /**
   * The operation to start an Azure Large Instance (only for compute instances)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: StartOptionalParams
  ): Promise<SimplePollerLike<OperationState<StartResponse>, StartResponse>>;
  /**
   * The operation to start an Azure Large Instance (only for compute instances)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: StartOptionalParams
  ): Promise<StartResponse>;
  /**
   * The operation to restart an Azure Large Instance (only for compute instances)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: RestartOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<RestartResponse>, RestartResponse>
  >;
  /**
   * The operation to restart an Azure Large Instance (only for compute instances)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: RestartOptionalParams
  ): Promise<RestartResponse>;
  /**
   * The operation to shutdown an Azure Large Instance (only for compute instances)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  beginShutdown(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: ShutdownOptionalParams
  ): Promise<
    SimplePollerLike<OperationState<ShutdownResponse>, ShutdownResponse>
  >;
  /**
   * The operation to shutdown an Azure Large Instance (only for compute instances)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  beginShutdownAndWait(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: ShutdownOptionalParams
  ): Promise<ShutdownResponse>;
  /**
   * Gets an Azure Large Instance for the specified subscription, resource group, and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    options?: GetOptionalParams
  ): Promise<GetResponse>;
  /**
   * Patches the Tags field of an Azure Large Instance for the specified subscription, resource group,
   * and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeInstanceName Name of the AzureLargeInstance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureLargeInstanceName: string,
    tagsParameter: Tags,
    options?: UpdateOptionalParams
  ): Promise<UpdateResponse>;
}
