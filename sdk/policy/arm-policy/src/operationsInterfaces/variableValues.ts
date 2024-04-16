/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VariableValue,
  VariableValuesListOptionalParams,
  VariableValuesListForManagementGroupOptionalParams,
  VariableValuesDeleteOptionalParams,
  VariableValuesCreateOrUpdateOptionalParams,
  VariableValuesCreateOrUpdateResponse,
  VariableValuesGetOptionalParams,
  VariableValuesGetResponse,
  VariableValuesDeleteAtManagementGroupOptionalParams,
  VariableValuesCreateOrUpdateAtManagementGroupOptionalParams,
  VariableValuesCreateOrUpdateAtManagementGroupResponse,
  VariableValuesGetAtManagementGroupOptionalParams,
  VariableValuesGetAtManagementGroupResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VariableValues. */
export interface VariableValues {
  /**
   * This operation retrieves the list of all variable values associated with the given variable that is
   * at a subscription level.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  list(
    variableName: string,
    options?: VariableValuesListOptionalParams,
  ): PagedAsyncIterableIterator<VariableValue>;
  /**
   * This operation retrieves the list of all variable values applicable the variable indicated at the
   * management group scope.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param options The options parameters.
   */
  listForManagementGroup(
    managementGroupId: string,
    variableName: string,
    options?: VariableValuesListForManagementGroupOptionalParams,
  ): PagedAsyncIterableIterator<VariableValue>;
  /**
   * This operation deletes a variable value, given its name, the subscription it was created in, and the
   * variable it belongs to. The scope of a variable value is the part of its ID preceding
   * '/providers/Microsoft.Authorization/variables/{variableName}'.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  delete(
    variableName: string,
    variableValueName: string,
    options?: VariableValuesDeleteOptionalParams,
  ): Promise<void>;
  /**
   *  This operation creates or updates a variable value with the given subscription and name for a given
   * variable. Variable values are scoped to the variable for which they are created for.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param parameters Parameters for the variable value.
   * @param options The options parameters.
   */
  createOrUpdate(
    variableName: string,
    variableValueName: string,
    parameters: VariableValue,
    options?: VariableValuesCreateOrUpdateOptionalParams,
  ): Promise<VariableValuesCreateOrUpdateResponse>;
  /**
   * This operation retrieves a single variable value; given its name, subscription it was created at and
   * the variable it's created for.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  get(
    variableName: string,
    variableValueName: string,
    options?: VariableValuesGetOptionalParams,
  ): Promise<VariableValuesGetResponse>;
  /**
   * This operation deletes a variable value, given its name, the management group it was created in, and
   * the variable it belongs to. The scope of a variable value is the part of its ID preceding
   * '/providers/Microsoft.Authorization/variables/{variableName}'.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    variableValueName: string,
    options?: VariableValuesDeleteAtManagementGroupOptionalParams,
  ): Promise<void>;
  /**
   *  This operation creates or updates a variable value with the given management group and name for a
   * given variable. Variable values are scoped to the variable for which they are created for.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param parameters Parameters for the variable value.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    variableValueName: string,
    parameters: VariableValue,
    options?: VariableValuesCreateOrUpdateAtManagementGroupOptionalParams,
  ): Promise<VariableValuesCreateOrUpdateAtManagementGroupResponse>;
  /**
   * This operation retrieves a single variable value; given its name,  management group it was created
   * at and the variable it's created for.
   * @param managementGroupId The ID of the management group.
   * @param variableName The name of the variable to operate on.
   * @param variableValueName The name of the variable value to operate on.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    managementGroupId: string,
    variableName: string,
    variableValueName: string,
    options?: VariableValuesGetAtManagementGroupOptionalParams,
  ): Promise<VariableValuesGetAtManagementGroupResponse>;
}
