/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DatabaseOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClient } from "../kustoManagementClient";
import {
  DatabaseInviteFollowerRequest,
  DatabaseInviteFollowerOptionalParams,
  DatabaseInviteFollowerResponse,
} from "../models";

/** Class containing DatabaseOperations operations. */
export class DatabaseOperationsImpl implements DatabaseOperations {
  private readonly client: KustoManagementClient;

  /**
   * Initialize a new instance of the class DatabaseOperations class.
   * @param client Reference to the service client
   */
  constructor(client: KustoManagementClient) {
    this.client = client;
  }

  /**
   * Generates an invitation token that allows attaching a follower database to this database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the Kusto cluster.
   * @param databaseName The name of the database in the Kusto cluster.
   * @param parameters The follower invitation request parameters.
   * @param options The options parameters.
   */
  inviteFollower(
    resourceGroupName: string,
    clusterName: string,
    databaseName: string,
    parameters: DatabaseInviteFollowerRequest,
    options?: DatabaseInviteFollowerOptionalParams,
  ): Promise<DatabaseInviteFollowerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, databaseName, parameters, options },
      inviteFollowerOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const inviteFollowerOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kusto/clusters/{clusterName}/databases/{databaseName}/inviteFollower",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseInviteFollowerResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.subscriptionId,
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
