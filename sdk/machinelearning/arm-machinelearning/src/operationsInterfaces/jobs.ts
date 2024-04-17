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
  JobBase,
  JobsListOptionalParams,
  JobsDeleteOptionalParams,
  JobsGetOptionalParams,
  JobsGetResponse,
  PartialJobBasePartialResource,
  JobsUpdateOptionalParams,
  JobsUpdateResponse,
  JobsCreateOrUpdateOptionalParams,
  JobsCreateOrUpdateResponse,
  JobsCancelOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Jobs. */
export interface Jobs {
  /**
   * Lists Jobs in the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: JobsListOptionalParams,
  ): PagedAsyncIterableIterator<JobBase>;
  /**
   * Deletes a Job (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    options?: JobsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a Job (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    options?: JobsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets a Job by name/id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    options?: JobsGetOptionalParams,
  ): Promise<JobsGetResponse>;
  /**
   * Updates a Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param body Job definition to apply during the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    body: PartialJobBasePartialResource,
    options?: JobsUpdateOptionalParams,
  ): Promise<JobsUpdateResponse>;
  /**
   * Creates and executes a Job.
   * For update case, the Tags in the definition passed in will replace Tags in the existing job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param body Job definition object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    body: JobBase,
    options?: JobsCreateOrUpdateOptionalParams,
  ): Promise<JobsCreateOrUpdateResponse>;
  /**
   * Cancels a Job (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param options The options parameters.
   */
  beginCancel(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    options?: JobsCancelOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Cancels a Job (asynchronous).
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param id The name and identifier for the Job. This is case-sensitive.
   * @param options The options parameters.
   */
  beginCancelAndWait(
    resourceGroupName: string,
    workspaceName: string,
    id: string,
    options?: JobsCancelOptionalParams,
  ): Promise<void>;
}
