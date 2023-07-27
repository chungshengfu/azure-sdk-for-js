/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DistributedAvailabilityGroup,
  DistributedAvailabilityGroupsListByInstanceOptionalParams,
  DistributedAvailabilityGroupsGetOptionalParams,
  DistributedAvailabilityGroupsGetResponse,
  DistributedAvailabilityGroupsCreateOrUpdateRequestBody,
  DistributedAvailabilityGroupsCreateOrUpdateOptionalParams,
  DistributedAvailabilityGroupsCreateOrUpdateResponse,
  DistributedAvailabilityGroupsDeleteOptionalParams,
  DistributedAvailabilityGroupsUpdateOptionalParams,
  DistributedAvailabilityGroupsUpdateResponse,
  DistributedAvailabilityGroupSetRole,
  DistributedAvailabilityGroupsSetRoleOptionalParams,
  DistributedAvailabilityGroupsSetRoleResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DistributedAvailabilityGroups. */
export interface DistributedAvailabilityGroups {
  /**
   * Gets a list of a distributed availability groups in instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: DistributedAvailabilityGroupsListByInstanceOptionalParams
  ): PagedAsyncIterableIterator<DistributedAvailabilityGroup>;
  /**
   * Gets a distributed availability group info.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    options?: DistributedAvailabilityGroupsGetOptionalParams
  ): Promise<DistributedAvailabilityGroupsGetResponse>;
  /**
   * Creates a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroupsCreateOrUpdateRequestBody,
    options?: DistributedAvailabilityGroupsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DistributedAvailabilityGroupsCreateOrUpdateResponse>,
      DistributedAvailabilityGroupsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroupsCreateOrUpdateRequestBody,
    options?: DistributedAvailabilityGroupsCreateOrUpdateOptionalParams
  ): Promise<DistributedAvailabilityGroupsCreateOrUpdateResponse>;
  /**
   * Drops a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    options?: DistributedAvailabilityGroupsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Drops a distributed availability group between Sql On-Prem and Sql Managed Instance.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    options?: DistributedAvailabilityGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates a distributed availability group replication mode.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroup,
    options?: DistributedAvailabilityGroupsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DistributedAvailabilityGroupsUpdateResponse>,
      DistributedAvailabilityGroupsUpdateResponse
    >
  >;
  /**
   * Updates a distributed availability group replication mode.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group info.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroup,
    options?: DistributedAvailabilityGroupsUpdateOptionalParams
  ): Promise<DistributedAvailabilityGroupsUpdateResponse>;
  /**
   * Sets the role for managed instance in a distributed availability group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group set role request parameters.
   * @param options The options parameters.
   */
  beginSetRole(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroupSetRole,
    options?: DistributedAvailabilityGroupsSetRoleOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DistributedAvailabilityGroupsSetRoleResponse>,
      DistributedAvailabilityGroupsSetRoleResponse
    >
  >;
  /**
   * Sets the role for managed instance in a distributed availability group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param distributedAvailabilityGroupName The distributed availability group name.
   * @param parameters The distributed availability group set role request parameters.
   * @param options The options parameters.
   */
  beginSetRoleAndWait(
    resourceGroupName: string,
    managedInstanceName: string,
    distributedAvailabilityGroupName: string,
    parameters: DistributedAvailabilityGroupSetRole,
    options?: DistributedAvailabilityGroupsSetRoleOptionalParams
  ): Promise<DistributedAvailabilityGroupsSetRoleResponse>;
}
