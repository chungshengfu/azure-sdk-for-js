/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SubscriptionsListQuotasOptionalParams,
  SubscriptionsListQuotasResponse,
} from "../models";

/** Interface representing a Subscriptions. */
export interface Subscriptions {
  /**
   * Retrieves the subscription's current quota information in a particular region.
   * @param location The region in which to retrieve the subscription's quota information. You can find
   *                 out which regions Azure Stream Analytics is supported in here:
   *                 https://azure.microsoft.com/en-us/regions/
   * @param options The options parameters.
   */
  listQuotas(
    location: string,
    options?: SubscriptionsListQuotasOptionalParams,
  ): Promise<SubscriptionsListQuotasResponse>;
}
