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
  ArchiveVersion,
  ArchiveVersionsListOptionalParams,
  ArchiveVersionsGetOptionalParams,
  ArchiveVersionsGetResponse,
  ArchiveVersionsCreateOptionalParams,
  ArchiveVersionsCreateResponse,
  ArchiveVersionsDeleteOptionalParams,
  ArchiveVersionsDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ArchiveVersions. */
export interface ArchiveVersions {
  /**
   * Lists all archive versions for the specified container registry, repository type and archive name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param packageType The type of the repository resource.
   * @param archiveName The name of the archive resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    packageType: string,
    archiveName: string,
    options?: ArchiveVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<ArchiveVersion>;
  /**
   * Gets the properties of the archive version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param packageType The type of the repository resource.
   * @param archiveName The name of the archive resource.
   * @param archiveVersionName The name of the archive version resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    packageType: string,
    archiveName: string,
    archiveVersionName: string,
    options?: ArchiveVersionsGetOptionalParams,
  ): Promise<ArchiveVersionsGetResponse>;
  /**
   * Creates a archive for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param packageType The type of the repository resource.
   * @param archiveName The name of the archive resource.
   * @param archiveVersionName The name of the archive version resource.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    packageType: string,
    archiveName: string,
    archiveVersionName: string,
    options?: ArchiveVersionsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ArchiveVersionsCreateResponse>,
      ArchiveVersionsCreateResponse
    >
  >;
  /**
   * Creates a archive for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param packageType The type of the repository resource.
   * @param archiveName The name of the archive resource.
   * @param archiveVersionName The name of the archive version resource.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    packageType: string,
    archiveName: string,
    archiveVersionName: string,
    options?: ArchiveVersionsCreateOptionalParams,
  ): Promise<ArchiveVersionsCreateResponse>;
  /**
   * Deletes a archive version from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param packageType The type of the repository resource.
   * @param archiveName The name of the archive resource.
   * @param archiveVersionName The name of the archive version resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    packageType: string,
    archiveName: string,
    archiveVersionName: string,
    options?: ArchiveVersionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ArchiveVersionsDeleteResponse>,
      ArchiveVersionsDeleteResponse
    >
  >;
  /**
   * Deletes a archive version from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param packageType The type of the repository resource.
   * @param archiveName The name of the archive resource.
   * @param archiveVersionName The name of the archive version resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    packageType: string,
    archiveName: string,
    archiveVersionName: string,
    options?: ArchiveVersionsDeleteOptionalParams,
  ): Promise<ArchiveVersionsDeleteResponse>;
}
