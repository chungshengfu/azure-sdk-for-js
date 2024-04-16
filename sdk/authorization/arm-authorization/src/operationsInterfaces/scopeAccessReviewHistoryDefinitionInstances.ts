/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccessReviewHistoryInstance,
  ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ScopeAccessReviewHistoryDefinitionInstances. */
export interface ScopeAccessReviewHistoryDefinitionInstances {
  /**
   * Get access review history definition instances by definition Id
   * @param scope The scope of the resource.
   * @param historyDefinitionId The id of the access review history definition.
   * @param options The options parameters.
   */
  list(
    scope: string,
    historyDefinitionId: string,
    options?: ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams,
  ): PagedAsyncIterableIterator<AccessReviewHistoryInstance>;
}
