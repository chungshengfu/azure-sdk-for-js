/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { StorageAccountCredentials } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataBoxEdgeManagementClient } from "../dataBoxEdgeManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  StorageAccountCredential,
  StorageAccountCredentialsListByDataBoxEdgeDeviceNextOptionalParams,
  StorageAccountCredentialsListByDataBoxEdgeDeviceOptionalParams,
  StorageAccountCredentialsListByDataBoxEdgeDeviceResponse,
  StorageAccountCredentialsGetOptionalParams,
  StorageAccountCredentialsGetResponse,
  StorageAccountCredentialsCreateOrUpdateOptionalParams,
  StorageAccountCredentialsCreateOrUpdateResponse,
  StorageAccountCredentialsDeleteOptionalParams,
  StorageAccountCredentialsListByDataBoxEdgeDeviceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing StorageAccountCredentials operations. */
export class StorageAccountCredentialsImpl
  implements StorageAccountCredentials
{
  private readonly client: DataBoxEdgeManagementClient;

  /**
   * Initialize a new instance of the class StorageAccountCredentials class.
   * @param client Reference to the service client
   */
  constructor(client: DataBoxEdgeManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the storage account credentials in a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsListByDataBoxEdgeDeviceOptionalParams,
  ): PagedAsyncIterableIterator<StorageAccountCredential> {
    const iter = this.listByDataBoxEdgeDevicePagingAll(
      deviceName,
      resourceGroupName,
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
        return this.listByDataBoxEdgeDevicePagingPage(
          deviceName,
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDataBoxEdgeDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsListByDataBoxEdgeDeviceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<StorageAccountCredential[]> {
    let result: StorageAccountCredentialsListByDataBoxEdgeDeviceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDataBoxEdgeDevice(
        deviceName,
        resourceGroupName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDataBoxEdgeDeviceNext(
        deviceName,
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

  private async *listByDataBoxEdgeDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsListByDataBoxEdgeDeviceOptionalParams,
  ): AsyncIterableIterator<StorageAccountCredential> {
    for await (const page of this.listByDataBoxEdgeDevicePagingPage(
      deviceName,
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the storage account credentials in a Data Box Edge/Data Box Gateway device.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _listByDataBoxEdgeDevice(
    deviceName: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsListByDataBoxEdgeDeviceOptionalParams,
  ): Promise<StorageAccountCredentialsListByDataBoxEdgeDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, options },
      listByDataBoxEdgeDeviceOperationSpec,
    );
  }

  /**
   * Gets the properties of the specified storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsGetOptionalParams,
  ): Promise<StorageAccountCredentialsGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, name, resourceGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param storageAccountCredential The storage account credential.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    storageAccountCredential: StorageAccountCredential,
    options?: StorageAccountCredentialsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<StorageAccountCredentialsCreateOrUpdateResponse>,
      StorageAccountCredentialsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<StorageAccountCredentialsCreateOrUpdateResponse> => {
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
        deviceName,
        name,
        resourceGroupName,
        storageAccountCredential,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      StorageAccountCredentialsCreateOrUpdateResponse,
      OperationState<StorageAccountCredentialsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param storageAccountCredential The storage account credential.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    storageAccountCredential: StorageAccountCredential,
    options?: StorageAccountCredentialsCreateOrUpdateOptionalParams,
  ): Promise<StorageAccountCredentialsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      name,
      resourceGroupName,
      storageAccountCredential,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsDeleteOptionalParams,
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
      args: { deviceName, name, resourceGroupName, options },
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
   * Deletes the storage account credential.
   * @param deviceName The device name.
   * @param name The storage account credential name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    name: string,
    resourceGroupName: string,
    options?: StorageAccountCredentialsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      name,
      resourceGroupName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByDataBoxEdgeDeviceNext
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the ListByDataBoxEdgeDevice
   *                 method.
   * @param options The options parameters.
   */
  private _listByDataBoxEdgeDeviceNext(
    deviceName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: StorageAccountCredentialsListByDataBoxEdgeDeviceNextOptionalParams,
  ): Promise<StorageAccountCredentialsListByDataBoxEdgeDeviceNextResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, nextLink, options },
      listByDataBoxEdgeDeviceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDataBoxEdgeDeviceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredentialList,
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
    Parameters.deviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredential,
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
    Parameters.deviceName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredential,
    },
    201: {
      bodyMapper: Mappers.StorageAccountCredential,
    },
    202: {
      bodyMapper: Mappers.StorageAccountCredential,
    },
    204: {
      bodyMapper: Mappers.StorageAccountCredential,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.storageAccountCredential,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/storageAccountCredentials/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByDataBoxEdgeDeviceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountCredentialList,
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
    Parameters.deviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
