/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DataMaskingRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DataMaskingRule,
  DataMaskingPolicyName,
  DataMaskingRulesListByDatabaseNextOptionalParams,
  DataMaskingRulesListByDatabaseOptionalParams,
  DataMaskingRulesListByDatabaseResponse,
  DataMaskingRulesCreateOrUpdateOptionalParams,
  DataMaskingRulesCreateOrUpdateResponse,
  DataMaskingRulesListByDatabaseNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataMaskingRules operations. */
export class DataMaskingRulesImpl implements DataMaskingRules {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DataMaskingRules class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of database data masking rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingPolicyName The name of the database for which the data masking rule applies.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingPolicyName: DataMaskingPolicyName,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DataMaskingRule> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      dataMaskingPolicyName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          dataMaskingPolicyName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingPolicyName: DataMaskingPolicyName,
    options?: DataMaskingRulesListByDatabaseOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DataMaskingRule[]> {
    let result: DataMaskingRulesListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingPolicyName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingPolicyName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingPolicyName: DataMaskingPolicyName,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): AsyncIterableIterator<DataMaskingRule> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      dataMaskingPolicyName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of database data masking rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingPolicyName The name of the database for which the data masking rule applies.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingPolicyName: DataMaskingPolicyName,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): Promise<DataMaskingRulesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingPolicyName,
        options
      },
      listByDatabaseOperationSpec
    );
  }

  /**
   * Creates or updates a database data masking rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingPolicyName The name of the database for which the data masking policy applies.
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingPolicyName: DataMaskingPolicyName,
    dataMaskingRuleName: string,
    parameters: DataMaskingRule,
    options?: DataMaskingRulesCreateOrUpdateOptionalParams
  ): Promise<DataMaskingRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingPolicyName,
        dataMaskingRuleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingPolicyName The name of the database for which the data masking rule applies.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingPolicyName: DataMaskingPolicyName,
    nextLink: string,
    options?: DataMaskingRulesListByDatabaseNextOptionalParams
  ): Promise<DataMaskingRulesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingPolicyName,
        nextLink,
        options
      },
      listByDatabaseNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRuleListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.dataMaskingPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRule
    },
    201: {
      bodyMapper: Mappers.DataMaskingRule
    },
    default: {}
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.dataMaskingPolicyName,
    Parameters.dataMaskingRuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRuleListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.dataMaskingPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
