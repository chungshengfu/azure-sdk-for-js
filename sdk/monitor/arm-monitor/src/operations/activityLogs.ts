/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ActivityLogs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  EventData,
  ActivityLogsListNextOptionalParams,
  ActivityLogsListOptionalParams,
  ActivityLogsListResponse,
  ActivityLogsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ActivityLogs operations. */
export class ActivityLogsImpl implements ActivityLogs {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class ActivityLogs class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Provides the list of records from the activity logs.
   * @param filter Reduces the set of data collected.<br>This argument is required and it also requires
   *               at least the start date/time.<br>The **$filter** argument is very restricted and allows only the
   *               following patterns.<br>- *List events for a resource group*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and
   *               resourceGroupName eq 'resourceGroupName'.<br>- *List events for resource*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceUri
   *               eq 'resourceURI'.<br>- *List events for a subscription in a time range*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z'.<br>- *List
   *               events for a resource provider*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and
   *               eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceProvider eq
   *               'resourceProviderName'.<br>- *List events for a correlation Id*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and
   *               correlationId eq 'correlationID'.<br><br>**NOTE**: No other syntax is allowed.
   * @param options The options parameters.
   */
  public list(
    filter: string,
    options?: ActivityLogsListOptionalParams
  ): PagedAsyncIterableIterator<EventData> {
    const iter = this.listPagingAll(filter, options);
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
        return this.listPagingPage(filter, options, settings);
      }
    };
  }

  private async *listPagingPage(
    filter: string,
    options?: ActivityLogsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EventData[]> {
    let result: ActivityLogsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(filter, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    filter: string,
    options?: ActivityLogsListOptionalParams
  ): AsyncIterableIterator<EventData> {
    for await (const page of this.listPagingPage(filter, options)) {
      yield* page;
    }
  }

  /**
   * Provides the list of records from the activity logs.
   * @param filter Reduces the set of data collected.<br>This argument is required and it also requires
   *               at least the start date/time.<br>The **$filter** argument is very restricted and allows only the
   *               following patterns.<br>- *List events for a resource group*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and
   *               resourceGroupName eq 'resourceGroupName'.<br>- *List events for resource*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceUri
   *               eq 'resourceURI'.<br>- *List events for a subscription in a time range*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z'.<br>- *List
   *               events for a resource provider*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and
   *               eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceProvider eq
   *               'resourceProviderName'.<br>- *List events for a correlation Id*: $filter=eventTimestamp ge
   *               '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and
   *               correlationId eq 'correlationID'.<br><br>**NOTE**: No other syntax is allowed.
   * @param options The options parameters.
   */
  private _list(
    filter: string,
    options?: ActivityLogsListOptionalParams
  ): Promise<ActivityLogsListResponse> {
    return this.client.sendOperationRequest(
      { filter, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ActivityLogsListNextOptionalParams
  ): Promise<ActivityLogsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/eventtypes/management/values",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventDataCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.filter,
    Parameters.select
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventDataCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
