/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { MetricDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  MetricDefinition,
  MetricDefinitionsListOptionalParams,
  MetricDefinitionsListResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MetricDefinitions operations. */
export class MetricDefinitionsImpl implements MetricDefinitions {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class MetricDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Lists the metric definitions for the resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: MetricDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listPagingAll(resourceUri, options);
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
        return this.listPagingPage(resourceUri, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: MetricDefinitionsListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result: MetricDefinitionsListResponse;
    result = await this._list(resourceUri, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: MetricDefinitionsListOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * Lists the metric definitions for the resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: MetricDefinitionsListOptionalParams
  ): Promise<MetricDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.Insights/metricDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion6, Parameters.metricnamespace],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
