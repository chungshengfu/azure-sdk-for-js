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
  ServiceRegistryResource,
  ServiceRegistriesListOptionalParams,
  ServiceRegistriesGetOptionalParams,
  ServiceRegistriesGetResponse,
  ServiceRegistriesCreateOrUpdateOptionalParams,
  ServiceRegistriesCreateOrUpdateResponse,
  ServiceRegistriesDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServiceRegistries. */
export interface ServiceRegistries {
  /**
   * Handles requests to list all resources in a Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: ServiceRegistriesListOptionalParams,
  ): PagedAsyncIterableIterator<ServiceRegistryResource>;
  /**
   * Get the Service Registry and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesGetOptionalParams,
  ): Promise<ServiceRegistriesGetResponse>;
  /**
   * Create the default Service Registry or update the existing Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServiceRegistriesCreateOrUpdateResponse>,
      ServiceRegistriesCreateOrUpdateResponse
    >
  >;
  /**
   * Create the default Service Registry or update the existing Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesCreateOrUpdateOptionalParams,
  ): Promise<ServiceRegistriesCreateOrUpdateResponse>;
  /**
   * Disable the default Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Disable the default Service Registry.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param serviceRegistryName The name of Service Registry.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    serviceRegistryName: string,
    options?: ServiceRegistriesDeleteOptionalParams,
  ): Promise<void>;
}
