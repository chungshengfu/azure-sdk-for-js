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
  SessionHostConfiguration,
  SessionHostConfigurationsListByHostPoolOptionalParams,
  SessionHostConfigurationsCreateOrUpdateOptionalParams,
  SessionHostConfigurationsCreateOrUpdateResponse,
  SessionHostConfigurationsUpdateOptionalParams,
  SessionHostConfigurationsUpdateResponse,
  SessionHostConfigurationsGetOptionalParams,
  SessionHostConfigurationsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SessionHostConfigurations. */
export interface SessionHostConfigurations {
  /**
   * List sessionHostConfigurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsListByHostPoolOptionalParams,
  ): PagedAsyncIterableIterator<SessionHostConfiguration>;
  /**
   * Create or update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostConfiguration Object containing SessionHostConfiguration definitions.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostConfiguration: SessionHostConfiguration,
    options?: SessionHostConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SessionHostConfigurationsCreateOrUpdateResponse>,
      SessionHostConfigurationsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostConfiguration Object containing SessionHostConfiguration definitions.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostConfiguration: SessionHostConfiguration,
    options?: SessionHostConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<SessionHostConfigurationsCreateOrUpdateResponse>;
  /**
   * Update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SessionHostConfigurationsUpdateResponse>,
      SessionHostConfigurationsUpdateResponse
    >
  >;
  /**
   * Update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsUpdateOptionalParams,
  ): Promise<SessionHostConfigurationsUpdateResponse>;
  /**
   * Get a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsGetOptionalParams,
  ): Promise<SessionHostConfigurationsGetResponse>;
}
