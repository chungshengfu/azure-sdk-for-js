/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { PrivateEndpointConnections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AutomationClient } from "../automationClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  PrivateEndpointConnection,
  PrivateEndpointConnectionsListByAutomationAccountOptionalParams,
  PrivateEndpointConnectionsListByAutomationAccountResponse,
  PrivateEndpointConnectionsGetOptionalParams,
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnectionsCreateOrUpdateOptionalParams,
  PrivateEndpointConnectionsCreateOrUpdateResponse,
  PrivateEndpointConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PrivateEndpointConnections operations. */
export class PrivateEndpointConnectionsImpl
  implements PrivateEndpointConnections {
  private readonly client: AutomationClient;

  /**
   * Initialize a new instance of the class PrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: AutomationClient) {
    this.client = client;
  }

  /**
   * List all private endpoint connections on a Automation account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  public listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateEndpointConnectionsListByAutomationAccountOptionalParams
  ): PagedAsyncIterableIterator<PrivateEndpointConnection> {
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
    options?: PrivateEndpointConnectionsListByAutomationAccountOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<PrivateEndpointConnection[]> {
    let result: PrivateEndpointConnectionsListByAutomationAccountResponse;
    result = await this._listByAutomationAccount(
      resourceGroupName,
      automationAccountName,
      options
    );
    yield result.value || [];
  }

  private async *listByAutomationAccountPagingAll(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateEndpointConnectionsListByAutomationAccountOptionalParams
  ): AsyncIterableIterator<PrivateEndpointConnection> {
    for await (const page of this.listByAutomationAccountPagingPage(
      resourceGroupName,
      automationAccountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all private endpoint connections on a Automation account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  private _listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: PrivateEndpointConnectionsListByAutomationAccountOptionalParams
  ): Promise<PrivateEndpointConnectionsListByAutomationAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, automationAccountName, options },
      listByAutomationAccountOperationSpec
    );
  }

  /**
   * Gets a private endpoint connection.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsGetOptionalParams
  ): Promise<PrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        privateEndpointConnectionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<PrivateEndpointConnectionsCreateOrUpdateResponse>,
      PrivateEndpointConnectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        automationAccountName,
        privateEndpointConnectionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Approve or reject a private endpoint connection with a given name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param parameters A private endpoint connection
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    automationAccountName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionsCreateOrUpdateOptionalParams
  ): Promise<PrivateEndpointConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      automationAccountName,
      privateEndpointConnectionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    automationAccountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        automationAccountName,
        privateEndpointConnectionName,
        options
      },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a private endpoint connection with a given name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param privateEndpointConnectionName The name of the private endpoint connection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    automationAccountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      automationAccountName,
      privateEndpointConnectionName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAutomationAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnectionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    201: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    202: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    204: {
      bodyMapper: Mappers.PrivateEndpointConnection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/privateEndpointConnections/{privateEndpointConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.privateEndpointConnectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
