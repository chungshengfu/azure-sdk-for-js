/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  JobExecution,
  JobTargetExecutionsListByStepOptionalParams,
  JobTargetExecutionsListByJobExecutionOptionalParams,
  JobTargetExecutionsGetOptionalParams,
  JobTargetExecutionsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobTargetExecutions. */
export interface JobTargetExecutions {
  /**
   * Lists the target executions of a job step execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param stepName The name of the step.
   * @param options The options parameters.
   */
  listByStep(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    options?: JobTargetExecutionsListByStepOptionalParams,
  ): PagedAsyncIterableIterator<JobExecution>;
  /**
   * Lists target executions for all steps of a job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The id of the job execution
   * @param options The options parameters.
   */
  listByJobExecution(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    options?: JobTargetExecutionsListByJobExecutionOptionalParams,
  ): PagedAsyncIterableIterator<JobExecution>;
  /**
   * Gets a target execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param jobName The name of the job to get.
   * @param jobExecutionId The unique id of the job execution
   * @param stepName The name of the step.
   * @param targetId The target id.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    jobName: string,
    jobExecutionId: string,
    stepName: string,
    targetId: string,
    options?: JobTargetExecutionsGetOptionalParams,
  ): Promise<JobTargetExecutionsGetResponse>;
}
