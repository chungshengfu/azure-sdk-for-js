/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RegistryCodeVersions } from "../operationsInterfaces";
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
  CodeVersion,
  RegistryCodeVersionsListNextOptionalParams,
  RegistryCodeVersionsListOptionalParams,
  RegistryCodeVersionsListResponse,
  RegistryCodeVersionsDeleteOptionalParams,
  RegistryCodeVersionsGetOptionalParams,
  RegistryCodeVersionsGetResponse,
  RegistryCodeVersionsCreateOrUpdateOptionalParams,
  RegistryCodeVersionsCreateOrUpdateResponse,
  PendingUploadRequestDto,
  RegistryCodeVersionsCreateOrGetStartPendingUploadOptionalParams,
  RegistryCodeVersionsCreateOrGetStartPendingUploadResponse,
  RegistryCodeVersionsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RegistryCodeVersions operations. */
export class RegistryCodeVersionsImpl implements RegistryCodeVersions {
  private readonly client: AzureMachineLearningServicesMgmtClient;

  /**
   * Initialize a new instance of the class RegistryCodeVersions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServicesMgmtClient) {
    this.client = client;
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    options?: RegistryCodeVersionsListOptionalParams,
  ): PagedAsyncIterableIterator<CodeVersion> {
    const iter = this.listPagingAll(
      resourceGroupName,
      registryName,
      codeName,
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
          registryName,
          codeName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    options?: RegistryCodeVersionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<CodeVersion[]> {
    let result: RegistryCodeVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        registryName,
        codeName,
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
        registryName,
        codeName,
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
    codeName: string,
    options?: RegistryCodeVersionsListOptionalParams,
  ): AsyncIterableIterator<CodeVersion> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      registryName,
      codeName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List versions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    options?: RegistryCodeVersionsListOptionalParams,
  ): Promise<RegistryCodeVersionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, codeName, options },
      listOperationSpec,
    );
  }

  /**
   * Delete version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    version: string,
    options?: RegistryCodeVersionsDeleteOptionalParams,
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
      args: { resourceGroupName, registryName, codeName, version, options },
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
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    version: string,
    options?: RegistryCodeVersionsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      registryName,
      codeName,
      version,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param version Version identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    version: string,
    options?: RegistryCodeVersionsGetOptionalParams,
  ): Promise<RegistryCodeVersionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, codeName, version, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    version: string,
    body: CodeVersion,
    options?: RegistryCodeVersionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<RegistryCodeVersionsCreateOrUpdateResponse>,
      RegistryCodeVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<RegistryCodeVersionsCreateOrUpdateResponse> => {
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
        codeName,
        version,
        body,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      RegistryCodeVersionsCreateOrUpdateResponse,
      OperationState<RegistryCodeVersionsCreateOrUpdateResponse>
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
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param version Version identifier.
   * @param body Version entity to create or update.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    version: string,
    body: CodeVersion,
    options?: RegistryCodeVersionsCreateOrUpdateOptionalParams,
  ): Promise<RegistryCodeVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      registryName,
      codeName,
      version,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Generate a storage location and credential for the client to upload a code asset to.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Pending upload name. This is case-sensitive.
   * @param version Version identifier. This is case-sensitive.
   * @param body Pending upload request object
   * @param options The options parameters.
   */
  createOrGetStartPendingUpload(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    version: string,
    body: PendingUploadRequestDto,
    options?: RegistryCodeVersionsCreateOrGetStartPendingUploadOptionalParams,
  ): Promise<RegistryCodeVersionsCreateOrGetStartPendingUploadResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, codeName, version, body, options },
      createOrGetStartPendingUploadOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param codeName Container name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    registryName: string,
    codeName: string,
    nextLink: string,
    options?: RegistryCodeVersionsListNextOptionalParams,
  ): Promise<RegistryCodeVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, codeName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CodeVersionResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.orderBy,
    Parameters.top,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.codeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}",
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
    Parameters.registryName,
    Parameters.codeName,
    Parameters.version,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CodeVersion,
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
    Parameters.registryName,
    Parameters.codeName,
    Parameters.version,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.CodeVersion,
    },
    201: {
      bodyMapper: Mappers.CodeVersion,
    },
    202: {
      bodyMapper: Mappers.CodeVersion,
    },
    204: {
      bodyMapper: Mappers.CodeVersion,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.codeName,
    Parameters.version,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createOrGetStartPendingUploadOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/codes/{codeName}/versions/{version}/startPendingUpload",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PendingUploadResponseDto,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.codeName,
    Parameters.version,
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
      bodyMapper: Mappers.CodeVersionResourceArmPaginatedResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.registryName,
    Parameters.codeName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
