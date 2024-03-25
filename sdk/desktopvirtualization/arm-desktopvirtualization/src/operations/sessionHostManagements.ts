/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SessionHostManagements } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClient } from "../desktopVirtualizationAPIClient";
import {
  SessionHostManagement,
  SessionHostManagementsListByHostPoolNextOptionalParams,
  SessionHostManagementsListByHostPoolOptionalParams,
  SessionHostManagementsListByHostPoolResponse,
  SessionHostManagementsGetOptionalParams,
  SessionHostManagementsGetResponse,
  SessionHostManagementsCreateOrUpdateOptionalParams,
  SessionHostManagementsCreateOrUpdateResponse,
  SessionHostManagementsUpdateOptionalParams,
  SessionHostManagementsUpdateResponse,
  SessionHostManagementsListByHostPoolNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SessionHostManagements operations. */
export class SessionHostManagementsImpl implements SessionHostManagements {
  private readonly client: DesktopVirtualizationAPIClient;

  /**
   * Initialize a new instance of the class SessionHostManagements class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClient) {
    this.client = client;
  }

  /**
   * List SessionHostManagements by hostPool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  public listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsListByHostPoolOptionalParams,
  ): PagedAsyncIterableIterator<SessionHostManagement> {
    const iter = this.listByHostPoolPagingAll(
      resourceGroupName,
      hostPoolName,
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
        return this.listByHostPoolPagingPage(
          resourceGroupName,
          hostPoolName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByHostPoolPagingPage(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsListByHostPoolOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SessionHostManagement[]> {
    let result: SessionHostManagementsListByHostPoolResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHostPool(
        resourceGroupName,
        hostPoolName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHostPoolNext(
        resourceGroupName,
        hostPoolName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHostPoolPagingAll(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsListByHostPoolOptionalParams,
  ): AsyncIterableIterator<SessionHostManagement> {
    for await (const page of this.listByHostPoolPagingPage(
      resourceGroupName,
      hostPoolName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get a SessionHostManagement.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsGetOptionalParams,
  ): Promise<SessionHostManagementsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update a SessionHostManagement.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostManagement Object containing SessionHostManagement definitions.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostManagement: SessionHostManagement,
    options?: SessionHostManagementsCreateOrUpdateOptionalParams,
  ): Promise<SessionHostManagementsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, sessionHostManagement, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update a SessionHostManagement.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsUpdateOptionalParams,
  ): Promise<SessionHostManagementsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      updateOperationSpec,
    );
  }

  /**
   * List SessionHostManagements by hostPool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  private _listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostManagementsListByHostPoolOptionalParams,
  ): Promise<SessionHostManagementsListByHostPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      listByHostPoolOperationSpec,
    );
  }

  /**
   * ListByHostPoolNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param nextLink The nextLink from the previous successful call to the ListByHostPool method.
   * @param options The options parameters.
   */
  private _listByHostPoolNext(
    resourceGroupName: string,
    hostPoolName: string,
    nextLink: string,
    options?: SessionHostManagementsListByHostPoolNextOptionalParams,
  ): Promise<SessionHostManagementsListByHostPoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, nextLink, options },
      listByHostPoolNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostManagements/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostManagement,
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
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostManagements/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostManagement,
    },
    201: {
      bodyMapper: Mappers.SessionHostManagement,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.sessionHostManagement,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostManagements/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostManagement,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.sessionHostManagement1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByHostPoolOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostManagements",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostManagementList,
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
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHostPoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostManagementList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
