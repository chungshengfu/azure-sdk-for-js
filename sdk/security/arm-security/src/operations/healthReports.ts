/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { HealthReports } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  HealthReport,
  HealthReportsListNextOptionalParams,
  HealthReportsListOptionalParams,
  HealthReportsListResponse,
  HealthReportsGetOptionalParams,
  HealthReportsGetResponse,
  HealthReportsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing HealthReports operations. */
export class HealthReportsImpl implements HealthReports {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class HealthReports class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get a list of all health reports inside a scope. Valid scopes are: subscription (format:
   * 'subscriptions/{subscriptionId}'), or security connector (format:
   * 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param scope The scope at which the operation is performed.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: HealthReportsListOptionalParams
  ): PagedAsyncIterableIterator<HealthReport> {
    const iter = this.listPagingAll(scope, options);
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
        return this.listPagingPage(scope, options, settings);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: HealthReportsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<HealthReport[]> {
    let result: HealthReportsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: HealthReportsListOptionalParams
  ): AsyncIterableIterator<HealthReport> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all health reports inside a scope. Valid scopes are: subscription (format:
   * 'subscriptions/{subscriptionId}'), or security connector (format:
   * 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName})'
   * @param scope The scope at which the operation is performed.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: HealthReportsListOptionalParams
  ): Promise<HealthReportsListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * Get health report of resource
   * @param resourceId The identifier of the resource.
   * @param healthReportName The health report Key - Unique key for the health report type
   * @param options The options parameters.
   */
  get(
    resourceId: string,
    healthReportName: string,
    options?: HealthReportsGetOptionalParams
  ): Promise<HealthReportsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceId, healthReportName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope at which the operation is performed.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: HealthReportsListNextOptionalParams
  ): Promise<HealthReportsListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Security/healthReports",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HealthReportsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion22],
  urlParameters: [Parameters.$host, Parameters.scope2],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{resourceId}/providers/Microsoft.Security/healthReports/{healthReportName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HealthReport
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion22],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceId,
    Parameters.healthReportName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HealthReportsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope2],
  headerParameters: [Parameters.accept],
  serializer
};
