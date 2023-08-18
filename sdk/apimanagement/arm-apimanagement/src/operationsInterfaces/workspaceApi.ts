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
  ApiContract,
  WorkspaceApiListByServiceOptionalParams,
  WorkspaceApiGetEntityTagOptionalParams,
  WorkspaceApiGetEntityTagResponse,
  WorkspaceApiGetOptionalParams,
  WorkspaceApiGetResponse,
  ApiCreateOrUpdateParameter,
  WorkspaceApiCreateOrUpdateOptionalParams,
  WorkspaceApiCreateOrUpdateResponse,
  ApiUpdateContract,
  WorkspaceApiUpdateOptionalParams,
  WorkspaceApiUpdateResponse,
  WorkspaceApiDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceApi. */
export interface WorkspaceApi {
  /**
   * Lists all APIs of the workspace in an API Management service instance.
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
    options?: WorkspaceApiListByServiceOptionalParams
  ): PagedAsyncIterableIterator<ApiContract>;
  /**
   * Gets the entity state (Etag) version of the API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    options?: WorkspaceApiGetEntityTagOptionalParams
  ): Promise<WorkspaceApiGetEntityTagResponse>;
  /**
   * Gets the details of the API specified by its identifier.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    options?: WorkspaceApiGetOptionalParams
  ): Promise<WorkspaceApiGetResponse>;
  /**
   * Creates new or updates existing specified API of the workspace in an API Management service
   * instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    parameters: ApiCreateOrUpdateParameter,
    options?: WorkspaceApiCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceApiCreateOrUpdateResponse>,
      WorkspaceApiCreateOrUpdateResponse
    >
  >;
  /**
   * Creates new or updates existing specified API of the workspace in an API Management service
   * instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    parameters: ApiCreateOrUpdateParameter,
    options?: WorkspaceApiCreateOrUpdateOptionalParams
  ): Promise<WorkspaceApiCreateOrUpdateResponse>;
  /**
   * Updates the specified API of the workspace in an API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters API Update Contract parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    ifMatch: string,
    parameters: ApiUpdateContract,
    options?: WorkspaceApiUpdateOptionalParams
  ): Promise<WorkspaceApiUpdateResponse>;
  /**
   * Deletes the specified API of the workspace in an API Management service instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API revision identifier. Must be unique in the current API Management service instance.
   *              Non-current revision has ;rev=n as a suffix where n is the revision number.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    ifMatch: string,
    options?: WorkspaceApiDeleteOptionalParams
  ): Promise<void>;
}
