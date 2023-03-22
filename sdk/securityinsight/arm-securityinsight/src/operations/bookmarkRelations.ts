/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BookmarkRelations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  Relation,
  BookmarkRelationsListNextOptionalParams,
  BookmarkRelationsListOptionalParams,
  BookmarkRelationsListResponse,
  BookmarkRelationsGetOptionalParams,
  BookmarkRelationsGetResponse,
  BookmarkRelationsCreateOrUpdateOptionalParams,
  BookmarkRelationsCreateOrUpdateResponse,
  BookmarkRelationsDeleteOptionalParams,
  BookmarkRelationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BookmarkRelations operations. */
export class BookmarkRelationsImpl implements BookmarkRelations {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class BookmarkRelations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all bookmark relations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    options?: BookmarkRelationsListOptionalParams
  ): PagedAsyncIterableIterator<Relation> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      bookmarkId,
      options
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
          bookmarkId,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    options?: BookmarkRelationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Relation[]> {
    let result: BookmarkRelationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        bookmarkId,
        options
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
        bookmarkId,
        continuationToken,
        options
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
    bookmarkId: string,
    options?: BookmarkRelationsListOptionalParams
  ): AsyncIterableIterator<Relation> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      bookmarkId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all bookmark relations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    options?: BookmarkRelationsListOptionalParams
  ): Promise<BookmarkRelationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, bookmarkId, options },
      listOperationSpec
    );
  }

  /**
   * Gets a bookmark relation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param relationName Relation Name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    relationName: string,
    options?: BookmarkRelationsGetOptionalParams
  ): Promise<BookmarkRelationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, bookmarkId, relationName, options },
      getOperationSpec
    );
  }

  /**
   * Creates the bookmark relation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param relationName Relation Name
   * @param relation The relation model
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    relationName: string,
    relation: Relation,
    options?: BookmarkRelationsCreateOrUpdateOptionalParams
  ): Promise<BookmarkRelationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        bookmarkId,
        relationName,
        relation,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete the bookmark relation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param relationName Relation Name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    relationName: string,
    options?: BookmarkRelationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, bookmarkId, relationName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    nextLink: string,
    options?: BookmarkRelationsListNextOptionalParams
  ): Promise<BookmarkRelationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, bookmarkId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}/relations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RelationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderby,
    Parameters.skipToken,
    Parameters.top1
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bookmarkId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}/relations/{relationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Relation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bookmarkId,
    Parameters.relationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}/relations/{relationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Relation
    },
    201: {
      bodyMapper: Mappers.Relation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.relation,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bookmarkId,
    Parameters.relationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}/relations/{relationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bookmarkId,
    Parameters.relationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RelationList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.bookmarkId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
