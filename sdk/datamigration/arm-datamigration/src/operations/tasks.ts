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
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import {
  ProjectTask,
  TasksListNextOptionalParams,
  TasksListOptionalParams,
  TasksListResponse,
  TasksCreateOrUpdateOptionalParams,
  TasksCreateOrUpdateResponse,
  TasksGetOptionalParams,
  TasksGetResponse,
  TasksDeleteOptionalParams,
  TasksUpdateOptionalParams,
  TasksUpdateResponse,
  TasksCancelOptionalParams,
  TasksCancelResponse,
  CommandPropertiesUnion,
  TasksCommandOptionalParams,
  TasksCommandResponse,
  TasksListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Tasks operations. */
export class TasksImpl implements Tasks {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class Tasks class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of tasks owned by a service resource. Some tasks may have a status of Unknown,
   * which indicates that an error occurred while querying the status of that task.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  public list(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: TasksListOptionalParams
  ): PagedAsyncIterableIterator<ProjectTask> {
    const iter = this.listPagingAll(
      groupName,
      serviceName,
      projectName,
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
        return this.listPagingPage(
          groupName,
          serviceName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: TasksListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProjectTask[]> {
    let result: TasksListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(groupName, serviceName, projectName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        groupName,
        serviceName,
        projectName,
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
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: TasksListOptionalParams
  ): AsyncIterableIterator<ProjectTask> {
    for await (const page of this.listPagingPage(
      groupName,
      serviceName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The services resource is the top-level resource that represents the Database Migration Service. This
   * method returns a list of tasks owned by a service resource. Some tasks may have a status of Unknown,
   * which indicates that an error occurred while querying the status of that task.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  private _list(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: TasksListOptionalParams
  ): Promise<TasksListResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, options },
      listOperationSpec
    );
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance.
   * The PUT method creates a new task or updates an existing one, although since tasks have no mutable
   * custom properties, there is little reason to update an existing one.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param parameters Information about the task
   * @param options The options parameters.
   */
  createOrUpdate(
    groupName: string,
    serviceName: string,
    projectName: string,
    taskName: string,
    parameters: ProjectTask,
    options?: TasksCreateOrUpdateOptionalParams
  ): Promise<TasksCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, taskName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance.
   * The GET method retrieves information about a task.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The options parameters.
   */
  get(
    groupName: string,
    serviceName: string,
    projectName: string,
    taskName: string,
    options?: TasksGetOptionalParams
  ): Promise<TasksGetResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, taskName, options },
      getOperationSpec
    );
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance.
   * The DELETE method deletes a task, canceling it first if it's running.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The options parameters.
   */
  delete(
    groupName: string,
    serviceName: string,
    projectName: string,
    taskName: string,
    options?: TasksDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, taskName, options },
      deleteOperationSpec
    );
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance.
   * The PATCH method updates an existing task, but since tasks have no mutable custom properties, there
   * is little reason to do so.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param parameters Information about the task
   * @param options The options parameters.
   */
  update(
    groupName: string,
    serviceName: string,
    projectName: string,
    taskName: string,
    parameters: ProjectTask,
    options?: TasksUpdateOptionalParams
  ): Promise<TasksUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, taskName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance.
   * This method cancels a task if it's currently queued or running.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param options The options parameters.
   */
  cancel(
    groupName: string,
    serviceName: string,
    projectName: string,
    taskName: string,
    options?: TasksCancelOptionalParams
  ): Promise<TasksCancelResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, taskName, options },
      cancelOperationSpec
    );
  }

  /**
   * The tasks resource is a nested, proxy-only resource representing work performed by a DMS instance.
   * This method executes a command on a running task.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param taskName Name of the Task
   * @param parameters Command to execute
   * @param options The options parameters.
   */
  command(
    groupName: string,
    serviceName: string,
    projectName: string,
    taskName: string,
    parameters: CommandPropertiesUnion,
    options?: TasksCommandOptionalParams
  ): Promise<TasksCommandResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, taskName, parameters, options },
      commandOperationSpec
    );
  }

  /**
   * ListNext
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    groupName: string,
    serviceName: string,
    projectName: string,
    nextLink: string,
    options?: TasksListNextOptionalParams
  ): Promise<TasksListNextResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TaskList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.taskType],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    201: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.deleteRunningTasks],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectTask
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const commandOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}/tasks/{taskName}/command",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CommandProperties
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TaskList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
