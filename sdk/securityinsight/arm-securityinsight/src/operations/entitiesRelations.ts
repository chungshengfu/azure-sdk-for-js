/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { EntitiesRelations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  Relation,
  EntitiesRelationsListNextOptionalParams,
  EntitiesRelationsListOptionalParams,
  EntitiesRelationsListResponse,
  EntitiesRelationsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing EntitiesRelations operations. */
export class EntitiesRelationsImpl implements EntitiesRelations {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class EntitiesRelations class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all relations of an entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    options?: EntitiesRelationsListOptionalParams,
  ): PagedAsyncIterableIterator<Relation> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      entityId,
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
          entityId,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    options?: EntitiesRelationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Relation[]> {
    let result: EntitiesRelationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        entityId,
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
        entityId,
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
    entityId: string,
    options?: EntitiesRelationsListOptionalParams,
  ): AsyncIterableIterator<Relation> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      entityId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all relations of an entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    options?: EntitiesRelationsListOptionalParams,
  ): Promise<EntitiesRelationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityId, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    nextLink: string,
    options?: EntitiesRelationsListNextOptionalParams,
  ): Promise<EntitiesRelationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityId, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/relations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RelationList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.orderby,
    Parameters.top,
    Parameters.skipToken,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.entityId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RelationList,
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
    Parameters.entityId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
