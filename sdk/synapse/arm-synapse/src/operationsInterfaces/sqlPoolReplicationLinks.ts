/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ReplicationLink,
  SqlPoolReplicationLinksListOptionalParams,
  SqlPoolReplicationLinksGetByNameOptionalParams,
  SqlPoolReplicationLinksGetByNameResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SqlPoolReplicationLinks. */
export interface SqlPoolReplicationLinks {
  /**
   * Lists a Sql pool's replication links.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolReplicationLinksListOptionalParams,
  ): PagedAsyncIterableIterator<ReplicationLink>;
  /**
   * Get SQL pool replication link by name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param linkId The ID of the replication link.
   * @param options The options parameters.
   */
  getByName(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    linkId: string,
    options?: SqlPoolReplicationLinksGetByNameOptionalParams,
  ): Promise<SqlPoolReplicationLinksGetByNameResponse>;
}
