/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BusinessProcesses } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftIntegrationSpaces } from "../microsoftIntegrationSpaces";
import {
  BusinessProcess,
  BusinessProcessesListByApplicationNextOptionalParams,
  BusinessProcessesListByApplicationOptionalParams,
  BusinessProcessesListByApplicationResponse,
  BusinessProcessesGetOptionalParams,
  BusinessProcessesGetResponse,
  BusinessProcessesCreateOrUpdateOptionalParams,
  BusinessProcessesCreateOrUpdateResponse,
  BusinessProcessUpdate,
  BusinessProcessesPatchOptionalParams,
  BusinessProcessesPatchResponse,
  BusinessProcessesDeleteOptionalParams,
  BusinessProcessesListByApplicationNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BusinessProcesses operations. */
export class BusinessProcessesImpl implements BusinessProcesses {
  private readonly client: MicrosoftIntegrationSpaces;

  /**
   * Initialize a new instance of the class BusinessProcesses class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftIntegrationSpaces) {
    this.client = client;
  }

  /**
   * List BusinessProcess resources by Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param options The options parameters.
   */
  public listByApplication(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: BusinessProcessesListByApplicationOptionalParams,
  ): PagedAsyncIterableIterator<BusinessProcess> {
    const iter = this.listByApplicationPagingAll(
      resourceGroupName,
      spaceName,
      applicationName,
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
        return this.listByApplicationPagingPage(
          resourceGroupName,
          spaceName,
          applicationName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByApplicationPagingPage(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: BusinessProcessesListByApplicationOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BusinessProcess[]> {
    let result: BusinessProcessesListByApplicationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByApplication(
        resourceGroupName,
        spaceName,
        applicationName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByApplicationNext(
        resourceGroupName,
        spaceName,
        applicationName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByApplicationPagingAll(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: BusinessProcessesListByApplicationOptionalParams,
  ): AsyncIterableIterator<BusinessProcess> {
    for await (const page of this.listByApplicationPagingPage(
      resourceGroupName,
      spaceName,
      applicationName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List BusinessProcess resources by Application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param options The options parameters.
   */
  private _listByApplication(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    options?: BusinessProcessesListByApplicationOptionalParams,
  ): Promise<BusinessProcessesListByApplicationResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, options },
      listByApplicationOperationSpec,
    );
  }

  /**
   * Get a BusinessProcess
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param businessProcessName The name of the business process
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    businessProcessName: string,
    options?: BusinessProcessesGetOptionalParams,
  ): Promise<BusinessProcessesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        spaceName,
        applicationName,
        businessProcessName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Create a BusinessProcess
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param businessProcessName The name of the business process
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    businessProcessName: string,
    resource: BusinessProcess,
    options?: BusinessProcessesCreateOrUpdateOptionalParams,
  ): Promise<BusinessProcessesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        spaceName,
        applicationName,
        businessProcessName,
        resource,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Update a BusinessProcess
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param businessProcessName The name of the business process
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  patch(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    businessProcessName: string,
    properties: BusinessProcessUpdate,
    options?: BusinessProcessesPatchOptionalParams,
  ): Promise<BusinessProcessesPatchResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        spaceName,
        applicationName,
        businessProcessName,
        properties,
        options,
      },
      patchOperationSpec,
    );
  }

  /**
   * Delete a BusinessProcess
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param businessProcessName The name of the business process
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    businessProcessName: string,
    options?: BusinessProcessesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        spaceName,
        applicationName,
        businessProcessName,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * ListByApplicationNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param spaceName The name of the space
   * @param applicationName The name of the Application
   * @param nextLink The nextLink from the previous successful call to the ListByApplication method.
   * @param options The options parameters.
   */
  private _listByApplicationNext(
    resourceGroupName: string,
    spaceName: string,
    applicationName: string,
    nextLink: string,
    options?: BusinessProcessesListByApplicationNextOptionalParams,
  ): Promise<BusinessProcessesListByApplicationNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, spaceName, applicationName, nextLink, options },
      listByApplicationNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByApplicationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/businessProcesses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BusinessProcessListResult,
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
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/businessProcesses/{businessProcessName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BusinessProcess,
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
    Parameters.businessProcessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/businessProcesses/{businessProcessName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BusinessProcess,
    },
    201: {
      bodyMapper: Mappers.BusinessProcess,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spaceName,
    Parameters.applicationName,
    Parameters.businessProcessName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const patchOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/businessProcesses/{businessProcessName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BusinessProcess,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.spaceName,
    Parameters.applicationName,
    Parameters.businessProcessName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.IntegrationSpaces/spaces/{spaceName}/applications/{applicationName}/businessProcesses/{businessProcessName}",
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
    Parameters.businessProcessName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByApplicationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BusinessProcessListResult,
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
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
