/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ScopeAccessReviewInstanceStopOptionalParams,
  RecordAllDecisionsProperties,
  ScopeAccessReviewInstanceRecordAllDecisionsOptionalParams,
  ScopeAccessReviewInstanceResetDecisionsOptionalParams,
  ScopeAccessReviewInstanceApplyDecisionsOptionalParams,
  ScopeAccessReviewInstanceSendRemindersOptionalParams,
} from "../models";

/** Interface representing a ScopeAccessReviewInstance. */
export interface ScopeAccessReviewInstance {
  /**
   * An action to stop an access review instance.
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  stop(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceStopOptionalParams,
  ): Promise<void>;
  /**
   * An action to approve/deny all decisions for a review with certain filters.
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param properties Record all decisions payload.
   * @param options The options parameters.
   */
  recordAllDecisions(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    properties: RecordAllDecisionsProperties,
    options?: ScopeAccessReviewInstanceRecordAllDecisionsOptionalParams,
  ): Promise<void>;
  /**
   * An action to reset all decisions for an access review instance.
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  resetDecisions(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceResetDecisionsOptionalParams,
  ): Promise<void>;
  /**
   * An action to apply all decisions for an access review instance.
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  applyDecisions(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceApplyDecisionsOptionalParams,
  ): Promise<void>;
  /**
   * An action to send reminders for an access review instance.
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  sendReminders(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceSendRemindersOptionalParams,
  ): Promise<void>;
}
