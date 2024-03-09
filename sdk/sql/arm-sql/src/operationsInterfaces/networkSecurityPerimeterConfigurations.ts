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
  NetworkSecurityPerimeterConfiguration,
  NetworkSecurityPerimeterConfigurationsListByServerOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetResponse,
  NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  NetworkSecurityPerimeterConfigurationsReconcileResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkSecurityPerimeterConfigurations. */
export interface NetworkSecurityPerimeterConfigurations {
  /**
   * Gets a list of NSP configurations for a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: NetworkSecurityPerimeterConfigurationsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<NetworkSecurityPerimeterConfiguration>;
  /**
   * Gets a network security perimeter configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nspConfigName
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    nspConfigName: string,
    options?: NetworkSecurityPerimeterConfigurationsGetOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationsGetResponse>;
  /**
   * Reconcile network security perimeter configuration for SQL Resource Provider
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nspConfigName
   * @param options The options parameters.
   */
  beginReconcile(
    resourceGroupName: string,
    serverName: string,
    nspConfigName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkSecurityPerimeterConfigurationsReconcileResponse>,
      NetworkSecurityPerimeterConfigurationsReconcileResponse
    >
  >;
  /**
   * Reconcile network security perimeter configuration for SQL Resource Provider
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nspConfigName
   * @param options The options parameters.
   */
  beginReconcileAndWait(
    resourceGroupName: string,
    serverName: string,
    nspConfigName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationsReconcileResponse>;
}
