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
  Workspace,
  WorkspacesListByResourceGroupOptionalParams,
  WorkspacesListOptionalParams,
  WorkspacesGetOptionalParams,
  WorkspacesGetResponse,
  WorkspacePatchInfo,
  WorkspacesUpdateOptionalParams,
  WorkspacesUpdateResponse,
  WorkspacesCreateOrUpdateOptionalParams,
  WorkspacesCreateOrUpdateResponse,
  WorkspacesDeleteOptionalParams,
  WorkspacesDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Workspaces. */
export interface Workspaces {
  /**
   * Returns a list of workspaces in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: WorkspacesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Returns a list of workspaces in a subscription
   * @param options The options parameters.
   */
  list(
    options?: WorkspacesListOptionalParams,
  ): PagedAsyncIterableIterator<Workspace>;
  /**
   * Gets a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesGetOptionalParams,
  ): Promise<WorkspacesGetResponse>;
  /**
   * Updates a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param workspacePatchInfo Workspace patch request properties
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    workspacePatchInfo: WorkspacePatchInfo,
    options?: WorkspacesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesUpdateResponse>,
      WorkspacesUpdateResponse
    >
  >;
  /**
   * Updates a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param workspacePatchInfo Workspace patch request properties
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    workspacePatchInfo: WorkspacePatchInfo,
    options?: WorkspacesUpdateOptionalParams,
  ): Promise<WorkspacesUpdateResponse>;
  /**
   * Creates or updates a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param workspaceInfo Workspace create or update request properties
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    workspaceInfo: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesCreateOrUpdateResponse>,
      WorkspacesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param workspaceInfo Workspace create or update request properties
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    workspaceInfo: Workspace,
    options?: WorkspacesCreateOrUpdateOptionalParams,
  ): Promise<WorkspacesCreateOrUpdateResponse>;
  /**
   * Deletes a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacesDeleteResponse>,
      WorkspacesDeleteResponse
    >
  >;
  /**
   * Deletes a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspacesDeleteOptionalParams,
  ): Promise<WorkspacesDeleteResponse>;
}
