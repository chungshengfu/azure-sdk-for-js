/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ContainerAppsBuildsByContainerApp } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  ContainerAppsBuildResource,
  ContainerAppsBuildsByContainerAppListNextOptionalParams,
  ContainerAppsBuildsByContainerAppListOptionalParams,
  ContainerAppsBuildsByContainerAppListResponse,
  ContainerAppsBuildsByContainerAppListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContainerAppsBuildsByContainerApp operations. */
export class ContainerAppsBuildsByContainerAppImpl
  implements ContainerAppsBuildsByContainerApp
{
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class ContainerAppsBuildsByContainerApp class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * List Container Apps Build resources by Container App
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: ContainerAppsBuildsByContainerAppListOptionalParams,
  ): PagedAsyncIterableIterator<ContainerAppsBuildResource> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: ContainerAppsBuildsByContainerAppListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ContainerAppsBuildResource[]> {
    let result: ContainerAppsBuildsByContainerAppListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: ContainerAppsBuildsByContainerAppListOptionalParams,
  ): AsyncIterableIterator<ContainerAppsBuildResource> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * List Container Apps Build resources by Container App
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: ContainerAppsBuildsByContainerAppListOptionalParams,
  ): Promise<ContainerAppsBuildsByContainerAppListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ContainerAppsBuildsByContainerAppListNextOptionalParams,
  ): Promise<ContainerAppsBuildsByContainerAppListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/containerApps/{containerAppName}/builds",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppsBuildCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.containerAppName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContainerAppsBuildCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.containerAppName2,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
