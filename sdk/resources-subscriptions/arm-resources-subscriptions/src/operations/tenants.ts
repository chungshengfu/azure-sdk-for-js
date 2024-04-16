/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Tenants } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SubscriptionClient } from "../subscriptionClient";
import {
  TenantIdDescription,
  TenantsListNextOptionalParams,
  TenantsListOptionalParams,
  TenantsListResponse,
  TenantsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Tenants operations. */
export class TenantsImpl implements Tenants {
  private readonly client: SubscriptionClient;

  /**
   * Initialize a new instance of the class Tenants class.
   * @param client Reference to the service client
   */
  constructor(client: SubscriptionClient) {
    this.client = client;
  }

  /**
   * Gets the tenants for your account.
   * @param options The options parameters.
   */
  public list(
    options?: TenantsListOptionalParams,
  ): PagedAsyncIterableIterator<TenantIdDescription> {
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
      },
    };
  }

  private async *listPagingPage(
    options?: TenantsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<TenantIdDescription[]> {
    let result: TenantsListResponse;
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
    options?: TenantsListOptionalParams,
  ): AsyncIterableIterator<TenantIdDescription> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the tenants for your account.
   * @param options The options parameters.
   */
  private _list(
    options?: TenantsListOptionalParams,
  ): Promise<TenantsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TenantsListNextOptionalParams,
  ): Promise<TenantsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/tenants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TenantListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TenantListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
