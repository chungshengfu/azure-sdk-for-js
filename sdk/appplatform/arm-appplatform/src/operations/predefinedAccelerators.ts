/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PredefinedAccelerators } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PredefinedAcceleratorResource,
  PredefinedAcceleratorsListNextOptionalParams,
  PredefinedAcceleratorsListOptionalParams,
  PredefinedAcceleratorsListResponse,
  PredefinedAcceleratorsGetOptionalParams,
  PredefinedAcceleratorsGetResponse,
  PredefinedAcceleratorsDisableOptionalParams,
  PredefinedAcceleratorsEnableOptionalParams,
  PredefinedAcceleratorsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PredefinedAccelerators operations. */
export class PredefinedAcceleratorsImpl implements PredefinedAccelerators {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class PredefinedAccelerators class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Handle requests to list all predefined accelerators.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: PredefinedAcceleratorsListOptionalParams,
  ): PagedAsyncIterableIterator<PredefinedAcceleratorResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
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
          resourceGroupName,
          serviceName,
          applicationAcceleratorName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: PredefinedAcceleratorsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PredefinedAcceleratorResource[]> {
    let result: PredefinedAcceleratorsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
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
    serviceName: string,
    applicationAcceleratorName: string,
    options?: PredefinedAcceleratorsListOptionalParams,
  ): AsyncIterableIterator<PredefinedAcceleratorResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Handle requests to list all predefined accelerators.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    options?: PredefinedAcceleratorsListOptionalParams,
  ): Promise<PredefinedAcceleratorsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, applicationAcceleratorName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the predefined accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param predefinedAcceleratorName The name of the predefined accelerator.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    predefinedAcceleratorName: string,
    options?: PredefinedAcceleratorsGetOptionalParams,
  ): Promise<PredefinedAcceleratorsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        predefinedAcceleratorName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Disable predefined accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param predefinedAcceleratorName The name of the predefined accelerator.
   * @param options The options parameters.
   */
  async beginDisable(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    predefinedAcceleratorName: string,
    options?: PredefinedAcceleratorsDisableOptionalParams,
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
      args: {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        predefinedAcceleratorName,
        options,
      },
      spec: disableOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Disable predefined accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param predefinedAcceleratorName The name of the predefined accelerator.
   * @param options The options parameters.
   */
  async beginDisableAndWait(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    predefinedAcceleratorName: string,
    options?: PredefinedAcceleratorsDisableOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDisable(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
      predefinedAcceleratorName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Enable predefined accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param predefinedAcceleratorName The name of the predefined accelerator.
   * @param options The options parameters.
   */
  async beginEnable(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    predefinedAcceleratorName: string,
    options?: PredefinedAcceleratorsEnableOptionalParams,
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
      args: {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        predefinedAcceleratorName,
        options,
      },
      spec: enableOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Enable predefined accelerator.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param predefinedAcceleratorName The name of the predefined accelerator.
   * @param options The options parameters.
   */
  async beginEnableAndWait(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    predefinedAcceleratorName: string,
    options?: PredefinedAcceleratorsEnableOptionalParams,
  ): Promise<void> {
    const poller = await this.beginEnable(
      resourceGroupName,
      serviceName,
      applicationAcceleratorName,
      predefinedAcceleratorName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param applicationAcceleratorName The name of the application accelerator.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    applicationAcceleratorName: string,
    nextLink: string,
    options?: PredefinedAcceleratorsListNextOptionalParams,
  ): Promise<PredefinedAcceleratorsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        applicationAcceleratorName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PredefinedAcceleratorResourceCollection,
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
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PredefinedAcceleratorResource,
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
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.predefinedAcceleratorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const disableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}/disable",
  httpMethod: "POST",
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
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.predefinedAcceleratorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const enableOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/applicationAccelerators/{applicationAcceleratorName}/predefinedAccelerators/{predefinedAcceleratorName}/enable",
  httpMethod: "POST",
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
    Parameters.serviceName,
    Parameters.applicationAcceleratorName,
    Parameters.predefinedAcceleratorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PredefinedAcceleratorResourceCollection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.nextLink,
    Parameters.applicationAcceleratorName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
