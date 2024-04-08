/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { MonitoringConfig } from "../operationsInterfaces";
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
  MonitoringMetricConfiguration,
  MonitoringConfigListNextOptionalParams,
  MonitoringConfigListOptionalParams,
  MonitoringConfigListResponse,
  MonitoringConfigGetOptionalParams,
  MonitoringConfigGetResponse,
  MonitoringConfigCreateOrUpdateOptionalParams,
  MonitoringConfigCreateOrUpdateResponse,
  MonitoringConfigDeleteOptionalParams,
  MonitoringConfigListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MonitoringConfig operations. */
export class MonitoringConfigImpl implements MonitoringConfig {
  private readonly client: DataBoxEdgeManagementClient;

  /**
   * Initialize a new instance of the class MonitoringConfig class.
   * @param client Reference to the service client
   */
  constructor(client: DataBoxEdgeManagementClient) {
    this.client = client;
  }

  /**
   * Lists metric configurations in a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  public list(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigListOptionalParams,
  ): PagedAsyncIterableIterator<MonitoringMetricConfiguration> {
    const iter = this.listPagingAll(
      deviceName,
      roleName,
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
        return this.listPagingPage(
          deviceName,
          roleName,
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<MonitoringMetricConfiguration[]> {
    let result: MonitoringConfigListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        deviceName,
        roleName,
        resourceGroupName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        deviceName,
        roleName,
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

  private async *listPagingAll(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigListOptionalParams,
  ): AsyncIterableIterator<MonitoringMetricConfiguration> {
    for await (const page of this.listPagingPage(
      deviceName,
      roleName,
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists metric configurations in a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  private _list(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigListOptionalParams,
  ): Promise<MonitoringConfigListResponse> {
    return this.client.sendOperationRequest(
      { deviceName, roleName, resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets a  metric configuration of a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigGetOptionalParams,
  ): Promise<MonitoringConfigGetResponse> {
    return this.client.sendOperationRequest(
      { deviceName, roleName, resourceGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a new metric configuration or updates an existing one for a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param monitoringMetricConfiguration The metric configuration.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    monitoringMetricConfiguration: MonitoringMetricConfiguration,
    options?: MonitoringConfigCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MonitoringConfigCreateOrUpdateResponse>,
      MonitoringConfigCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<MonitoringConfigCreateOrUpdateResponse> => {
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
        roleName,
        resourceGroupName,
        monitoringMetricConfiguration,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      MonitoringConfigCreateOrUpdateResponse,
      OperationState<MonitoringConfigCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new metric configuration or updates an existing one for a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param monitoringMetricConfiguration The metric configuration.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    monitoringMetricConfiguration: MonitoringMetricConfiguration,
    options?: MonitoringConfigCreateOrUpdateOptionalParams,
  ): Promise<MonitoringConfigCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      roleName,
      resourceGroupName,
      monitoringMetricConfiguration,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * deletes a new metric configuration for a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigDeleteOptionalParams,
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
      args: { deviceName, roleName, resourceGroupName, options },
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
   * deletes a new metric configuration for a role.
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    options?: MonitoringConfigDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      roleName,
      resourceGroupName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param deviceName The device name.
   * @param roleName The role name.
   * @param resourceGroupName The resource group name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    deviceName: string,
    roleName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: MonitoringConfigListNextOptionalParams,
  ): Promise<MonitoringConfigListNextResponse> {
    return this.client.sendOperationRequest(
      { deviceName, roleName, resourceGroupName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringMetricConfigurationList,
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
    Parameters.roleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringMetricConfiguration,
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
    Parameters.roleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringMetricConfiguration,
    },
    201: {
      bodyMapper: Mappers.MonitoringMetricConfiguration,
    },
    202: {
      bodyMapper: Mappers.MonitoringMetricConfiguration,
    },
    204: {
      bodyMapper: Mappers.MonitoringMetricConfiguration,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.monitoringMetricConfiguration,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deviceName,
    Parameters.roleName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/{deviceName}/roles/{roleName}/monitoringConfig/default",
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
    Parameters.roleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MonitoringMetricConfigurationList,
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
    Parameters.roleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
