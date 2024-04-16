/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NetworkSecurityPerimeterConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetworkSecurityPerimeterConfiguration,
  NetworkSecurityPerimeterConfigurationsListNextOptionalParams,
  NetworkSecurityPerimeterConfigurationsListOptionalParams,
  NetworkSecurityPerimeterConfigurationsListResponse,
  NetworkSecurityPerimeterConfigurationsGetOptionalParams,
  NetworkSecurityPerimeterConfigurationsGetResponse,
  NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  NetworkSecurityPerimeterConfigurationsReconcileResponse,
  NetworkSecurityPerimeterConfigurationsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkSecurityPerimeterConfigurations operations. */
export class NetworkSecurityPerimeterConfigurationsImpl
  implements NetworkSecurityPerimeterConfigurations
{
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class NetworkSecurityPerimeterConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Gets list of effective NetworkSecurityPerimeterConfiguration for cosmos db account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: NetworkSecurityPerimeterConfigurationsListOptionalParams,
  ): PagedAsyncIterableIterator<NetworkSecurityPerimeterConfiguration> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
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
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: NetworkSecurityPerimeterConfigurationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NetworkSecurityPerimeterConfiguration[]> {
    let result: NetworkSecurityPerimeterConfigurationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, accountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
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
    accountName: string,
    options?: NetworkSecurityPerimeterConfigurationsListOptionalParams,
  ): AsyncIterableIterator<NetworkSecurityPerimeterConfiguration> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets list of effective NetworkSecurityPerimeterConfiguration for cosmos db account
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: NetworkSecurityPerimeterConfigurationsListOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets effective NetworkSecurityPerimeterConfiguration for association
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param networkSecurityPerimeterConfigurationName The name for Network Security Perimeter
   *                                                  configuration
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    networkSecurityPerimeterConfigurationName: string,
    options?: NetworkSecurityPerimeterConfigurationsGetOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        networkSecurityPerimeterConfigurationName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Refreshes any information about the association.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param networkSecurityPerimeterConfigurationName The name for Network Security Perimeter
   *                                                  configuration
   * @param options The options parameters.
   */
  async beginReconcile(
    resourceGroupName: string,
    accountName: string,
    networkSecurityPerimeterConfigurationName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkSecurityPerimeterConfigurationsReconcileResponse>,
      NetworkSecurityPerimeterConfigurationsReconcileResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NetworkSecurityPerimeterConfigurationsReconcileResponse> => {
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
        accountName,
        networkSecurityPerimeterConfigurationName,
        options,
      },
      spec: reconcileOperationSpec,
    });
    const poller = await createHttpPoller<
      NetworkSecurityPerimeterConfigurationsReconcileResponse,
      OperationState<NetworkSecurityPerimeterConfigurationsReconcileResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Refreshes any information about the association.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param networkSecurityPerimeterConfigurationName The name for Network Security Perimeter
   *                                                  configuration
   * @param options The options parameters.
   */
  async beginReconcileAndWait(
    resourceGroupName: string,
    accountName: string,
    networkSecurityPerimeterConfigurationName: string,
    options?: NetworkSecurityPerimeterConfigurationsReconcileOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationsReconcileResponse> {
    const poller = await this.beginReconcile(
      resourceGroupName,
      accountName,
      networkSecurityPerimeterConfigurationName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: NetworkSecurityPerimeterConfigurationsListNextOptionalParams,
  ): Promise<NetworkSecurityPerimeterConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/networkSecurityPerimeterConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfigurationList,
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
    Parameters.accountName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfiguration,
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
    Parameters.accountName,
    Parameters.networkSecurityPerimeterConfigurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const reconcileOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/networkSecurityPerimeterConfigurations/{networkSecurityPerimeterConfigurationName}/reconcile",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileHeaders,
    },
    201: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileHeaders,
    },
    202: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileHeaders,
    },
    204: {
      headersMapper:
        Mappers.NetworkSecurityPerimeterConfigurationsReconcileHeaders,
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
    Parameters.accountName,
    Parameters.networkSecurityPerimeterConfigurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkSecurityPerimeterConfigurationList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
