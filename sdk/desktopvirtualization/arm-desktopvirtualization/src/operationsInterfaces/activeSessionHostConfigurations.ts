/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ActiveSessionHostConfiguration,
  ActiveSessionHostConfigurationsListByHostPoolOptionalParams,
  ActiveSessionHostConfigurationsGetOptionalParams,
  ActiveSessionHostConfigurationsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ActiveSessionHostConfigurations. */
export interface ActiveSessionHostConfigurations {
  /**
   * List activeSessionHostConfigurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: ActiveSessionHostConfigurationsListByHostPoolOptionalParams,
  ): PagedAsyncIterableIterator<ActiveSessionHostConfiguration>;
  /**
   * Get the ActiveSessionHostConfiguration for the hostPool that is currently being used for update
   * operations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    options?: ActiveSessionHostConfigurationsGetOptionalParams,
  ): Promise<ActiveSessionHostConfigurationsGetResponse>;
}
