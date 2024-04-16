/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkflowRun,
  WorkflowRunsListOptionalParams,
  WorkflowRunsGetOptionalParams,
  WorkflowRunsGetResponse,
  WorkflowRunsCancelOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkflowRuns. */
export interface WorkflowRuns {
  /**
   * Gets a list of workflow runs.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    options?: WorkflowRunsListOptionalParams,
  ): PagedAsyncIterableIterator<WorkflowRun>;
  /**
   * Gets a workflow run.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    options?: WorkflowRunsGetOptionalParams,
  ): Promise<WorkflowRunsGetResponse>;
  /**
   * Cancels a workflow run.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param name Site name.
   * @param workflowName The workflow name.
   * @param runName The workflow run name.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    name: string,
    workflowName: string,
    runName: string,
    options?: WorkflowRunsCancelOptionalParams,
  ): Promise<void>;
}
