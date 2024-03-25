/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  DedicatedSQLminimalTlsSettings,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListNextOptionalParams,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListResponse,
  DedicatedSQLMinimalTlsSettingsName,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOptionalParams,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOptionalParams,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetResponse,
  WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings operations. */
export class WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsImpl
  implements WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings
{
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettings class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * List workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<DedicatedSQLminimalTlsSettings> {
    const iter = this.listPagingAll(resourceGroupName, workspaceName, options);
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
        return this.listPagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DedicatedSQLminimalTlsSettings[]> {
    let result: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, workspaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams,
  ): AsyncIterableIterator<DedicatedSQLminimalTlsSettings> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Update workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dedicatedSQLminimalTlsSettingsName The name of the dedicated sql minimal tls settings.
   * @param parameters minimal tls settings
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dedicatedSQLminimalTlsSettingsName: DedicatedSQLMinimalTlsSettingsName,
    parameters: DedicatedSQLminimalTlsSettings,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse>,
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        workspaceName,
        dedicatedSQLminimalTlsSettingsName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse,
      OperationState<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dedicatedSQLminimalTlsSettingsName The name of the dedicated sql minimal tls settings.
   * @param parameters minimal tls settings
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    dedicatedSQLminimalTlsSettingsName: DedicatedSQLMinimalTlsSettingsName,
    parameters: DedicatedSQLminimalTlsSettings,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateOptionalParams,
  ): Promise<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      dedicatedSQLminimalTlsSettingsName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dedicatedSQLminimalTlsSettingsName The name of the dedicated sql minimal tls settings.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dedicatedSQLminimalTlsSettingsName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetOptionalParams,
  ): Promise<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        dedicatedSQLminimalTlsSettingsName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * List workspace managed sql server's minimal tls settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListOptionalParams,
  ): Promise<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListNextOptionalParams,
  ): Promise<WorkspaceManagedSqlServerDedicatedSQLMinimalTlsSettingsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/dedicatedSQLminimalTlsSettings/{dedicatedSQLminimalTlsSettingsName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettings,
    },
    201: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettings,
    },
    202: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettings,
    },
    204: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettings,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dedicatedSQLminimalTlsSettingsName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/dedicatedSQLminimalTlsSettings/{dedicatedSQLminimalTlsSettingsName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettings,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.dedicatedSQLminimalTlsSettingsName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/dedicatedSQLminimalTlsSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettingsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedSQLminimalTlsSettingsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
