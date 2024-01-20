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
  ScopeMap,
  ScopeMapsListOptionalParams,
  ScopeMapsGetOptionalParams,
  ScopeMapsGetResponse,
  ScopeMapsCreateOptionalParams,
  ScopeMapsCreateResponse,
  ScopeMapsDeleteOptionalParams,
  ScopeMapUpdateParameters,
  ScopeMapsUpdateOptionalParams,
  ScopeMapsUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ScopeMaps. */
export interface ScopeMaps {
  /**
   * Lists all the scope maps for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    registryName: string,
    options?: ScopeMapsListOptionalParams,
  ): PagedAsyncIterableIterator<ScopeMap>;
  /**
   * Gets the properties of the specified scope map.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    options?: ScopeMapsGetOptionalParams,
  ): Promise<ScopeMapsGetResponse>;
  /**
   * Creates a scope map for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param scopeMapCreateParameters The parameters for creating a scope map.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    scopeMapCreateParameters: ScopeMap,
    options?: ScopeMapsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ScopeMapsCreateResponse>,
      ScopeMapsCreateResponse
    >
  >;
  /**
   * Creates a scope map for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param scopeMapCreateParameters The parameters for creating a scope map.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    scopeMapCreateParameters: ScopeMap,
    options?: ScopeMapsCreateOptionalParams,
  ): Promise<ScopeMapsCreateResponse>;
  /**
   * Deletes a scope map from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    options?: ScopeMapsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a scope map from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    options?: ScopeMapsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates a scope map with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param scopeMapUpdateParameters The parameters for updating a scope map.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    scopeMapUpdateParameters: ScopeMapUpdateParameters,
    options?: ScopeMapsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ScopeMapsUpdateResponse>,
      ScopeMapsUpdateResponse
    >
  >;
  /**
   * Updates a scope map with the specified parameters.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param scopeMapName The name of the scope map.
   * @param scopeMapUpdateParameters The parameters for updating a scope map.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    scopeMapName: string,
    scopeMapUpdateParameters: ScopeMapUpdateParameters,
    options?: ScopeMapsUpdateOptionalParams,
  ): Promise<ScopeMapsUpdateResponse>;
}
