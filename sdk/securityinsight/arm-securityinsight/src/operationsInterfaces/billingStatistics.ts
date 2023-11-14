/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  BillingStatisticUnion,
  BillingStatisticsListOptionalParams,
  BillingStatisticsGetOptionalParams,
  BillingStatisticsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BillingStatistics. */
export interface BillingStatistics {
  /**
   * Gets all Microsoft Sentinel billing statistics.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: BillingStatisticsListOptionalParams
  ): PagedAsyncIterableIterator<BillingStatisticUnion>;
  /**
   * Gets a billing statistic
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param billingStatisticName The name of the billing statistic
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    billingStatisticName: string,
    options?: BillingStatisticsGetOptionalParams
  ): Promise<BillingStatisticsGetResponse>;
}
