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
  VirtualNetworkPeering,
  VNetPeeringListByWorkspaceOptionalParams,
  VNetPeeringGetOptionalParams,
  VNetPeeringGetResponse,
  VNetPeeringDeleteOptionalParams,
  VNetPeeringCreateOrUpdateOptionalParams,
  VNetPeeringCreateOrUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VNetPeering. */
export interface VNetPeering {
  /**
   * Lists the workspace vNet Peerings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: VNetPeeringListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<VirtualNetworkPeering>;
  /**
   * Gets the workspace vNet Peering.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param peeringName The name of the workspace vNet peering.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    peeringName: string,
    options?: VNetPeeringGetOptionalParams,
  ): Promise<VNetPeeringGetResponse>;
  /**
   * Deletes the workspace vNetPeering.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param peeringName The name of the workspace vNet peering.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    peeringName: string,
    options?: VNetPeeringDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the workspace vNetPeering.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param peeringName The name of the workspace vNet peering.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    peeringName: string,
    options?: VNetPeeringDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Creates vNet Peering for workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param peeringName The name of the workspace vNet peering.
   * @param virtualNetworkPeeringParameters Parameters supplied to the create workspace vNet Peering.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    peeringName: string,
    virtualNetworkPeeringParameters: VirtualNetworkPeering,
    options?: VNetPeeringCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VNetPeeringCreateOrUpdateResponse>,
      VNetPeeringCreateOrUpdateResponse
    >
  >;
  /**
   * Creates vNet Peering for workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param peeringName The name of the workspace vNet peering.
   * @param virtualNetworkPeeringParameters Parameters supplied to the create workspace vNet Peering.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    peeringName: string,
    virtualNetworkPeeringParameters: VirtualNetworkPeering,
    options?: VNetPeeringCreateOrUpdateOptionalParams,
  ): Promise<VNetPeeringCreateOrUpdateResponse>;
}
