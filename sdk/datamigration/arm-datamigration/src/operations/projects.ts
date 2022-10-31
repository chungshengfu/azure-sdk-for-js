/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Projects } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import {
  Project,
  ProjectsListNextOptionalParams,
  ProjectsListOptionalParams,
  ProjectsListResponse,
  ProjectsCreateOrUpdateOptionalParams,
  ProjectsCreateOrUpdateResponse,
  ProjectsGetOptionalParams,
  ProjectsGetResponse,
  ProjectsDeleteOptionalParams,
  ProjectsUpdateOptionalParams,
  ProjectsUpdateResponse,
  ProjectsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Projects operations. */
export class ProjectsImpl implements Projects {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class Projects class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of projects owned by a service resource.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  public list(
    groupName: string,
    serviceName: string,
    options?: ProjectsListOptionalParams
  ): PagedAsyncIterableIterator<Project> {
    const iter = this.listPagingAll(groupName, serviceName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(groupName, serviceName, options);
      }
    };
  }

  private async *listPagingPage(
    groupName: string,
    serviceName: string,
    options?: ProjectsListOptionalParams
  ): AsyncIterableIterator<Project[]> {
    let result = await this._list(groupName, serviceName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        groupName,
        serviceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    groupName: string,
    serviceName: string,
    options?: ProjectsListOptionalParams
  ): AsyncIterableIterator<Project> {
    for await (const page of this.listPagingPage(
      groupName,
      serviceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * The project resource is a nested resource representing a stored migration project. This method
   * returns a list of projects owned by a service resource.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param options The options parameters.
   */
  private _list(
    groupName: string,
    serviceName: string,
    options?: ProjectsListOptionalParams
  ): Promise<ProjectsListResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, options },
      listOperationSpec
    );
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The PUT method
   * creates a new project or updates an existing one.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param parameters Information about the project
   * @param options The options parameters.
   */
  createOrUpdate(
    groupName: string,
    serviceName: string,
    projectName: string,
    parameters: Project,
    options?: ProjectsCreateOrUpdateOptionalParams
  ): Promise<ProjectsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The GET method
   * retrieves information about a project.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  get(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: ProjectsGetOptionalParams
  ): Promise<ProjectsGetResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, options },
      getOperationSpec
    );
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The DELETE method
   * deletes a project.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param options The options parameters.
   */
  delete(
    groupName: string,
    serviceName: string,
    projectName: string,
    options?: ProjectsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, options },
      deleteOperationSpec
    );
  }

  /**
   * The project resource is a nested resource representing a stored migration project. The PATCH method
   * updates an existing project.
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param projectName Name of the project
   * @param parameters Information about the project
   * @param options The options parameters.
   */
  update(
    groupName: string,
    serviceName: string,
    projectName: string,
    parameters: Project,
    options?: ProjectsUpdateOptionalParams
  ): Promise<ProjectsUpdateResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, projectName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param groupName Name of the resource group
   * @param serviceName Name of the service
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    groupName: string,
    serviceName: string,
    nextLink: string,
    options?: ProjectsListNextOptionalParams
  ): Promise<ProjectsListNextResponse> {
    return this.client.sendOperationRequest(
      { groupName, serviceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProjectList
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
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    201: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Project
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
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
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
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{groupName}/providers/Microsoft.DataMigration/services/{serviceName}/projects/{projectName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Project
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.groupName,
    Parameters.serviceName,
    Parameters.projectName
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
      bodyMapper: Mappers.ProjectList
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.groupName,
    Parameters.serviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
