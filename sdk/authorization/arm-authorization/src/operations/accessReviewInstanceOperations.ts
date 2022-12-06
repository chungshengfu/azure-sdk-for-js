/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AccessReviewInstanceOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewInstanceStopOptionalParams,
  AccessReviewInstanceResetDecisionsOptionalParams,
  AccessReviewInstanceApplyDecisionsOptionalParams,
  AccessReviewInstanceSendRemindersOptionalParams,
  AccessReviewInstanceAcceptRecommendationsOptionalParams
} from "../models";

/** Class containing AccessReviewInstanceOperations operations. */
export class AccessReviewInstanceOperationsImpl
  implements AccessReviewInstanceOperations {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewInstanceOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * An action to stop an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  stop(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceStopOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      stopOperationSpec
    );
  }

  /**
   * An action to reset all decisions for an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  resetDecisions(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceResetDecisionsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      resetDecisionsOperationSpec
    );
  }

  /**
   * An action to apply all decisions for an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  applyDecisions(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceApplyDecisionsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      applyDecisionsOperationSpec
    );
  }

  /**
   * An action to send reminders for an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  sendReminders(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceSendRemindersOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      sendRemindersOperationSpec
    );
  }

  /**
   * An action to accept recommendations for decision in an access review instance.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  acceptRecommendations(
    scheduleDefinitionId: string,
    id: string,
    options?: AccessReviewInstanceAcceptRecommendationsOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, id, options },
      acceptRecommendationsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/stop",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resetDecisionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/resetDecisions",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const applyDecisionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/applyDecisions",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const sendRemindersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/sendReminders",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const acceptRecommendationsOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/acceptRecommendations",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id
  ],
  headerParameters: [Parameters.accept],
  serializer
};
