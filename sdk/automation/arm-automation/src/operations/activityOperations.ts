/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ActivityOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  Activity,
  ActivityListByModuleNextOptionalParams,
  ActivityListByModuleOptionalParams,
  ActivityListByModuleResponse,
  ActivityGetOptionalParams,
  ActivityGetResponse,
  ActivityListByModuleNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ActivityOperations operations. */
export class ActivityOperationsImpl implements ActivityOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class ActivityOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of activities in the module identified by module name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param options The options parameters.
   */
  public listByModule(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    options?: ActivityListByModuleOptionalParams
  ): PagedAsyncIterableIterator<Activity> {
    const iter = this.listByModulePagingAll(
      resourceGroupName,
      automationAccountName,
      moduleName,
      options
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
        return this.listByModulePagingPage(
          resourceGroupName,
          automationAccountName,
          moduleName,
          options,
          settings
        );
      }
    };
  }

  private async *listByModulePagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    options?: ActivityListByModuleOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Activity[]> {
    let result: ActivityListByModuleResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByModule(
        resourceGroupName,
        automationAccountName,
        moduleName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByModuleNext(
        resourceGroupName,
        automationAccountName,
        moduleName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByModulePagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    options?: ActivityListByModuleOptionalParams
  ): AsyncIterableIterator<Activity> {
    for await (const page of this.listByModulePagingPage(
      resourceGroupName,
      automationAccountName,
      moduleName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Retrieve the activity in the module identified by module name and activity name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param activityName The name of activity.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    activityName: string,
    options?: ActivityGetOptionalParams
  ): Promise<ActivityGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        moduleName,
        activityName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Retrieve a list of activities in the module identified by module name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param options The options parameters.
   */
  private _listByModule(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    options?: ActivityListByModuleOptionalParams
  ): Promise<ActivityListByModuleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, moduleName, options },
      listByModuleOperationSpec
    );
  }

  /**
   * ListByModuleNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param moduleName The name of module.
   * @param nextLink The nextLink from the previous successful call to the ListByModule method.
   * @param options The options parameters.
   */
  private _listByModuleNext(
    resourceGroupName: string,
    automationAccountName: string,
    moduleName: string,
    nextLink: string,
    options?: ActivityListByModuleNextOptionalParams
  ): Promise<ActivityListByModuleNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        moduleName,
        nextLink,
        options
      },
      listByModuleNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities/{activityName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Activity
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.moduleName,
    Parameters.activityName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByModuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/modules/{moduleName}/activities",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.moduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByModuleNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActivityListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.moduleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
