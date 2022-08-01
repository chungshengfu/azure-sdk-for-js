/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ImpactedResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealth } from "../microsoftResourceHealth";
import {
  ImpactedResourceStatus,
  ImpactedResourcesListBySubscriptionIdNextOptionalParams,
  ImpactedResourcesListBySubscriptionIdOptionalParams,
  ImpactedResourcesListBySubscriptionIdResponse,
  ImpactedResourcesListBySubscriptionIdNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ImpactedResources operations. */
export class ImpactedResourcesImpl implements ImpactedResources {
  private readonly client: MicrosoftResourceHealth;

  /**
   * Initialize a new instance of the class ImpactedResources class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftResourceHealth) {
    this.client = client;
  }

  /**
   * Lists the current availability status for impacted resources in the subscription.
   * @param options The options parameters.
   */
  public listBySubscriptionId(
    options?: ImpactedResourcesListBySubscriptionIdOptionalParams
  ): PagedAsyncIterableIterator<ImpactedResourceStatus> {
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
    options?: ImpactedResourcesListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<ImpactedResourceStatus[]> {
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
    options?: ImpactedResourcesListBySubscriptionIdOptionalParams
  ): AsyncIterableIterator<ImpactedResourceStatus> {
    for await (const page of this.listBySubscriptionIdPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the current availability status for impacted resources in the subscription.
   * @param options The options parameters.
   */
  private _listBySubscriptionId(
    options?: ImpactedResourcesListBySubscriptionIdOptionalParams
  ): Promise<ImpactedResourcesListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionIdOperationSpec
    );
  }

  /**
   * ListBySubscriptionIdNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionId method.
   * @param options The options parameters.
   */
  private _listBySubscriptionIdNext(
    nextLink: string,
    options?: ImpactedResourcesListBySubscriptionIdNextOptionalParams
  ): Promise<ImpactedResourcesListBySubscriptionIdNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionIdNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/impactedResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImpactedResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionIdNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ImpactedResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
