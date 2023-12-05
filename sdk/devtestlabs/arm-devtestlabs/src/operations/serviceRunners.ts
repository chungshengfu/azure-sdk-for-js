/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ServiceRunners } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ServiceRunner,
  ServiceRunnersListNextOptionalParams,
  ServiceRunnersListOptionalParams,
  ServiceRunnersListResponse,
  ServiceRunnersGetOptionalParams,
  ServiceRunnersGetResponse,
  ServiceRunnersCreateOrUpdateOptionalParams,
  ServiceRunnersCreateOrUpdateResponse,
  ServiceRunnersDeleteOptionalParams,
  ServiceRunnersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServiceRunners operations. */
export class ServiceRunnersImpl implements ServiceRunners {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class ServiceRunners class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List service runners in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    options?: ServiceRunnersListOptionalParams
  ): PagedAsyncIterableIterator<ServiceRunner> {
    const iter = this.listPagingAll(resourceGroupName, labName, options);
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
          labName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    options?: ServiceRunnersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ServiceRunner[]> {
    let result: ServiceRunnersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, labName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    options?: ServiceRunnersListOptionalParams
  ): AsyncIterableIterator<ServiceRunner> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List service runners in a given lab.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    options?: ServiceRunnersListOptionalParams
  ): Promise<ServiceRunnersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, options },
      listOperationSpec
    );
  }

  /**
   * Get service runner.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ServiceRunnersGetOptionalParams
  ): Promise<ServiceRunnersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing Service runner. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param serviceRunner A container for a managed identity to execute DevTest lab services.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    serviceRunner: ServiceRunner,
    options?: ServiceRunnersCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServiceRunnersCreateOrUpdateResponse>,
      ServiceRunnersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ServiceRunnersCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, labName, name, serviceRunner, options },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ServiceRunnersCreateOrUpdateResponse,
      OperationState<ServiceRunnersCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or replace an existing Service runner. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param serviceRunner A container for a managed identity to execute DevTest lab services.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    serviceRunner: ServiceRunner,
    options?: ServiceRunnersCreateOrUpdateOptionalParams
  ): Promise<ServiceRunnersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      labName,
      name,
      serviceRunner,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete service runner. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ServiceRunnersDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, labName, name, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete service runner. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ServiceRunnersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      labName,
      name,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    nextLink: string,
    options?: ServiceRunnersListNextOptionalParams
  ): Promise<ServiceRunnersListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRunnerList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRunner
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRunner
    },
    201: {
      bodyMapper: Mappers.ServiceRunner
    },
    202: {
      bodyMapper: Mappers.ServiceRunner
    },
    204: {
      bodyMapper: Mappers.ServiceRunner
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.serviceRunner,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/servicerunners/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceRunnerList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
