/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { MetricAlerts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  MetricAlertResource,
  MetricAlertsListBySubscriptionOptionalParams,
  MetricAlertsListBySubscriptionResponse,
  MetricAlertsListByResourceGroupOptionalParams,
  MetricAlertsListByResourceGroupResponse,
  MetricAlertsGetOptionalParams,
  MetricAlertsGetResponse,
  MetricAlertsCreateOrUpdateOptionalParams,
  MetricAlertsCreateOrUpdateResponse,
  MetricAlertResourcePatch,
  MetricAlertsUpdateOptionalParams,
  MetricAlertsUpdateResponse,
  MetricAlertsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MetricAlerts operations. */
export class MetricAlertsImpl implements MetricAlerts {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class MetricAlerts class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Retrieve alert rule definitions in a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: MetricAlertsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<MetricAlertResource> {
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
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: MetricAlertsListBySubscriptionOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<MetricAlertResource[]> {
    let result: MetricAlertsListBySubscriptionResponse;
    result = await this._listBySubscription(options);
    yield result.value || [];
  }

  private async *listBySubscriptionPagingAll(
    options?: MetricAlertsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<MetricAlertResource> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Retrieve alert rule definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: MetricAlertsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<MetricAlertResource> {
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
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: MetricAlertsListByResourceGroupOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<MetricAlertResource[]> {
    let result: MetricAlertsListByResourceGroupResponse;
    result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: MetricAlertsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<MetricAlertResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve alert rule definitions in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: MetricAlertsListBySubscriptionOptionalParams
  ): Promise<MetricAlertsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Retrieve alert rule definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: MetricAlertsListByResourceGroupOptionalParams
  ): Promise<MetricAlertsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Retrieve an alert rule definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ruleName: string,
    options?: MetricAlertsGetOptionalParams
  ): Promise<MetricAlertsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update an metric alert definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ruleName: string,
    parameters: MetricAlertResource,
    options?: MetricAlertsCreateOrUpdateOptionalParams
  ): Promise<MetricAlertsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update an metric alert definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param parameters The parameters of the rule to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    ruleName: string,
    parameters: MetricAlertResourcePatch,
    options?: MetricAlertsUpdateOptionalParams
  ): Promise<MetricAlertsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Delete an alert rule definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ruleName: string,
    options?: MetricAlertsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      deleteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/metricAlerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.MetricAlertResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/metricAlerts/{ruleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion8],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
