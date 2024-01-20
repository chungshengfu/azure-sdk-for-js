/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { PipelineRuns } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerRegistryManagementClient } from "../containerRegistryManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  PipelineRun,
  PipelineRunsListNextOptionalParams,
  PipelineRunsListOptionalParams,
  PipelineRunsListResponse,
  PipelineRunsGetOptionalParams,
  PipelineRunsGetResponse,
  PipelineRunsCreateOptionalParams,
  PipelineRunsCreateResponse,
  PipelineRunsDeleteOptionalParams,
  PipelineRunsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing PipelineRuns operations. */
export class PipelineRunsImpl implements PipelineRuns {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class PipelineRuns class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the pipeline runs for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: PipelineRunsListOptionalParams,
  ): PagedAsyncIterableIterator<PipelineRun> {
    const iter = this.listPagingAll(resourceGroupName, registryName, options);
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
          registryName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    options?: PipelineRunsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PipelineRun[]> {
    let result: PipelineRunsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, registryName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        registryName,
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
    registryName: string,
    options?: PipelineRunsListOptionalParams,
  ): AsyncIterableIterator<PipelineRun> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the pipeline runs for the specified container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: PipelineRunsListOptionalParams,
  ): Promise<PipelineRunsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets the detailed information for a given pipeline run.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param pipelineRunName The name of the pipeline run.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    pipelineRunName: string,
    options?: PipelineRunsGetOptionalParams,
  ): Promise<PipelineRunsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, pipelineRunName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a pipeline run for a container registry with the specified parameters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param pipelineRunName The name of the pipeline run.
   * @param pipelineRunCreateParameters The parameters for creating a pipeline run.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    registryName: string,
    pipelineRunName: string,
    pipelineRunCreateParameters: PipelineRun,
    options?: PipelineRunsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PipelineRunsCreateResponse>,
      PipelineRunsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<PipelineRunsCreateResponse> => {
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
        registryName,
        pipelineRunName,
        pipelineRunCreateParameters,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      PipelineRunsCreateResponse,
      OperationState<PipelineRunsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a pipeline run for a container registry with the specified parameters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param pipelineRunName The name of the pipeline run.
   * @param pipelineRunCreateParameters The parameters for creating a pipeline run.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    pipelineRunName: string,
    pipelineRunCreateParameters: PipelineRun,
    options?: PipelineRunsCreateOptionalParams,
  ): Promise<PipelineRunsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      registryName,
      pipelineRunName,
      pipelineRunCreateParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a pipeline run from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param pipelineRunName The name of the pipeline run.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    pipelineRunName: string,
    options?: PipelineRunsDeleteOptionalParams,
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
      args: { resourceGroupName, registryName, pipelineRunName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a pipeline run from a container registry.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param pipelineRunName The name of the pipeline run.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    pipelineRunName: string,
    options?: PipelineRunsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      pipelineRunName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: PipelineRunsListNextOptionalParams,
  ): Promise<PipelineRunsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRunListResult,
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
    Parameters.registryName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns/{pipelineRunName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRun,
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
    Parameters.registryName,
    Parameters.pipelineRunName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns/{pipelineRunName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRun,
    },
    201: {
      bodyMapper: Mappers.PipelineRun,
    },
    202: {
      bodyMapper: Mappers.PipelineRun,
    },
    204: {
      bodyMapper: Mappers.PipelineRun,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.pipelineRunCreateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.pipelineRunName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/pipelineRuns/{pipelineRunName}",
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
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.pipelineRunName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PipelineRunListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
