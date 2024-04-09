/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  UserSession,
  UserSessionsListByHostPoolOptionalParams,
  UserSessionsListOptionalParams,
  UserSessionsGetOptionalParams,
  UserSessionsGetResponse,
  UserSessionsDeleteOptionalParams,
  UserSessionsDisconnectOptionalParams,
  UserSessionsSendMessageOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a UserSessions. */
export interface UserSessions {
  /**
   * List userSessions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: UserSessionsListByHostPoolOptionalParams,
  ): PagedAsyncIterableIterator<UserSession>;
  /**
   * List userSessions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    options?: UserSessionsListOptionalParams,
  ): PagedAsyncIterableIterator<UserSession>;
  /**
   * Get a userSession.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsGetOptionalParams,
  ): Promise<UserSessionsGetResponse>;
  /**
   * Remove a userSession.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Disconnect a userSession.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  disconnect(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsDisconnectOptionalParams,
  ): Promise<void>;
  /**
   * Send a message to a user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostName The name of the session host within the specified host pool
   * @param userSessionId The name of the user session within the specified session host
   * @param options The options parameters.
   */
  sendMessage(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostName: string,
    userSessionId: string,
    options?: UserSessionsSendMessageOptionalParams,
  ): Promise<void>;
}
