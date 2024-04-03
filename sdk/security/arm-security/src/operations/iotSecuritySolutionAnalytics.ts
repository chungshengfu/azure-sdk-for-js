/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { IotSecuritySolutionAnalytics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  IotSecuritySolutionAnalyticsListOptionalParams,
  IotSecuritySolutionAnalyticsListResponse,
  IotSecuritySolutionAnalyticsGetOptionalParams,
  IotSecuritySolutionAnalyticsGetResponse,
} from "../models";

/** Class containing IotSecuritySolutionAnalytics operations. */
export class IotSecuritySolutionAnalyticsImpl
  implements IotSecuritySolutionAnalytics
{
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class IotSecuritySolutionAnalytics class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Use this method to get IoT security Analytics metrics in an array.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionAnalyticsListOptionalParams,
  ): Promise<IotSecuritySolutionAnalyticsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, options },
      listOperationSpec,
    );
  }

  /**
   * Use this method to get IoT Security Analytics metrics.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionAnalyticsGetOptionalParams,
  ): Promise<IotSecuritySolutionAnalyticsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionAnalyticsModelList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecuritySolutionAnalyticsModel,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
