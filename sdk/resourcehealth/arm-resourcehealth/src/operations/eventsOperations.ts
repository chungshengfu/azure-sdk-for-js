/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { EventsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealth } from "../microsoftResourceHealth";
import {
  Event,
  EventsListBySubscriptionIdNextOptionalParams,
  EventsListBySubscriptionIdOptionalParams,
  EventsListBySingleResourceNextOptionalParams,
  EventsListBySingleResourceOptionalParams,
  EventsListBySubscriptionIdResponse,
  EventsListBySingleResourceResponse,
  EventsListBySubscriptionIdNextResponse,
  EventsListBySingleResourceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EventsOperations operations. */
export class EventsOperationsImpl implements EventsOperations {
  private readonly client: MicrosoftResourceHealth;

  /**
   * Initialize a new instance of the class EventsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftResourceHealth) {
    this.client = client;
  }

  /**
   * Lists current service health events in the subscription.
   * @param options The options parameters.
   */
  public listBySubscriptionId(
    options?: EventsListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<Event> {
    const iter = this.listBySubscriptionIdPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionIdPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionIdPagingPage(
    options?: EventsListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<Event[]> {
    let result = await this._listBySubscriptionId(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionIdNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionIdPagingAll(
    options?: EventsListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<Event> {
    for await (const page of this.listBySubscriptionIdPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists current service health events for given resource.
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  public listBySingleResource(
    resourceUri: string,
    options?: EventsListBySingleResourceOptionalParams
  ): PagedAsyncIterableIterator<Event> {
    const iter = this.listBySingleResourcePagingAll(resourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySingleResourcePagingPage(resourceUri, options);
      }
    };
  }

  private async *listBySingleResourcePagingPage(
    resourceUri: string,
    options?: EventsListBySingleResourceOptionalParams
  ): AsyncIterableIterator<Event[]> {
    let result = await this._listBySingleResource(resourceUri, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySingleResourceNext(
        resourceUri,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySingleResourcePagingAll(
    resourceUri: string,
    options?: EventsListBySingleResourceOptionalParams
  ): AsyncIterableIterator<Event> {
    for await (const page of this.listBySingleResourcePagingPage(
      resourceUri,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists current service health events in the subscription.
   * @param options The options parameters.
   */
  private _listBySubscriptionId(
    options?: EventsListBySubscriptionIdOptionalParams
  ): Promise<EventsListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionIdOperationSpec
    );
  }

  /**
   * Lists current service health events for given resource.
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param options The options parameters.
   */
  private _listBySingleResource(
    resourceUri: string,
    options?: EventsListBySingleResourceOptionalParams
  ): Promise<EventsListBySingleResourceResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listBySingleResourceOperationSpec
    );
  }

  /**
   * ListBySubscriptionIdNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionId method.
   * @param options The options parameters.
   */
  private _listBySubscriptionIdNext(
    nextLink: string,
    options?: EventsListBySubscriptionIdNextOptionalParams
  ): Promise<EventsListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionIdNextOperationSpec
    );
  }

  /**
   * ListBySingleResourceNext
   * @param resourceUri The fully qualified ID of the resource, including the resource name and resource
   *                    type. Currently the API support not nested and one nesting level resource types :
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resource-group-name}/providers/{resource-provider-name}/{resource-type}/{resource-name}
   *                    and
   *                    /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resource-provider-name}/{parentResourceType}/{parentResourceName}/{resourceType}/{resourceName}
   * @param nextLink The nextLink from the previous successful call to the ListBySingleResource method.
   * @param options The options parameters.
   */
  private _listBySingleResourceNext(
    resourceUri: string,
    nextLink: string,
    options?: EventsListBySingleResourceNextOptionalParams
  ): Promise<EventsListBySingleResourceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listBySingleResourceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.queryStartTime,
    Parameters.view
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySingleResourceOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.ResourceHealth/events",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.view],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionIdNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.queryStartTime,
    Parameters.view
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySingleResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Events
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.view],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
