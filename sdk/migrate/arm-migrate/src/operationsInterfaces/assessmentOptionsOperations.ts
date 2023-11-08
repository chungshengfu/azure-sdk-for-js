/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AssessmentOptions,
  AssessmentOptionsOperationsListByAssessmentProjectOptionalParams,
  AssessmentOptionsOperationsGetOptionalParams,
  AssessmentOptionsOperationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AssessmentOptionsOperations. */
export interface AssessmentOptionsOperations {
  /**
   * List AssessmentOptions resources by AssessmentProject
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param options The options parameters.
   */
  listByAssessmentProject(
    resourceGroupName: string,
    projectName: string,
    options?: AssessmentOptionsOperationsListByAssessmentProjectOptionalParams
  ): PagedAsyncIterableIterator<AssessmentOptions>;
  /**
   * Get a AssessmentOptions
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName Assessment Project Name
   * @param assessmentOptionsName  assessment options ARM name. Accepted value is 'default'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    assessmentOptionsName: string,
    options?: AssessmentOptionsOperationsGetOptionalParams
  ): Promise<AssessmentOptionsOperationsGetResponse>;
}
