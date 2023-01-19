/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DataBoxEdgeSku, AvailableSkusListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AvailableSkus. */
export interface AvailableSkus {
  /**
   * List all the available Skus and information related to the skus.
   * @param options The options parameters.
   */
  list(
    options?: AvailableSkusListOptionalParams
  ): PagedAsyncIterableIterator<DataBoxEdgeSku>;
}
