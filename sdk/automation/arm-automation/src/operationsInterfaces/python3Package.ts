/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Module,
  Python3PackageListByAutomationAccountOptionalParams,
  Python3PackageDeleteOptionalParams,
  Python3PackageGetOptionalParams,
  Python3PackageGetResponse,
  PythonPackageCreateParameters,
  Python3PackageCreateOrUpdateOptionalParams,
  Python3PackageCreateOrUpdateResponse,
  PythonPackageUpdateParameters,
  Python3PackageUpdateOptionalParams,
  Python3PackageUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Python3Package. */
export interface Python3Package {
  /**
   * Retrieve a list of python 3 packages.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: Python3PackageListByAutomationAccountOptionalParams,
  ): PagedAsyncIterableIterator<Module>;
  /**
   * Delete the python 3 package by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    packageName: string,
    options?: Python3PackageDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Retrieve the python 3 package identified by package name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The python package name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    packageName: string,
    options?: Python3PackageGetOptionalParams,
  ): Promise<Python3PackageGetResponse>;
  /**
   * Create or Update the python 3 package identified by package name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The create or update parameters for python package.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    packageName: string,
    parameters: PythonPackageCreateParameters,
    options?: Python3PackageCreateOrUpdateOptionalParams,
  ): Promise<Python3PackageCreateOrUpdateResponse>;
  /**
   * Update the python 3 package identified by package name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param packageName The name of python package.
   * @param parameters The update parameters for python package.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    packageName: string,
    parameters: PythonPackageUpdateParameters,
    options?: Python3PackageUpdateOptionalParams,
  ): Promise<Python3PackageUpdateResponse>;
}
