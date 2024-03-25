/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SqlPoolOperation,
  SqlPoolOperationsListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlPoolOperations. */
export interface SqlPoolOperations {
  /**
   * Gets a list of operations performed on the SQL pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<SqlPoolOperation>;
}
