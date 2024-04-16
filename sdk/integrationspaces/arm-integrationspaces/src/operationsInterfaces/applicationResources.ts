/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApplicationResource,
  ApplicationResourcesListByApplicationOptionalParams,
  ApplicationResourcesGetOptionalParams,
  ApplicationResourcesGetResponse,
  ApplicationResourcesCreateOrUpdateOptionalParams,
  ApplicationResourcesCreateOrUpdateResponse,
  ApplicationResourceUpdate,
  ApplicationResourcesPatchOptionalParams,
  ApplicationResourcesPatchResponse,
  ApplicationResourcesDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationResources. */
export interface ApplicationResources {
  /**
   * List ApplicationResource resources by Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param options The options parameters.
   */
  listByApplication(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: ApplicationResourcesListByApplicationOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationResource>;
  /**
   * Get a ApplicationResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param resourceName The name of the resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    resourceName: string,
    options?: ApplicationResourcesGetOptionalParams,
  ): Promise<ApplicationResourcesGetResponse>;
  /**
   * Create a ApplicationResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param resourceName The name of the resource
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    resourceName: string,
    resource: ApplicationResource,
    options?: ApplicationResourcesCreateOrUpdateOptionalParams,
  ): Promise<ApplicationResourcesCreateOrUpdateResponse>;
  /**
   * Update a ApplicationResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param resourceName The name of the resource
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    resourceName: string,
    properties: ApplicationResourceUpdate,
    options?: ApplicationResourcesPatchOptionalParams,
  ): Promise<ApplicationResourcesPatchResponse>;
  /**
   * Delete a ApplicationResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param resourceName The name of the resource
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    resourceName: string,
    options?: ApplicationResourcesDeleteOptionalParams,
  ): Promise<void>;
}
