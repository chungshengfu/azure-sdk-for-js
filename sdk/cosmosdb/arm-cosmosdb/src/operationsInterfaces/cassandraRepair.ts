/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  CassandraRepairGetClusterStatusOptionalParams,
  CassandraRepairGetClusterStatusResponse,
  CassandraRepairGetTableStatusOptionalParams,
  CassandraRepairGetTableStatusResponse,
  CassandraClusterRepairPublicResource,
  CassandraRepairCreateOptionalParams,
  CassandraRepairCreateResponse,
  CassandraRepairDeleteOptionalParams,
  CassandraRepairListOptionalParams,
  CassandraRepairListResponse,
  CassandraRepairPauseOptionalParams,
  CassandraRepairResumeOptionalParams,
  CassandraRepairListSegmentsOptionalParams,
  CassandraRepairListSegmentsResponse,
  CassandraRepairShowOptionalParams,
  CassandraRepairShowResponse,
  CassandraRepairAbortSegmentOptionalParams,
  CassandraRepairUpdateOptionalParams
} from "../models";

/** Interface representing a CassandraRepair. */
export interface CassandraRepair {
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginGetClusterStatus(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraRepairGetClusterStatusOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraRepairGetClusterStatusResponse>,
      CassandraRepairGetClusterStatusResponse
    >
  >;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginGetClusterStatusAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraRepairGetClusterStatusOptionalParams
  ): Promise<CassandraRepairGetClusterStatusResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginGetTableStatus(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraRepairGetTableStatusOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraRepairGetTableStatusResponse>,
      CassandraRepairGetTableStatusResponse
    >
  >;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginGetTableStatusAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraRepairGetTableStatusOptionalParams
  ): Promise<CassandraRepairGetTableStatusResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body The properties specifying the desired state of repairRun to be created.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    clusterName: string,
    body: CassandraClusterRepairPublicResource,
    options?: CassandraRepairCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraRepairCreateResponse>,
      CassandraRepairCreateResponse
    >
  >;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body The properties specifying the desired state of repairRun to be created.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    clusterName: string,
    body: CassandraClusterRepairPublicResource,
    options?: CassandraRepairCreateOptionalParams
  ): Promise<CassandraRepairCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param ownerName Owner Name that was used to create the Repair Run.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    ownerName: string,
    options?: CassandraRepairDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param ownerName Owner Name that was used to create the Repair Run.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    ownerName: string,
    options?: CassandraRepairDeleteOptionalParams
  ): Promise<void>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginList(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraRepairListOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraRepairListResponse>,
      CassandraRepairListResponse
    >
  >;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginListAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraRepairListOptionalParams
  ): Promise<CassandraRepairListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginPause(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairPauseOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginPauseAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairPauseOptionalParams
  ): Promise<void>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginResume(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairResumeOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginResumeAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairResumeOptionalParams
  ): Promise<void>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginListSegments(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairListSegmentsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraRepairListSegmentsResponse>,
      CassandraRepairListSegmentsResponse
    >
  >;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginListSegmentsAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairListSegmentsOptionalParams
  ): Promise<CassandraRepairListSegmentsResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginShow(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairShowOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraRepairShowResponse>,
      CassandraRepairShowResponse
    >
  >;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param options The options parameters.
   */
  beginShowAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    options?: CassandraRepairShowOptionalParams
  ): Promise<CassandraRepairShowResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param segmentId Id of a segment of a repair run.
   * @param options The options parameters.
   */
  beginAbortSegment(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    segmentId: string,
    options?: CassandraRepairAbortSegmentOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param segmentId Id of a segment of a repair run.
   * @param options The options parameters.
   */
  beginAbortSegmentAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    segmentId: string,
    options?: CassandraRepairAbortSegmentOptionalParams
  ): Promise<void>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param intensityValue Floating point value representing intensity of the repair.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    intensityValue: string,
    options?: CassandraRepairUpdateOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param repairRunId Id of repair run created to repair Cassandra cluster.
   * @param intensityValue Floating point value representing intensity of the repair.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    repairRunId: string,
    intensityValue: string,
    options?: CassandraRepairUpdateOptionalParams
  ): Promise<void>;
}
