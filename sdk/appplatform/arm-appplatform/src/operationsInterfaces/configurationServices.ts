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
  ConfigurationServiceResource,
  ConfigurationServicesListOptionalParams,
  ConfigurationServicesGetOptionalParams,
  ConfigurationServicesGetResponse,
  ConfigurationServicesCreateOrUpdateOptionalParams,
  ConfigurationServicesCreateOrUpdateResponse,
  ConfigurationServicesDeleteOptionalParams,
  ConfigurationServiceSettings,
  ConfigurationServicesValidateOptionalParams,
  ConfigurationServicesValidateResponse,
  ConfigurationServicesValidateResourceOptionalParams,
  ConfigurationServicesValidateResourceResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConfigurationServices. */
export interface ConfigurationServices {
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
    options?: ConfigurationServicesListOptionalParams,
  ): PagedAsyncIterableIterator<ConfigurationServiceResource>;
  /**
   * Get the Application Configuration Service and its properties.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    options?: ConfigurationServicesGetOptionalParams,
  ): Promise<ConfigurationServicesGetResponse>;
  /**
   * Create the default Application Configuration Service or update the existing Application
   * Configuration Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param configurationServiceResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    configurationServiceResource: ConfigurationServiceResource,
    options?: ConfigurationServicesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationServicesCreateOrUpdateResponse>,
      ConfigurationServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create the default Application Configuration Service or update the existing Application
   * Configuration Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param configurationServiceResource Parameters for the update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    configurationServiceResource: ConfigurationServiceResource,
    options?: ConfigurationServicesCreateOrUpdateOptionalParams,
  ): Promise<ConfigurationServicesCreateOrUpdateResponse>;
  /**
   * Disable the default Application Configuration Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    options?: ConfigurationServicesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Disable the default Application Configuration Service.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    options?: ConfigurationServicesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Check if the Application Configuration Service settings are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param settings Application Configuration Service settings to be validated
   * @param options The options parameters.
   */
  beginValidate(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    settings: ConfigurationServiceSettings,
    options?: ConfigurationServicesValidateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationServicesValidateResponse>,
      ConfigurationServicesValidateResponse
    >
  >;
  /**
   * Check if the Application Configuration Service settings are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param settings Application Configuration Service settings to be validated
   * @param options The options parameters.
   */
  beginValidateAndWait(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    settings: ConfigurationServiceSettings,
    options?: ConfigurationServicesValidateOptionalParams,
  ): Promise<ConfigurationServicesValidateResponse>;
  /**
   * Check if the Application Configuration Service resource is valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param configurationServiceResource Application Configuration Service resource to be validated
   * @param options The options parameters.
   */
  beginValidateResource(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    configurationServiceResource: ConfigurationServiceResource,
    options?: ConfigurationServicesValidateResourceOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConfigurationServicesValidateResourceResponse>,
      ConfigurationServicesValidateResourceResponse
    >
  >;
  /**
   * Check if the Application Configuration Service resource is valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param configurationServiceName The name of Application Configuration Service.
   * @param configurationServiceResource Application Configuration Service resource to be validated
   * @param options The options parameters.
   */
  beginValidateResourceAndWait(
    resourceGroupName: string,
    serviceName: string,
    configurationServiceName: string,
    configurationServiceResource: ConfigurationServiceResource,
    options?: ConfigurationServicesValidateResourceOptionalParams,
  ): Promise<ConfigurationServicesValidateResourceResponse>;
}
