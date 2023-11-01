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
  ModelVersion,
  RegistryModelVersionsListOptionalParams,
  RegistryModelVersionsDeleteOptionalParams,
  RegistryModelVersionsGetOptionalParams,
  RegistryModelVersionsGetResponse,
  RegistryModelVersionsCreateOrUpdateOptionalParams,
  RegistryModelVersionsCreateOrUpdateResponse,
  PackageRequest,
  RegistryModelVersionsPackageOptionalParams,
  RegistryModelVersionsPackageResponse,
  PendingUploadRequestDto,
  RegistryModelVersionsCreateOrGetStartPendingUploadOptionalParams,
  RegistryModelVersionsCreateOrGetStartPendingUploadResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RegistryModelVersions. */
export interface RegistryModelVersions {
  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name. This is case-sensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    options?: RegistryModelVersionsListOptionalParams
  ): PagedAsyncIterableIterator<ModelVersion>;
  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    options?: RegistryModelVersionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    options?: RegistryModelVersionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    options?: RegistryModelVersionsGetOptionalParams
  ): Promise<RegistryModelVersionsGetResponse>;
  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    body: ModelVersion,
    options?: RegistryModelVersionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<RegistryModelVersionsCreateOrUpdateResponse>,
      RegistryModelVersionsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    body: ModelVersion,
    options?: RegistryModelVersionsCreateOrUpdateOptionalParams
  ): Promise<RegistryModelVersionsCreateOrUpdateResponse>;
  /**
   * Model Version Package operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Package operation request body.
   * @param options The options parameters.
   */
  beginPackage(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    body: PackageRequest,
    options?: RegistryModelVersionsPackageOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<RegistryModelVersionsPackageResponse>,
      RegistryModelVersionsPackageResponse
    >
  >;
  /**
   * Model Version Package operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Package operation request body.
   * @param options The options parameters.
   */
  beginPackageAndWait(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    body: PackageRequest,
    options?: RegistryModelVersionsPackageOptionalParams
  ): Promise<RegistryModelVersionsPackageResponse>;
  /**
   * Generate a storage location and credential for the client to upload a model asset to.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param modelName Model name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Pending upload request object
   * @param options The options parameters.
   */
  createOrGetStartPendingUpload(
    resourceGroupName: string,
    registryName: string,
    modelName: string,
    version: string,
    body: PendingUploadRequestDto,
    options?: RegistryModelVersionsCreateOrGetStartPendingUploadOptionalParams
  ): Promise<RegistryModelVersionsCreateOrGetStartPendingUploadResponse>;
}
