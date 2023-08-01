/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DeletedRunbook,
  DeletedRunbooksListByAutomationAccountOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeletedRunbooks. */
export interface DeletedRunbooks {
  /**
   * Retrieve the deleted runbooks for an automation account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DeletedRunbooksListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<DeletedRunbook>;
}
