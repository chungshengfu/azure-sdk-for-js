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
  VMMServer,
  VmmServersListByResourceGroupOptionalParams,
  VmmServersListBySubscriptionOptionalParams,
  VmmServersGetOptionalParams,
  VmmServersGetResponse,
  VmmServersCreateOrUpdateOptionalParams,
  VmmServersCreateOrUpdateResponse,
  VmmServersDeleteOptionalParams,
  VmmServersDeleteResponse,
  ResourcePatch,
  VmmServersUpdateOptionalParams,
  VmmServersUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VmmServers. */
export interface VmmServers {
  /**
   * List of VmmServers in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VmmServersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VMMServer>;
  /**
   * List of VmmServers in a subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: VmmServersListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<VMMServer>;
  /**
   * Implements VMMServer GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersGetOptionalParams
  ): Promise<VmmServersGetResponse>;
  /**
   * Onboards the SCVMM fabric as an Azure VmmServer resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmmServerName: string,
    body: VMMServer,
    options?: VmmServersCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VmmServersCreateOrUpdateResponse>,
      VmmServersCreateOrUpdateResponse
    >
  >;
  /**
   * Onboards the SCVMM fabric as an Azure VmmServer resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmmServerName: string,
    body: VMMServer,
    options?: VmmServersCreateOrUpdateOptionalParams
  ): Promise<VmmServersCreateOrUpdateResponse>;
  /**
   * Removes the SCVMM fabric from Azure.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VmmServersDeleteResponse>,
      VmmServersDeleteResponse
    >
  >;
  /**
   * Removes the SCVMM fabric from Azure.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmmServerName: string,
    options?: VmmServersDeleteOptionalParams
  ): Promise<VmmServersDeleteResponse>;
  /**
   * Updates the VmmServers resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param body VmmServers patch payload.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmmServerName: string,
    body: ResourcePatch,
    options?: VmmServersUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VmmServersUpdateResponse>,
      VmmServersUpdateResponse
    >
  >;
  /**
   * Updates the VmmServers resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vmmServerName Name of the VMMServer.
   * @param body VmmServers patch payload.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmmServerName: string,
    body: ResourcePatch,
    options?: VmmServersUpdateOptionalParams
  ): Promise<VmmServersUpdateResponse>;
}
