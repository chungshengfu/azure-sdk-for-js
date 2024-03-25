/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Library } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import { LibraryGetOptionalParams, LibraryGetResponse } from "../models";

/** Class containing Library operations. */
export class LibraryImpl implements Library {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class Library class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get library by name in a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param libraryName Library name
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    libraryName: string,
    workspaceName: string,
    options?: LibraryGetOptionalParams,
  ): Promise<LibraryGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, libraryName, workspaceName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/libraries/{libraryName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LibraryResource,
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
    Parameters.libraryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
