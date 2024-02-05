/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Tasks } from "../operationsInterfaces";
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
  Task,
  TasksListNextOptionalParams,
  TasksListOptionalParams,
  TasksListResponse,
  TasksGetOptionalParams,
  TasksGetResponse,
  TasksCreateOptionalParams,
  TasksCreateResponse,
  TasksDeleteOptionalParams,
  TaskUpdateParameters,
  TasksUpdateOptionalParams,
  TasksUpdateResponse,
  TasksGetDetailsOptionalParams,
  TasksGetDetailsResponse,
  TasksListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Tasks operations. */
export class TasksImpl implements Tasks {
  private readonly client: ContainerRegistryManagementClient;

  /**
   * Initialize a new instance of the class Tasks class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerRegistryManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the tasks for a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    options?: TasksListOptionalParams,
  ): PagedAsyncIterableIterator<Task> {
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
    options?: TasksListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Task[]> {
    let result: TasksListResponse;
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
    options?: TasksListOptionalParams,
  ): AsyncIterableIterator<Task> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the tasks for a specified container registry.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    options?: TasksListOptionalParams,
  ): Promise<TasksListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the properties of a specified task.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    options?: TasksGetOptionalParams,
  ): Promise<TasksGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, taskName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates a task for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param taskCreateParameters The parameters for creating a task.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    taskCreateParameters: Task,
    options?: TasksCreateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<TasksCreateResponse>, TasksCreateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TasksCreateResponse> => {
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
        taskName,
        taskCreateParameters,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      TasksCreateResponse,
      OperationState<TasksCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a task for a container registry with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param taskCreateParameters The parameters for creating a task.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    taskCreateParameters: Task,
    options?: TasksCreateOptionalParams,
  ): Promise<TasksCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      registryName,
      taskName,
      taskCreateParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a specified task.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    options?: TasksDeleteOptionalParams,
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
      args: { resourceGroupName, registryName, taskName, options },
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
   * Deletes a specified task.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    options?: TasksDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      taskName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a task with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param taskUpdateParameters The parameters for updating a task.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    taskUpdateParameters: TaskUpdateParameters,
    options?: TasksUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<OperationState<TasksUpdateResponse>, TasksUpdateResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<TasksUpdateResponse> => {
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
        taskName,
        taskUpdateParameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      TasksUpdateResponse,
      OperationState<TasksUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a task with the specified parameters.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param taskUpdateParameters The parameters for updating a task.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    taskUpdateParameters: TaskUpdateParameters,
    options?: TasksUpdateOptionalParams,
  ): Promise<TasksUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      registryName,
      taskName,
      taskUpdateParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns a task with extended information that includes all secrets.
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param taskName The name of the container registry task.
   * @param options The options parameters.
   */
  getDetails(
    resourceGroupName: string,
    registryName: string,
    taskName: string,
    options?: TasksGetDetailsOptionalParams,
  ): Promise<TasksGetDetailsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, taskName, options },
      getDetailsOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group to which the container registry belongs.
   * @param registryName The name of the container registry.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    nextLink: string,
    options?: TasksListNextOptionalParams,
  ): Promise<TasksListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TaskListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Task,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.taskName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Task,
    },
    201: {
      bodyMapper: Mappers.Task,
    },
    202: {
      bodyMapper: Mappers.Task,
    },
    204: {
      bodyMapper: Mappers.Task,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  requestBody: Parameters.taskCreateParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.taskName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.taskName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Task,
    },
    201: {
      bodyMapper: Mappers.Task,
    },
    202: {
      bodyMapper: Mappers.Task,
    },
    204: {
      bodyMapper: Mappers.Task,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  requestBody: Parameters.taskUpdateParameters,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.taskName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerRegistry/registries/{registryName}/tasks/{taskName}/listDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Task,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.resourceGroupName1,
    Parameters.taskName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TaskListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponseForContainerRegistry,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.registryName,
    Parameters.nextLink,
    Parameters.resourceGroupName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
