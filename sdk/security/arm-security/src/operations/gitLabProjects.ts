/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { GitLabProjects } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  GitLabProject,
  GitLabProjectsListNextOptionalParams,
  GitLabProjectsListOptionalParams,
  GitLabProjectsListResponse,
  GitLabProjectsGetOptionalParams,
  GitLabProjectsGetResponse,
  GitLabProjectsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GitLabProjects operations. */
export class GitLabProjectsImpl implements GitLabProjects {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class GitLabProjects class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of GitLab projects that are directly owned by given group and onboarded to the
   * connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabProjectsListOptionalParams
  ): PagedAsyncIterableIterator<GitLabProject> {
    const iter = this.listPagingAll(
      resourceGroupName,
      securityConnectorName,
      groupFQName,
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
          resourceGroupName,
          securityConnectorName,
          groupFQName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabProjectsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<GitLabProject[]> {
    let result: GitLabProjectsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        securityConnectorName,
        groupFQName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        securityConnectorName,
        groupFQName,
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
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabProjectsListOptionalParams
  ): AsyncIterableIterator<GitLabProject> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      securityConnectorName,
      groupFQName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of GitLab projects that are directly owned by given group and onboarded to the
   * connector.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    options?: GitLabProjectsListOptionalParams
  ): Promise<GitLabProjectsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, groupFQName, options },
      listOperationSpec
    );
  }

  /**
   * Returns a monitored GitLab Project resource for a given fully-qualified group name and project name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param projectName The project name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    projectName: string,
    options?: GitLabProjectsGetOptionalParams
  ): Promise<GitLabProjectsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityConnectorName,
        groupFQName,
        projectName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param securityConnectorName The security connector name.
   * @param groupFQName The GitLab group fully-qualified name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    securityConnectorName: string,
    groupFQName: string,
    nextLink: string,
    options?: GitLabProjectsListNextOptionalParams
  ): Promise<GitLabProjectsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        securityConnectorName,
        groupFQName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/gitLabGroups/{groupFQName}/projects",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitLabProjectListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion24],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.groupFQName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/devops/default/gitLabGroups/{groupFQName}/projects/{projectName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitLabProject
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion24],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.projectName,
    Parameters.groupFQName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GitLabProjectListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.securityConnectorName,
    Parameters.resourceGroupName1,
    Parameters.groupFQName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
