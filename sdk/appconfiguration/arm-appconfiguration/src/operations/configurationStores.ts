/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ConfigurationStores } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppConfigurationManagementClient } from "../appConfigurationManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ConfigurationStore,
  ConfigurationStoresListNextOptionalParams,
  ConfigurationStoresListOptionalParams,
  ConfigurationStoresListResponse,
  ConfigurationStoresListByResourceGroupNextOptionalParams,
  ConfigurationStoresListByResourceGroupOptionalParams,
  ConfigurationStoresListByResourceGroupResponse,
  ApiKey,
  ConfigurationStoresListKeysNextOptionalParams,
  ConfigurationStoresListKeysOptionalParams,
  ConfigurationStoresListKeysResponse,
  DeletedConfigurationStore,
  ConfigurationStoresListDeletedNextOptionalParams,
  ConfigurationStoresListDeletedOptionalParams,
  ConfigurationStoresListDeletedResponse,
  ConfigurationStoresGetOptionalParams,
  ConfigurationStoresGetResponse,
  ConfigurationStoresCreateOptionalParams,
  ConfigurationStoresCreateResponse,
  ConfigurationStoresDeleteOptionalParams,
  ConfigurationStoreUpdateParameters,
  ConfigurationStoresUpdateOptionalParams,
  ConfigurationStoresUpdateResponse,
  RegenerateKeyParameters,
  ConfigurationStoresRegenerateKeyOptionalParams,
  ConfigurationStoresRegenerateKeyResponse,
  ConfigurationStoresGetDeletedOptionalParams,
  ConfigurationStoresGetDeletedResponse,
  ConfigurationStoresPurgeDeletedOptionalParams,
  ConfigurationStoresListNextResponse,
  ConfigurationStoresListByResourceGroupNextResponse,
  ConfigurationStoresListKeysNextResponse,
  ConfigurationStoresListDeletedNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ConfigurationStores operations. */
export class ConfigurationStoresImpl implements ConfigurationStores {
  private readonly client: AppConfigurationManagementClient;

  /**
   * Initialize a new instance of the class ConfigurationStores class.
   * @param client Reference to the service client
   */
  constructor(client: AppConfigurationManagementClient) {
    this.client = client;
  }

  /**
   * Lists the configuration stores for a given subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ConfigurationStoresListOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationStore> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ConfigurationStoresListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ConfigurationStore[]> {
    let result: ConfigurationStoresListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ConfigurationStoresListOptionalParams
  ): AsyncIterableIterator<ConfigurationStore> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the configuration stores for a given resource group.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ConfigurationStoresListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ConfigurationStore> {
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
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ConfigurationStoresListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ConfigurationStore[]> {
    let result: ConfigurationStoresListByResourceGroupResponse;
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
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ConfigurationStoresListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ConfigurationStore> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the access key for the specified configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  public listKeys(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresListKeysOptionalParams
  ): PagedAsyncIterableIterator<ApiKey> {
    const iter = this.listKeysPagingAll(
      resourceGroupName,
      configStoreName,
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
        return this.listKeysPagingPage(
          resourceGroupName,
          configStoreName,
          options,
          settings
        );
      }
    };
  }

  private async *listKeysPagingPage(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresListKeysOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ApiKey[]> {
    let result: ConfigurationStoresListKeysResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listKeys(
        resourceGroupName,
        configStoreName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listKeysNext(
        resourceGroupName,
        configStoreName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listKeysPagingAll(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresListKeysOptionalParams
  ): AsyncIterableIterator<ApiKey> {
    for await (const page of this.listKeysPagingPage(
      resourceGroupName,
      configStoreName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets information about the deleted configuration stores in a subscription.
   * @param options The options parameters.
   */
  public listDeleted(
    options?: ConfigurationStoresListDeletedOptionalParams
  ): PagedAsyncIterableIterator<DeletedConfigurationStore> {
    const iter = this.listDeletedPagingAll(options);
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
        return this.listDeletedPagingPage(options, settings);
      }
    };
  }

  private async *listDeletedPagingPage(
    options?: ConfigurationStoresListDeletedOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeletedConfigurationStore[]> {
    let result: ConfigurationStoresListDeletedResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listDeleted(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listDeletedNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listDeletedPagingAll(
    options?: ConfigurationStoresListDeletedOptionalParams
  ): AsyncIterableIterator<DeletedConfigurationStore> {
    for await (const page of this.listDeletedPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the configuration stores for a given subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ConfigurationStoresListOptionalParams
  ): Promise<ConfigurationStoresListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Lists the configuration stores for a given resource group.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ConfigurationStoresListByResourceGroupOptionalParams
  ): Promise<ConfigurationStoresListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the properties of the specified configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresGetOptionalParams
  ): Promise<ConfigurationStoresGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a configuration store with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param configStoreCreationParameters The parameters for creating a configuration store.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    configStoreName: string,
    configStoreCreationParameters: ConfigurationStore,
    options?: ConfigurationStoresCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConfigurationStoresCreateResponse>,
      ConfigurationStoresCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationStoresCreateResponse> => {
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
        configStoreName,
        configStoreCreationParameters,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a configuration store with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param configStoreCreationParameters The parameters for creating a configuration store.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    configStoreName: string,
    configStoreCreationParameters: ConfigurationStore,
    options?: ConfigurationStoresCreateOptionalParams
  ): Promise<ConfigurationStoresCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      configStoreName,
      configStoreCreationParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresDeleteOptionalParams
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
      { resourceGroupName, configStoreName, options },
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
   * Deletes a configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      configStoreName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a configuration store with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param configStoreUpdateParameters The parameters for updating a configuration store.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    configStoreName: string,
    configStoreUpdateParameters: ConfigurationStoreUpdateParameters,
    options?: ConfigurationStoresUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ConfigurationStoresUpdateResponse>,
      ConfigurationStoresUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ConfigurationStoresUpdateResponse> => {
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
        configStoreName,
        configStoreUpdateParameters,
        options
      },
      updateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a configuration store with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param configStoreUpdateParameters The parameters for updating a configuration store.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    configStoreName: string,
    configStoreUpdateParameters: ConfigurationStoreUpdateParameters,
    options?: ConfigurationStoresUpdateOptionalParams
  ): Promise<ConfigurationStoresUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      configStoreName,
      configStoreUpdateParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the access key for the specified configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  private _listKeys(
    resourceGroupName: string,
    configStoreName: string,
    options?: ConfigurationStoresListKeysOptionalParams
  ): Promise<ConfigurationStoresListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, options },
      listKeysOperationSpec
    );
  }

  /**
   * Regenerates an access key for the specified configuration store.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param regenerateKeyParameters The parameters for regenerating an access key.
   * @param options The options parameters.
   */
  regenerateKey(
    resourceGroupName: string,
    configStoreName: string,
    regenerateKeyParameters: RegenerateKeyParameters,
    options?: ConfigurationStoresRegenerateKeyOptionalParams
  ): Promise<ConfigurationStoresRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, regenerateKeyParameters, options },
      regenerateKeyOperationSpec
    );
  }

  /**
   * Gets information about the deleted configuration stores in a subscription.
   * @param options The options parameters.
   */
  private _listDeleted(
    options?: ConfigurationStoresListDeletedOptionalParams
  ): Promise<ConfigurationStoresListDeletedResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDeletedOperationSpec
    );
  }

  /**
   * Gets a deleted Azure app configuration store.
   * @param location The location in which uniqueness will be verified.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  getDeleted(
    location: string,
    configStoreName: string,
    options?: ConfigurationStoresGetDeletedOptionalParams
  ): Promise<ConfigurationStoresGetDeletedResponse> {
    return this.client.sendOperationRequest(
      { location, configStoreName, options },
      getDeletedOperationSpec
    );
  }

  /**
   * Permanently deletes the specified configuration store.
   * @param location The location in which uniqueness will be verified.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  async beginPurgeDeleted(
    location: string,
    configStoreName: string,
    options?: ConfigurationStoresPurgeDeletedOptionalParams
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
      { location, configStoreName, options },
      purgeDeletedOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Permanently deletes the specified configuration store.
   * @param location The location in which uniqueness will be verified.
   * @param configStoreName The name of the configuration store.
   * @param options The options parameters.
   */
  async beginPurgeDeletedAndWait(
    location: string,
    configStoreName: string,
    options?: ConfigurationStoresPurgeDeletedOptionalParams
  ): Promise<void> {
    const poller = await this.beginPurgeDeleted(
      location,
      configStoreName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ConfigurationStoresListNextOptionalParams
  ): Promise<ConfigurationStoresListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ConfigurationStoresListByResourceGroupNextOptionalParams
  ): Promise<ConfigurationStoresListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListKeysNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param configStoreName The name of the configuration store.
   * @param nextLink The nextLink from the previous successful call to the ListKeys method.
   * @param options The options parameters.
   */
  private _listKeysNext(
    resourceGroupName: string,
    configStoreName: string,
    nextLink: string,
    options?: ConfigurationStoresListKeysNextOptionalParams
  ): Promise<ConfigurationStoresListKeysNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, configStoreName, nextLink, options },
      listKeysNextOperationSpec
    );
  }

  /**
   * ListDeletedNext
   * @param nextLink The nextLink from the previous successful call to the ListDeleted method.
   * @param options The options parameters.
   */
  private _listDeletedNext(
    nextLink: string,
    options?: ConfigurationStoresListDeletedNextOptionalParams
  ): Promise<ConfigurationStoresListDeletedNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDeletedNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/configurationStores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStore
    },
    201: {
      bodyMapper: Mappers.ConfigurationStore
    },
    202: {
      bodyMapper: Mappers.ConfigurationStore
    },
    204: {
      bodyMapper: Mappers.ConfigurationStore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.configStoreCreationParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
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
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStore
    },
    201: {
      bodyMapper: Mappers.ConfigurationStore
    },
    202: {
      bodyMapper: Mappers.ConfigurationStore
    },
    204: {
      bodyMapper: Mappers.ConfigurationStore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.configStoreUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeyListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.skipToken],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppConfiguration/configurationStores/{configStoreName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiKey
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.regenerateKeyParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listDeletedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/deletedConfigurationStores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedConfigurationStoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeletedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/locations/{location}/deletedConfigurationStores/{configStoreName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedConfigurationStore
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.configStoreName,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const purgeDeletedOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.AppConfiguration/locations/{location}/deletedConfigurationStores/{configStoreName}/purge",
  httpMethod: "POST",
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
    Parameters.configStoreName,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationStoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listKeysNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiKeyListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.configStoreName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeletedNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedConfigurationStoreListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
