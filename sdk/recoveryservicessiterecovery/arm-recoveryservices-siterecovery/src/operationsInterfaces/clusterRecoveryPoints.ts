/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ClusterRecoveryPoint,
  ClusterRecoveryPointsListByReplicationProtectionClusterOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ClusterRecoveryPoints. */
export interface ClusterRecoveryPoints {
  /**
   * The list of cluster recovery points.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param options The options parameters.
   */
  listByReplicationProtectionCluster(
    resourceGroupName: string,
    options?: ClusterRecoveryPointsListByReplicationProtectionClusterOptionalParams,
  ): PagedAsyncIterableIterator<ClusterRecoveryPoint>;
}
