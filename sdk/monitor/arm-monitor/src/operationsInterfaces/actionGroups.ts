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
  ActionGroupResource,
  ActionGroupsListBySubscriptionIdOptionalParams,
  ActionGroupsListByResourceGroupOptionalParams,
  ActionGroupsCreateOrUpdateOptionalParams,
  ActionGroupsCreateOrUpdateResponse,
  ActionGroupsGetOptionalParams,
  ActionGroupsGetResponse,
  ActionGroupsDeleteOptionalParams,
  ActionGroupPatchBody,
  ActionGroupsUpdateOptionalParams,
  ActionGroupsUpdateResponse,
  NotificationRequestBody,
  ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams,
  ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse,
  ActionGroupsGetTestNotificationsAtActionGroupResourceLevelOptionalParams,
  ActionGroupsGetTestNotificationsAtActionGroupResourceLevelResponse,
  EnableRequest,
  ActionGroupsEnableReceiverOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ActionGroups. */
export interface ActionGroups {
  /**
   * Get a list of all action groups in a subscription.
   * @param options The options parameters.
   */
  listBySubscriptionId(
    options?: ActionGroupsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<ActionGroupResource>;
  /**
   * Get a list of all action groups in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ActionGroupResource>;
  /**
   * Create a new action group or update an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param actionGroup The action group to create or use for the update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    actionGroupName: string,
    actionGroup: ActionGroupResource,
    options?: ActionGroupsCreateOrUpdateOptionalParams
  ): Promise<ActionGroupsCreateOrUpdateResponse>;
  /**
   * Get an action group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsGetOptionalParams
  ): Promise<ActionGroupsGetResponse>;
  /**
   * Delete an action group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param actionGroupPatch Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    actionGroupName: string,
    actionGroupPatch: ActionGroupPatchBody,
    options?: ActionGroupsUpdateOptionalParams
  ): Promise<ActionGroupsUpdateResponse>;
  /**
   * Send test notifications to a set of provided receivers
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param notificationRequest The notification request body which includes the contact details
   * @param options The options parameters.
   */
  beginCreateNotificationsAtActionGroupResourceLevel(
    resourceGroupName: string,
    actionGroupName: string,
    notificationRequest: NotificationRequestBody,
    options?: ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse
      >,
      ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse
    >
  >;
  /**
   * Send test notifications to a set of provided receivers
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param notificationRequest The notification request body which includes the contact details
   * @param options The options parameters.
   */
  beginCreateNotificationsAtActionGroupResourceLevelAndWait(
    resourceGroupName: string,
    actionGroupName: string,
    notificationRequest: NotificationRequestBody,
    options?: ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams
  ): Promise<ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse>;
  /**
   * Get the test notifications by the notification id
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param notificationId The notification id
   * @param options The options parameters.
   */
  getTestNotificationsAtActionGroupResourceLevel(
    resourceGroupName: string,
    actionGroupName: string,
    notificationId: string,
    options?: ActionGroupsGetTestNotificationsAtActionGroupResourceLevelOptionalParams
  ): Promise<
    ActionGroupsGetTestNotificationsAtActionGroupResourceLevelResponse
  >;
  /**
   * Enable a receiver in an action group. This changes the receiver's status from Disabled to Enabled.
   * This operation is only supported for Email or SMS receivers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param enableRequest The receiver to re-enable.
   * @param options The options parameters.
   */
  enableReceiver(
    resourceGroupName: string,
    actionGroupName: string,
    enableRequest: EnableRequest,
    options?: ActionGroupsEnableReceiverOptionalParams
  ): Promise<void>;
}
