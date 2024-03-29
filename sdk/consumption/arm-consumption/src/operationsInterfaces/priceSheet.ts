/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PriceSheetGetOptionalParams,
  PriceSheetGetResponse,
  PriceSheetGetByBillingPeriodOptionalParams,
  PriceSheetGetByBillingPeriodResponse,
  PriceSheetDownloadByBillingAccountPeriodOptionalParams,
  PriceSheetDownloadByBillingAccountPeriodResponse,
} from "../models";

/** Interface representing a PriceSheet. */
export interface PriceSheet {
  /**
   * Gets the price sheet for a subscription. Price sheet is available via this API only for May 1, 2014
   * or later.
   * @param options The options parameters.
   */
  get(options?: PriceSheetGetOptionalParams): Promise<PriceSheetGetResponse>;
  /**
   * Get the price sheet for a scope by subscriptionId and billing period. Price sheet is available via
   * this API only for May 1, 2014 or later.
   * @param billingPeriodName Billing Period Name.
   * @param options The options parameters.
   */
  getByBillingPeriod(
    billingPeriodName: string,
    options?: PriceSheetGetByBillingPeriodOptionalParams,
  ): Promise<PriceSheetGetByBillingPeriodResponse>;
  /**
   * Generates the pricesheet for the provided billing period asynchronously based on the enrollment id
   * @param billingAccountId BillingAccount ID
   * @param billingPeriodName Billing Period Name.
   * @param options The options parameters.
   */
  beginDownloadByBillingAccountPeriod(
    billingAccountId: string,
    billingPeriodName: string,
    options?: PriceSheetDownloadByBillingAccountPeriodOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PriceSheetDownloadByBillingAccountPeriodResponse>,
      PriceSheetDownloadByBillingAccountPeriodResponse
    >
  >;
  /**
   * Generates the pricesheet for the provided billing period asynchronously based on the enrollment id
   * @param billingAccountId BillingAccount ID
   * @param billingPeriodName Billing Period Name.
   * @param options The options parameters.
   */
  beginDownloadByBillingAccountPeriodAndWait(
    billingAccountId: string,
    billingPeriodName: string,
    options?: PriceSheetDownloadByBillingAccountPeriodOptionalParams,
  ): Promise<PriceSheetDownloadByBillingAccountPeriodResponse>;
}
