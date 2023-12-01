/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ScriptPackages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import {
  ScriptPackage,
  ScriptPackagesListByPrivateCloudNextOptionalParams,
  ScriptPackagesListByPrivateCloudOptionalParams,
  ScriptPackagesListByPrivateCloudResponse,
  ScriptPackagesGetOptionalParams,
  ScriptPackagesGetResponse,
  ScriptPackagesListByPrivateCloudNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScriptPackages operations. */
export class ScriptPackagesImpl implements ScriptPackages {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class ScriptPackages class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List script packages available to run on the private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  public listByPrivateCloud(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams
  ): PagedAsyncIterableIterator<ScriptPackage> {
    const iter = this.listByPrivateCloudPagingAll(
      resourceGroupName,
      privateCloudName,
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
        return this.listByPrivateCloudPagingPage(
          resourceGroupName,
          privateCloudName,
          options,
          settings
        );
      }
    };
  }

  private async *listByPrivateCloudPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ScriptPackage[]> {
    let result: ScriptPackagesListByPrivateCloudResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByPrivateCloud(
        resourceGroupName,
        privateCloudName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByPrivateCloudNext(
        resourceGroupName,
        privateCloudName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByPrivateCloudPagingAll(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams
  ): AsyncIterableIterator<ScriptPackage> {
    for await (const page of this.listByPrivateCloudPagingPage(
      resourceGroupName,
      privateCloudName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List script packages available to run on the private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The options parameters.
   */
  private _listByPrivateCloud(
    resourceGroupName: string,
    privateCloudName: string,
    options?: ScriptPackagesListByPrivateCloudOptionalParams
  ): Promise<ScriptPackagesListByPrivateCloudResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, options },
      listByPrivateCloudOperationSpec
    );
  }

  /**
   * Get a script package available to run on a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptPackageName Name of the script package in the private cloud
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptPackagesGetOptionalParams
  ): Promise<ScriptPackagesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, scriptPackageName, options },
      getOperationSpec
    );
  }

  /**
   * ListByPrivateCloudNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param nextLink The nextLink from the previous successful call to the ListByPrivateCloud method.
   * @param options The options parameters.
   */
  private _listByPrivateCloudNext(
    resourceGroupName: string,
    privateCloudName: string,
    nextLink: string,
    options?: ScriptPackagesListByPrivateCloudNextOptionalParams
  ): Promise<ScriptPackagesListByPrivateCloudNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, nextLink, options },
      listByPrivateCloudNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByPrivateCloudOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptPackageListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptPackage
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptPackageName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByPrivateCloudNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptPackageListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId1,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
