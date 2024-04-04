/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TenantSettingsContract,
  TenantSettingsListByServiceOptionalParams,
  SettingsTypeName,
  TenantSettingsGetOptionalParams,
  TenantSettingsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TenantSettings. */
export interface TenantSettings {
  /**
   * Public settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: TenantSettingsListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<TenantSettingsContract>;
  /**
   * Get tenant settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param settingsType The identifier of the settings.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    settingsType: SettingsTypeName,
    options?: TenantSettingsGetOptionalParams,
  ): Promise<TenantSettingsGetResponse>;
}
