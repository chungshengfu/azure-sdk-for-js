/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { AlertRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  AlertRuleResource,
  AlertRulesListByResourceGroupOptionalParams,
  AlertRulesListByResourceGroupResponse,
  AlertRulesListBySubscriptionOptionalParams,
  AlertRulesListBySubscriptionResponse,
  AlertRulesCreateOrUpdateOptionalParams,
  AlertRulesCreateOrUpdateResponse,
  AlertRulesDeleteOptionalParams,
  AlertRulesGetOptionalParams,
  AlertRulesGetResponse,
  AlertRuleResourcePatch,
  AlertRulesUpdateOptionalParams,
  AlertRulesUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AlertRules operations. */
export class AlertRulesImpl implements AlertRules {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class AlertRules class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * List the classic metric alert rules within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AlertRulesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AlertRuleResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AlertRulesListByResourceGroupOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<AlertRuleResource[]> {
    let result: AlertRulesListByResourceGroupResponse;
    result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AlertRulesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<AlertRuleResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List the classic metric alert rules within a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AlertRulesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AlertRuleResource> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AlertRulesListBySubscriptionOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<AlertRuleResource[]> {
    let result: AlertRulesListBySubscriptionResponse;
    result = await this._listBySubscription(options);
    yield result.value || [];
  }

  private async *listBySubscriptionPagingAll(
    options?: AlertRulesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<AlertRuleResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates or updates a classic metric alert rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ruleName: string,
    parameters: AlertRuleResource,
    options?: AlertRulesCreateOrUpdateOptionalParams,
  ): Promise<AlertRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a classic metric alert rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ruleName: string,
    options?: AlertRulesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets a classic metric alert rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ruleName: string,
    options?: AlertRulesGetOptionalParams,
  ): Promise<AlertRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates an existing classic metric AlertRuleResource. To update other fields use the CreateOrUpdate
   * method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param alertRulesResource Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    ruleName: string,
    alertRulesResource: AlertRuleResourcePatch,
    options?: AlertRulesUpdateOptionalParams,
  ): Promise<AlertRulesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, alertRulesResource, options },
      updateOperationSpec,
    );
  }

  /**
   * List the classic metric alert rules within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AlertRulesListByResourceGroupOptionalParams,
  ): Promise<AlertRulesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * List the classic metric alert rules within a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AlertRulesListBySubscriptionOptionalParams,
  ): Promise<AlertRulesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/alertrules/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResource,
    },
    201: {
      bodyMapper: Mappers.AlertRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/alertrules/{ruleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/alertrules/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/alertrules/{ruleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResource,
    },
    201: {
      bodyMapper: Mappers.AlertRuleResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  requestBody: Parameters.alertRulesResource,
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/alertrules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/alertrules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertRuleResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated,
    },
  },
  queryParameters: [Parameters.apiVersion7],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
