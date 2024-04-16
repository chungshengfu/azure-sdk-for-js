/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureBareMetalInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BareMetalInfrastructureClient } from "../bareMetalInfrastructureClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AzureBareMetalInstance,
  AzureBareMetalInstancesListBySubscriptionNextOptionalParams,
  AzureBareMetalInstancesListBySubscriptionOptionalParams,
  AzureBareMetalInstancesListBySubscriptionResponse,
  AzureBareMetalInstancesListByResourceGroupNextOptionalParams,
  AzureBareMetalInstancesListByResourceGroupOptionalParams,
  AzureBareMetalInstancesListByResourceGroupResponse,
  AzureBareMetalInstancesStartOptionalParams,
  AzureBareMetalInstancesStartResponse,
  AzureBareMetalInstancesRestartOptionalParams,
  AzureBareMetalInstancesRestartResponse,
  AzureBareMetalInstancesShutdownOptionalParams,
  AzureBareMetalInstancesShutdownResponse,
  AzureBareMetalInstancesGetOptionalParams,
  AzureBareMetalInstancesGetResponse,
  Tags,
  AzureBareMetalInstancesUpdateOptionalParams,
  AzureBareMetalInstancesUpdateResponse,
  AzureBareMetalInstancesListBySubscriptionNextResponse,
  AzureBareMetalInstancesListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureBareMetalInstances operations. */
export class AzureBareMetalInstancesImpl implements AzureBareMetalInstances {
  private readonly client: BareMetalInfrastructureClient;

  /**
   * Initialize a new instance of the class AzureBareMetalInstances class.
   * @param client Reference to the service client
   */
  constructor(client: BareMetalInfrastructureClient) {
    this.client = client;
  }

  /**
   * Returns a list of Azure Bare Metal Instances in the specified subscription. The operations returns
   * various properties of each Azure Bare Metal Instance.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AzureBareMetalInstance> {
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
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AzureBareMetalInstance[]> {
    let result: AzureBareMetalInstancesListBySubscriptionResponse;
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
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<AzureBareMetalInstance> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of Azure Bare Metal Instances in the specified subscription and resource group. The
   * operations returns various properties of each Azure Bare Metal Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AzureBareMetalInstance> {
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
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AzureBareMetalInstance[]> {
    let result: AzureBareMetalInstancesListByResourceGroupResponse;
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
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<AzureBareMetalInstance> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The operation to start an Azure Bare Metal instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  async beginStart(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesStartOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureBareMetalInstancesStartResponse>,
      AzureBareMetalInstancesStartResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AzureBareMetalInstancesStartResponse> => {
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
      args: { resourceGroupName, azureBareMetalInstanceName, options },
      spec: startOperationSpec,
    });
    const poller = await createHttpPoller<
      AzureBareMetalInstancesStartResponse,
      OperationState<AzureBareMetalInstancesStartResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to start an Azure Bare Metal instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  async beginStartAndWait(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesStartOptionalParams,
  ): Promise<AzureBareMetalInstancesStartResponse> {
    const poller = await this.beginStart(
      resourceGroupName,
      azureBareMetalInstanceName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to restart an Azure Bare Metal Instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  async beginRestart(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesRestartOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureBareMetalInstancesRestartResponse>,
      AzureBareMetalInstancesRestartResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AzureBareMetalInstancesRestartResponse> => {
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
      args: { resourceGroupName, azureBareMetalInstanceName, options },
      spec: restartOperationSpec,
    });
    const poller = await createHttpPoller<
      AzureBareMetalInstancesRestartResponse,
      OperationState<AzureBareMetalInstancesRestartResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to restart an Azure Bare Metal Instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  async beginRestartAndWait(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesRestartOptionalParams,
  ): Promise<AzureBareMetalInstancesRestartResponse> {
    const poller = await this.beginRestart(
      resourceGroupName,
      azureBareMetalInstanceName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to shutdown an Azure Bare Metal Instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  async beginShutdown(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesShutdownOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AzureBareMetalInstancesShutdownResponse>,
      AzureBareMetalInstancesShutdownResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<AzureBareMetalInstancesShutdownResponse> => {
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
      args: { resourceGroupName, azureBareMetalInstanceName, options },
      spec: shutdownOperationSpec,
    });
    const poller = await createHttpPoller<
      AzureBareMetalInstancesShutdownResponse,
      OperationState<AzureBareMetalInstancesShutdownResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to shutdown an Azure Bare Metal Instance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  async beginShutdownAndWait(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesShutdownOptionalParams,
  ): Promise<AzureBareMetalInstancesShutdownResponse> {
    const poller = await this.beginShutdown(
      resourceGroupName,
      azureBareMetalInstanceName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a list of Azure Bare Metal Instances in the specified subscription. The operations returns
   * various properties of each Azure Bare Metal Instance.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AzureBareMetalInstancesListBySubscriptionOptionalParams,
  ): Promise<AzureBareMetalInstancesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Gets a list of Azure Bare Metal Instances in the specified subscription and resource group. The
   * operations returns various properties of each Azure Bare Metal Instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AzureBareMetalInstancesListByResourceGroupOptionalParams,
  ): Promise<AzureBareMetalInstancesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets an Azure Bare Metal Instance for the specified subscription, resource group, and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    options?: AzureBareMetalInstancesGetOptionalParams,
  ): Promise<AzureBareMetalInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureBareMetalInstanceName, options },
      getOperationSpec,
    );
  }

  /**
   * Patches the Tags field of a Azure Bare Metal Instance for the specified subscription, resource
   * group, and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureBareMetalInstanceName Name of the Azure Bare Metal Instance, also known as the
   *                                   ResourceName.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureBareMetalInstanceName: string,
    tagsParameter: Tags,
    options?: AzureBareMetalInstancesUpdateOptionalParams,
  ): Promise<AzureBareMetalInstancesUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureBareMetalInstanceName, tagsParameter, options },
      updateOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AzureBareMetalInstancesListBySubscriptionNextOptionalParams,
  ): Promise<AzureBareMetalInstancesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
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
    options?: AzureBareMetalInstancesListByResourceGroupNextOptionalParams,
  ): Promise<AzureBareMetalInstancesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const startOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}/start",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
    },
    201: {
      bodyMapper: Mappers.OperationStatus,
    },
    202: {
      bodyMapper: Mappers.OperationStatus,
    },
    204: {
      bodyMapper: Mappers.OperationStatus,
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
    Parameters.azureBareMetalInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const restartOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}/restart",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
    },
    201: {
      bodyMapper: Mappers.OperationStatus,
    },
    202: {
      bodyMapper: Mappers.OperationStatus,
    },
    204: {
      bodyMapper: Mappers.OperationStatus,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.forceParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureBareMetalInstanceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const shutdownOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}/shutdown",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.OperationStatus,
    },
    201: {
      bodyMapper: Mappers.OperationStatus,
    },
    202: {
      bodyMapper: Mappers.OperationStatus,
    },
    204: {
      bodyMapper: Mappers.OperationStatus,
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
    Parameters.azureBareMetalInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult,
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
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult,
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
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstance,
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
    Parameters.azureBareMetalInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BareMetalInfrastructure/bareMetalInstances/{azureBareMetalInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstance,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.tagsParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureBareMetalInstanceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult,
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
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBareMetalInstancesListResult,
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
