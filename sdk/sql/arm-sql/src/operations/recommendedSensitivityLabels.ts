/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RecommendedSensitivityLabels } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  RecommendedSensitivityLabelUpdateList,
  RecommendedSensitivityLabelsUpdateOptionalParams,
} from "../models";

/** Class containing RecommendedSensitivityLabels operations. */
export class RecommendedSensitivityLabelsImpl
  implements RecommendedSensitivityLabels
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class RecommendedSensitivityLabels class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Update recommended sensitivity labels states of a given database using an operations batch.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param parameters A list of recommended sensitivity label update operations.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    parameters: RecommendedSensitivityLabelUpdateList,
    options?: RecommendedSensitivityLabelsUpdateOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, parameters, options },
      updateOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/recommendedSensitivityLabels",
  httpMethod: "PATCH",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters55,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
