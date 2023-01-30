/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VMwareOperationsStatusGetOperationStatusOptionalParams,
  VMwareOperationsStatusGetOperationStatusResponse
} from "../models";

/** Interface representing a VMwareOperationsStatus. */
export interface VMwareOperationsStatus {
  /**
   * Method to get operation status.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param operationStatusName Operation status ARM name.
   * @param options The options parameters.
   */
  getOperationStatus(
    resourceGroupName: string,
    siteName: string,
    operationStatusName: string,
    options?: VMwareOperationsStatusGetOperationStatusOptionalParams
  ): Promise<VMwareOperationsStatusGetOperationStatusResponse>;
}
