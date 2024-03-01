/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BusinessApplicationAgents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityInsights } from "../securityInsights";
import {
  Agent,
  BusinessApplicationAgentsListNextOptionalParams,
  BusinessApplicationAgentsListOptionalParams,
  BusinessApplicationAgentsListResponse,
  BusinessApplicationAgentsCreateOrUpdateOptionalParams,
  BusinessApplicationAgentsCreateOrUpdateResponse,
  BusinessApplicationAgentsDeleteOptionalParams,
  BusinessApplicationAgentsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BusinessApplicationAgents operations. */
export class BusinessApplicationAgentsImpl
  implements BusinessApplicationAgents
{
  private readonly client: SecurityInsights;

  /**
   * Initialize a new instance of the class BusinessApplicationAgents class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityInsights) {
    this.client = client;
  }

  /**
   * Gets all Business Application Agents under the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: BusinessApplicationAgentsListOptionalParams,
  ): PagedAsyncIterableIterator<Agent> {
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
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: BusinessApplicationAgentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Agent[]> {
    let result: BusinessApplicationAgentsListResponse;
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
    options?: BusinessApplicationAgentsListOptionalParams,
  ): AsyncIterableIterator<Agent> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates the Business Application Agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    options?: BusinessApplicationAgentsCreateOrUpdateOptionalParams,
  ): Promise<BusinessApplicationAgentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, agentResourceName, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Delete the Business Application Agent.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param agentResourceName Business Application Agent Name
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    agentResourceName: string,
    options?: BusinessApplicationAgentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, agentResourceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets all Business Application Agents under the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: BusinessApplicationAgentsListOptionalParams,
  ): Promise<BusinessApplicationAgentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec,
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
    options?: BusinessApplicationAgentsListNextOptionalParams,
  ): Promise<BusinessApplicationAgentsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/businessApplicationAgents/{agentResourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Agent,
    },
    201: {
      bodyMapper: Mappers.Agent,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.agentToUpsert,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.agentResourceName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.xMsClientWorkspaceId,
    Parameters.xMsClientObjectId,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/businessApplicationAgents/{agentResourceName}",
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
    Parameters.agentResourceName,
  ],
  headerParameters: [Parameters.accept, Parameters.xMsClientWorkspaceId],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/providers/Microsoft.SecurityInsights/businessApplicationAgents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentsList,
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
  ],
  headerParameters: [Parameters.accept, Parameters.xMsClientWorkspaceId],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AgentsList,
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
  ],
  headerParameters: [Parameters.accept, Parameters.xMsClientWorkspaceId],
  serializer,
};
