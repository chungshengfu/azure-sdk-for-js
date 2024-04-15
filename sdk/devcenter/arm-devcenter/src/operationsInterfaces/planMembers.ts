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
  DevCenterPlanMember,
  PlanMembersListOptionalParams,
  PlanMembersGetOptionalParams,
  PlanMembersGetResponse,
  PlanMembersCreateOrUpdateOptionalParams,
  PlanMembersCreateOrUpdateResponse,
  PlanMemberUpdate,
  PlanMembersUpdateOptionalParams,
  PlanMembersUpdateResponse,
  PlanMembersDeleteOptionalParams,
  PlanMembersDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PlanMembers. */
export interface PlanMembers {
  /**
   * Lists all of the members assigned to a devcenter plan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    planName: string,
    options?: PlanMembersListOptionalParams,
  ): PagedAsyncIterableIterator<DevCenterPlanMember>;
  /**
   * Gets a devcenter plan member.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    options?: PlanMembersGetOptionalParams,
  ): Promise<PlanMembersGetResponse>;
  /**
   * Creates or updates a devcenter plan member resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param body Represents a devcenter plan.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    body: DevCenterPlanMember,
    options?: PlanMembersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PlanMembersCreateOrUpdateResponse>,
      PlanMembersCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a devcenter plan member resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param body Represents a devcenter plan.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    body: DevCenterPlanMember,
    options?: PlanMembersCreateOrUpdateOptionalParams,
  ): Promise<PlanMembersCreateOrUpdateResponse>;
  /**
   * Partially updates a devcenter plan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param body Updatable devcenter plan properties.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    body: PlanMemberUpdate,
    options?: PlanMembersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PlanMembersUpdateResponse>,
      PlanMembersUpdateResponse
    >
  >;
  /**
   * Partially updates a devcenter plan.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param body Updatable devcenter plan properties.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    body: PlanMemberUpdate,
    options?: PlanMembersUpdateOptionalParams,
  ): Promise<PlanMembersUpdateResponse>;
  /**
   * Deletes a devcenter plan member
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    options?: PlanMembersDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PlanMembersDeleteResponse>,
      PlanMembersDeleteResponse
    >
  >;
  /**
   * Deletes a devcenter plan member
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param planName The name of the devcenter plan.
   * @param memberName The name of a devcenter plan member.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    planName: string,
    memberName: string,
    options?: PlanMembersDeleteOptionalParams,
  ): Promise<PlanMembersDeleteResponse>;
}
