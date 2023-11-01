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
  OnlineDeployment,
  OnlineDeploymentsListOptionalParams,
  SkuResource,
  OnlineDeploymentsListSkusOptionalParams,
  OnlineDeploymentsDeleteOptionalParams,
  OnlineDeploymentsGetOptionalParams,
  OnlineDeploymentsGetResponse,
  PartialMinimalTrackedResourceWithSku,
  OnlineDeploymentsUpdateOptionalParams,
  OnlineDeploymentsUpdateResponse,
  OnlineDeploymentsCreateOrUpdateOptionalParams,
  OnlineDeploymentsCreateOrUpdateResponse,
  DeploymentLogsRequest,
  OnlineDeploymentsGetLogsOptionalParams,
  OnlineDeploymentsGetLogsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OnlineDeployments. */
export interface OnlineDeployments {
  /**
   * List Inference Endpoint Deployments.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    options?: OnlineDeploymentsListOptionalParams
  ): PagedAsyncIterableIterator<OnlineDeployment>;
  /**
   * List Inference Endpoint Deployment Skus.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param options The options parameters.
   */
  listSkus(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: OnlineDeploymentsListSkusOptionalParams
  ): PagedAsyncIterableIterator<SkuResource>;
  /**
   * Delete Inference Endpoint Deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: OnlineDeploymentsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete Inference Endpoint Deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: OnlineDeploymentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get Inference Deployment Deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    options?: OnlineDeploymentsGetOptionalParams
  ): Promise<OnlineDeploymentsGetResponse>;
  /**
   * Update Online Deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Online Endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param body Online Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: PartialMinimalTrackedResourceWithSku,
    options?: OnlineDeploymentsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<OnlineDeploymentsUpdateResponse>,
      OnlineDeploymentsUpdateResponse
    >
  >;
  /**
   * Update Online Deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Online Endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param body Online Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: PartialMinimalTrackedResourceWithSku,
    options?: OnlineDeploymentsUpdateOptionalParams
  ): Promise<OnlineDeploymentsUpdateResponse>;
  /**
   * Create or update Inference Endpoint Deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param body Inference Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: OnlineDeployment,
    options?: OnlineDeploymentsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<OnlineDeploymentsCreateOrUpdateResponse>,
      OnlineDeploymentsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update Inference Endpoint Deployment (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName Inference Endpoint Deployment name.
   * @param body Inference Endpoint entity to apply during operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: OnlineDeployment,
    options?: OnlineDeploymentsCreateOrUpdateOptionalParams
  ): Promise<OnlineDeploymentsCreateOrUpdateResponse>;
  /**
   * Polls an Endpoint operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param endpointName Inference endpoint name.
   * @param deploymentName The name and identifier for the endpoint.
   * @param body The request containing parameters for retrieving logs.
   * @param options The options parameters.
   */
  getLogs(
    resourceGroupName: string,
    workspaceName: string,
    endpointName: string,
    deploymentName: string,
    body: DeploymentLogsRequest,
    options?: OnlineDeploymentsGetLogsOptionalParams
  ): Promise<OnlineDeploymentsGetLogsResponse>;
}
