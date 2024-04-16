/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RoleAssignment,
  RoleAssignmentsListForSubscriptionOptionalParams,
  RoleAssignmentsListForResourceGroupOptionalParams,
  RoleAssignmentsListForResourceOptionalParams,
  RoleAssignmentsListForScopeOptionalParams,
  RoleAssignmentsGetOptionalParams,
  RoleAssignmentsGetResponse,
  RoleAssignmentCreateParameters,
  RoleAssignmentsCreateOptionalParams,
  RoleAssignmentsCreateResponse,
  RoleAssignmentsDeleteOptionalParams,
  RoleAssignmentsDeleteResponse,
  RoleAssignmentsGetByIdOptionalParams,
  RoleAssignmentsGetByIdResponse,
  RoleAssignmentsCreateByIdOptionalParams,
  RoleAssignmentsCreateByIdResponse,
  RoleAssignmentsDeleteByIdOptionalParams,
  RoleAssignmentsDeleteByIdResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RoleAssignments. */
export interface RoleAssignments {
  /**
   * List all role assignments that apply to a subscription.
   * @param options The options parameters.
   */
  listForSubscription(
    options?: RoleAssignmentsListForSubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<RoleAssignment>;
  /**
   * List all role assignments that apply to a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listForResourceGroup(
    resourceGroupName: string,
    options?: RoleAssignmentsListForResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<RoleAssignment>;
  /**
   * List all role assignments that apply to a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param resourceType The resource type name. For example the type name of a web app is 'sites' (from
   *                     Microsoft.Web/sites).
   * @param resourceName The resource name.
   * @param options The options parameters.
   */
  listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    resourceType: string,
    resourceName: string,
    options?: RoleAssignmentsListForResourceOptionalParams,
  ): PagedAsyncIterableIterator<RoleAssignment>;
  /**
   * List all role assignments that apply to a scope.
   * @param scope The scope of the operation or resource. Valid scopes are: subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param options The options parameters.
   */
  listForScope(
    scope: string,
    options?: RoleAssignmentsListForScopeOptionalParams,
  ): PagedAsyncIterableIterator<RoleAssignment>;
  /**
   * Get a role assignment by scope and name.
   * @param scope The scope of the operation or resource. Valid scopes are: subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param roleAssignmentName The name of the role assignment. It can be any valid GUID.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentName: string,
    options?: RoleAssignmentsGetOptionalParams,
  ): Promise<RoleAssignmentsGetResponse>;
  /**
   * Create or update a role assignment by scope and name.
   * @param scope The scope of the operation or resource. Valid scopes are: subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param roleAssignmentName The name of the role assignment. It can be any valid GUID.
   * @param parameters Parameters for the role assignment.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleAssignmentName: string,
    parameters: RoleAssignmentCreateParameters,
    options?: RoleAssignmentsCreateOptionalParams,
  ): Promise<RoleAssignmentsCreateResponse>;
  /**
   * Delete a role assignment by scope and name.
   * @param scope The scope of the operation or resource. Valid scopes are: subscription (format:
   *              '/subscriptions/{subscriptionId}'), resource group (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}', or resource (format:
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/[{parentResourcePath}/]{resourceType}/{resourceName}'
   * @param roleAssignmentName The name of the role assignment. It can be any valid GUID.
   * @param options The options parameters.
   */
  delete(
    scope: string,
    roleAssignmentName: string,
    options?: RoleAssignmentsDeleteOptionalParams,
  ): Promise<RoleAssignmentsDeleteResponse>;
  /**
   * Get a role assignment by ID.
   * @param roleAssignmentId The fully qualified ID of the role assignment including scope, resource
   *                         name, and resource type. Format:
   *                         /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example:
   *                         /subscriptions/<SUB_ID>/resourcegroups/<RESOURCE_GROUP>/providers/Microsoft.Authorization/roleAssignments/<ROLE_ASSIGNMENT_NAME>
   * @param options The options parameters.
   */
  getById(
    roleAssignmentId: string,
    options?: RoleAssignmentsGetByIdOptionalParams,
  ): Promise<RoleAssignmentsGetByIdResponse>;
  /**
   * Create or update a role assignment by ID.
   * @param roleAssignmentId The fully qualified ID of the role assignment including scope, resource
   *                         name, and resource type. Format:
   *                         /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example:
   *                         /subscriptions/<SUB_ID>/resourcegroups/<RESOURCE_GROUP>/providers/Microsoft.Authorization/roleAssignments/<ROLE_ASSIGNMENT_NAME>
   * @param parameters Parameters for the role assignment.
   * @param options The options parameters.
   */
  createById(
    roleAssignmentId: string,
    parameters: RoleAssignmentCreateParameters,
    options?: RoleAssignmentsCreateByIdOptionalParams,
  ): Promise<RoleAssignmentsCreateByIdResponse>;
  /**
   * Delete a role assignment by ID.
   * @param roleAssignmentId The fully qualified ID of the role assignment including scope, resource
   *                         name, and resource type. Format:
   *                         /{scope}/providers/Microsoft.Authorization/roleAssignments/{roleAssignmentName}. Example:
   *                         /subscriptions/<SUB_ID>/resourcegroups/<RESOURCE_GROUP>/providers/Microsoft.Authorization/roleAssignments/<ROLE_ASSIGNMENT_NAME>
   * @param options The options parameters.
   */
  deleteById(
    roleAssignmentId: string,
    options?: RoleAssignmentsDeleteByIdOptionalParams,
  ): Promise<RoleAssignmentsDeleteByIdResponse>;
}
