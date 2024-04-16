/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LinkedWorkspaceOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  LinkedWorkspaceGetOptionalParams,
  LinkedWorkspaceGetResponse,
} from "../models";

/** Class containing LinkedWorkspaceOperations operations. */
export class LinkedWorkspaceOperationsImpl
  implements LinkedWorkspaceOperations
{
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class LinkedWorkspaceOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve the linked workspace for the account id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    options?: LinkedWorkspaceGetOptionalParams,
  ): Promise<LinkedWorkspaceGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/linkedWorkspace",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkedWorkspace,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
