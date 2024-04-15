/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { InternetGatewayRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureNetworkFabricManagementServiceAPI } from "../azureNetworkFabricManagementServiceAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  InternetGatewayRule,
  InternetGatewayRulesListByResourceGroupNextOptionalParams,
  InternetGatewayRulesListByResourceGroupOptionalParams,
  InternetGatewayRulesListByResourceGroupResponse,
  InternetGatewayRulesListBySubscriptionNextOptionalParams,
  InternetGatewayRulesListBySubscriptionOptionalParams,
  InternetGatewayRulesListBySubscriptionResponse,
  InternetGatewayRulesCreateOptionalParams,
  InternetGatewayRulesCreateResponse,
  InternetGatewayRulesGetOptionalParams,
  InternetGatewayRulesGetResponse,
  InternetGatewayRulePatch,
  InternetGatewayRulesUpdateOptionalParams,
  InternetGatewayRulesUpdateResponse,
  InternetGatewayRulesDeleteOptionalParams,
  InternetGatewayRulesDeleteResponse,
  InternetGatewayRulesListByResourceGroupNextResponse,
  InternetGatewayRulesListBySubscriptionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing InternetGatewayRules operations. */
export class InternetGatewayRulesImpl implements InternetGatewayRules {
  private readonly client: AzureNetworkFabricManagementServiceAPI;

  /**
   * Initialize a new instance of the class InternetGatewayRules class.
   * @param client Reference to the service client
   */
  constructor(client: AzureNetworkFabricManagementServiceAPI) {
    this.client = client;
  }

  /**
   * Implements Internet Gateway Rules list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: InternetGatewayRulesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<InternetGatewayRule> {
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
    options?: InternetGatewayRulesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<InternetGatewayRule[]> {
    let result: InternetGatewayRulesListByResourceGroupResponse;
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
    options?: InternetGatewayRulesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<InternetGatewayRule> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all Internet Gateway rules in the given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: InternetGatewayRulesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<InternetGatewayRule> {
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
    options?: InternetGatewayRulesListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<InternetGatewayRule[]> {
    let result: InternetGatewayRulesListBySubscriptionResponse;
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
    options?: InternetGatewayRulesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<InternetGatewayRule> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates an Internet Gateway rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRule,
    options?: InternetGatewayRulesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewayRulesCreateResponse>,
      InternetGatewayRulesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<InternetGatewayRulesCreateResponse> => {
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
      args: { resourceGroupName, internetGatewayRuleName, body, options },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      InternetGatewayRulesCreateResponse,
      OperationState<InternetGatewayRulesCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates an Internet Gateway rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRule,
    options?: InternetGatewayRulesCreateOptionalParams,
  ): Promise<InternetGatewayRulesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      internetGatewayRuleName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets an Internet Gateway Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    options?: InternetGatewayRulesGetOptionalParams,
  ): Promise<InternetGatewayRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, internetGatewayRuleName, options },
      getOperationSpec,
    );
  }

  /**
   * API to update certain properties of the Internet Gateway Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Internet Gateway Rule properties to update.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRulePatch,
    options?: InternetGatewayRulesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewayRulesUpdateResponse>,
      InternetGatewayRulesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<InternetGatewayRulesUpdateResponse> => {
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
      args: { resourceGroupName, internetGatewayRuleName, body, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      InternetGatewayRulesUpdateResponse,
      OperationState<InternetGatewayRulesUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * API to update certain properties of the Internet Gateway Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Internet Gateway Rule properties to update.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRulePatch,
    options?: InternetGatewayRulesUpdateOptionalParams,
  ): Promise<InternetGatewayRulesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      internetGatewayRuleName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements Internet Gateway Rules DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    options?: InternetGatewayRulesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewayRulesDeleteResponse>,
      InternetGatewayRulesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<InternetGatewayRulesDeleteResponse> => {
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
      args: { resourceGroupName, internetGatewayRuleName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      InternetGatewayRulesDeleteResponse,
      OperationState<InternetGatewayRulesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements Internet Gateway Rules DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    options?: InternetGatewayRulesDeleteOptionalParams,
  ): Promise<InternetGatewayRulesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      internetGatewayRuleName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements Internet Gateway Rules list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: InternetGatewayRulesListByResourceGroupOptionalParams,
  ): Promise<InternetGatewayRulesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * List all Internet Gateway rules in the given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: InternetGatewayRulesListBySubscriptionOptionalParams,
  ): Promise<InternetGatewayRulesListBySubscriptionResponse> {
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
    options?: InternetGatewayRulesListByResourceGroupNextOptionalParams,
  ): Promise<InternetGatewayRulesListByResourceGroupNextResponse> {
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
    options?: InternetGatewayRulesListBySubscriptionNextOptionalParams,
  ): Promise<InternetGatewayRulesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    201: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    202: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    204: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.internetGatewayRuleName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InternetGatewayRule,
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
    Parameters.internetGatewayRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    201: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    202: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    204: {
      bodyMapper: Mappers.InternetGatewayRule,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.internetGatewayRuleName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/{internetGatewayRuleName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.InternetGatewayRulesDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.InternetGatewayRulesDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.InternetGatewayRulesDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.InternetGatewayRulesDeleteHeaders,
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
    Parameters.internetGatewayRuleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InternetGatewayRulesListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.InternetGatewayRulesListResult,
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
      bodyMapper: Mappers.InternetGatewayRulesListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
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
      bodyMapper: Mappers.InternetGatewayRulesListResult,
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
