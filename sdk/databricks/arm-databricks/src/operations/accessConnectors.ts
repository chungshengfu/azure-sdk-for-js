/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AccessConnectors } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureDatabricksManagementClient } from "../azureDatabricksManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AccessConnector,
  AccessConnectorsListByResourceGroupNextOptionalParams,
  AccessConnectorsListByResourceGroupOptionalParams,
  AccessConnectorsListByResourceGroupResponse,
  AccessConnectorsListBySubscriptionNextOptionalParams,
  AccessConnectorsListBySubscriptionOptionalParams,
  AccessConnectorsListBySubscriptionResponse,
  AccessConnectorsGetOptionalParams,
  AccessConnectorsGetResponse,
  AccessConnectorsDeleteOptionalParams,
  AccessConnectorsCreateOrUpdateOptionalParams,
  AccessConnectorsCreateOrUpdateResponse,
  AccessConnectorUpdate,
  AccessConnectorsUpdateOptionalParams,
  AccessConnectorsUpdateResponse,
  AccessConnectorsListByResourceGroupNextResponse,
  AccessConnectorsListBySubscriptionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessConnectors operations. */
export class AccessConnectorsImpl implements AccessConnectors {
  private readonly client: AzureDatabricksManagementClient;

  /**
   * Initialize a new instance of the class AccessConnectors class.
   * @param client Reference to the service client
   */
  constructor(client: AzureDatabricksManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the azure databricks accessConnectors within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AccessConnectorsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AccessConnector> {
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
    options?: AccessConnectorsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AccessConnector[]> {
    let result: AccessConnectorsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AccessConnectorsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<AccessConnector> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the azure databricks accessConnectors within a subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AccessConnectorsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AccessConnector> {
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
    options?: AccessConnectorsListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AccessConnector[]> {
    let result: AccessConnectorsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AccessConnectorsListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<AccessConnector> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets an azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    connectorName: string,
    options?: AccessConnectorsGetOptionalParams,
  ): Promise<AccessConnectorsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, connectorName, options },
      getOperationSpec,
    );
  }

  /**
   * Deletes the azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    connectorName: string,
    options?: AccessConnectorsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
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
      args: { resourceGroupName, connectorName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    connectorName: string,
    options?: AccessConnectorsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      connectorName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates or updates azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters Parameters supplied to the create or update an azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnector,
    options?: AccessConnectorsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccessConnectorsCreateOrUpdateResponse>,
      AccessConnectorsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccessConnectorsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, connectorName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      AccessConnectorsCreateOrUpdateResponse,
      OperationState<AccessConnectorsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters Parameters supplied to the create or update an azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnector,
    options?: AccessConnectorsCreateOrUpdateOptionalParams,
  ): Promise<AccessConnectorsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      connectorName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters The update to the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnectorUpdate,
    options?: AccessConnectorsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AccessConnectorsUpdateResponse>,
      AccessConnectorsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AccessConnectorsUpdateResponse> => {
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
      args: { resourceGroupName, connectorName, parameters, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      AccessConnectorsUpdateResponse,
      OperationState<AccessConnectorsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an azure databricks accessConnector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param connectorName The name of the azure databricks accessConnector.
   * @param parameters The update to the azure databricks accessConnector.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    connectorName: string,
    parameters: AccessConnectorUpdate,
    options?: AccessConnectorsUpdateOptionalParams,
  ): Promise<AccessConnectorsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      connectorName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets all the azure databricks accessConnectors within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AccessConnectorsListByResourceGroupOptionalParams,
  ): Promise<AccessConnectorsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets all the azure databricks accessConnectors within a subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AccessConnectorsListBySubscriptionOptionalParams,
  ): Promise<AccessConnectorsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AccessConnectorsListByResourceGroupNextOptionalParams,
  ): Promise<AccessConnectorsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AccessConnectorsListBySubscriptionNextOptionalParams,
  ): Promise<AccessConnectorsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnector,
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
    Parameters.connectorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnector,
    },
    201: {
      bodyMapper: Mappers.AccessConnector,
    },
    202: {
      bodyMapper: Mappers.AccessConnector,
    },
    204: {
      bodyMapper: Mappers.AccessConnector,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectorName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors/{connectorName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnector,
    },
    201: {
      bodyMapper: Mappers.AccessConnector,
    },
    202: {
      bodyMapper: Mappers.AccessConnector,
    },
    204: {
      bodyMapper: Mappers.AccessConnector,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectorName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/accessConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Databricks/accessConnectors",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessConnectorListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
