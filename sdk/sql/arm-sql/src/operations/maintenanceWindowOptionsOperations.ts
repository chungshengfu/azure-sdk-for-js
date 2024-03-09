/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MaintenanceWindowOptionsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  MaintenanceWindowOptionsGetOptionalParams,
  MaintenanceWindowOptionsGetResponse,
} from "../models";

/** Class containing MaintenanceWindowOptionsOperations operations. */
export class MaintenanceWindowOptionsOperationsImpl
  implements MaintenanceWindowOptionsOperations
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class MaintenanceWindowOptionsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of available maintenance windows.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database to get maintenance windows options for.
   * @param maintenanceWindowOptionsName Maintenance window options name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    maintenanceWindowOptionsName: string,
    options?: MaintenanceWindowOptionsGetOptionalParams,
  ): Promise<MaintenanceWindowOptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        maintenanceWindowOptionsName,
        options,
      },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/maintenanceWindowOptions/current",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MaintenanceWindowOptions,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maintenanceWindowOptionsName,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
