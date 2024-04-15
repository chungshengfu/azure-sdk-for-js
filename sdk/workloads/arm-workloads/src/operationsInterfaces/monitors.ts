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
  Monitor,
  MonitorsListOptionalParams,
  MonitorsListByResourceGroupOptionalParams,
  MonitorsGetOptionalParams,
  MonitorsGetResponse,
  MonitorsCreateOptionalParams,
  MonitorsCreateResponse,
  MonitorsDeleteOptionalParams,
  MonitorsDeleteResponse,
  UpdateMonitorRequest,
  MonitorsUpdateOptionalParams,
  MonitorsUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Monitors. */
export interface Monitors {
  /**
   * Gets a list of SAP monitors in the specified subscription. The operations returns various properties
   * of each SAP monitor.
   * @param options The options parameters.
   */
  list(
    options?: MonitorsListOptionalParams,
  ): PagedAsyncIterableIterator<Monitor>;
  /**
   * Gets a list of SAP monitors in the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: MonitorsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<Monitor>;
  /**
   * Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsGetOptionalParams,
  ): Promise<MonitorsGetResponse>;
  /**
   * Creates a SAP monitor for the specified subscription, resource group, and resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param monitorParameter Request body representing a SAP monitor
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    monitorName: string,
    monitorParameter: Monitor,
    options?: MonitorsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MonitorsCreateResponse>,
      MonitorsCreateResponse
    >
  >;
  /**
   * Creates a SAP monitor for the specified subscription, resource group, and resource name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param monitorParameter Request body representing a SAP monitor
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    monitorName: string,
    monitorParameter: Monitor,
    options?: MonitorsCreateOptionalParams,
  ): Promise<MonitorsCreateResponse>;
  /**
   * Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MonitorsDeleteResponse>,
      MonitorsDeleteResponse
    >
  >;
  /**
   * Deletes a SAP monitor with the specified subscription, resource group, and SAP monitor name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    monitorName: string,
    options?: MonitorsDeleteOptionalParams,
  ): Promise<MonitorsDeleteResponse>;
  /**
   * Patches the Tags field of a SAP monitor for the specified subscription, resource group, and SAP
   * monitor name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Name of the SAP monitor resource.
   * @param body The Update SAP workload monitor request body.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    monitorName: string,
    body: UpdateMonitorRequest,
    options?: MonitorsUpdateOptionalParams,
  ): Promise<MonitorsUpdateResponse>;
}
