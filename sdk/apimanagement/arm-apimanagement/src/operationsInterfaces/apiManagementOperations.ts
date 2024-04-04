/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Operation,
  ApiManagementOperationsListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiManagementOperations. */
export interface ApiManagementOperations {
  /**
   * Lists all of the available REST API operations of the Microsoft.ApiManagement provider.
   * @param options The options parameters.
   */
  list(
    options?: ApiManagementOperationsListOptionalParams,
  ): PagedAsyncIterableIterator<Operation>;
}
