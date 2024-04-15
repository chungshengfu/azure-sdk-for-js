/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApiManagementGatewayConfigConnection } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClient } from "../apiManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ApiManagementGatewayConfigConnectionResource,
  ApiManagementGatewayConfigConnectionListByGatewayNextOptionalParams,
  ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
  ApiManagementGatewayConfigConnectionListByGatewayResponse,
  ApiManagementGatewayConfigConnectionGetOptionalParams,
  ApiManagementGatewayConfigConnectionGetResponse,
  ApiManagementGatewayConfigConnectionCreateOrUpdateOptionalParams,
  ApiManagementGatewayConfigConnectionCreateOrUpdateResponse,
  ApiManagementGatewayConfigConnectionDeleteOptionalParams,
  ApiManagementGatewayConfigConnectionDeleteResponse,
  ApiManagementGatewayConfigConnectionListByGatewayNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiManagementGatewayConfigConnection operations. */
export class ApiManagementGatewayConfigConnectionImpl
  implements ApiManagementGatewayConfigConnection
{
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class ApiManagementGatewayConfigConnection class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * List all API Management gateway config connections within a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param options The options parameters.
   */
  public listByGateway(
    resourceGroupName: string,
    gatewayName: string,
    options?: ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
  ): PagedAsyncIterableIterator<ApiManagementGatewayConfigConnectionResource> {
    const iter = this.listByGatewayPagingAll(
      resourceGroupName,
      gatewayName,
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
        return this.listByGatewayPagingPage(
          resourceGroupName,
          gatewayName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByGatewayPagingPage(
    resourceGroupName: string,
    gatewayName: string,
    options?: ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApiManagementGatewayConfigConnectionResource[]> {
    let result: ApiManagementGatewayConfigConnectionListByGatewayResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByGateway(
        resourceGroupName,
        gatewayName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByGatewayNext(
        resourceGroupName,
        gatewayName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByGatewayPagingAll(
    resourceGroupName: string,
    gatewayName: string,
    options?: ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
  ): AsyncIterableIterator<ApiManagementGatewayConfigConnectionResource> {
    for await (const page of this.listByGatewayPagingPage(
      resourceGroupName,
      gatewayName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all API Management gateway config connections within a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param options The options parameters.
   */
  private _listByGateway(
    resourceGroupName: string,
    gatewayName: string,
    options?: ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionListByGatewayResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, options },
      listByGatewayOperationSpec,
    );
  }

  /**
   * Gets an API Management gateway config connection resource description.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    options?: ApiManagementGatewayConfigConnectionGetOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, configConnectionId, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an API Management gateway config connection. This is long running operation and
   * could take several minutes to complete.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management gateway config connection
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    parameters: ApiManagementGatewayConfigConnectionResource,
    options?: ApiManagementGatewayConfigConnectionCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiManagementGatewayConfigConnectionCreateOrUpdateResponse>,
      ApiManagementGatewayConfigConnectionCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ApiManagementGatewayConfigConnectionCreateOrUpdateResponse> => {
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
        gatewayName,
        configConnectionId,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ApiManagementGatewayConfigConnectionCreateOrUpdateResponse,
      OperationState<ApiManagementGatewayConfigConnectionCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates an API Management gateway config connection. This is long running operation and
   * could take several minutes to complete.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management gateway config connection
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    parameters: ApiManagementGatewayConfigConnectionResource,
    options?: ApiManagementGatewayConfigConnectionCreateOrUpdateOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      gatewayName,
      configConnectionId,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing API Management gateway config connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    ifMatch: string,
    options?: ApiManagementGatewayConfigConnectionDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiManagementGatewayConfigConnectionDeleteResponse>,
      ApiManagementGatewayConfigConnectionDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ApiManagementGatewayConfigConnectionDeleteResponse> => {
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
        gatewayName,
        configConnectionId,
        ifMatch,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      ApiManagementGatewayConfigConnectionDeleteResponse,
      OperationState<ApiManagementGatewayConfigConnectionDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing API Management gateway config connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    ifMatch: string,
    options?: ApiManagementGatewayConfigConnectionDeleteOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      gatewayName,
      configConnectionId,
      ifMatch,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByGatewayNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param nextLink The nextLink from the previous successful call to the ListByGateway method.
   * @param options The options parameters.
   */
  private _listByGatewayNext(
    resourceGroupName: string,
    gatewayName: string,
    nextLink: string,
    options?: ApiManagementGatewayConfigConnectionListByGatewayNextOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionListByGatewayNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, nextLink, options },
      listByGatewayNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByGatewayOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/gateways/{gatewayName}/configConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/gateways/{gatewayName}/configConnections/{configConnectionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.configConnectionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/gateways/{gatewayName}/configConnections/{configConnectionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
    },
    201: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
    },
    202: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
    },
    204: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters54,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.configConnectionId,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/gateways/{gatewayName}/configConnections/{configConnectionId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
      headersMapper: Mappers.ApiManagementGatewayConfigConnectionDeleteHeaders,
    },
    201: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
      headersMapper: Mappers.ApiManagementGatewayConfigConnectionDeleteHeaders,
    },
    202: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
      headersMapper: Mappers.ApiManagementGatewayConfigConnectionDeleteHeaders,
    },
    204: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionResource,
      headersMapper: Mappers.ApiManagementGatewayConfigConnectionDeleteHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.configConnectionId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listByGatewayNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiManagementGatewayConfigConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.gatewayName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
