/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GatewaysDeleteOptionalParams } from "../models";

/** Interface representing a Gateways. */
export interface Gateways {
  /**
   * Delete a Log Analytics gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param gatewayId The Log Analytics gateway Id.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    gatewayId: string,
    options?: GatewaysDeleteOptionalParams,
  ): Promise<void>;
}
