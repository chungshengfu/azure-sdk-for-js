/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AlertIncidents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AlertIncident,
  AlertIncidentsListForScopeNextOptionalParams,
  AlertIncidentsListForScopeOptionalParams,
  AlertIncidentsListForScopeResponse,
  AlertIncidentsGetOptionalParams,
  AlertIncidentsGetResponse,
  AlertIncidentsRemediateOptionalParams,
  AlertIncidentsListForScopeNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AlertIncidents operations. */
export class AlertIncidentsImpl implements AlertIncidents {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AlertIncidents class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets alert incidents for a resource scope.
   * @param scope The scope of the alert incident.
   * @param alertId The name of the alert.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    alertId: string,
    options?: AlertIncidentsListForScopeOptionalParams
  ): PagedAsyncIterableIterator<AlertIncident> {
    const iter = this.listForScopePagingAll(scope, alertId, options);
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
        return this.listForScopePagingPage(scope, alertId, options, settings);
      }
    };
  }

  private async *listForScopePagingPage(
    scope: string,
    alertId: string,
    options?: AlertIncidentsListForScopeOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AlertIncident[]> {
    let result: AlertIncidentsListForScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForScope(scope, alertId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForScopeNext(
        scope,
        alertId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForScopePagingAll(
    scope: string,
    alertId: string,
    options?: AlertIncidentsListForScopeOptionalParams
  ): AsyncIterableIterator<AlertIncident> {
    for await (const page of this.listForScopePagingPage(
      scope,
      alertId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the specified alert incident.
   * @param scope The scope of the alert incident. The scope can be any REST resource instance. For
   *              example, use '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/' for a
   *              subscription,
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}'
   *              for a resource group, and
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   *              for a resource.
   * @param alertId The name of the alert.
   * @param alertIncidentId The name of the alert incident to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    alertId: string,
    alertIncidentId: string,
    options?: AlertIncidentsGetOptionalParams
  ): Promise<AlertIncidentsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, alertId, alertIncidentId, options },
      getOperationSpec
    );
  }

  /**
   * Gets alert incidents for a resource scope.
   * @param scope The scope of the alert incident.
   * @param alertId The name of the alert.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    alertId: string,
    options?: AlertIncidentsListForScopeOptionalParams
  ): Promise<AlertIncidentsListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, alertId, options },
      listForScopeOperationSpec
    );
  }

  /**
   * Remediate an alert incident.
   * @param scope The scope of the alert incident.
   * @param alertId The name of the alert.
   * @param alertIncidentId The name of the alert incident to remediate.
   * @param options The options parameters.
   */
  remediate(
    scope: string,
    alertId: string,
    alertIncidentId: string,
    options?: AlertIncidentsRemediateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, alertId, alertIncidentId, options },
      remediateOperationSpec
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the alert incident.
   * @param alertId The name of the alert.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    alertId: string,
    nextLink: string,
    options?: AlertIncidentsListForScopeNextOptionalParams
  ): Promise<AlertIncidentsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, alertId, nextLink, options },
      listForScopeNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleManagementAlerts/{alertId}/alertIncidents/{alertIncidentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertIncident
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.scope1,
    Parameters.alertId,
    Parameters.alertIncidentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleManagementAlerts/{alertId}/alertIncidents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertIncidentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.scope1, Parameters.alertId],
  headerParameters: [Parameters.accept],
  serializer
};
const remediateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/roleManagementAlerts/{alertId}/alertIncidents/{alertIncidentId}/remediate",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.scope1,
    Parameters.alertId,
    Parameters.alertIncidentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertIncidentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scope1,
    Parameters.alertId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
