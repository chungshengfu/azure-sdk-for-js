/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BookmarkOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  BookmarkExpandParameters,
  BookmarkExpandOptionalParams,
  BookmarkExpandOperationResponse
} from "../models";

/** Class containing BookmarkOperations operations. */
export class BookmarkOperationsImpl implements BookmarkOperations {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class BookmarkOperations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Expand an bookmark
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param bookmarkId Bookmark ID
   * @param parameters The parameters required to execute an expand operation on the given bookmark.
   * @param options The options parameters.
   */
  expand(
    resourceGroupName: string,
    workspaceName: string,
    bookmarkId: string,
    parameters: BookmarkExpandParameters,
    options?: BookmarkExpandOptionalParams
  ): Promise<BookmarkExpandOperationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, bookmarkId, parameters, options },
      expandOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const expandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/bookmarks/{bookmarkId}/expand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BookmarkExpandResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.bookmarkId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
