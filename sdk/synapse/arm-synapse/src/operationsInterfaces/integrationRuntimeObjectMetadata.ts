/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  IntegrationRuntimeObjectMetadataListOptionalParams,
  IntegrationRuntimeObjectMetadataListResponse,
  IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  IntegrationRuntimeObjectMetadataRefreshResponse,
} from "../models";

/** Interface representing a IntegrationRuntimeObjectMetadata. */
export interface IntegrationRuntimeObjectMetadata {
  /**
   * Get object metadata from an integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataListOptionalParams,
  ): Promise<IntegrationRuntimeObjectMetadataListResponse>;
  /**
   * Refresh the object metadata in an integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  beginRefresh(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<IntegrationRuntimeObjectMetadataRefreshResponse>,
      IntegrationRuntimeObjectMetadataRefreshResponse
    >
  >;
  /**
   * Refresh the object metadata in an integration runtime
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param options The options parameters.
   */
  beginRefreshAndWait(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  ): Promise<IntegrationRuntimeObjectMetadataRefreshResponse>;
}
