/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SqlPoolBlobAuditingPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SqlPoolBlobAuditingPolicy,
  SqlPoolBlobAuditingPoliciesListBySqlPoolNextOptionalParams,
  SqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams,
  SqlPoolBlobAuditingPoliciesListBySqlPoolResponse,
  SqlPoolBlobAuditingPoliciesGetOptionalParams,
  SqlPoolBlobAuditingPoliciesGetResponse,
  SqlPoolBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  SqlPoolBlobAuditingPoliciesCreateOrUpdateResponse,
  SqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlPoolBlobAuditingPolicies operations. */
export class SqlPoolBlobAuditingPoliciesImpl
  implements SqlPoolBlobAuditingPolicies
{
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolBlobAuditingPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Lists auditing settings of a Sql pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  public listBySqlPool(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams,
  ): PagedAsyncIterableIterator<SqlPoolBlobAuditingPolicy> {
    const iter = this.listBySqlPoolPagingAll(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options,
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
        return this.listBySqlPoolPagingPage(
          resourceGroupName,
          workspaceName,
          sqlPoolName,
          options,
          settings,
        );
      },
    };
  }

  private async *listBySqlPoolPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SqlPoolBlobAuditingPolicy[]> {
    let result: SqlPoolBlobAuditingPoliciesListBySqlPoolResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySqlPool(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySqlPoolNext(
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySqlPoolPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams,
  ): AsyncIterableIterator<SqlPoolBlobAuditingPolicy> {
    for await (const page of this.listBySqlPoolPagingPage(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get a SQL pool's blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolBlobAuditingPoliciesGetOptionalParams,
  ): Promise<SqlPoolBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a SQL pool's blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param parameters The database blob auditing policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    parameters: SqlPoolBlobAuditingPolicy,
    options?: SqlPoolBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ): Promise<SqlPoolBlobAuditingPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Lists auditing settings of a Sql pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  private _listBySqlPool(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolBlobAuditingPoliciesListBySqlPoolOptionalParams,
  ): Promise<SqlPoolBlobAuditingPoliciesListBySqlPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      listBySqlPoolOperationSpec,
    );
  }

  /**
   * ListBySqlPoolNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param nextLink The nextLink from the previous successful call to the ListBySqlPool method.
   * @param options The options parameters.
   */
  private _listBySqlPoolNext(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    nextLink: string,
    options?: SqlPoolBlobAuditingPoliciesListBySqlPoolNextOptionalParams,
  ): Promise<SqlPoolBlobAuditingPoliciesListBySqlPoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, nextLink, options },
      listBySqlPoolNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/auditingSettings/{blobAuditingPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicy,
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
    Parameters.blobAuditingPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/auditingSettings/{blobAuditingPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicy,
    },
    201: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicy,
    },
    default: {},
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.blobAuditingPolicyName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySqlPoolOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/auditingSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicyListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySqlPoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolBlobAuditingPolicyListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.sqlPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
