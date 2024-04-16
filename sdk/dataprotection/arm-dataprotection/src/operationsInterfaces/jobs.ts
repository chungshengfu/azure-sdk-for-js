/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AzureBackupJobResource,
  JobsListOptionalParams,
  JobsGetOptionalParams,
  JobsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Jobs. */
export interface Jobs {
  /**
   * Returns list of jobs belonging to a backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    options?: JobsListOptionalParams,
  ): PagedAsyncIterableIterator<AzureBackupJobResource>;
  /**
   * Gets a job with id in a backup vault
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the backup vault.
   * @param jobId The Job ID. This is a GUID-formatted string (e.g.
   *              00000000-0000-0000-0000-000000000000).
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    jobId: string,
    options?: JobsGetOptionalParams,
  ): Promise<JobsGetResponse>;
}
