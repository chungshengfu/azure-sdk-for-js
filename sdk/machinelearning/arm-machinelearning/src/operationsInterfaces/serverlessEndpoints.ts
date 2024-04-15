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
  ServerlessEndpoint,
  ServerlessEndpointsListOptionalParams,
  ServerlessEndpointsDeleteOptionalParams,
  ServerlessEndpointsGetOptionalParams,
  ServerlessEndpointsGetResponse,
  PartialMinimalTrackedResourceWithSkuAndIdentity,
  ServerlessEndpointsUpdateOptionalParams,
  ServerlessEndpointsUpdateResponse,
  ServerlessEndpointsCreateOrUpdateOptionalParams,
  ServerlessEndpointsCreateOrUpdateResponse,
  ServerlessEndpointsGetStatusOptionalParams,
  ServerlessEndpointsGetStatusResponse,
  ServerlessEndpointsListKeysOptionalParams,
  ServerlessEndpointsListKeysResponse,
  RegenerateEndpointKeysRequest,
  ServerlessEndpointsRegenerateKeysOptionalParams,
  ServerlessEndpointsRegenerateKeysResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerlessEndpoints. */
export interface ServerlessEndpoints {
  /**
   * List Serverless Endpoints.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ServerlessEndpointsListOptionalParams,
  ): PagedAsyncIterableIterator<ServerlessEndpoint>;
  /**
   * Delete Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get Serverless Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsGetOptionalParams,
  ): Promise<ServerlessEndpointsGetResponse>;
  /**
   * Update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: PartialMinimalTrackedResourceWithSkuAndIdentity,
    options?: ServerlessEndpointsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerlessEndpointsUpdateResponse>,
      ServerlessEndpointsUpdateResponse
    >
  >;
  /**
   * Update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: PartialMinimalTrackedResourceWithSkuAndIdentity,
    options?: ServerlessEndpointsUpdateOptionalParams,
  ): Promise<ServerlessEndpointsUpdateResponse>;
  /**
   * Create or update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: ServerlessEndpoint,
    options?: ServerlessEndpointsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerlessEndpointsCreateOrUpdateResponse>,
      ServerlessEndpointsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update Serverless Endpoint (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body Serverless Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: ServerlessEndpoint,
    options?: ServerlessEndpointsCreateOrUpdateOptionalParams,
  ): Promise<ServerlessEndpointsCreateOrUpdateResponse>;
  /**
   * Status of the model backing the Serverless Endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  getStatus(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsGetStatusOptionalParams,
  ): Promise<ServerlessEndpointsGetStatusResponse>;
  /**
   * List EndpointAuthKeys for an Endpoint using Key-based authentication.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: ServerlessEndpointsListKeysOptionalParams,
  ): Promise<ServerlessEndpointsListKeysResponse>;
  /**
   * Regenerate EndpointAuthKeys for an Endpoint using Key-based authentication (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body RegenerateKeys request .
   * @param options The options parameters.
   */
  beginRegenerateKeys(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: RegenerateEndpointKeysRequest,
    options?: ServerlessEndpointsRegenerateKeysOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerlessEndpointsRegenerateKeysResponse>,
      ServerlessEndpointsRegenerateKeysResponse
    >
  >;
  /**
   * Regenerate EndpointAuthKeys for an Endpoint using Key-based authentication (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Serverless Endpoint name.
   * @param body RegenerateKeys request .
   * @param options The options parameters.
   */
  beginRegenerateKeysAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    body: RegenerateEndpointKeysRequest,
    options?: ServerlessEndpointsRegenerateKeysOptionalParams,
  ): Promise<ServerlessEndpointsRegenerateKeysResponse>;
}
