/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IntegrationRuntimeNodeIpAddressOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  IntegrationRuntimeNodeIpAddressGetOptionalParams,
  IntegrationRuntimeNodeIpAddressGetResponse,
} from "../models";

/** Class containing IntegrationRuntimeNodeIpAddressOperations operations. */
export class IntegrationRuntimeNodeIpAddressOperationsImpl
  implements IntegrationRuntimeNodeIpAddressOperations
{
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class IntegrationRuntimeNodeIpAddressOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get the IP address of an integration runtime node
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param integrationRuntimeName Integration runtime name
   * @param nodeName Integration runtime node name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    integrationRuntimeName: string,
    nodeName: string,
    options?: IntegrationRuntimeNodeIpAddressGetOptionalParams,
  ): Promise<IntegrationRuntimeNodeIpAddressGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        integrationRuntimeName,
        nodeName,
        options,
      },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/integrationRuntimes/{integrationRuntimeName}/nodes/{nodeName}/ipAddress",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IntegrationRuntimeNodeIpAddress,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.integrationRuntimeName,
    Parameters.nodeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
