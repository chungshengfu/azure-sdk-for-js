/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AlertsSuppressionRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  AlertsSuppressionRule,
  AlertsSuppressionRulesListNextOptionalParams,
  AlertsSuppressionRulesListOptionalParams,
  AlertsSuppressionRulesListResponse,
  AlertsSuppressionRulesGetOptionalParams,
  AlertsSuppressionRulesGetResponse,
  AlertsSuppressionRulesUpdateOptionalParams,
  AlertsSuppressionRulesUpdateResponse,
  AlertsSuppressionRulesDeleteOptionalParams,
  AlertsSuppressionRulesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AlertsSuppressionRules operations. */
export class AlertsSuppressionRulesImpl implements AlertsSuppressionRules {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class AlertsSuppressionRules class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * List of all the dismiss rules for the given subscription
   * @param options The options parameters.
   */
  public list(
    options?: AlertsSuppressionRulesListOptionalParams
  ): PagedAsyncIterableIterator<AlertsSuppressionRule> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: AlertsSuppressionRulesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AlertsSuppressionRule[]> {
    let result: AlertsSuppressionRulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: AlertsSuppressionRulesListOptionalParams
  ): AsyncIterableIterator<AlertsSuppressionRule> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List of all the dismiss rules for the given subscription
   * @param options The options parameters.
   */
  private _list(
    options?: AlertsSuppressionRulesListOptionalParams
  ): Promise<AlertsSuppressionRulesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get dismiss rule, with name: {alertsSuppressionRuleName}, for the given subscription
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param options The options parameters.
   */
  get(
    alertsSuppressionRuleName: string,
    options?: AlertsSuppressionRulesGetOptionalParams
  ): Promise<AlertsSuppressionRulesGetResponse> {
    return this.client.sendOperationRequest(
      { alertsSuppressionRuleName, options },
      getOperationSpec
    );
  }

  /**
   * Update existing rule or create new rule if it doesn't exist
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param alertsSuppressionRule Suppression rule object
   * @param options The options parameters.
   */
  update(
    alertsSuppressionRuleName: string,
    alertsSuppressionRule: AlertsSuppressionRule,
    options?: AlertsSuppressionRulesUpdateOptionalParams
  ): Promise<AlertsSuppressionRulesUpdateResponse> {
    return this.client.sendOperationRequest(
      { alertsSuppressionRuleName, alertsSuppressionRule, options },
      updateOperationSpec
    );
  }

  /**
   * Delete dismiss alert rule for this subscription.
   * @param alertsSuppressionRuleName The unique name of the suppression alert rule
   * @param options The options parameters.
   */
  delete(
    alertsSuppressionRuleName: string,
    options?: AlertsSuppressionRulesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertsSuppressionRuleName, options },
      deleteOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AlertsSuppressionRulesListNextOptionalParams
  ): Promise<AlertsSuppressionRulesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRulesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9, Parameters.alertType],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules/{alertsSuppressionRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.alertsSuppressionRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules/{alertsSuppressionRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.alertsSuppressionRule,
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.alertsSuppressionRuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/alertsSuppressionRules/{alertsSuppressionRuleName}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.alertsSuppressionRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertsSuppressionRulesList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
