/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VMInsights } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  VMInsightsGetOnboardingStatusOptionalParams,
  VMInsightsGetOnboardingStatusResponse,
} from "../models";

/** Class containing VMInsights operations. */
export class VMInsightsImpl implements VMInsights {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class VMInsights class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Retrieves the VM Insights onboarding status for the specified resource or resource scope.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource, or scope,
   *                    whose status to retrieve.
   * @param options The options parameters.
   */
  getOnboardingStatus(
    resourceUri: string,
    options?: VMInsightsGetOnboardingStatusOptionalParams,
  ): Promise<VMInsightsGetOnboardingStatusResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      getOnboardingStatusOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOnboardingStatusOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMInsightsOnboardingStatus,
    },
    default: {
      bodyMapper: Mappers.ResponseWithError,
    },
  },
  queryParameters: [Parameters.apiVersion12],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
