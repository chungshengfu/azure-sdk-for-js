/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccessReviewContactedReviewer,
  TenantLevelAccessReviewInstanceContactedReviewersListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TenantLevelAccessReviewInstanceContactedReviewers. */
export interface TenantLevelAccessReviewInstanceContactedReviewers {
  /**
   * Get access review instance contacted reviewers
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  list(
    scheduleDefinitionId: string,
    id: string,
    options?: TenantLevelAccessReviewInstanceContactedReviewersListOptionalParams,
  ): PagedAsyncIterableIterator<AccessReviewContactedReviewer>;
}
