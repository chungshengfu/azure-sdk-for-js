/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SqlPoolDataWarehouseUserActivities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  DataWarehouseUserActivityName,
  SqlPoolDataWarehouseUserActivitiesGetOptionalParams,
  SqlPoolDataWarehouseUserActivitiesGetResponse,
} from "../models";

/** Class containing SqlPoolDataWarehouseUserActivities operations. */
export class SqlPoolDataWarehouseUserActivitiesImpl
  implements SqlPoolDataWarehouseUserActivities
{
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolDataWarehouseUserActivities class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Gets the user activities of a SQL pool which includes running and suspended queries
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param dataWarehouseUserActivityName The activity name of the Sql pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    dataWarehouseUserActivityName: DataWarehouseUserActivityName,
    options?: SqlPoolDataWarehouseUserActivitiesGetOptionalParams,
  ): Promise<SqlPoolDataWarehouseUserActivitiesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        dataWarehouseUserActivityName,
        options,
      },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/dataWarehouseUserActivities/{dataWarehouseUserActivityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataWarehouseUserActivities,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.dataWarehouseUserActivityName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
