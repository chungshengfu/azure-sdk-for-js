/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LoggerContract,
  WorkspaceLoggerListByWorkspaceOptionalParams,
  WorkspaceLoggerGetEntityTagOptionalParams,
  WorkspaceLoggerGetEntityTagResponse,
  WorkspaceLoggerGetOptionalParams,
  WorkspaceLoggerGetResponse,
  WorkspaceLoggerCreateOrUpdateOptionalParams,
  WorkspaceLoggerCreateOrUpdateResponse,
  LoggerUpdateContract,
  WorkspaceLoggerUpdateOptionalParams,
  WorkspaceLoggerUpdateResponse,
  WorkspaceLoggerDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceLogger. */
export interface WorkspaceLogger {
  /**
   * Lists a collection of loggers in the specified workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspaceLoggerListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<LoggerContract>;
  /**
   * Gets the entity state (Etag) version of the logger specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    loggerId: string,
    options?: WorkspaceLoggerGetEntityTagOptionalParams,
  ): Promise<WorkspaceLoggerGetEntityTagResponse>;
  /**
   * Gets the details of the logger specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    loggerId: string,
    options?: WorkspaceLoggerGetOptionalParams,
  ): Promise<WorkspaceLoggerGetResponse>;
  /**
   * Creates or Updates a logger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    loggerId: string,
    parameters: LoggerContract,
    options?: WorkspaceLoggerCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceLoggerCreateOrUpdateResponse>;
  /**
   * Updates an existing logger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    loggerId: string,
    ifMatch: string,
    parameters: LoggerUpdateContract,
    options?: WorkspaceLoggerUpdateOptionalParams,
  ): Promise<WorkspaceLoggerUpdateResponse>;
  /**
   * Deletes the specified logger.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param loggerId Logger identifier. Must be unique in the API Management service instance.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    loggerId: string,
    ifMatch: string,
    options?: WorkspaceLoggerDeleteOptionalParams,
  ): Promise<void>;
}
