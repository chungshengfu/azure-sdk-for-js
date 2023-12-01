/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ScriptPackage,
  ScriptPackagesListByPrivateCloudOptionalParams,
  ScriptPackagesGetOptionalParams,
  ScriptPackagesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ScriptPackages. */
export interface ScriptPackages {
  /**
   * List script packages available to run on the private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  listByPrivateCloud(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams
  ): PagedAsyncIterableIterator<ScriptPackage>;
  /**
   * Get a script package available to run on a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptPackageName Name of the script package in the private cloud
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptPackagesGetOptionalParams
  ): Promise<ScriptPackagesGetResponse>;
}
