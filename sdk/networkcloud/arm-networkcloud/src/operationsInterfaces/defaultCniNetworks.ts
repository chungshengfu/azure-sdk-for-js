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
  DefaultCniNetwork,
  DefaultCniNetworksListBySubscriptionOptionalParams,
  DefaultCniNetworksListByResourceGroupOptionalParams,
  DefaultCniNetworksGetOptionalParams,
  DefaultCniNetworksGetResponse,
  DefaultCniNetworksCreateOrUpdateOptionalParams,
  DefaultCniNetworksCreateOrUpdateResponse,
  DefaultCniNetworksDeleteOptionalParams,
  DefaultCniNetworksUpdateOptionalParams,
  DefaultCniNetworksUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DefaultCniNetworks. */
export interface DefaultCniNetworks {
  /**
   * Get a list of default CNI networks in the provided subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: DefaultCniNetworksListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<DefaultCniNetwork>;
  /**
   * Get a list of default CNI networks in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DefaultCniNetworksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DefaultCniNetwork>;
  /**
   * Get properties of the provided default CNI network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param defaultCniNetworkName The name of the default CNI network.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    defaultCniNetworkName: string,
    options?: DefaultCniNetworksGetOptionalParams
  ): Promise<DefaultCniNetworksGetResponse>;
  /**
   * Create a new default CNI network or update the properties of the existing default CNI network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param defaultCniNetworkName The name of the default CNI network.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    defaultCniNetworkName: string,
    options?: DefaultCniNetworksCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<DefaultCniNetworksCreateOrUpdateResponse>,
      DefaultCniNetworksCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new default CNI network or update the properties of the existing default CNI network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param defaultCniNetworkName The name of the default CNI network.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    defaultCniNetworkName: string,
    options?: DefaultCniNetworksCreateOrUpdateOptionalParams
  ): Promise<DefaultCniNetworksCreateOrUpdateResponse>;
  /**
   * Delete the provided default CNI network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param defaultCniNetworkName The name of the default CNI network.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    defaultCniNetworkName: string,
    options?: DefaultCniNetworksDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the provided default CNI network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param defaultCniNetworkName The name of the default CNI network.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    defaultCniNetworkName: string,
    options?: DefaultCniNetworksDeleteOptionalParams
  ): Promise<void>;
  /**
   * Update tags associated with the provided default CNI network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param defaultCniNetworkName The name of the default CNI network.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    defaultCniNetworkName: string,
    options?: DefaultCniNetworksUpdateOptionalParams
  ): Promise<DefaultCniNetworksUpdateResponse>;
}
