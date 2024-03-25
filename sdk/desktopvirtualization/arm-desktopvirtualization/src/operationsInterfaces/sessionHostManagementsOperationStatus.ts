/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SessionHostManagementOperationStatus,
  SessionHostManagementsOperationStatusListOptionalParams,
  SessionHostManagementsOperationStatusGetOptionalParams,
  SessionHostManagementsOperationStatusGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SessionHostManagementsOperationStatus. */
export interface SessionHostManagementsOperationStatus {
  /**
   * Get Operation status for SessionHostManagement
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsOperationStatusListOptionalParams,
  ): PagedAsyncIterableIterator<SessionHostManagementOperationStatus>;
  /**
   * Get Operation status for SessionHostManagement
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param operationId The Guid of the operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    operationId: string,
    options?: SessionHostManagementsOperationStatusGetOptionalParams,
  ): Promise<SessionHostManagementsOperationStatusGetResponse>;
}
