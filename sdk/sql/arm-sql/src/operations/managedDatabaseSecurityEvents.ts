/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedDatabaseSecurityEvents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SecurityEvent,
  ManagedDatabaseSecurityEventsListByDatabaseNextOptionalParams,
  ManagedDatabaseSecurityEventsListByDatabaseOptionalParams,
  ManagedDatabaseSecurityEventsListByDatabaseResponse,
  ManagedDatabaseSecurityEventsListByDatabaseNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedDatabaseSecurityEvents operations. */
export class ManagedDatabaseSecurityEventsImpl
  implements ManagedDatabaseSecurityEvents
{
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseSecurityEvents class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of security events.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security events are retrieved.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityEventsListByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<SecurityEvent> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityEventsListByDatabaseOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SecurityEvent[]> {
    let result: ManagedDatabaseSecurityEventsListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityEventsListByDatabaseOptionalParams,
  ): AsyncIterableIterator<SecurityEvent> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of security events.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security events are retrieved.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseSecurityEventsListByDatabaseOptionalParams,
  ): Promise<ManagedDatabaseSecurityEventsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, databaseName, options },
      listByDatabaseOperationSpec,
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the managed database for which the security events are retrieved.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: ManagedDatabaseSecurityEventsListByDatabaseNextOptionalParams,
  ): Promise<ManagedDatabaseSecurityEventsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        nextLink,
        options,
      },
      listByDatabaseNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityEvents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityEventCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skiptoken,
    Parameters.filter,
    Parameters.skip,
    Parameters.top,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.managedInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityEventCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.managedInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
