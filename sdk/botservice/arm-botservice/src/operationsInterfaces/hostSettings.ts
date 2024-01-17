/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  HostSettingsGetOptionalParams,
  HostSettingsGetResponse,
} from "../models";

/** Interface representing a HostSettings. */
export interface HostSettings {
  /**
   * Get per subscription settings needed to host bot in compute resource such as Azure App Service
   * @param options The options parameters.
   */
  get(
    options?: HostSettingsGetOptionalParams,
  ): Promise<HostSettingsGetResponse>;
}
