/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ReservationRecommendationUnion,
  ReservationRecommendationsListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ReservationRecommendations. */
export interface ReservationRecommendations {
  /**
   * List of recommendations for purchasing reserved instances.
   * @param resourceScope The scope associated with reservation recommendations operations. This includes
   *                      '/subscriptions/{subscriptionId}/' for subscription scope,
   *                      '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resource group scope,
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope, and
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *                      for billingProfile scope
   * @param options The options parameters.
   */
  list(
    resourceScope: string,
    options?: ReservationRecommendationsListOptionalParams,
  ): PagedAsyncIterableIterator<ReservationRecommendationUnion>;
}
