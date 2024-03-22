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
  ContainerRegistryResource,
  ContainerRegistriesListOptionalParams,
  ContainerRegistriesGetOptionalParams,
  ContainerRegistriesGetResponse,
  ContainerRegistriesCreateOrUpdateOptionalParams,
  ContainerRegistriesCreateOrUpdateResponse,
  ContainerRegistriesDeleteOptionalParams,
  ContainerRegistriesDeleteResponse,
  ContainerRegistryProperties,
  ContainerRegistriesValidateOptionalParams,
  ContainerRegistriesValidateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContainerRegistries. */
export interface ContainerRegistries {
  /**
   * List container registries resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: ContainerRegistriesListOptionalParams,
  ): PagedAsyncIterableIterator<ContainerRegistryResource>;
  /**
   * Get the container registries resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    options?: ContainerRegistriesGetOptionalParams,
  ): Promise<ContainerRegistriesGetResponse>;
  /**
   * Create or update container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryResource: ContainerRegistryResource,
    options?: ContainerRegistriesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerRegistriesCreateOrUpdateResponse>,
      ContainerRegistriesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryResource Parameters for the create or update operation
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryResource: ContainerRegistryResource,
    options?: ContainerRegistriesCreateOrUpdateOptionalParams,
  ): Promise<ContainerRegistriesCreateOrUpdateResponse>;
  /**
   * Delete a container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    options?: ContainerRegistriesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerRegistriesDeleteResponse>,
      ContainerRegistriesDeleteResponse
    >
  >;
  /**
   * Delete a container registry resource.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    options?: ContainerRegistriesDeleteOptionalParams,
  ): Promise<ContainerRegistriesDeleteResponse>;
  /**
   * Check if the container registry properties are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryProperties Parameters for the validate operation
   * @param options The options parameters.
   */
  beginValidate(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryProperties: ContainerRegistryProperties,
    options?: ContainerRegistriesValidateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ContainerRegistriesValidateResponse>,
      ContainerRegistriesValidateResponse
    >
  >;
  /**
   * Check if the container registry properties are valid.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param containerRegistryName The name of the container registry.
   * @param containerRegistryProperties Parameters for the validate operation
   * @param options The options parameters.
   */
  beginValidateAndWait(
    resourceGroupName: string,
    serviceName: string,
    containerRegistryName: string,
    containerRegistryProperties: ContainerRegistryProperties,
    options?: ContainerRegistriesValidateOptionalParams,
  ): Promise<ContainerRegistriesValidateResponse>;
}
