/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WatchlistItems } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  WatchlistItem,
  WatchlistItemsListNextOptionalParams,
  WatchlistItemsListOptionalParams,
  WatchlistItemsListResponse,
  WatchlistItemsGetOptionalParams,
  WatchlistItemsGetResponse,
  WatchlistItemsDeleteOptionalParams,
  WatchlistItemsCreateOrUpdateOptionalParams,
  WatchlistItemsCreateOrUpdateResponse,
  WatchlistItemsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WatchlistItems operations. */
export class WatchlistItemsImpl implements WatchlistItems {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class WatchlistItems class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all watchlist Items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistItemsListOptionalParams,
  ): PagedAsyncIterableIterator<WatchlistItem> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      watchlistAlias,
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
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          watchlistAlias,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistItemsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<WatchlistItem[]> {
    let result: WatchlistItemsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        watchlistAlias,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        watchlistAlias,
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
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistItemsListOptionalParams,
  ): AsyncIterableIterator<WatchlistItem> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      watchlistAlias,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all watchlist Items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    options?: WatchlistItemsListOptionalParams,
  ): Promise<WatchlistItemsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, watchlistAlias, options },
      listOperationSpec,
    );
  }

  /**
   * Gets a watchlist, without its watchlist items.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    watchlistItemId: string,
    options?: WatchlistItemsGetOptionalParams,
  ): Promise<WatchlistItemsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        watchlistAlias,
        watchlistItemId,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Delete a watchlist item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    watchlistItemId: string,
    options?: WatchlistItemsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        watchlistAlias,
        watchlistItemId,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Creates or updates a watchlist item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param watchlistItemId Watchlist Item Id (GUID)
   * @param watchlistItem The watchlist item
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    watchlistItemId: string,
    watchlistItem: WatchlistItem,
    options?: WatchlistItemsCreateOrUpdateOptionalParams,
  ): Promise<WatchlistItemsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        watchlistAlias,
        watchlistItemId,
        watchlistItem,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param watchlistAlias Watchlist Alias
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    watchlistAlias: string,
    nextLink: string,
    options?: WatchlistItemsListNextOptionalParams,
  ): Promise<WatchlistItemsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, watchlistAlias, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WatchlistItemList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.watchlistAlias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WatchlistItem,
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
    Parameters.workspaceName,
    Parameters.watchlistAlias,
    Parameters.watchlistItemId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.watchlistAlias,
    Parameters.watchlistItemId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/watchlists/{watchlistAlias}/watchlistItems/{watchlistItemId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.WatchlistItem,
    },
    201: {
      bodyMapper: Mappers.WatchlistItem,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.watchlistItem,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.watchlistAlias,
    Parameters.watchlistItemId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WatchlistItemList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.watchlistAlias,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
