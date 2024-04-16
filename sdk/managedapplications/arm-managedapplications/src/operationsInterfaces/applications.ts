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
  Application,
  ApplicationsListByResourceGroupOptionalParams,
  ApplicationsListBySubscriptionOptionalParams,
  ApplicationsGetOptionalParams,
  ApplicationsGetResponse,
  ApplicationsDeleteOptionalParams,
  ApplicationsCreateOrUpdateOptionalParams,
  ApplicationsCreateOrUpdateResponse,
  ApplicationsUpdateOptionalParams,
  ApplicationsUpdateResponse,
  ApplicationsGetByIdOptionalParams,
  ApplicationsGetByIdResponse,
  ApplicationsDeleteByIdOptionalParams,
  ApplicationsCreateOrUpdateByIdOptionalParams,
  ApplicationsCreateOrUpdateByIdResponse,
  ApplicationsUpdateByIdOptionalParams,
  ApplicationsUpdateByIdResponse,
  ApplicationsRefreshPermissionsOptionalParams,
  ApplicationsListAllowedUpgradePlansOptionalParams,
  ApplicationsListAllowedUpgradePlansResponse,
  UpdateAccessDefinition,
  ApplicationsUpdateAccessOptionalParams,
  ListTokenRequest,
  ApplicationsListTokensOptionalParams,
  ApplicationsListTokensResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Applications. */
export interface Applications {
  /**
   * Lists all the applications within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Lists all the applications within a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: ApplicationsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<Application>;
  /**
   * Gets the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsGetOptionalParams,
  ): Promise<ApplicationsGetResponse>;
  /**
   * Deletes the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Creates or updates a managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationsCreateOrUpdateResponse>,
      ApplicationsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    applicationName: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateOptionalParams,
  ): Promise<ApplicationsCreateOrUpdateResponse>;
  /**
   * Updates an existing managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationsUpdateResponse>,
      ApplicationsUpdateResponse
    >
  >;
  /**
   * Updates an existing managed application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsUpdateOptionalParams,
  ): Promise<ApplicationsUpdateResponse>;
  /**
   * Gets the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  getById(
    applicationId: string,
    options?: ApplicationsGetByIdOptionalParams,
  ): Promise<ApplicationsGetByIdResponse>;
  /**
   * Deletes the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  beginDeleteById(
    applicationId: string,
    options?: ApplicationsDeleteByIdOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  beginDeleteByIdAndWait(
    applicationId: string,
    options?: ApplicationsDeleteByIdOptionalParams,
  ): Promise<void>;
  /**
   * Creates or updates a managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  beginCreateOrUpdateById(
    applicationId: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateByIdOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationsCreateOrUpdateByIdResponse>,
      ApplicationsCreateOrUpdateByIdResponse
    >
  >;
  /**
   * Creates or updates a managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param parameters Parameters supplied to the create or update a managed application.
   * @param options The options parameters.
   */
  beginCreateOrUpdateByIdAndWait(
    applicationId: string,
    parameters: Application,
    options?: ApplicationsCreateOrUpdateByIdOptionalParams,
  ): Promise<ApplicationsCreateOrUpdateByIdResponse>;
  /**
   * Updates an existing managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  beginUpdateById(
    applicationId: string,
    options?: ApplicationsUpdateByIdOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationsUpdateByIdResponse>,
      ApplicationsUpdateByIdResponse
    >
  >;
  /**
   * Updates an existing managed application.
   * @param applicationId The fully qualified ID of the managed application, including the managed
   *                      application name and the managed application resource type. Use the format,
   *                      /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applications/{application-name}
   * @param options The options parameters.
   */
  beginUpdateByIdAndWait(
    applicationId: string,
    options?: ApplicationsUpdateByIdOptionalParams,
  ): Promise<ApplicationsUpdateByIdResponse>;
  /**
   * Refresh Permissions for application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  beginRefreshPermissions(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsRefreshPermissionsOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Refresh Permissions for application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  beginRefreshPermissionsAndWait(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsRefreshPermissionsOptionalParams,
  ): Promise<void>;
  /**
   * List allowed upgrade plans for application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param options The options parameters.
   */
  listAllowedUpgradePlans(
    resourceGroupName: string,
    applicationName: string,
    options?: ApplicationsListAllowedUpgradePlansOptionalParams,
  ): Promise<ApplicationsListAllowedUpgradePlansResponse>;
  /**
   * Update access for application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Request body parameters to list tokens.
   * @param options The options parameters.
   */
  beginUpdateAccess(
    resourceGroupName: string,
    applicationName: string,
    parameters: UpdateAccessDefinition,
    options?: ApplicationsUpdateAccessOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Update access for application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Request body parameters to list tokens.
   * @param options The options parameters.
   */
  beginUpdateAccessAndWait(
    resourceGroupName: string,
    applicationName: string,
    parameters: UpdateAccessDefinition,
    options?: ApplicationsUpdateAccessOptionalParams,
  ): Promise<void>;
  /**
   * List tokens for application.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationName The name of the managed application.
   * @param parameters Request body parameters to list tokens.
   * @param options The options parameters.
   */
  listTokens(
    resourceGroupName: string,
    applicationName: string,
    parameters: ListTokenRequest,
    options?: ApplicationsListTokensOptionalParams,
  ): Promise<ApplicationsListTokensResponse>;
}
