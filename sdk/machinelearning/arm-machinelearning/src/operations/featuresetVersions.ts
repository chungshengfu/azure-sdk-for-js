/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { FeaturesetVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServicesMgmtClient } from "../azureMachineLearningServicesMgmtClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  FeaturesetVersion,
  FeaturesetVersionsListNextOptionalParams,
  FeaturesetVersionsListOptionalParams,
  FeaturesetVersionsListResponse,
  FeaturesetVersionsDeleteOptionalParams,
  FeaturesetVersionsGetOptionalParams,
  FeaturesetVersionsGetResponse,
  FeaturesetVersionsCreateOrUpdateOptionalParams,
  FeaturesetVersionsCreateOrUpdateResponse,
  FeaturesetVersionBackfillRequest,
  FeaturesetVersionsBackfillOptionalParams,
  FeaturesetVersionsBackfillResponse,
  FeaturesetVersionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FeaturesetVersions operations. */
export class FeaturesetVersionsImpl implements FeaturesetVersions {
  private readonly client: AzureMachineLearningServicesMgmtClient;

  /**
   * Initialize a new instance of the class FeaturesetVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServicesMgmtClient) {
    this.client = client;
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Featureset name. This is case-sensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: FeaturesetVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<FeaturesetVersion> {
    const iter = this.listPagingAll(
      resourceGroupName,
      workspaceName,
      name,
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
          name,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: FeaturesetVersionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<FeaturesetVersion[]> {
    let result: FeaturesetVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        workspaceName,
        name,
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
        name,
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
    name: string,
    options?: FeaturesetVersionsListOptionalParams,
  ): AsyncIterableIterator<FeaturesetVersion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      workspaceName,
      name,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Featureset name. This is case-sensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    options?: FeaturesetVersionsListOptionalParams,
  ): Promise<FeaturesetVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, options },
      listOperationSpec,
    );
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: FeaturesetVersionsDeleteOptionalParams,
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
      args: { resourceGroupName, workspaceName, name, version, options },
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
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: FeaturesetVersionsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      name,
      version,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    options?: FeaturesetVersionsGetOptionalParams,
  ): Promise<FeaturesetVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, version, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: FeaturesetVersion,
    options?: FeaturesetVersionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FeaturesetVersionsCreateOrUpdateResponse>,
      FeaturesetVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<FeaturesetVersionsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, workspaceName, name, version, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      FeaturesetVersionsCreateOrUpdateResponse,
      OperationState<FeaturesetVersionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "original-uri",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: FeaturesetVersion,
    options?: FeaturesetVersionsCreateOrUpdateOptionalParams,
  ): Promise<FeaturesetVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      name,
      version,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Backfill.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Feature set version backfill request entity.
   * @param options The options parameters.
   */
  async beginBackfill(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: FeaturesetVersionBackfillRequest,
    options?: FeaturesetVersionsBackfillOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FeaturesetVersionsBackfillResponse>,
      FeaturesetVersionsBackfillResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<FeaturesetVersionsBackfillResponse> => {
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
      args: { resourceGroupName, workspaceName, name, version, body, options },
      spec: backfillOperationSpec,
    });
    const poller = await createHttpPoller<
      FeaturesetVersionsBackfillResponse,
      OperationState<FeaturesetVersionsBackfillResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Backfill.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Container name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Feature set version backfill request entity.
   * @param options The options parameters.
   */
  async beginBackfillAndWait(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    version: string,
    body: FeaturesetVersionBackfillRequest,
    options?: FeaturesetVersionsBackfillOptionalParams,
  ): Promise<FeaturesetVersionsBackfillResponse> {
    const poller = await this.beginBackfill(
      resourceGroupName,
      workspaceName,
      name,
      version,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param name Featureset name. This is case-sensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    workspaceName: string,
    name: string,
    nextLink: string,
    options?: FeaturesetVersionsListNextOptionalParams,
  ): Promise<FeaturesetVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, name, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeaturesetVersionResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.listViewType,
    Parameters.version1,
    Parameters.description,
    Parameters.tags1,
    Parameters.pageSize,
    Parameters.createdBy,
    Parameters.versionName,
    Parameters.stage,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}",
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
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeaturesetVersion,
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
    Parameters.version,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FeaturesetVersion,
    },
    201: {
      bodyMapper: Mappers.FeaturesetVersion,
    },
    202: {
      bodyMapper: Mappers.FeaturesetVersion,
    },
    204: {
      bodyMapper: Mappers.FeaturesetVersion,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const backfillOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/featuresets/{name}/versions/{version}/backfill",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FeaturesetVersionBackfillResponse,
    },
    201: {
      bodyMapper: Mappers.FeaturesetVersionBackfillResponse,
    },
    202: {
      bodyMapper: Mappers.FeaturesetVersionBackfillResponse,
    },
    204: {
      bodyMapper: Mappers.FeaturesetVersionBackfillResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body22,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.version,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeaturesetVersionResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
