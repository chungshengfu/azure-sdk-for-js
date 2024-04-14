/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PrivateLinks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MongoClusterManagementClient } from "../mongoClusterManagementClient";
import {
  PrivateLinkResource,
  PrivateLinksListByMongoClusterNextOptionalParams,
  PrivateLinksListByMongoClusterOptionalParams,
  PrivateLinksListByMongoClusterResponse,
  PrivateLinksListByMongoClusterNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateLinks operations. */
export class PrivateLinksImpl implements PrivateLinks {
  private readonly client: MongoClusterManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinks class.
   * @param client Reference to the service client
   */
  constructor(client: MongoClusterManagementClient) {
    this.client = client;
  }

  /**
   * list private links on the given resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  public listByMongoCluster(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateLinksListByMongoClusterOptionalParams,
  ): PagedAsyncIterableIterator<PrivateLinkResource> {
    const iter = this.listByMongoClusterPagingAll(
      resourceGroupName,
      mongoClusterName,
      options,
    );
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
        return this.listByMongoClusterPagingPage(
          resourceGroupName,
          mongoClusterName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByMongoClusterPagingPage(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateLinksListByMongoClusterOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PrivateLinkResource[]> {
    let result: PrivateLinksListByMongoClusterResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByMongoCluster(
        resourceGroupName,
        mongoClusterName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByMongoClusterNext(
        resourceGroupName,
        mongoClusterName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByMongoClusterPagingAll(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateLinksListByMongoClusterOptionalParams,
  ): AsyncIterableIterator<PrivateLinkResource> {
    for await (const page of this.listByMongoClusterPagingPage(
      resourceGroupName,
      mongoClusterName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * list private links on the given resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param options The options parameters.
   */
  private _listByMongoCluster(
    resourceGroupName: string,
    mongoClusterName: string,
    options?: PrivateLinksListByMongoClusterOptionalParams,
  ): Promise<PrivateLinksListByMongoClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mongoClusterName, options },
      listByMongoClusterOperationSpec,
    );
  }

  /**
   * ListByMongoClusterNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mongoClusterName The name of the mongo cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByMongoCluster method.
   * @param options The options parameters.
   */
  private _listByMongoClusterNext(
    resourceGroupName: string,
    mongoClusterName: string,
    nextLink: string,
    options?: PrivateLinksListByMongoClusterNextOptionalParams,
  ): Promise<PrivateLinksListByMongoClusterNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mongoClusterName, nextLink, options },
      listByMongoClusterNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByMongoClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByMongoClusterNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mongoClusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
