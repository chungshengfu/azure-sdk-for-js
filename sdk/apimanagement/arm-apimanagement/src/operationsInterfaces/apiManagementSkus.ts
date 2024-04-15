/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApiManagementSku,
  ApiManagementSkusListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiManagementSkus. */
export interface ApiManagementSkus {
  /**
   * Gets the list of Microsoft.ApiManagement SKUs available for your Subscription.
   * @param options The options parameters.
   */
  list(
    options?: ApiManagementSkusListOptionalParams,
  ): PagedAsyncIterableIterator<ApiManagementSku>;
}
