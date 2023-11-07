/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SourceControlOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  SourceControl,
  SourceControlListByAutomationAccountNextOptionalParams,
  SourceControlListByAutomationAccountOptionalParams,
  SourceControlListByAutomationAccountResponse,
  SourceControlCreateOrUpdateParameters,
  SourceControlCreateOrUpdateOptionalParams,
  SourceControlCreateOrUpdateResponse,
  SourceControlUpdateParameters,
  SourceControlUpdateOptionalParams,
  SourceControlUpdateResponse,
  SourceControlDeleteOptionalParams,
  SourceControlGetOptionalParams,
  SourceControlGetResponse,
  SourceControlListByAutomationAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SourceControlOperations operations. */
export class SourceControlOperationsImpl implements SourceControlOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class SourceControlOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of source controls.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: SourceControlListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<SourceControl> {
    const iter = this.listByAutomationAccountPagingAll(
      resourceGroupName,
      automationAccountName,
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
        return this.listByAutomationAccountPagingPage(
          resourceGroupName,
          automationAccountName,
          options,
          settings
        );
      }
    };
  }

  private async *listByAutomationAccountPagingPage(
    resourceGroupName: string,
    automationAccountName: string,
    options?: SourceControlListByAutomationAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SourceControl[]> {
    let result: SourceControlListByAutomationAccountResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAutomationAccount(
        resourceGroupName,
        automationAccountName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAutomationAccountNext(
        resourceGroupName,
        automationAccountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAutomationAccountPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    options?: SourceControlListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<SourceControl> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a source control.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the create or update source control operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    parameters: SourceControlCreateOrUpdateParameters,
    options?: SourceControlCreateOrUpdateOptionalParams
  ): Promise<SourceControlCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a source control.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param parameters The parameters supplied to the update source control operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    parameters: SourceControlUpdateParameters,
    options?: SourceControlUpdateOptionalParams
  ): Promise<SourceControlUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        sourceControlName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Delete the source control.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    options?: SourceControlDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, sourceControlName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve the source control identified by source control name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The name of source control.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    options?: SourceControlGetOptionalParams
  ): Promise<SourceControlGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, sourceControlName, options },
      getOperationSpec
    );
  }

  /**
   * Retrieve a list of source controls.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: SourceControlListByAutomationAccountOptionalParams
  ): Promise<SourceControlListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      listByAutomationAccountOperationSpec
    );
  }

  /**
   * ListByAutomationAccountNext
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param nextLink The nextLink from the previous successful call to the ListByAutomationAccount
   *                 method.
   * @param options The options parameters.
   */
  private _listByAutomationAccountNext(
    resourceGroupName: string,
    automationAccountName: string,
    nextLink: string,
    options?: SourceControlListByAutomationAccountNextOptionalParams
  ): Promise<SourceControlListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nextLink, options },
      listByAutomationAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    201: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters34,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.sourceControlName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters35,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.sourceControlName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.sourceControlName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls/{sourceControlName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.sourceControlName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/sourceControls",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByAutomationAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlListResult
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
