/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Applications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftIntegrationSpaces } from "../microsoftIntegrationSpaces";
import {
  Application,
  ApplicationsListBySpaceNextOptionalParams,
  ApplicationsListBySpaceOptionalParams,
  ApplicationsListBySpaceResponse,
  ApplicationsGetOptionalParams,
  ApplicationsGetResponse,
  ApplicationsCreateOrUpdateOptionalParams,
  ApplicationsCreateOrUpdateResponse,
  ApplicationUpdate,
  ApplicationsPatchOptionalParams,
  ApplicationsPatchResponse,
  ApplicationsDeleteOptionalParams,
  GetOrDeleteBusinessProcessDevelopmentArtifactRequest,
  ApplicationsDeleteBusinessProcessDevelopmentArtifactOptionalParams,
  ApplicationsGetBusinessProcessDevelopmentArtifactOptionalParams,
  ApplicationsGetBusinessProcessDevelopmentArtifactResponse,
  ApplicationsListBusinessProcessDevelopmentArtifactsOptionalParams,
  ApplicationsListBusinessProcessDevelopmentArtifactsResponse,
  SaveOrValidateBusinessProcessDevelopmentArtifactRequest,
  ApplicationsSaveBusinessProcessDevelopmentArtifactOptionalParams,
  ApplicationsSaveBusinessProcessDevelopmentArtifactResponse,
  ApplicationsValidateBusinessProcessDevelopmentArtifactOptionalParams,
  ApplicationsListBySpaceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Applications operations. */
export class ApplicationsImpl implements Applications {
  private readonly client: MicrosoftIntegrationSpaces;

  /**
   * Initialize a new instance of the class Applications class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftIntegrationSpaces) {
    this.client = client;
  }

  /**
   * List Application resources by Space
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param options The options parameters.
   */
  public listBySpace(
    resourceGroupName: string,
    spaceName: string,
    options?: ApplicationsListBySpaceOptionalParams,
  ): PagedAsyncIterableIterator<Application> {
    const iter = this.listBySpacePagingAll(
      resourceGroupName,
      spaceName,
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
        return this.listBySpacePagingPage(
          resourceGroupName,
          spaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listBySpacePagingPage(
    resourceGroupName: string,
    spaceName: string,
    options?: ApplicationsListBySpaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Application[]> {
    let result: ApplicationsListBySpaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySpace(resourceGroupName, spaceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySpaceNext(
        resourceGroupName,
        spaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySpacePagingAll(
    resourceGroupName: string,
    spaceName: string,
    options?: ApplicationsListBySpaceOptionalParams,
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listBySpacePagingPage(
      resourceGroupName,
      spaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List Application resources by Space
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param options The options parameters.
   */
  private _listBySpace(
    resourceGroupName: string,
    spaceName: string,
    options?: ApplicationsListBySpaceOptionalParams,
  ): Promise<ApplicationsListBySpaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, options },
      listBySpaceOperationSpec,
    );
  }

  /**
   * Get a Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: ApplicationsGetOptionalParams,
  ): Promise<ApplicationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    resource: Application,
    options?: ApplicationsCreateOrUpdateOptionalParams,
  ): Promise<ApplicationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, resource, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update a Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    properties: ApplicationUpdate,
    options?: ApplicationsPatchOptionalParams,
  ): Promise<ApplicationsPatchResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, properties, options },
      patchOperationSpec,
    );
  }

  /**
   * Delete a Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: ApplicationsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, options },
      deleteOperationSpec,
    );
  }

  /**
   * The delete business process development artifact action.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param body The content of the action request
   * @param options The options parameters.
   */
  deleteBusinessProcessDevelopmentArtifact(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    body: GetOrDeleteBusinessProcessDevelopmentArtifactRequest,
    options?: ApplicationsDeleteBusinessProcessDevelopmentArtifactOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, body, options },
      deleteBusinessProcessDevelopmentArtifactOperationSpec,
    );
  }

  /**
   * The get business process development artifact action.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param body The content of the action request
   * @param options The options parameters.
   */
  getBusinessProcessDevelopmentArtifact(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    body: GetOrDeleteBusinessProcessDevelopmentArtifactRequest,
    options?: ApplicationsGetBusinessProcessDevelopmentArtifactOptionalParams,
  ): Promise<ApplicationsGetBusinessProcessDevelopmentArtifactResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, body, options },
      getBusinessProcessDevelopmentArtifactOperationSpec,
    );
  }

  /**
   * The list business process development artifacts action.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param options The options parameters.
   */
  listBusinessProcessDevelopmentArtifacts(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: ApplicationsListBusinessProcessDevelopmentArtifactsOptionalParams,
  ): Promise<ApplicationsListBusinessProcessDevelopmentArtifactsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, options },
      listBusinessProcessDevelopmentArtifactsOperationSpec,
    );
  }

  /**
   * The save business process development artifact action.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param body The content of the action request
   * @param options The options parameters.
   */
  saveBusinessProcessDevelopmentArtifact(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    body: SaveOrValidateBusinessProcessDevelopmentArtifactRequest,
    options?: ApplicationsSaveBusinessProcessDevelopmentArtifactOptionalParams,
  ): Promise<ApplicationsSaveBusinessProcessDevelopmentArtifactResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, body, options },
      saveBusinessProcessDevelopmentArtifactOperationSpec,
    );
  }

  /**
   * The validate business process development artifact action.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param body The content of the action request
   * @param options The options parameters.
   */
  validateBusinessProcessDevelopmentArtifact(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    body: SaveOrValidateBusinessProcessDevelopmentArtifactRequest,
    options?: ApplicationsValidateBusinessProcessDevelopmentArtifactOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, body, options },
      validateBusinessProcessDevelopmentArtifactOperationSpec,
    );
  }

  /**
   * ListBySpaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param nextLink The nextLink from the previous successful call to the ListBySpace method.
   * @param options The options parameters.
   */
  private _listBySpaceNext(
    resourceGroupName: string,
    spaceName: string,
    nextLink: string,
    options?: ApplicationsListBySpaceNextOptionalParams,
  ): Promise<ApplicationsListBySpaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, nextLink, options },
      listBySpaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySpaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skip,
    Parameters.maxpagesize,
    Parameters.filter,
    Parameters.select,
    Parameters.expand,
    Parameters.orderby,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Application,
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
    Parameters.spaceName,
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Application,
    },
    201: {
      bodyMapper: Mappers.Application,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spaceName,
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const patchOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Application,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spaceName,
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.spaceName,
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteBusinessProcessDevelopmentArtifactOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/deleteBusinessProcessDevelopmentArtifact",
    httpMethod: "POST",
    responses: {
      200: {},
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    requestBody: Parameters.body,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.spaceName,
      Parameters.applicationName,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const getBusinessProcessDevelopmentArtifactOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/getBusinessProcessDevelopmentArtifact",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.SaveOrGetBusinessProcessDevelopmentArtifactResponse,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    requestBody: Parameters.body,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.spaceName,
      Parameters.applicationName,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const listBusinessProcessDevelopmentArtifactsOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/listBusinessProcessDevelopmentArtifacts",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.ListBusinessProcessDevelopmentArtifactsResponse,
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
      Parameters.spaceName,
      Parameters.applicationName,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
const saveBusinessProcessDevelopmentArtifactOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/saveBusinessProcessDevelopmentArtifact",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.SaveOrGetBusinessProcessDevelopmentArtifactResponse,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    requestBody: Parameters.body1,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.spaceName,
      Parameters.applicationName,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const validateBusinessProcessDevelopmentArtifactOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/validateBusinessProcessDevelopmentArtifact",
    httpMethod: "POST",
    responses: {
      200: {},
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    requestBody: Parameters.body1,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.spaceName,
      Parameters.applicationName,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const listBySpaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
