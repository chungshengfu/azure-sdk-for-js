/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  JobCollectionItem,
  JobListByAutomationAccountOptionalParams,
  JobGetOutputOptionalParams,
  JobGetOutputResponse,
  JobGetRunbookContentOptionalParams,
  JobGetRunbookContentResponse,
  JobSuspendOptionalParams,
  JobStopOptionalParams,
  JobGetOptionalParams,
  JobGetResponse,
  JobCreateParameters,
  JobCreateOptionalParams,
  JobCreateResponse,
  JobResumeOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobOperations. */
export interface JobOperations {
  /**
   * Retrieve a list of jobs.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: JobListByAutomationAccountOptionalParams,
  ): PagedAsyncIterableIterator<JobCollectionItem>;
  /**
   * Retrieve the job output identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The name of the job to be created.
   * @param options The options parameters.
   */
  getOutput(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobGetOutputOptionalParams,
  ): Promise<JobGetOutputResponse>;
  /**
   * Retrieve the runbook content of the job identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  getRunbookContent(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobGetRunbookContentOptionalParams,
  ): Promise<JobGetRunbookContentResponse>;
  /**
   * Suspend the job identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  suspend(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobSuspendOptionalParams,
  ): Promise<void>;
  /**
   * Stop the job identified by jobName.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  stop(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobStopOptionalParams,
  ): Promise<void>;
  /**
   * Retrieve the job identified by job name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobGetOptionalParams,
  ): Promise<JobGetResponse>;
  /**
   * Create a job of the runbook.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param parameters The parameters supplied to the create job operation.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    parameters: JobCreateParameters,
    options?: JobCreateOptionalParams,
  ): Promise<JobCreateResponse>;
  /**
   * Resume the job identified by jobName.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param jobName The job name.
   * @param options The options parameters.
   */
  resume(
    resourceGroupName: string,
    automationAccountName: string,
    jobName: string,
    options?: JobResumeOptionalParams,
  ): Promise<void>;
}
