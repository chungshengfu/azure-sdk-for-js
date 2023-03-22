/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Entities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  EntityUnion,
  EntitiesListNextOptionalParams,
  EntitiesListOptionalParams,
  EntitiesListResponse,
  EntitiesRunPlaybookOptionalParams,
  EntitiesGetOptionalParams,
  EntitiesGetResponse,
  EntityExpandParameters,
  EntitiesExpandOptionalParams,
  EntitiesExpandResponse,
  EntityItemQueryKind,
  EntitiesQueriesOptionalParams,
  EntitiesQueriesResponse,
  EntityGetInsightsParameters,
  EntitiesGetInsightsOptionalParams,
  EntitiesGetInsightsResponse,
  EntitiesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Entities operations. */
export class EntitiesImpl implements Entities {
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class Entities class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all entities.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: EntitiesListOptionalParams
  ): PagedAsyncIterableIterator<EntityUnion> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: EntitiesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EntityUnion[]> {
    let result: EntitiesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
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
    options?: EntitiesListOptionalParams
  ): AsyncIterableIterator<EntityUnion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Triggers playbook on a specific entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityIdentifier Entity identifier.
   * @param options The options parameters.
   */
  runPlaybook(
    resourceGroupName: string,
    workspaceName: string,
    entityIdentifier: string,
    options?: EntitiesRunPlaybookOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityIdentifier, options },
      runPlaybookOperationSpec
    );
  }

  /**
   * Gets all entities.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: EntitiesListOptionalParams
  ): Promise<EntitiesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec
    );
  }

  /**
   * Gets an entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    options?: EntitiesGetOptionalParams
  ): Promise<EntitiesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityId, options },
      getOperationSpec
    );
  }

  /**
   * Expands an entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute an expand operation on the given entity.
   * @param options The options parameters.
   */
  expand(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    parameters: EntityExpandParameters,
    options?: EntitiesExpandOptionalParams
  ): Promise<EntitiesExpandResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityId, parameters, options },
      expandOperationSpec
    );
  }

  /**
   * Get Insights and Activities for an entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param kind The Kind parameter for queries
   * @param options The options parameters.
   */
  queries(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    kind: EntityItemQueryKind,
    options?: EntitiesQueriesOptionalParams
  ): Promise<EntitiesQueriesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityId, kind, options },
      queriesOperationSpec
    );
  }

  /**
   * Execute Insights for an entity.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityId entity ID
   * @param parameters The parameters required to execute insights on the given entity.
   * @param options The options parameters.
   */
  getInsights(
    resourceGroupName: string,
    workspaceName: string,
    entityId: string,
    parameters: EntityGetInsightsParameters,
    options?: EntitiesGetInsightsOptionalParams
  ): Promise<EntitiesGetInsightsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, entityId, parameters, options },
      getInsightsOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: EntitiesListNextOptionalParams
  ): Promise<EntitiesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const runPlaybookOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityIdentifier}/runPlaybook",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.requestBody,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.entityIdentifier
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EntityList
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
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Entity
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
    Parameters.entityId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const expandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/expand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntityExpandResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.entityId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const queriesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/queries",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GetQueriesResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.kind],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.entityId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getInsightsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/entities/{entityId}/getInsights",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntityGetInsightsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.entityId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EntityList
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
