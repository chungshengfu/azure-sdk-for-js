/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Connection,
  ConnectionListByAutomationAccountOptionalParams,
  ConnectionDeleteOptionalParams,
  ConnectionGetOptionalParams,
  ConnectionGetResponse,
  ConnectionCreateOrUpdateParameters,
  ConnectionCreateOrUpdateOptionalParams,
  ConnectionCreateOrUpdateResponse,
  ConnectionUpdateParameters,
  ConnectionUpdateOptionalParams,
  ConnectionUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectionOperations. */
export interface ConnectionOperations {
  /**
   * Retrieve a list of connections.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: ConnectionListByAutomationAccountOptionalParams,
  ): PagedAsyncIterableIterator<Connection>;
  /**
   * Delete the connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    options?: ConnectionDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Retrieve the connection identified by connection name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The name of connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    options?: ConnectionGetOptionalParams,
  ): Promise<ConnectionGetResponse>;
  /**
   * Create or update a connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the create or update connection operation.
   * @param parameters The parameters supplied to the create or update connection operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    parameters: ConnectionCreateOrUpdateParameters,
    options?: ConnectionCreateOrUpdateOptionalParams,
  ): Promise<ConnectionCreateOrUpdateResponse>;
  /**
   * Update a connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param connectionName The parameters supplied to the update a connection operation.
   * @param parameters The parameters supplied to the update a connection operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    connectionName: string,
    parameters: ConnectionUpdateParameters,
    options?: ConnectionUpdateOptionalParams,
  ): Promise<ConnectionUpdateResponse>;
}
