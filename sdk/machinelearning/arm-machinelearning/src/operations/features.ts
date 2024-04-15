/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Features } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import {
  Feature,
  FeaturesListNextOptionalParams,
  FeaturesListOptionalParams,
  FeaturesListResponse,
  FeaturesGetOptionalParams,
  FeaturesGetResponse,
  FeaturesListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Features operations. */
export class FeaturesImpl implements Features {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class Features class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * List Features.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param featuresetName Featureset name. This is case-sensitive.
   * @param featuresetVersion Featureset Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    featuresetName: string,
    featuresetVersion: string,
    options?: FeaturesListOptionalParams,
  ): PagedAsyncIterableIterator<Feature> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      featuresetName,
      featuresetVersion,
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
          workspaceName,
          featuresetName,
          featuresetVersion,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    featuresetName: string,
    featuresetVersion: string,
    options?: FeaturesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Feature[]> {
    let result: FeaturesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        featuresetName,
        featuresetVersion,
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
        workspaceName,
        featuresetName,
        featuresetVersion,
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
    workspaceName: string,
    featuresetName: string,
    featuresetVersion: string,
    options?: FeaturesListOptionalParams,
  ): AsyncIterableIterator<Feature> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      featuresetName,
      featuresetVersion,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List Features.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param featuresetName Featureset name. This is case-sensitive.
   * @param featuresetVersion Featureset Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    featuresetName: string,
    featuresetVersion: string,
    options?: FeaturesListOptionalParams,
  ): Promise<FeaturesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        featuresetName,
        featuresetVersion,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * Get feature.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param featuresetName Feature set name. This is case-sensitive.
   * @param featuresetVersion Feature set version identifier. This is case-sensitive.
   * @param featureName Feature Name. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    featuresetName: string,
    featuresetVersion: string,
    featureName: string,
    options?: FeaturesGetOptionalParams,
  ): Promise<FeaturesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        featuresetName,
        featuresetVersion,
        featureName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param featuresetName Featureset name. This is case-sensitive.
   * @param featuresetVersion Featureset Version identifier. This is case-sensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    featuresetName: string,
    featuresetVersion: string,
    nextLink: string,
    options?: FeaturesListNextOptionalParams,
  ): Promise<FeaturesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        featuresetName,
        featuresetVersion,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{featuresetName}/versions/{featuresetVersion}/features",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.listViewType,
    Parameters.description,
    Parameters.tags1,
    Parameters.featureName,
    Parameters.pageSize1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.featuresetName,
    Parameters.featuresetVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{featuresetName}/versions/{featuresetVersion}/features/{featureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Feature,
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
    Parameters.workspaceName,
    Parameters.featuresetName,
    Parameters.featuresetVersion,
    Parameters.featureName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.featuresetName,
    Parameters.featuresetVersion,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
