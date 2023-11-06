/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Workspace,
  WorkspacesListOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspacesHeadOptionalParams,
  WorkspacesHeadResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Returns a collection of workspaces.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesListOptionalParams
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Returns details of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesGetOptionalParams
  ): Promise<WorkspacesGetResponse>;
  /**
   * Creates new or updates existing workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param payload Workspace entity.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    payload: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Deletes specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Checks if specified workspace exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  head(
    resourceGroupName: string,
    serviceName: string,
    options?: WorkspacesHeadOptionalParams
  ): Promise<WorkspacesHeadResponse>;
}
