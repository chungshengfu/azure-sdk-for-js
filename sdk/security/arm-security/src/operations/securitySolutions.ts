/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SecuritySolutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SecuritySolution,
  SecuritySolutionsListNextOptionalParams,
  SecuritySolutionsListOptionalParams,
  SecuritySolutionsListResponse,
  SecuritySolutionsGetOptionalParams,
  SecuritySolutionsGetResponse,
  SecuritySolutionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecuritySolutions operations. */
export class SecuritySolutionsImpl implements SecuritySolutions {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class SecuritySolutions class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of Security Solutions for the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: SecuritySolutionsListOptionalParams,
  ): PagedAsyncIterableIterator<SecuritySolution> {
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
    options?: SecuritySolutionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SecuritySolution[]> {
    let result: SecuritySolutionsListResponse;
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
    options?: SecuritySolutionsListOptionalParams,
  ): AsyncIterableIterator<SecuritySolution> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of Security Solutions for the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: SecuritySolutionsListOptionalParams,
  ): Promise<SecuritySolutionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a specific Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param securitySolutionName Name of security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ascLocation: string,
    securitySolutionName: string,
    options?: SecuritySolutionsGetOptionalParams,
  ): Promise<SecuritySolutionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, securitySolutionName, options },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SecuritySolutionsListNextOptionalParams,
  ): Promise<SecuritySolutionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/securitySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolutionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/securitySolutions/{securitySolutionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolution,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.securitySolutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecuritySolutionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
