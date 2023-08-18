/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GroupContract,
  WorkspaceGroupListByServiceOptionalParams,
  WorkspaceGroupGetEntityTagOptionalParams,
  WorkspaceGroupGetEntityTagResponse,
  WorkspaceGroupGetOptionalParams,
  WorkspaceGroupGetResponse,
  GroupCreateParameters,
  WorkspaceGroupCreateOrUpdateOptionalParams,
  WorkspaceGroupCreateOrUpdateResponse,
  GroupUpdateParameters,
  WorkspaceGroupUpdateOptionalParams,
  WorkspaceGroupUpdateResponse,
  WorkspaceGroupDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceGroup. */
export interface WorkspaceGroup {
  /**
   * Lists a collection of groups defined within a workspace in a service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceGroupListByServiceOptionalParams
  ): PagedAsyncIterableIterator<GroupContract>;
  /**
   * Gets the entity state (Etag) version of the group specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    groupId: string,
    options?: WorkspaceGroupGetEntityTagOptionalParams
  ): Promise<WorkspaceGroupGetEntityTagResponse>;
  /**
   * Gets the details of the group specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    groupId: string,
    options?: WorkspaceGroupGetOptionalParams
  ): Promise<WorkspaceGroupGetResponse>;
  /**
   * Creates or Updates a group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    groupId: string,
    parameters: GroupCreateParameters,
    options?: WorkspaceGroupCreateOrUpdateOptionalParams
  ): Promise<WorkspaceGroupCreateOrUpdateResponse>;
  /**
   * Updates the details of the group specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    groupId: string,
    ifMatch: string,
    parameters: GroupUpdateParameters,
    options?: WorkspaceGroupUpdateOptionalParams
  ): Promise<WorkspaceGroupUpdateResponse>;
  /**
   * Deletes specific group of the workspace in an API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param groupId Group identifier. Must be unique in the current API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    groupId: string,
    ifMatch: string,
    options?: WorkspaceGroupDeleteOptionalParams
  ): Promise<void>;
}
