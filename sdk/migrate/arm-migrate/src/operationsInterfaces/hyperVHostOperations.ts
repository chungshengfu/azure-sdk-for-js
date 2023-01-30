/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  HyperVHost,
  HyperVHostGetAllHostsInSiteOptionalParams,
  HyperVHostGetHostOptionalParams,
  HyperVHostGetHostResponse,
  HyperVHostPutHostOptionalParams,
  HyperVHostPutHostResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a HyperVHostOperations. */
export interface HyperVHostOperations {
  /**
   * Method to get all hosts in a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  listAllHostsInSite(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVHostGetAllHostsInSiteOptionalParams
  ): PagedAsyncIterableIterator<HyperVHost>;
  /**
   * Method to get a Hyper-V host.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param hostName Host ARM name.
   * @param options The options parameters.
   */
  getHost(
    resourceGroupName: string,
    siteName: string,
    hostName: string,
    options?: HyperVHostGetHostOptionalParams
  ): Promise<HyperVHostGetHostResponse>;
  /**
   * Method to create or update a host in site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param hostName Host ARM name.
   * @param body Put host body.
   * @param options The options parameters.
   */
  putHost(
    resourceGroupName: string,
    siteName: string,
    hostName: string,
    body: HyperVHost,
    options?: HyperVHostPutHostOptionalParams
  ): Promise<HyperVHostPutHostResponse>;
}
