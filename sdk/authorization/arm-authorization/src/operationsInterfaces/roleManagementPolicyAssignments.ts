/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RoleManagementPolicyAssignment,
  RoleManagementPolicyAssignmentsListForScopeOptionalParams,
  RoleManagementPolicyAssignmentsGetOptionalParams,
  RoleManagementPolicyAssignmentsGetResponse,
  RoleManagementPolicyAssignmentsCreateOptionalParams,
  RoleManagementPolicyAssignmentsCreateResponse,
  RoleManagementPolicyAssignmentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RoleManagementPolicyAssignments. */
export interface RoleManagementPolicyAssignments {
  /**
   * Gets role management assignment policies for a resource scope.
   * @param scope The scope of the role management policy.
   * @param options The options parameters.
   */
  listForScope(
    scope: string,
    options?: RoleManagementPolicyAssignmentsListForScopeOptionalParams,
  ): PagedAsyncIterableIterator<RoleManagementPolicyAssignment>;
  /**
   * Get the specified role management policy assignment for a resource scope
   * @param scope The scope of the role management policy.
   * @param roleManagementPolicyAssignmentName The name of format {guid_guid} the role management policy
   *                                           assignment to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleManagementPolicyAssignmentName: string,
    options?: RoleManagementPolicyAssignmentsGetOptionalParams,
  ): Promise<RoleManagementPolicyAssignmentsGetResponse>;
  /**
   * Create a role management policy assignment
   * @param scope The scope of the role management policy assignment to upsert.
   * @param roleManagementPolicyAssignmentName The name of format {guid_guid} the role management policy
   *                                           assignment to upsert.
   * @param parameters Parameters for the role management policy assignment.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleManagementPolicyAssignmentName: string,
    parameters: RoleManagementPolicyAssignment,
    options?: RoleManagementPolicyAssignmentsCreateOptionalParams,
  ): Promise<RoleManagementPolicyAssignmentsCreateResponse>;
  /**
   * Delete a role management policy assignment
   * @param scope The scope of the role management policy assignment to delete.
   * @param roleManagementPolicyAssignmentName The name of format {guid_guid} the role management policy
   *                                           assignment to delete.
   * @param options The options parameters.
   */
  delete(
    scope: string,
    roleManagementPolicyAssignmentName: string,
    options?: RoleManagementPolicyAssignmentsDeleteOptionalParams,
  ): Promise<void>;
}
