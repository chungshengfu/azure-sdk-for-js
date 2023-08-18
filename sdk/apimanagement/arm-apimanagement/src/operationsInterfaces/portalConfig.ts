/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PortalConfigContract,
  PortalConfigListByServiceOptionalParams,
  PortalConfigGetEntityTagOptionalParams,
  PortalConfigGetEntityTagResponse,
  PortalConfigGetOptionalParams,
  PortalConfigGetResponse,
  PortalConfigUpdateOptionalParams,
  PortalConfigUpdateResponse,
  PortalConfigCreateOrUpdateOptionalParams,
  PortalConfigCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PortalConfig. */
export interface PortalConfig {
  /**
   * Lists the developer portal configurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: PortalConfigListByServiceOptionalParams
  ): PagedAsyncIterableIterator<PortalConfigContract>;
  /**
   * Gets the entity state (Etag) version of the developer portal configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalConfigId Portal configuration identifier.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    portalConfigId: string,
    options?: PortalConfigGetEntityTagOptionalParams
  ): Promise<PortalConfigGetEntityTagResponse>;
  /**
   * Get the developer portal configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalConfigId Portal configuration identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    portalConfigId: string,
    options?: PortalConfigGetOptionalParams
  ): Promise<PortalConfigGetResponse>;
  /**
   * Update the developer portal configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalConfigId Portal configuration identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update the developer portal configuration.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    portalConfigId: string,
    ifMatch: string,
    parameters: PortalConfigContract,
    options?: PortalConfigUpdateOptionalParams
  ): Promise<PortalConfigUpdateResponse>;
  /**
   * Create or update the developer portal configuration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param portalConfigId Portal configuration identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update the developer portal configuration.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    portalConfigId: string,
    ifMatch: string,
    parameters: PortalConfigContract,
    options?: PortalConfigCreateOrUpdateOptionalParams
  ): Promise<PortalConfigCreateOrUpdateResponse>;
}
