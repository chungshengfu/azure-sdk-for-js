/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Artifacts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import {
  Artifact,
  ArtifactsListNextOptionalParams,
  ArtifactsListOptionalParams,
  ArtifactsListResponse,
  ArtifactsGetOptionalParams,
  ArtifactsGetResponse,
  GenerateArmTemplateRequest,
  ArtifactsGenerateArmTemplateOptionalParams,
  ArtifactsGenerateArmTemplateResponse,
  ArtifactsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Artifacts operations. */
export class ArtifactsImpl implements Artifacts {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Artifacts class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List artifacts in a given artifact source.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    artifactSourceName: string,
    options?: ArtifactsListOptionalParams
  ): PagedAsyncIterableIterator<Artifact> {
    const iter = this.listPagingAll(
      resourceGroupName,
      labName,
      artifactSourceName,
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
          labName,
          artifactSourceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    artifactSourceName: string,
    options?: ArtifactsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Artifact[]> {
    let result: ArtifactsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        labName,
        artifactSourceName,
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
        labName,
        artifactSourceName,
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
    artifactSourceName: string,
    options?: ArtifactsListOptionalParams
  ): AsyncIterableIterator<Artifact> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      artifactSourceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List artifacts in a given artifact source.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    artifactSourceName: string,
    options?: ArtifactsListOptionalParams
  ): Promise<ArtifactsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, artifactSourceName, options },
      listOperationSpec
    );
  }

  /**
   * Get artifact.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param name The name of the artifact.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    artifactSourceName: string,
    name: string,
    options?: ArtifactsGetOptionalParams
  ): Promise<ArtifactsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, artifactSourceName, name, options },
      getOperationSpec
    );
  }

  /**
   * Generates an ARM template for the given artifact, uploads the required files to a storage account,
   * and validates the generated artifact.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param name The name of the artifact.
   * @param generateArmTemplateRequest Parameters for generating an ARM template for deploying artifacts.
   * @param options The options parameters.
   */
  generateArmTemplate(
    resourceGroupName: string,
    labName: string,
    artifactSourceName: string,
    name: string,
    generateArmTemplateRequest: GenerateArmTemplateRequest,
    options?: ArtifactsGenerateArmTemplateOptionalParams
  ): Promise<ArtifactsGenerateArmTemplateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        artifactSourceName,
        name,
        generateArmTemplateRequest,
        options
      },
      generateArmTemplateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param artifactSourceName The name of the artifact source.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    artifactSourceName: string,
    nextLink: string,
    options?: ArtifactsListNextOptionalParams
  ): Promise<ArtifactsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, artifactSourceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArtifactList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.artifactSourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Artifact
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.artifactSourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const generateArmTemplateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/artifactsources/{artifactSourceName}/artifacts/{name}/generateArmTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ArmTemplateInfo
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.generateArmTemplateRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.artifactSourceName
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
      bodyMapper: Mappers.ArtifactList
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
    Parameters.labName,
    Parameters.artifactSourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
