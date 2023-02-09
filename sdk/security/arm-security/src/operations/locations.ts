/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Locations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  AscLocation,
  LocationsListNextOptionalParams,
  LocationsListOptionalParams,
  LocationsListResponse,
  LocationsGetOptionalParams,
  LocationsGetResponse,
  LocationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Locations operations. */
export class LocationsImpl implements Locations {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class Locations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * The location of the responsible ASC of the specific subscription (home region). For each
   * subscription there is only one responsible location. The location in the response should be used to
   * read or write other resources in ASC according to their ID.
   * @param options The options parameters.
   */
  public list(
    options?: LocationsListOptionalParams
  ): PagedAsyncIterableIterator<AscLocation> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: LocationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AscLocation[]> {
    let result: LocationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
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
    options?: LocationsListOptionalParams
  ): AsyncIterableIterator<AscLocation> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The location of the responsible ASC of the specific subscription (home region). For each
   * subscription there is only one responsible location. The location in the response should be used to
   * read or write other resources in ASC according to their ID.
   * @param options The options parameters.
   */
  private _list(
    options?: LocationsListOptionalParams
  ): Promise<LocationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Details of a specific location
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  get(
    ascLocation: string,
    options?: LocationsGetOptionalParams
  ): Promise<LocationsGetResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: LocationsListNextOptionalParams
  ): Promise<LocationsListNextResponse> {
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
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AscLocationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AscLocation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AscLocationList
    },
    default: {
      bodyMapper: Mappers.CloudError
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
