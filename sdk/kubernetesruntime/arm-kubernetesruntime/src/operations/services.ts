/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Services } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftKubernetesRuntime } from "../microsoftKubernetesRuntime";
import {
  ServiceResource,
  ServicesListNextOptionalParams,
  ServicesListOptionalParams,
  ServicesListResponse,
  ServicesGetOptionalParams,
  ServicesGetResponse,
  ServicesCreateOrUpdateOptionalParams,
  ServicesCreateOrUpdateResponse,
  ServicesDeleteOptionalParams,
  ServicesListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Services operations. */
export class ServicesImpl implements Services {
  private readonly client: MicrosoftKubernetesRuntime;

  /**
   * Initialize a new instance of the class Services class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftKubernetesRuntime) {
    this.client = client;
  }

  /**
   * List ServiceResource resources by parent
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  public list(
    resourceUri: string,
    options?: ServicesListOptionalParams,
  ): PagedAsyncIterableIterator<ServiceResource> {
    const iter = this.listPagingAll(resourceUri, options);
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
        return this.listPagingPage(resourceUri, options, settings);
      },
    };
  }

  private async *listPagingPage(
    resourceUri: string,
    options?: ServicesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ServiceResource[]> {
    let result: ServicesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceUri, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceUri: string,
    options?: ServicesListOptionalParams,
  ): AsyncIterableIterator<ServiceResource> {
    for await (const page of this.listPagingPage(resourceUri, options)) {
      yield* page;
    }
  }

  /**
   * List ServiceResource resources by parent
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param options The options parameters.
   */
  private _list(
    resourceUri: string,
    options?: ServicesListOptionalParams,
  ): Promise<ServicesListResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, options },
      listOperationSpec,
    );
  }

  /**
   * Get a ServiceResource
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param serviceName The name of the the service
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    serviceName: string,
    options?: ServicesGetOptionalParams,
  ): Promise<ServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, serviceName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a ServiceResource
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param serviceName The name of the the service
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceUri: string,
    serviceName: string,
    resource: ServiceResource,
    options?: ServicesCreateOrUpdateOptionalParams,
  ): Promise<ServicesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, serviceName, resource, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Delete a ServiceResource
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param serviceName The name of the the service
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    serviceName: string,
    options?: ServicesDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceUri, serviceName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceUri: string,
    nextLink: string,
    options?: ServicesListNextOptionalParams,
  ): Promise<ServicesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceUri, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResource,
    },
    201: {
      bodyMapper: Mappers.ServiceResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceUri}/providers/Microsoft.KubernetesRuntime/services/{serviceName}",
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
    Parameters.resourceUri,
    Parameters.serviceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServiceResourceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceUri,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
