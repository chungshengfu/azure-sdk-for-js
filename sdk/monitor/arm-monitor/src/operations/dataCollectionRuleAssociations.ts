/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DataCollectionRuleAssociations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  DataCollectionRuleAssociationProxyOnlyResource,
  DataCollectionRuleAssociationsListByResourceNextOptionalParams,
  DataCollectionRuleAssociationsListByResourceOptionalParams,
  DataCollectionRuleAssociationsListByResourceResponse,
  DataCollectionRuleAssociationsListByRuleNextOptionalParams,
  DataCollectionRuleAssociationsListByRuleOptionalParams,
  DataCollectionRuleAssociationsListByRuleResponse,
  DataCollectionRuleAssociationsListByDataCollectionEndpointNextOptionalParams,
  DataCollectionRuleAssociationsListByDataCollectionEndpointOptionalParams,
  DataCollectionRuleAssociationsListByDataCollectionEndpointResponse,
  DataCollectionRuleAssociationsGetOptionalParams,
  DataCollectionRuleAssociationsGetResponse,
  DataCollectionRuleAssociationsCreateOptionalParams,
  DataCollectionRuleAssociationsCreateResponse,
  DataCollectionRuleAssociationsDeleteOptionalParams,
  DataCollectionRuleAssociationsListByResourceNextResponse,
  DataCollectionRuleAssociationsListByRuleNextResponse,
  DataCollectionRuleAssociationsListByDataCollectionEndpointNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataCollectionRuleAssociations operations. */
export class DataCollectionRuleAssociationsImpl
  implements DataCollectionRuleAssociations
{
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class DataCollectionRuleAssociations class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Lists associations for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  public listByResource(
    resourceUri: string,
    options?: DataCollectionRuleAssociationsListByResourceOptionalParams,
  ): PagedAsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource> {
    const iter = this.listByResourcePagingAll(resourceUri, options);
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
        return this.listByResourcePagingPage(resourceUri, options, settings);
      },
    };
  }

  private async *listByResourcePagingPage(
    resourceUri: string,
    options?: DataCollectionRuleAssociationsListByResourceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource[]> {
    let result: DataCollectionRuleAssociationsListByResourceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResource(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceNext(
        resourceUri,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourcePagingAll(
    resourceUri: string,
    options?: DataCollectionRuleAssociationsListByResourceOptionalParams,
  ): AsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource> {
    for await (const page of this.listByResourcePagingPage(
      resourceUri,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists associations for the specified data collection rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataCollectionRuleName The name of the data collection rule. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByRule(
    resourceGroupName: string,
    dataCollectionRuleName: string,
    options?: DataCollectionRuleAssociationsListByRuleOptionalParams,
  ): PagedAsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource> {
    const iter = this.listByRulePagingAll(
      resourceGroupName,
      dataCollectionRuleName,
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
        return this.listByRulePagingPage(
          resourceGroupName,
          dataCollectionRuleName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByRulePagingPage(
    resourceGroupName: string,
    dataCollectionRuleName: string,
    options?: DataCollectionRuleAssociationsListByRuleOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource[]> {
    let result: DataCollectionRuleAssociationsListByRuleResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByRule(
        resourceGroupName,
        dataCollectionRuleName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByRuleNext(
        resourceGroupName,
        dataCollectionRuleName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByRulePagingAll(
    resourceGroupName: string,
    dataCollectionRuleName: string,
    options?: DataCollectionRuleAssociationsListByRuleOptionalParams,
  ): AsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource> {
    for await (const page of this.listByRulePagingPage(
      resourceGroupName,
      dataCollectionRuleName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists associations for the specified data collection endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataCollectionEndpointName The name of the data collection endpoint. The name is case
   *                                   insensitive.
   * @param options The options parameters.
   */
  public listByDataCollectionEndpoint(
    resourceGroupName: string,
    dataCollectionEndpointName: string,
    options?: DataCollectionRuleAssociationsListByDataCollectionEndpointOptionalParams,
  ): PagedAsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource> {
    const iter = this.listByDataCollectionEndpointPagingAll(
      resourceGroupName,
      dataCollectionEndpointName,
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
        return this.listByDataCollectionEndpointPagingPage(
          resourceGroupName,
          dataCollectionEndpointName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDataCollectionEndpointPagingPage(
    resourceGroupName: string,
    dataCollectionEndpointName: string,
    options?: DataCollectionRuleAssociationsListByDataCollectionEndpointOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource[]> {
    let result: DataCollectionRuleAssociationsListByDataCollectionEndpointResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataCollectionEndpoint(
        resourceGroupName,
        dataCollectionEndpointName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataCollectionEndpointNext(
        resourceGroupName,
        dataCollectionEndpointName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDataCollectionEndpointPagingAll(
    resourceGroupName: string,
    dataCollectionEndpointName: string,
    options?: DataCollectionRuleAssociationsListByDataCollectionEndpointOptionalParams,
  ): AsyncIterableIterator<DataCollectionRuleAssociationProxyOnlyResource> {
    for await (const page of this.listByDataCollectionEndpointPagingPage(
      resourceGroupName,
      dataCollectionEndpointName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists associations for the specified resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  private _listByResource(
    resourceUri: string,
    options?: DataCollectionRuleAssociationsListByResourceOptionalParams,
  ): Promise<DataCollectionRuleAssociationsListByResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listByResourceOperationSpec,
    );
  }

  /**
   * Lists associations for the specified data collection rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataCollectionRuleName The name of the data collection rule. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByRule(
    resourceGroupName: string,
    dataCollectionRuleName: string,
    options?: DataCollectionRuleAssociationsListByRuleOptionalParams,
  ): Promise<DataCollectionRuleAssociationsListByRuleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataCollectionRuleName, options },
      listByRuleOperationSpec,
    );
  }

  /**
   * Lists associations for the specified data collection endpoint.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataCollectionEndpointName The name of the data collection endpoint. The name is case
   *                                   insensitive.
   * @param options The options parameters.
   */
  private _listByDataCollectionEndpoint(
    resourceGroupName: string,
    dataCollectionEndpointName: string,
    options?: DataCollectionRuleAssociationsListByDataCollectionEndpointOptionalParams,
  ): Promise<DataCollectionRuleAssociationsListByDataCollectionEndpointResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataCollectionEndpointName, options },
      listByDataCollectionEndpointOperationSpec,
    );
  }

  /**
   * Returns the specified association.
   * @param resourceUri The identifier of the resource.
   * @param associationName The name of the association. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    associationName: string,
    options?: DataCollectionRuleAssociationsGetOptionalParams,
  ): Promise<DataCollectionRuleAssociationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, associationName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an association.
   * @param resourceUri The identifier of the resource.
   * @param associationName The name of the association. The name is case insensitive.
   * @param options The options parameters.
   */
  create(
    resourceUri: string,
    associationName: string,
    options?: DataCollectionRuleAssociationsCreateOptionalParams,
  ): Promise<DataCollectionRuleAssociationsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, associationName, options },
      createOperationSpec,
    );
  }

  /**
   * Deletes an association.
   * @param resourceUri The identifier of the resource.
   * @param associationName The name of the association. The name is case insensitive.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    associationName: string,
    options?: DataCollectionRuleAssociationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceUri, associationName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByResourceNext
   * @param resourceUri The identifier of the resource.
   * @param nextLink The nextLink from the previous successful call to the ListByResource method.
   * @param options The options parameters.
   */
  private _listByResourceNext(
    resourceUri: string,
    nextLink: string,
    options?: DataCollectionRuleAssociationsListByResourceNextOptionalParams,
  ): Promise<DataCollectionRuleAssociationsListByResourceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listByResourceNextOperationSpec,
    );
  }

  /**
   * ListByRuleNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataCollectionRuleName The name of the data collection rule. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByRule method.
   * @param options The options parameters.
   */
  private _listByRuleNext(
    resourceGroupName: string,
    dataCollectionRuleName: string,
    nextLink: string,
    options?: DataCollectionRuleAssociationsListByRuleNextOptionalParams,
  ): Promise<DataCollectionRuleAssociationsListByRuleNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataCollectionRuleName, nextLink, options },
      listByRuleNextOperationSpec,
    );
  }

  /**
   * ListByDataCollectionEndpointNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param dataCollectionEndpointName The name of the data collection endpoint. The name is case
   *                                   insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByDataCollectionEndpoint
   *                 method.
   * @param options The options parameters.
   */
  private _listByDataCollectionEndpointNext(
    resourceGroupName: string,
    dataCollectionEndpointName: string,
    nextLink: string,
    options?: DataCollectionRuleAssociationsListByDataCollectionEndpointNextOptionalParams,
  ): Promise<DataCollectionRuleAssociationsListByDataCollectionEndpointNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dataCollectionEndpointName, nextLink, options },
      listByDataCollectionEndpointNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/dataCollectionRuleAssociations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.DataCollectionRuleAssociationProxyOnlyResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [Parameters.$host, Parameters.resourceUri1],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByRuleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionRules/{dataCollectionRuleName}/associations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.DataCollectionRuleAssociationProxyOnlyResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataCollectionRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDataCollectionEndpointOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/dataCollectionEndpoints/{dataCollectionEndpointName}/associations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.DataCollectionRuleAssociationProxyOnlyResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dataCollectionEndpointName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/dataCollectionRuleAssociations/{associationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataCollectionRuleAssociationProxyOnlyResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri1,
    Parameters.associationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/dataCollectionRuleAssociations/{associationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataCollectionRuleAssociationProxyOnlyResource,
    },
    201: {
      bodyMapper: Mappers.DataCollectionRuleAssociationProxyOnlyResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri1,
    Parameters.associationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/dataCollectionRuleAssociations/{associationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  queryParameters: [Parameters.apiVersion15],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri1,
    Parameters.associationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.DataCollectionRuleAssociationProxyOnlyResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceUri1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByRuleNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.DataCollectionRuleAssociationProxyOnlyResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseCommonV2,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.dataCollectionRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDataCollectionEndpointNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper:
          Mappers.DataCollectionRuleAssociationProxyOnlyResourceListResult,
      },
      default: {
        bodyMapper: Mappers.ErrorResponseCommonV2,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.nextLink,
      Parameters.dataCollectionEndpointName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
