/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccessReviewScheduleDefinition,
  AccessReviewScheduleDefinitionsListOptionalParams,
  AccessReviewScheduleDefinitionsGetByIdOptionalParams,
  AccessReviewScheduleDefinitionsGetByIdResponse,
  AccessReviewScheduleDefinitionsDeleteByIdOptionalParams,
  AccessReviewScheduleDefinitionProperties,
  AccessReviewScheduleDefinitionsCreateOrUpdateByIdOptionalParams,
  AccessReviewScheduleDefinitionsCreateOrUpdateByIdResponse,
  AccessReviewScheduleDefinitionsStopOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AccessReviewScheduleDefinitions. */
export interface AccessReviewScheduleDefinitions {
  /**
   * Get access review schedule definitions
   * @param options The options parameters.
   */
  list(
    options?: AccessReviewScheduleDefinitionsListOptionalParams,
  ): PagedAsyncIterableIterator<AccessReviewScheduleDefinition>;
  /**
   * Get single access review definition
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  getById(
    scheduleDefinitionId: string,
    options?: AccessReviewScheduleDefinitionsGetByIdOptionalParams,
  ): Promise<AccessReviewScheduleDefinitionsGetByIdResponse>;
  /**
   * Delete access review schedule definition
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  deleteById(
    scheduleDefinitionId: string,
    options?: AccessReviewScheduleDefinitionsDeleteByIdOptionalParams,
  ): Promise<void>;
  /**
   * Create or Update access review schedule definition.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param properties Access review schedule definition properties.
   * @param options The options parameters.
   */
  createOrUpdateById(
    scheduleDefinitionId: string,
    properties: AccessReviewScheduleDefinitionProperties,
    options?: AccessReviewScheduleDefinitionsCreateOrUpdateByIdOptionalParams,
  ): Promise<AccessReviewScheduleDefinitionsCreateOrUpdateByIdResponse>;
  /**
   * Stop access review definition
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  stop(
    scheduleDefinitionId: string,
    options?: AccessReviewScheduleDefinitionsStopOptionalParams,
  ): Promise<void>;
}
