/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ConfigurationProfileHcrpAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomanageClient } from "../automanageClient";
import {
  ConfigurationProfileAssignment,
  ConfigurationProfileHcrpAssignmentsCreateOrUpdateOptionalParams,
  ConfigurationProfileHcrpAssignmentsCreateOrUpdateResponse,
  ConfigurationProfileHcrpAssignmentsGetOptionalParams,
  ConfigurationProfileHcrpAssignmentsGetResponse,
  ConfigurationProfileHcrpAssignmentsDeleteOptionalParams,
} from "../models";

/** Class containing ConfigurationProfileHcrpAssignments operations. */
export class ConfigurationProfileHcrpAssignmentsImpl
  implements ConfigurationProfileHcrpAssignments
{
  private readonly client: AutomanageClient;

  /**
   * Initialize a new instance of the class ConfigurationProfileHcrpAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: AutomanageClient) {
    this.client = client;
  }

  /**
   * Creates an association between a ARC machine and Automanage configuration profile
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the Arc machine.
   * @param configurationProfileAssignmentName Name of the configuration profile assignment. Only default
   *                                           is supported.
   * @param parameters Parameters supplied to the create or update configuration profile assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    machineName: string,
    configurationProfileAssignmentName: string,
    parameters: ConfigurationProfileAssignment,
    options?: ConfigurationProfileHcrpAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<ConfigurationProfileHcrpAssignmentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        machineName,
        configurationProfileAssignmentName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Get information about a configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the Arc machine.
   * @param configurationProfileAssignmentName The configuration profile assignment name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    machineName: string,
    configurationProfileAssignmentName: string,
    options?: ConfigurationProfileHcrpAssignmentsGetOptionalParams,
  ): Promise<ConfigurationProfileHcrpAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        machineName,
        configurationProfileAssignmentName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Delete a configuration profile assignment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the Arc machine.
   * @param configurationProfileAssignmentName Name of the configuration profile assignment
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    machineName: string,
    configurationProfileAssignmentName: string,
    options?: ConfigurationProfileHcrpAssignmentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        machineName,
        configurationProfileAssignmentName,
        options,
      },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationProfileAssignment,
    },
    201: {
      bodyMapper: Mappers.ConfigurationProfileAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configurationProfileAssignmentName,
    Parameters.machineName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationProfileAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configurationProfileAssignmentName,
    Parameters.machineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.Automanage/configurationProfileAssignments/{configurationProfileAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configurationProfileAssignmentName,
    Parameters.machineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
