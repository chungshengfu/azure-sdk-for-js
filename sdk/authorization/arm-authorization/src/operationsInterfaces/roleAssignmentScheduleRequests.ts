/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RoleAssignmentScheduleRequest,
  RoleAssignmentScheduleRequestsListForScopeOptionalParams,
  RoleAssignmentScheduleRequestsCreateOptionalParams,
  RoleAssignmentScheduleRequestsCreateResponse,
  RoleAssignmentScheduleRequestsGetOptionalParams,
  RoleAssignmentScheduleRequestsGetResponse,
  RoleAssignmentScheduleRequestsCancelOptionalParams,
  RoleAssignmentScheduleRequestsValidateOptionalParams,
  RoleAssignmentScheduleRequestsValidateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RoleAssignmentScheduleRequests. */
export interface RoleAssignmentScheduleRequests {
  /**
   * Gets role assignment schedule requests for a scope.
   * @param scope The scope of the role assignments schedule requests.
   * @param options The options parameters.
   */
  listForScope(
    scope: string,
    options?: RoleAssignmentScheduleRequestsListForScopeOptionalParams,
  ): PagedAsyncIterableIterator<RoleAssignmentScheduleRequest>;
  /**
   * Creates a role assignment schedule request.
   * @param scope The scope of the role assignment schedule request to create. The scope can be any REST
   *              resource instance. For example, use
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/' for a subscription,
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}'
   *              for a resource group, and
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   *              for a resource.
   * @param roleAssignmentScheduleRequestName A GUID for the role assignment to create. The name must be
   *                                          unique and different for each role assignment.
   * @param parameters Parameters for the role assignment schedule request.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    parameters: RoleAssignmentScheduleRequest,
    options?: RoleAssignmentScheduleRequestsCreateOptionalParams,
  ): Promise<RoleAssignmentScheduleRequestsCreateResponse>;
  /**
   * Get the specified role assignment schedule request.
   * @param scope The scope of the role assignment schedule request.
   * @param roleAssignmentScheduleRequestName The name (guid) of the role assignment schedule request to
   *                                          get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    options?: RoleAssignmentScheduleRequestsGetOptionalParams,
  ): Promise<RoleAssignmentScheduleRequestsGetResponse>;
  /**
   * Cancels a pending role assignment schedule request.
   * @param scope The scope of the role assignment request to cancel.
   * @param roleAssignmentScheduleRequestName The name of the role assignment request to cancel.
   * @param options The options parameters.
   */
  cancel(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    options?: RoleAssignmentScheduleRequestsCancelOptionalParams,
  ): Promise<void>;
  /**
   * Validates a new role assignment schedule request.
   * @param scope The scope of the role assignment request to validate.
   * @param roleAssignmentScheduleRequestName The name of the role assignment request to validate.
   * @param parameters Parameters for the role assignment schedule request.
   * @param options The options parameters.
   */
  validate(
    scope: string,
    roleAssignmentScheduleRequestName: string,
    parameters: RoleAssignmentScheduleRequest,
    options?: RoleAssignmentScheduleRequestsValidateOptionalParams,
  ): Promise<RoleAssignmentScheduleRequestsValidateResponse>;
}
