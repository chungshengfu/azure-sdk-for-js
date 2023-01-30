/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Jobs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2 } from "../azureMigrateV2";
import {
  VMwareJob,
  JobsGetAllJobsInSiteNextOptionalParams,
  JobsGetAllJobsInSiteOptionalParams,
  JobsGetAllJobsInSiteResponse,
  JobsGetJobOptionalParams,
  JobsGetJobResponse,
  JobsGetAllJobsInSiteNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Jobs operations. */
export class JobsImpl implements Jobs {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class Jobs class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateV2) {
    this.client = client;
  }

  /**
   * Method to get all jobs in a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  public listAllJobsInSite(
    resourceGroupName: string,
    siteName: string,
    options?: JobsGetAllJobsInSiteOptionalParams
  ): PagedAsyncIterableIterator<VMwareJob> {
    const iter = this.getAllJobsInSitePagingAll(
      resourceGroupName,
      siteName,
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
        return this.getAllJobsInSitePagingPage(
          resourceGroupName,
          siteName,
          options,
          settings
        );
      }
    };
  }

  private async *getAllJobsInSitePagingPage(
    resourceGroupName: string,
    siteName: string,
    options?: JobsGetAllJobsInSiteOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<VMwareJob[]> {
    let result: JobsGetAllJobsInSiteResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getAllJobsInSite(
        resourceGroupName,
        siteName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getAllJobsInSiteNext(
        resourceGroupName,
        siteName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getAllJobsInSitePagingAll(
    resourceGroupName: string,
    siteName: string,
    options?: JobsGetAllJobsInSiteOptionalParams
  ): AsyncIterableIterator<VMwareJob> {
    for await (const page of this.getAllJobsInSitePagingPage(
      resourceGroupName,
      siteName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Method to get job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param jobName Job ARM name.
   * @param options The options parameters.
   */
  getJob(
    resourceGroupName: string,
    siteName: string,
    jobName: string,
    options?: JobsGetJobOptionalParams
  ): Promise<JobsGetJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, jobName, options },
      getJobOperationSpec
    );
  }

  /**
   * Method to get all jobs in a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  private _getAllJobsInSite(
    resourceGroupName: string,
    siteName: string,
    options?: JobsGetAllJobsInSiteOptionalParams
  ): Promise<JobsGetAllJobsInSiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getAllJobsInSiteOperationSpec
    );
  }

  /**
   * GetAllJobsInSiteNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param nextLink The nextLink from the previous successful call to the GetAllJobsInSite method.
   * @param options The options parameters.
   */
  private _getAllJobsInSiteNext(
    resourceGroupName: string,
    siteName: string,
    nextLink: string,
    options?: JobsGetAllJobsInSiteNextOptionalParams
  ): Promise<JobsGetAllJobsInSiteNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, nextLink, options },
      getAllJobsInSiteNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}/jobs/{jobName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareJob
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
    Parameters.siteName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllJobsInSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}/jobs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareJobCollection
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
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAllJobsInSiteNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareJobCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
