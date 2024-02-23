/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AvailableWorkloadProfiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  AvailableWorkloadProfile,
  AvailableWorkloadProfilesGetNextOptionalParams,
  AvailableWorkloadProfilesGetOptionalParams,
  AvailableWorkloadProfilesGetResponse,
  AvailableWorkloadProfilesGetNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AvailableWorkloadProfiles operations. */
export class AvailableWorkloadProfilesImpl
  implements AvailableWorkloadProfiles
{
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class AvailableWorkloadProfiles class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get all available workload profiles for a location.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: AvailableWorkloadProfilesGetOptionalParams,
  ): PagedAsyncIterableIterator<AvailableWorkloadProfile> {
    const iter = this.getPagingAll(location, options);
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
        return this.getPagingPage(location, options, settings);
      },
    };
  }

  private async *getPagingPage(
    location: string,
    options?: AvailableWorkloadProfilesGetOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AvailableWorkloadProfile[]> {
    let result: AvailableWorkloadProfilesGetResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._get(location, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getPagingAll(
    location: string,
    options?: AvailableWorkloadProfilesGetOptionalParams,
  ): AsyncIterableIterator<AvailableWorkloadProfile> {
    for await (const page of this.getPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Get all available workload profiles for a location.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  private _get(
    location: string,
    options?: AvailableWorkloadProfilesGetOptionalParams,
  ): Promise<AvailableWorkloadProfilesGetResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      getOperationSpec,
    );
  }

  /**
   * GetNext
   * @param location The name of Azure region.
   * @param nextLink The nextLink from the previous successful call to the Get method.
   * @param options The options parameters.
   */
  private _getNext(
    location: string,
    nextLink: string,
    options?: AvailableWorkloadProfilesGetNextOptionalParams,
  ): Promise<AvailableWorkloadProfilesGetNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      getNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.App/locations/{location}/availableManagedEnvironmentsWorkloadProfileTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableWorkloadProfilesCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableWorkloadProfilesCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
