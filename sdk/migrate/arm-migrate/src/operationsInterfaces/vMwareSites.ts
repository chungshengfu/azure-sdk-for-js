/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VMwareSite,
  VMwareSitesListBySubscriptionOptionalParams,
  VMwareSitesListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VMwareSites. */
export interface VMwareSites {
  /**
   * Get all the vmware sites in the subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: VMwareSitesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<VMwareSite>;
  /**
   * Get all the vmware sites in the resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: VMwareSitesListOptionalParams
  ): PagedAsyncIterableIterator<VMwareSite>;
}
