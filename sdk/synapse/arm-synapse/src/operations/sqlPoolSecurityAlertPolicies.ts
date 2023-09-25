/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SqlPoolSecurityAlertPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SqlPoolSecurityAlertPolicy,
  SqlPoolSecurityAlertPoliciesListNextOptionalParams,
  SqlPoolSecurityAlertPoliciesListOptionalParams,
  SqlPoolSecurityAlertPoliciesListResponse,
  SecurityAlertPolicyName,
  SqlPoolSecurityAlertPoliciesGetOptionalParams,
  SqlPoolSecurityAlertPoliciesGetResponse,
  SqlPoolSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  SqlPoolSecurityAlertPoliciesCreateOrUpdateResponse,
  SqlPoolSecurityAlertPoliciesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SqlPoolSecurityAlertPolicies operations. */
export class SqlPoolSecurityAlertPoliciesImpl
  implements SqlPoolSecurityAlertPolicies {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolSecurityAlertPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get a list of Sql pool's security alert policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSecurityAlertPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<SqlPoolSecurityAlertPolicy> {
    const iter = this.listPagingAll(
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
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          sqlPoolName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSecurityAlertPoliciesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SqlPoolSecurityAlertPolicy[]> {
    let result: SqlPoolSecurityAlertPoliciesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
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
      result = await this._listNext(
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

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSecurityAlertPoliciesListOptionalParams
  ): AsyncIterableIterator<SqlPoolSecurityAlertPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of Sql pool's security alert policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    options?: SqlPoolSecurityAlertPoliciesListOptionalParams
  ): Promise<SqlPoolSecurityAlertPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, options },
      listOperationSpec
    );
  }

  /**
   * Get a Sql pool's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    options?: SqlPoolSecurityAlertPoliciesGetOptionalParams
  ): Promise<SqlPoolSecurityAlertPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        securityAlertPolicyName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Create or update a Sql pool's security alert policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param parameters The Sql pool security alert policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    securityAlertPolicyName: SecurityAlertPolicyName,
    parameters: SqlPoolSecurityAlertPolicy,
    options?: SqlPoolSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<SqlPoolSecurityAlertPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        securityAlertPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    nextLink: string,
    options?: SqlPoolSecurityAlertPoliciesListNextOptionalParams
  ): Promise<SqlPoolSecurityAlertPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, sqlPoolName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/securityAlertPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListSqlPoolSecurityAlertPolicies
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
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
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolSecurityAlertPolicy
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
    Parameters.securityAlertPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/securityAlertPolicies/{securityAlertPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPoolSecurityAlertPolicy
    },
    201: {
      bodyMapper: Mappers.SqlPoolSecurityAlertPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.securityAlertPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListSqlPoolSecurityAlertPolicies
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
