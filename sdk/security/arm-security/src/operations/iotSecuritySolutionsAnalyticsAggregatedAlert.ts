/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { IotSecuritySolutionsAnalyticsAggregatedAlert } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  IoTSecurityAggregatedAlert,
  IotSecuritySolutionsAnalyticsAggregatedAlertListNextOptionalParams,
  IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams,
  IotSecuritySolutionsAnalyticsAggregatedAlertListResponse,
  IotSecuritySolutionsAnalyticsAggregatedAlertGetOptionalParams,
  IotSecuritySolutionsAnalyticsAggregatedAlertGetResponse,
  IotSecuritySolutionsAnalyticsAggregatedAlertDismissOptionalParams,
  IotSecuritySolutionsAnalyticsAggregatedAlertListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing IotSecuritySolutionsAnalyticsAggregatedAlert operations. */
export class IotSecuritySolutionsAnalyticsAggregatedAlertImpl
  implements IotSecuritySolutionsAnalyticsAggregatedAlert
{
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class IotSecuritySolutionsAnalyticsAggregatedAlert class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Use this method to get the aggregated alert list of yours IoT Security solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams,
  ): PagedAsyncIterableIterator<IoTSecurityAggregatedAlert> {
    const iter = this.listPagingAll(resourceGroupName, solutionName, options);
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
          solutionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<IoTSecurityAggregatedAlert[]> {
    let result: IotSecuritySolutionsAnalyticsAggregatedAlertListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, solutionName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        solutionName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams,
  ): AsyncIterableIterator<IoTSecurityAggregatedAlert> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      solutionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Use this method to get the aggregated alert list of yours IoT Security solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertListOptionalParams,
  ): Promise<IotSecuritySolutionsAnalyticsAggregatedAlertListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, options },
      listOperationSpec,
    );
  }

  /**
   * Use this method to get a single the aggregated alert of yours IoT Security solution. This
   * aggregation is performed by alert name.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedAlertName Identifier of the aggregated alert.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    aggregatedAlertName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertGetOptionalParams,
  ): Promise<IotSecuritySolutionsAnalyticsAggregatedAlertGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, aggregatedAlertName, options },
      getOperationSpec,
    );
  }

  /**
   * Use this method to dismiss an aggregated IoT Security Solution Alert.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param aggregatedAlertName Identifier of the aggregated alert.
   * @param options The options parameters.
   */
  dismiss(
    resourceGroupName: string,
    solutionName: string,
    aggregatedAlertName: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertDismissOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, aggregatedAlertName, options },
      dismissOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    solutionName: string,
    nextLink: string,
    options?: IotSecuritySolutionsAnalyticsAggregatedAlertListNextOptionalParams,
  ): Promise<IotSecuritySolutionsAnalyticsAggregatedAlertListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, solutionName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecurityAggregatedAlertList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion20, Parameters.top],
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecurityAggregatedAlert,
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
    Parameters.aggregatedAlertName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const dismissOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/iotSecuritySolutions/{solutionName}/analyticsModels/default/aggregatedAlerts/{aggregatedAlertName}/dismiss",
  httpMethod: "POST",
  responses: {
    200: {},
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
    Parameters.aggregatedAlertName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IoTSecurityAggregatedAlertList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.solutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
