/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { EligibleChildResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  EligibleChildResource,
  EligibleChildResourcesGetNextOptionalParams,
  EligibleChildResourcesGetOptionalParams,
  EligibleChildResourcesGetResponse,
  EligibleChildResourcesGetNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EligibleChildResources operations. */
export class EligibleChildResourcesImpl implements EligibleChildResources {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class EligibleChildResources class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get the child resources of a resource on which user has eligible access
   * @param scope The scope of the role management policy.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: EligibleChildResourcesGetOptionalParams,
  ): PagedAsyncIterableIterator<EligibleChildResource> {
    const iter = this.getPagingAll(scope, options);
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
        return this.getPagingPage(scope, options, settings);
      },
    };
  }

  private async *getPagingPage(
    scope: string,
    options?: EligibleChildResourcesGetOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<EligibleChildResource[]> {
    let result: EligibleChildResourcesGetResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._get(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getPagingAll(
    scope: string,
    options?: EligibleChildResourcesGetOptionalParams,
  ): AsyncIterableIterator<EligibleChildResource> {
    for await (const page of this.getPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get the child resources of a resource on which user has eligible access
   * @param scope The scope of the role management policy.
   * @param options The options parameters.
   */
  private _get(
    scope: string,
    options?: EligibleChildResourcesGetOptionalParams,
  ): Promise<EligibleChildResourcesGetResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      getOperationSpec,
    );
  }

  /**
   * GetNext
   * @param scope The scope of the role management policy.
   * @param nextLink The nextLink from the previous successful call to the Get method.
   * @param options The options parameters.
   */
  private _getNext(
    scope: string,
    nextLink: string,
    options?: EligibleChildResourcesGetNextOptionalParams,
  ): Promise<EligibleChildResourcesGetNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      getNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/eligibleChildResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EligibleChildResourcesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion4],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
const getNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EligibleChildResourcesListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
