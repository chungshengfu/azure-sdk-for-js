/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SoftwareUpdateConfigurationMachineRuns } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  SoftwareUpdateConfigurationMachineRunsGetByIdOptionalParams,
  SoftwareUpdateConfigurationMachineRunsGetByIdResponse,
  SoftwareUpdateConfigurationMachineRunsListOptionalParams,
  SoftwareUpdateConfigurationMachineRunsListResponse
} from "../models";

/** Class containing SoftwareUpdateConfigurationMachineRuns operations. */
export class SoftwareUpdateConfigurationMachineRunsImpl
  implements SoftwareUpdateConfigurationMachineRuns {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class SoftwareUpdateConfigurationMachineRuns class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Get a single software update configuration machine run by Id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationMachineRunId The Id of the software update configuration machine
   *                                                run.
   * @param options The options parameters.
   */
  getById(
    resourceGroupName: string,
    automationAccountName: string,
    softwareUpdateConfigurationMachineRunId: string,
    options?: SoftwareUpdateConfigurationMachineRunsGetByIdOptionalParams
  ): Promise<SoftwareUpdateConfigurationMachineRunsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        softwareUpdateConfigurationMachineRunId,
        options
      },
      getByIdOperationSpec
    );
  }

  /**
   * Return list of software update configuration machine runs
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    automationAccountName: string,
    options?: SoftwareUpdateConfigurationMachineRunsListOptionalParams
  ): Promise<SoftwareUpdateConfigurationMachineRunsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns/{softwareUpdateConfigurationMachineRunId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationMachineRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.softwareUpdateConfigurationMachineRunId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationMachineRunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion1,
    Parameters.skip1,
    Parameters.top1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.clientRequestId],
  serializer
};
