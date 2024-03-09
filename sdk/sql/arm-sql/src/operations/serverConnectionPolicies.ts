/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServerConnectionPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServerConnectionPolicy,
  ServerConnectionPoliciesListByServerNextOptionalParams,
  ServerConnectionPoliciesListByServerOptionalParams,
  ServerConnectionPoliciesListByServerResponse,
  ConnectionPolicyName,
  ServerConnectionPoliciesGetOptionalParams,
  ServerConnectionPoliciesGetResponse,
  ServerConnectionPoliciesCreateOrUpdateOptionalParams,
  ServerConnectionPoliciesCreateOrUpdateResponse,
  ServerConnectionPoliciesListByServerNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServerConnectionPolicies operations. */
export class ServerConnectionPoliciesImpl implements ServerConnectionPolicies {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ServerConnectionPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Lists connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerConnectionPolicy> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ServerConnectionPolicy[]> {
    let result: ServerConnectionPoliciesListByServerResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByServer(resourceGroupName, serverName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams,
  ): AsyncIterableIterator<ServerConnectionPolicy> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerConnectionPoliciesListByServerOptionalParams,
  ): Promise<ServerConnectionPoliciesListByServerResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      listByServerOperationSpec,
    );
  }

  /**
   * Gets a server connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param connectionPolicyName The name of the connection policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    connectionPolicyName: ConnectionPolicyName,
    options?: ServerConnectionPoliciesGetOptionalParams,
  ): Promise<ServerConnectionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, connectionPolicyName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates a server connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param connectionPolicyName The name of the connection policy.
   * @param parameters The required parameters for updating a server connection policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    connectionPolicyName: ConnectionPolicyName,
    parameters: ServerConnectionPolicy,
    options?: ServerConnectionPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerConnectionPoliciesCreateOrUpdateResponse>,
      ServerConnectionPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ServerConnectionPoliciesCreateOrUpdateResponse> => {
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
        serverName,
        connectionPolicyName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ServerConnectionPoliciesCreateOrUpdateResponse,
      OperationState<ServerConnectionPoliciesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a server connection policy
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param connectionPolicyName The name of the connection policy.
   * @param parameters The required parameters for updating a server connection policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    connectionPolicyName: ConnectionPolicyName,
    parameters: ServerConnectionPolicy,
    options?: ServerConnectionPoliciesCreateOrUpdateOptionalParams,
  ): Promise<ServerConnectionPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serverName,
      connectionPolicyName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ServerConnectionPoliciesListByServerNextOptionalParams,
  ): Promise<ServerConnectionPoliciesListByServerNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, nextLink, options },
      listByServerNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServerOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicyListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId,
    Parameters.connectionPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/connectionPolicies/{connectionPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicy,
    },
    201: {
      bodyMapper: Mappers.ServerConnectionPolicy,
    },
    202: {
      bodyMapper: Mappers.ServerConnectionPolicy,
    },
    204: {
      bodyMapper: Mappers.ServerConnectionPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters87,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId,
    Parameters.connectionPolicyName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByServerNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerConnectionPolicyListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
