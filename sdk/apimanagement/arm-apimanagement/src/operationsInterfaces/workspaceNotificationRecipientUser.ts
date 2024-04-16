/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  NotificationName,
  WorkspaceNotificationRecipientUserListByNotificationOptionalParams,
  WorkspaceNotificationRecipientUserListByNotificationResponse,
  WorkspaceNotificationRecipientUserCheckEntityExistsOptionalParams,
  WorkspaceNotificationRecipientUserCheckEntityExistsResponse,
  WorkspaceNotificationRecipientUserCreateOrUpdateOptionalParams,
  WorkspaceNotificationRecipientUserCreateOrUpdateResponse,
  WorkspaceNotificationRecipientUserDeleteOptionalParams,
} from "../models";

/** Interface representing a WorkspaceNotificationRecipientUser. */
export interface WorkspaceNotificationRecipientUser {
  /**
   * Gets the list of the Notification Recipient User subscribed to the notification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param notificationName Notification Name Identifier.
   * @param options The options parameters.
   */
  listByNotification(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    notificationName: NotificationName,
    options?: WorkspaceNotificationRecipientUserListByNotificationOptionalParams,
  ): Promise<WorkspaceNotificationRecipientUserListByNotificationResponse>;
  /**
   * Determine if the Notification Recipient User is subscribed to the notification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param notificationName Notification Name Identifier.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  checkEntityExists(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    notificationName: NotificationName,
    userId: string,
    options?: WorkspaceNotificationRecipientUserCheckEntityExistsOptionalParams,
  ): Promise<WorkspaceNotificationRecipientUserCheckEntityExistsResponse>;
  /**
   * Adds the API Management User to the list of Recipients for the Notification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param notificationName Notification Name Identifier.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    notificationName: NotificationName,
    userId: string,
    options?: WorkspaceNotificationRecipientUserCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceNotificationRecipientUserCreateOrUpdateResponse>;
  /**
   * Removes the API Management user from the list of Notification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param notificationName Notification Name Identifier.
   * @param userId User identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    notificationName: NotificationName,
    userId: string,
    options?: WorkspaceNotificationRecipientUserDeleteOptionalParams,
  ): Promise<void>;
}
