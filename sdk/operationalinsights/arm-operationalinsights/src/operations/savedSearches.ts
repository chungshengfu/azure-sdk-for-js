/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SavedSearches } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { OperationalInsightsManagementClient } from "../operationalInsightsManagementClient";
import {
  SavedSearchesDeleteOptionalParams,
  SavedSearch,
  SavedSearchesCreateOrUpdateOptionalParams,
  SavedSearchesCreateOrUpdateResponse,
  SavedSearchesGetOptionalParams,
  SavedSearchesGetResponse,
  SavedSearchesListByWorkspaceOptionalParams,
  SavedSearchesListByWorkspaceResponse,
} from "../models";

/** Class containing SavedSearches operations. */
export class SavedSearchesImpl implements SavedSearches {
  private readonly client: OperationalInsightsManagementClient;

  /**
   * Initialize a new instance of the class SavedSearches class.
   * @param client Reference to the service client
   */
  constructor(client: OperationalInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified saved search in a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    savedSearchId: string,
    options?: SavedSearchesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, savedSearchId, options },
      deleteOperationSpec,
    );
  }

  /**
   * Creates or updates a saved search for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param parameters The parameters required to save a search.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    savedSearchId: string,
    parameters: SavedSearch,
    options?: SavedSearchesCreateOrUpdateOptionalParams,
  ): Promise<SavedSearchesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, savedSearchId, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Gets the specified saved search for a given workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param savedSearchId The id of the saved search.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    savedSearchId: string,
    options?: SavedSearchesGetOptionalParams,
  ): Promise<SavedSearchesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, savedSearchId, options },
      getOperationSpec,
    );
  }

  /**
   * Gets the saved searches for a given Log Analytics Workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: SavedSearchesListByWorkspaceOptionalParams,
  ): Promise<SavedSearchesListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.savedSearchId,
  ],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SavedSearch,
    },
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.savedSearchId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches/{savedSearchId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SavedSearch,
    },
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.savedSearchId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/savedSearches",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SavedSearchesListResult,
    },
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
