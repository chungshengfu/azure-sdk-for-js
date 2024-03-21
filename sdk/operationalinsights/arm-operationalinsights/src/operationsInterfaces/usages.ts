/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { UsageMetric, UsagesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Usages. */
export interface Usages {
  /**
   * Gets a list of usage metrics for a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: UsagesListOptionalParams,
  ): PagedAsyncIterableIterator<UsageMetric>;
}
