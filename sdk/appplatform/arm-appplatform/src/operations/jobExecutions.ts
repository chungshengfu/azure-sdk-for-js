/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { JobExecutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  JobExecution,
  JobExecutionsListNextOptionalParams,
  JobExecutionsListOptionalParams,
  JobExecutionsListResponse,
  JobExecutionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobExecutions operations. */
export class JobExecutionsImpl implements JobExecutions {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class JobExecutions class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Get executions of a Azure Spring Apps Job
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    options?: JobExecutionsListOptionalParams,
  ): PagedAsyncIterableIterator<JobExecution> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      jobName,
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
          jobName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    options?: JobExecutionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JobExecution[]> {
    let result: JobExecutionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        jobName,
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
        jobName,
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
    jobName: string,
    options?: JobExecutionsListOptionalParams,
  ): AsyncIterableIterator<JobExecution> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      jobName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get executions of a Azure Spring Apps Job
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    options?: JobExecutionsListOptionalParams,
  ): Promise<JobExecutionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, jobName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    nextLink: string,
    options?: JobExecutionsListNextOptionalParams,
  ): Promise<JobExecutionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, jobName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/jobs/{jobName}/executions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionCollection,
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
    Parameters.jobName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecutionCollection,
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
    Parameters.jobName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
