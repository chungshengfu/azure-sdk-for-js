/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SqlPoolSensitivityLabels } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SensitivityLabel,
  SqlPoolSensitivityLabelsListCurrentNextOptionalParams,
  SqlPoolSensitivityLabelsListCurrentOptionalParams,
  SqlPoolSensitivityLabelsListCurrentResponse,
  SqlPoolSensitivityLabelsListRecommendedNextOptionalParams,
  SqlPoolSensitivityLabelsListRecommendedOptionalParams,
  SqlPoolSensitivityLabelsListRecommendedResponse,
  SensitivityLabelUpdateList,
  SqlPoolSensitivityLabelsUpdateOptionalParams,
  SqlPoolSensitivityLabelsCreateOrUpdateOptionalParams,
  SqlPoolSensitivityLabelsCreateOrUpdateResponse,
  SqlPoolSensitivityLabelsDeleteOptionalParams,
  SensitivityLabelSource,
  SqlPoolSensitivityLabelsGetOptionalParams,
  SqlPoolSensitivityLabelsGetResponse,
  SqlPoolSensitivityLabelsEnableRecommendationOptionalParams,
  SqlPoolSensitivityLabelsDisableRecommendationOptionalParams,
  SqlPoolSensitivityLabelsListCurrentNextResponse,
  SqlPoolSensitivityLabelsListRecommendedNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlPoolSensitivityLabels operations. */
export class SqlPoolSensitivityLabelsImpl implements SqlPoolSensitivityLabels {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolSensitivityLabels class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Gets SQL pool sensitivity labels.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  public listCurrent(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListCurrentOptionalParams
  ): PagedAsyncIterableIterator<SensitivityLabel> {
    const iter = this.listCurrentPagingAll(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listCurrentPagingPage(
          resourceGroupName,
          workspaceName,
          sqlPoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listCurrentPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListCurrentOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SensitivityLabel[]> {
    let result: SqlPoolSensitivityLabelsListCurrentResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listCurrent(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listCurrentNext(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listCurrentPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListCurrentOptionalParams
  ): AsyncIterableIterator<SensitivityLabel> {
    for await (const page of this.listCurrentPagingPage(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets sensitivity labels of a given SQL pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  public listRecommended(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListRecommendedOptionalParams
  ): PagedAsyncIterableIterator<SensitivityLabel> {
    const iter = this.listRecommendedPagingAll(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listRecommendedPagingPage(
          resourceGroupName,
          workspaceName,
          sqlPoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listRecommendedPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListRecommendedOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SensitivityLabel[]> {
    let result: SqlPoolSensitivityLabelsListRecommendedResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listRecommended(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listRecommendedNext(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listRecommendedPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListRecommendedOptionalParams
  ): AsyncIterableIterator<SensitivityLabel> {
    for await (const page of this.listRecommendedPagingPage(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets SQL pool sensitivity labels.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  private _listCurrent(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListCurrentOptionalParams
  ): Promise<SqlPoolSensitivityLabelsListCurrentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      listCurrentOperationSpec
    );
  }

  /**
   * Update sensitivity labels of a given SQL Pool using an operations batch.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters A list of sensitivity label update operations.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: SensitivityLabelUpdateList,
    options?: SqlPoolSensitivityLabelsUpdateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Gets sensitivity labels of a given SQL pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  private _listRecommended(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSensitivityLabelsListRecommendedOptionalParams
  ): Promise<SqlPoolSensitivityLabelsListRecommendedResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      listRecommendedOperationSpec
    );
  }

  /**
   * Creates or updates the sensitivity label of a given column in a Sql pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param parameters The column sensitivity label resource.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    parameters: SensitivityLabel,
    options?: SqlPoolSensitivityLabelsCreateOrUpdateOptionalParams
  ): Promise<SqlPoolSensitivityLabelsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the sensitivity label of a given column in a Sql pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: SqlPoolSensitivityLabelsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      deleteOperationSpec
    );
  }

  /**
   * Gets the sensitivity label of a given column
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param sensitivityLabelSource The source of the sensitivity label.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    sensitivityLabelSource: SensitivityLabelSource,
    options?: SqlPoolSensitivityLabelsGetOptionalParams
  ): Promise<SqlPoolSensitivityLabelsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        sensitivityLabelSource,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Enables sensitivity recommendations on a given column (recommendations are enabled by default on all
   * columns)
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  enableRecommendation(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: SqlPoolSensitivityLabelsEnableRecommendationOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      enableRecommendationOperationSpec
    );
  }

  /**
   * Disables sensitivity recommendations on a given column
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  disableRecommendation(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: SqlPoolSensitivityLabelsDisableRecommendationOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        schemaName,
        tableName,
        columnName,
        options
      },
      disableRecommendationOperationSpec
    );
  }

  /**
   * ListCurrentNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param nextLink The nextLink from the previous successful call to the ListCurrent method.
   * @param options The options parameters.
   */
  private _listCurrentNext(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    nextLink: string,
    options?: SqlPoolSensitivityLabelsListCurrentNextOptionalParams
  ): Promise<SqlPoolSensitivityLabelsListCurrentNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, nextLink, options },
      listCurrentNextOperationSpec
    );
  }

  /**
   * ListRecommendedNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param nextLink The nextLink from the previous successful call to the ListRecommended method.
   * @param options The options parameters.
   */
  private _listRecommendedNext(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    nextLink: string,
    options?: SqlPoolSensitivityLabelsListRecommendedNextOptionalParams
  ): Promise<SqlPoolSensitivityLabelsListRecommendedNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, nextLink, options },
      listRecommendedNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listCurrentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/currentSensitivityLabels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/currentSensitivityLabels",
  httpMethod: "PATCH",
  responses: { 200: {}, default: {} },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listRecommendedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/recommendedSensitivityLabels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.includeDisabledRecommendations,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabel
    },
    201: {
      bodyMapper: Mappers.SensitivityLabel
    },
    default: {}
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabel
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const enableRecommendationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/enable",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource2
  ],
  serializer
};
const disableRecommendationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}/sensitivityLabels/{sensitivityLabelSource}/disable",
  httpMethod: "POST",
  responses: { 200: {}, default: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.sensitivityLabelSource2
  ],
  serializer
};
const listCurrentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listRecommendedNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SensitivityLabelListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
