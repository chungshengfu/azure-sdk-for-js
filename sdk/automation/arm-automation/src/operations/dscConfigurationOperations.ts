/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DscConfigurationOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import {
  DscConfiguration,
  DscConfigurationListByAutomationAccountNextOptionalParams,
  DscConfigurationListByAutomationAccountOptionalParams,
  DscConfigurationListByAutomationAccountResponse,
  DscConfigurationDeleteOptionalParams,
  DscConfigurationGetOptionalParams,
  DscConfigurationGetResponse,
  DscConfigurationCreateOrUpdate$textOptionalParams,
  DscConfigurationCreateOrUpdateParameters,
  DscConfigurationCreateOrUpdate$jsonOptionalParams,
  DscConfigurationCreateOrUpdateResponse,
  DscConfigurationUpdate$textOptionalParams,
  DscConfigurationUpdate$jsonOptionalParams,
  DscConfigurationUpdateResponse,
  DscConfigurationGetContentOptionalParams,
  DscConfigurationGetContentResponse,
  DscConfigurationListByAutomationAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DscConfigurationOperations operations. */
export class DscConfigurationOperationsImpl
  implements DscConfigurationOperations {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class DscConfigurationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * Retrieve a list of configurations.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscConfigurationListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<DscConfiguration> {
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
    options?: DscConfigurationListByAutomationAccountOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DscConfiguration[]> {
    let result: DscConfigurationListByAutomationAccountResponse;
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
    options?: DscConfigurationListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<DscConfiguration> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Delete the dsc configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    options?: DscConfigurationDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, configurationName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieve the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    options?: DscConfigurationGetOptionalParams
  ): Promise<DscConfigurationGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, configurationName, options },
      getOperationSpec
    );
  }

  /**
   * Create the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param contentType Upload file type
   * @param parameters The create or update parameters for configuration.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    contentType: "text/plain; charset=utf-8",
    parameters: string,
    options?: DscConfigurationCreateOrUpdate$textOptionalParams
  ): Promise<DscConfigurationCreateOrUpdateResponse>;
  /**
   * Create the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param contentType Body Parameter content-type
   * @param parameters The create or update parameters for configuration.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    contentType: "application/json",
    parameters: DscConfigurationCreateOrUpdateParameters,
    options?: DscConfigurationCreateOrUpdate$jsonOptionalParams
  ): Promise<DscConfigurationCreateOrUpdateResponse>;
  /**
   * Create the configuration identified by configuration name.
   * @param args Includes all the parameters for this operation.
   */
  createOrUpdate(
    ...args:
      | [
          string,
          string,
          string,
          "text/plain; charset=utf-8",
          string,
          DscConfigurationCreateOrUpdate$textOptionalParams?
        ]
      | [
          string,
          string,
          string,
          "application/json",
          DscConfigurationCreateOrUpdateParameters,
          DscConfigurationCreateOrUpdate$jsonOptionalParams?
        ]
  ): Promise<DscConfigurationCreateOrUpdateResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[3] === "text/plain; charset=utf-8") {
      operationSpec = createOrUpdate$textOperationSpec;
      operationArguments = {
        resourceGroupName: args[0],
        automationAccountName: args[1],
        configurationName: args[2],
        contentType: args[3],
        parameters: args[4],
        options: args[5]
      };
      options = args[5];
    } else if (args[3] === "application/json") {
      operationSpec = createOrUpdate$jsonOperationSpec;
      operationArguments = {
        resourceGroupName: args[0],
        automationAccountName: args[1],
        configurationName: args[2],
        contentType: args[3],
        parameters: args[4],
        options: args[5]
      };
      options = args[5];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[3]}".`
      );
    }
    operationArguments.options = options || {};
    return this.client.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Create the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param contentType Upload file type
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    contentType: "text/plain; charset=utf-8",
    options?: DscConfigurationUpdate$textOptionalParams
  ): Promise<DscConfigurationUpdateResponse>;
  /**
   * Create the configuration identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The create or update parameters for configuration.
   * @param contentType Body Parameter content-type
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    contentType: "application/json",
    options?: DscConfigurationUpdate$jsonOptionalParams
  ): Promise<DscConfigurationUpdateResponse>;
  /**
   * Create the configuration identified by configuration name.
   * @param args Includes all the parameters for this operation.
   */
  update(
    ...args:
      | [
          string,
          string,
          string,
          "text/plain; charset=utf-8",
          DscConfigurationUpdate$textOptionalParams?
        ]
      | [
          string,
          string,
          string,
          "application/json",
          DscConfigurationUpdate$jsonOptionalParams?
        ]
  ): Promise<DscConfigurationUpdateResponse> {
    let operationSpec: coreClient.OperationSpec;
    let operationArguments: coreClient.OperationArguments;
    let options;
    if (args[3] === "text/plain; charset=utf-8") {
      operationSpec = update$textOperationSpec;
      operationArguments = {
        resourceGroupName: args[0],
        automationAccountName: args[1],
        configurationName: args[2],
        contentType: args[3],
        options: args[4]
      };
      options = args[4];
    } else if (args[3] === "application/json") {
      operationSpec = update$jsonOperationSpec;
      operationArguments = {
        resourceGroupName: args[0],
        automationAccountName: args[1],
        configurationName: args[2],
        contentType: args[3],
        options: args[4]
      };
      options = args[4];
    } else {
      throw new TypeError(
        `"contentType" must be a valid value but instead was "${args[3]}".`
      );
    }
    operationArguments.options = options || {};
    return this.client.sendOperationRequest(operationArguments, operationSpec);
  }

  /**
   * Retrieve the configuration script identified by configuration name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param configurationName The configuration name.
   * @param options The options parameters.
   */
  getContent(
    resourceGroupName: string,
    automationAccountName: string,
    configurationName: string,
    options?: DscConfigurationGetContentOptionalParams
  ): Promise<DscConfigurationGetContentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, configurationName, options },
      getContentOperationSpec
    );
  }

  /**
   * Retrieve a list of configurations.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: DscConfigurationListByAutomationAccountOptionalParams
  ): Promise<DscConfigurationListByAutomationAccountResponse> {
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
    options?: DscConfigurationListByAutomationAccountNextOptionalParams
  ): Promise<DscConfigurationListByAutomationAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, nextLink, options },
      listByAutomationAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
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
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
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
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdate$textOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
    },
    201: {
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.configurationName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType1,
    Parameters.accept1
  ],
  mediaType: "text",
  serializer
};
const createOrUpdate$jsonOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
    },
    201: {
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType2],
  mediaType: "json",
  serializer
};
const update$textOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.configurationName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType1,
    Parameters.accept1
  ],
  mediaType: "text",
  serializer
};
const update$jsonOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DscConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters15,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType2],
  mediaType: "json",
  serializer
};
const getContentOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations/{configurationName}/content",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "Stream" } }
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.subscriptionId,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept2],
  serializer
};
const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/configurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DscConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skip,
    Parameters.top,
    Parameters.inlinecount
  ],
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
      bodyMapper: Mappers.DscConfigurationListResult
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
