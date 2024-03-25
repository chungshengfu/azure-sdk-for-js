/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SessionHostConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DesktopVirtualizationAPIClient } from "../desktopVirtualizationAPIClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SessionHostConfiguration,
  SessionHostConfigurationsListByHostPoolNextOptionalParams,
  SessionHostConfigurationsListByHostPoolOptionalParams,
  SessionHostConfigurationsListByHostPoolResponse,
  SessionHostConfigurationsCreateOrUpdateOptionalParams,
  SessionHostConfigurationsCreateOrUpdateResponse,
  SessionHostConfigurationsUpdateOptionalParams,
  SessionHostConfigurationsUpdateResponse,
  SessionHostConfigurationsGetOptionalParams,
  SessionHostConfigurationsGetResponse,
  SessionHostConfigurationsListByHostPoolNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SessionHostConfigurations operations. */
export class SessionHostConfigurationsImpl
  implements SessionHostConfigurations
{
  private readonly client: DesktopVirtualizationAPIClient;

  /**
   * Initialize a new instance of the class SessionHostConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: DesktopVirtualizationAPIClient) {
    this.client = client;
  }

  /**
   * List sessionHostConfigurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  public listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsListByHostPoolOptionalParams,
  ): PagedAsyncIterableIterator<SessionHostConfiguration> {
    const iter = this.listByHostPoolPagingAll(
      resourceGroupName,
      hostPoolName,
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
        return this.listByHostPoolPagingPage(
          resourceGroupName,
          hostPoolName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByHostPoolPagingPage(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsListByHostPoolOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SessionHostConfiguration[]> {
    let result: SessionHostConfigurationsListByHostPoolResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByHostPool(
        resourceGroupName,
        hostPoolName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByHostPoolNext(
        resourceGroupName,
        hostPoolName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByHostPoolPagingAll(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsListByHostPoolOptionalParams,
  ): AsyncIterableIterator<SessionHostConfiguration> {
    for await (const page of this.listByHostPoolPagingPage(
      resourceGroupName,
      hostPoolName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostConfiguration Object containing SessionHostConfiguration definitions.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostConfiguration: SessionHostConfiguration,
    options?: SessionHostConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SessionHostConfigurationsCreateOrUpdateResponse>,
      SessionHostConfigurationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SessionHostConfigurationsCreateOrUpdateResponse> => {
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
        hostPoolName,
        sessionHostConfiguration,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      SessionHostConfigurationsCreateOrUpdateResponse,
      OperationState<SessionHostConfigurationsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param sessionHostConfiguration Object containing SessionHostConfiguration definitions.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    hostPoolName: string,
    sessionHostConfiguration: SessionHostConfiguration,
    options?: SessionHostConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<SessionHostConfigurationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      hostPoolName,
      sessionHostConfiguration,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SessionHostConfigurationsUpdateResponse>,
      SessionHostConfigurationsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SessionHostConfigurationsUpdateResponse> => {
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
      args: { resourceGroupName, hostPoolName, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      SessionHostConfigurationsUpdateResponse,
      OperationState<SessionHostConfigurationsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsUpdateOptionalParams,
  ): Promise<SessionHostConfigurationsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      hostPoolName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a SessionHostConfiguration.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsGetOptionalParams,
  ): Promise<SessionHostConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      getOperationSpec,
    );
  }

  /**
   * List sessionHostConfigurations.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  private _listByHostPool(
    resourceGroupName: string,
    hostPoolName: string,
    options?: SessionHostConfigurationsListByHostPoolOptionalParams,
  ): Promise<SessionHostConfigurationsListByHostPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, options },
      listByHostPoolOperationSpec,
    );
  }

  /**
   * ListByHostPoolNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param nextLink The nextLink from the previous successful call to the ListByHostPool method.
   * @param options The options parameters.
   */
  private _listByHostPoolNext(
    resourceGroupName: string,
    hostPoolName: string,
    nextLink: string,
    options?: SessionHostConfigurationsListByHostPoolNextOptionalParams,
  ): Promise<SessionHostConfigurationsListByHostPoolNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, hostPoolName, nextLink, options },
      listByHostPoolNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostConfigurations/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsCreateOrUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsCreateOrUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.sessionHostConfiguration,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostConfigurations/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.SessionHostConfiguration,
      headersMapper: Mappers.SessionHostConfigurationsUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.sessionHostConfiguration1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostConfigurations/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostConfiguration,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHostPoolOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DesktopVirtualization/hostPools/{hostPoolName}/sessionHostConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostConfigurationList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByHostPoolNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SessionHostConfigurationList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.hostPoolName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
