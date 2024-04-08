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
  LogicalNetworks,
  LogicalNetworksListOptionalParams,
  LogicalNetworksListAllOptionalParams,
  LogicalNetworksGetOptionalParams,
  LogicalNetworksGetResponse,
  LogicalNetworksCreateOrUpdateOptionalParams,
  LogicalNetworksCreateOrUpdateResponse,
  LogicalNetworksDeleteOptionalParams,
  LogicalNetworksDeleteResponse,
  LogicalNetworksUpdateRequest,
  LogicalNetworksUpdateOptionalParams,
  LogicalNetworksUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LogicalNetworksOperations. */
export interface LogicalNetworksOperations {
  /**
   * Lists all of the logical networks in the specified resource group. Use the nextLink property in the
   * response to get the next page of logical networks.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: LogicalNetworksListOptionalParams,
  ): PagedAsyncIterableIterator<LogicalNetworks>;
  /**
   * Lists all of the logical networks in the specified subscription. Use the nextLink property in the
   * response to get the next page of logical networks.
   * @param options The options parameters.
   */
  listAll(
    options?: LogicalNetworksListAllOptionalParams,
  ): PagedAsyncIterableIterator<LogicalNetworks>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    logicalNetworkName: string,
    options?: LogicalNetworksGetOptionalParams,
  ): Promise<LogicalNetworksGetResponse>;
  /**
   * The operation to create or update a logical network. Please note some properties can be set only
   * during logical network creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworks,
    options?: LogicalNetworksCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LogicalNetworksCreateOrUpdateResponse>,
      LogicalNetworksCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update a logical network. Please note some properties can be set only
   * during logical network creation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworks,
    options?: LogicalNetworksCreateOrUpdateOptionalParams,
  ): Promise<LogicalNetworksCreateOrUpdateResponse>;
  /**
   * The operation to delete a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    logicalNetworkName: string,
    options?: LogicalNetworksDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LogicalNetworksDeleteResponse>,
      LogicalNetworksDeleteResponse
    >
  >;
  /**
   * The operation to delete a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    logicalNetworkName: string,
    options?: LogicalNetworksDeleteOptionalParams,
  ): Promise<LogicalNetworksDeleteResponse>;
  /**
   * The operation to update a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource patch definition.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworksUpdateRequest,
    options?: LogicalNetworksUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<LogicalNetworksUpdateResponse>,
      LogicalNetworksUpdateResponse
    >
  >;
  /**
   * The operation to update a logical network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param logicalNetworkName Name of the logical network
   * @param logicalNetworks The logical network resource patch definition.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    logicalNetworkName: string,
    logicalNetworks: LogicalNetworksUpdateRequest,
    options?: LogicalNetworksUpdateOptionalParams,
  ): Promise<LogicalNetworksUpdateResponse>;
}
