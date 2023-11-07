/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { EventCategories } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  LocalizableString,
  EventCategoriesListOptionalParams,
  EventCategoriesListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EventCategories operations. */
export class EventCategoriesImpl implements EventCategories {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class EventCategories class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Get the list of available event categories supported in the Activity Logs Service.<br>The current
   * list includes the following: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy.
   * @param options The options parameters.
   */
  public list(
    options?: EventCategoriesListOptionalParams
  ): PagedAsyncIterableIterator<LocalizableString> {
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
    options?: EventCategoriesListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<LocalizableString[]> {
    let result: EventCategoriesListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: EventCategoriesListOptionalParams
  ): AsyncIterableIterator<LocalizableString> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the list of available event categories supported in the Activity Logs Service.<br>The current
   * list includes the following: Administrative, Security, ServiceHealth, Alert, Recommendation, Policy.
   * @param options The options parameters.
   */
  private _list(
    options?: EventCategoriesListOptionalParams
  ): Promise<EventCategoriesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Insights/eventcategories",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventCategoryCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
