/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Model, ModelsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Models. */
export interface Models {
  /**
   * List Models.
   * @param location Resource location.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: ModelsListOptionalParams,
  ): PagedAsyncIterableIterator<Model>;
}
