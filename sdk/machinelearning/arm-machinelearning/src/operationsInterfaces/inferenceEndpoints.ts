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
  InferenceEndpoint,
  InferenceEndpointsListOptionalParams,
  InferenceEndpointsDeleteOptionalParams,
  InferenceEndpointsGetOptionalParams,
  InferenceEndpointsGetResponse,
  InferenceEndpointsUpdateOptionalParams,
  InferenceEndpointsUpdateResponse,
  InferenceEndpointsCreateOrUpdateOptionalParams,
  InferenceEndpointsCreateOrUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InferenceEndpoints. */
export interface InferenceEndpoints {
  /**
   * List Inference Endpoints.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName Name of the InferencePool.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    options?: InferenceEndpointsListOptionalParams,
  ): PagedAsyncIterableIterator<InferenceEndpoint>;
  /**
   * Delete InferenceEndpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    options?: InferenceEndpointsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete InferenceEndpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    options?: InferenceEndpointsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get InferenceEndpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    options?: InferenceEndpointsGetOptionalParams,
  ): Promise<InferenceEndpointsGetResponse>;
  /**
   * Update InferenceEndpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param body Online Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    body: any,
    options?: InferenceEndpointsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InferenceEndpointsUpdateResponse>,
      InferenceEndpointsUpdateResponse
    >
  >;
  /**
   * Update InferenceEndpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param body Online Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    body: any,
    options?: InferenceEndpointsUpdateOptionalParams,
  ): Promise<InferenceEndpointsUpdateResponse>;
  /**
   * Create or update InferenceEndpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param body InferenceEndpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    body: InferenceEndpoint,
    options?: InferenceEndpointsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InferenceEndpointsCreateOrUpdateResponse>,
      InferenceEndpointsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update InferenceEndpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param poolName InferencePool name.
   * @param endpointName InferenceEndpoint name.
   * @param body InferenceEndpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    poolName: string,
    endpointName: string,
    body: InferenceEndpoint,
    options?: InferenceEndpointsCreateOrUpdateOptionalParams,
  ): Promise<InferenceEndpointsCreateOrUpdateResponse>;
}
