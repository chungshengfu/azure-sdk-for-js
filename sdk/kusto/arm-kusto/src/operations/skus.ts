/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Skus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KustoManagementClient } from "../kustoManagementClient";
import {
  SkuDescription,
  SkusListOptionalParams,
  SkusListResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Skus operations. */
export class SkusImpl implements Skus {
  private readonly client: KustoManagementClient;

  /**
   * Initialize a new instance of the class Skus class.
   * @param client Reference to the service client
   */
  constructor(client: KustoManagementClient) {
    this.client = client;
  }

  /**
   * Lists eligible region SKUs for Kusto resource provider by Azure region.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: SkusListOptionalParams,
  ): PagedAsyncIterableIterator<SkuDescription> {
    const iter = this.listPagingAll(location, options);
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
        return this.listPagingPage(location, options, settings);
      },
    };
  }

  private async *listPagingPage(
    location: string,
    options?: SkusListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<SkuDescription[]> {
    let result: SkusListResponse;
    result = await this._list(location, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    location: string,
    options?: SkusListOptionalParams,
  ): AsyncIterableIterator<SkuDescription> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Lists eligible region SKUs for Kusto resource provider by Azure region.
   * @param location The name of Azure region.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: SkusListOptionalParams,
  ): Promise<SkusListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Kusto/locations/{location}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuDescriptionList,
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
