/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProjectCatalogs } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Catalog,
  ProjectCatalogsListNextOptionalParams,
  ProjectCatalogsListOptionalParams,
  ProjectCatalogsListResponse,
  ProjectCatalogsGetOptionalParams,
  ProjectCatalogsGetResponse,
  ProjectCatalogsCreateOrUpdateOptionalParams,
  ProjectCatalogsCreateOrUpdateResponse,
  CatalogUpdate,
  ProjectCatalogsPatchOptionalParams,
  ProjectCatalogsPatchResponse,
  ProjectCatalogsDeleteOptionalParams,
  ProjectCatalogsDeleteResponse,
  ProjectCatalogsGetSyncErrorDetailsOptionalParams,
  ProjectCatalogsGetSyncErrorDetailsResponse,
  ProjectCatalogsSyncOptionalParams,
  ProjectCatalogsSyncResponse,
  ProjectCatalogsConnectOptionalParams,
  ProjectCatalogsConnectResponse,
  ProjectCatalogsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProjectCatalogs operations. */
export class ProjectCatalogsImpl implements ProjectCatalogs {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class ProjectCatalogs class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists the catalogs associated with a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectCatalogsListOptionalParams,
  ): PagedAsyncIterableIterator<Catalog> {
    const iter = this.listPagingAll(resourceGroupName, projectName, options);
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
          projectName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectCatalogsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Catalog[]> {
    let result: ProjectCatalogsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, projectName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        projectName,
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
    projectName: string,
    options?: ProjectCatalogsListOptionalParams,
  ): AsyncIterableIterator<Catalog> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      projectName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the catalogs associated with a project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    projectName: string,
    options?: ProjectCatalogsListOptionalParams,
  ): Promise<ProjectCatalogsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets an associated project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsGetOptionalParams,
  ): Promise<ProjectCatalogsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, catalogName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param body Represents a catalog.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    body: Catalog,
    options?: ProjectCatalogsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProjectCatalogsCreateOrUpdateResponse>,
      ProjectCatalogsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProjectCatalogsCreateOrUpdateResponse> => {
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
      args: { resourceGroupName, projectName, catalogName, body, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ProjectCatalogsCreateOrUpdateResponse,
      OperationState<ProjectCatalogsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param body Represents a catalog.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    body: Catalog,
    options?: ProjectCatalogsCreateOrUpdateOptionalParams,
  ): Promise<ProjectCatalogsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      projectName,
      catalogName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Partially updates a project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param body Updatable project catalog properties.
   * @param options The options parameters.
   */
  async beginPatch(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    body: CatalogUpdate,
    options?: ProjectCatalogsPatchOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProjectCatalogsPatchResponse>,
      ProjectCatalogsPatchResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProjectCatalogsPatchResponse> => {
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
      args: { resourceGroupName, projectName, catalogName, body, options },
      spec: patchOperationSpec,
    });
    const poller = await createHttpPoller<
      ProjectCatalogsPatchResponse,
      OperationState<ProjectCatalogsPatchResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Partially updates a project catalog.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param body Updatable project catalog properties.
   * @param options The options parameters.
   */
  async beginPatchAndWait(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    body: CatalogUpdate,
    options?: ProjectCatalogsPatchOptionalParams,
  ): Promise<ProjectCatalogsPatchResponse> {
    const poller = await this.beginPatch(
      resourceGroupName,
      projectName,
      catalogName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a project catalog resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProjectCatalogsDeleteResponse>,
      ProjectCatalogsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProjectCatalogsDeleteResponse> => {
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
      args: { resourceGroupName, projectName, catalogName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      ProjectCatalogsDeleteResponse,
      OperationState<ProjectCatalogsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a project catalog resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsDeleteOptionalParams,
  ): Promise<ProjectCatalogsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      projectName,
      catalogName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets project catalog synchronization error details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  getSyncErrorDetails(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsGetSyncErrorDetailsOptionalParams,
  ): Promise<ProjectCatalogsGetSyncErrorDetailsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, catalogName, options },
      getSyncErrorDetailsOperationSpec,
    );
  }

  /**
   * Syncs templates for a template source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginSync(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsSyncOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProjectCatalogsSyncResponse>,
      ProjectCatalogsSyncResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProjectCatalogsSyncResponse> => {
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
      args: { resourceGroupName, projectName, catalogName, options },
      spec: syncOperationSpec,
    });
    const poller = await createHttpPoller<
      ProjectCatalogsSyncResponse,
      OperationState<ProjectCatalogsSyncResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Syncs templates for a template source.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginSyncAndWait(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsSyncOptionalParams,
  ): Promise<ProjectCatalogsSyncResponse> {
    const poller = await this.beginSync(
      resourceGroupName,
      projectName,
      catalogName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Connects a project catalog to enable syncing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginConnect(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsConnectOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ProjectCatalogsConnectResponse>,
      ProjectCatalogsConnectResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ProjectCatalogsConnectResponse> => {
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
      args: { resourceGroupName, projectName, catalogName, options },
      spec: connectOperationSpec,
    });
    const poller = await createHttpPoller<
      ProjectCatalogsConnectResponse,
      OperationState<ProjectCatalogsConnectResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Connects a project catalog to enable syncing.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param catalogName The name of the Catalog.
   * @param options The options parameters.
   */
  async beginConnectAndWait(
    resourceGroupName: string,
    projectName: string,
    catalogName: string,
    options?: ProjectCatalogsConnectOptionalParams,
  ): Promise<ProjectCatalogsConnectResponse> {
    const poller = await this.beginConnect(
      resourceGroupName,
      projectName,
      catalogName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    projectName: string,
    nextLink: string,
    options?: ProjectCatalogsListNextOptionalParams,
  ): Promise<ProjectCatalogsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog,
    },
    201: {
      bodyMapper: Mappers.Catalog,
    },
    202: {
      bodyMapper: Mappers.Catalog,
    },
    204: {
      bodyMapper: Mappers.Catalog,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const patchOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Catalog,
    },
    201: {
      bodyMapper: Mappers.Catalog,
    },
    202: {
      bodyMapper: Mappers.Catalog,
    },
    204: {
      bodyMapper: Mappers.Catalog,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ProjectCatalogsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.ProjectCatalogsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.ProjectCatalogsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.ProjectCatalogsDeleteHeaders,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getSyncErrorDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/getSyncErrorDetails",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SyncErrorDetails,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const syncOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/sync",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.ProjectCatalogsSyncHeaders,
    },
    201: {
      headersMapper: Mappers.ProjectCatalogsSyncHeaders,
    },
    202: {
      headersMapper: Mappers.ProjectCatalogsSyncHeaders,
    },
    204: {
      headersMapper: Mappers.ProjectCatalogsSyncHeaders,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const connectOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevCenter/projects/{projectName}/catalogs/{catalogName}/connect",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.ProjectCatalogsConnectHeaders,
    },
    201: {
      headersMapper: Mappers.ProjectCatalogsConnectHeaders,
    },
    202: {
      headersMapper: Mappers.ProjectCatalogsConnectHeaders,
    },
    204: {
      headersMapper: Mappers.ProjectCatalogsConnectHeaders,
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
    Parameters.projectName,
    Parameters.catalogName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogListResult,
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
    Parameters.projectName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
