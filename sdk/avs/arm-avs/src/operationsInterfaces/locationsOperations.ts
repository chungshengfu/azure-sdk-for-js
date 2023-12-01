/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  LocationsOperationsCheckQuotaAvailabilityOptionalParams,
  LocationsOperationsCheckQuotaAvailabilityResponse,
  LocationsOperationsCheckTrialAvailabilityOptionalParams,
  LocationsOperationsCheckTrialAvailabilityResponse
} from "../models";

/** Interface representing a LocationsOperations. */
export interface LocationsOperations {
  /**
   * Return quota for subscription by region
   * @param subscriptionId The ID of the target subscription.
   * @param location Azure region
   * @param options The options parameters.
   */
  checkQuotaAvailability(
    subscriptionId: string,
    location: string,
    options?: LocationsOperationsCheckQuotaAvailabilityOptionalParams
  ): Promise<LocationsOperationsCheckQuotaAvailabilityResponse>;
  /**
   * Return trial status for subscription by region
   * @param subscriptionId The ID of the target subscription.
   * @param location Azure region
   * @param options The options parameters.
   */
  checkTrialAvailability(
    subscriptionId: string,
    location: string,
    options?: LocationsOperationsCheckTrialAvailabilityOptionalParams
  ): Promise<LocationsOperationsCheckTrialAvailabilityResponse>;
}
