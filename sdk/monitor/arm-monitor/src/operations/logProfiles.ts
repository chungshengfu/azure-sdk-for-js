/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { LogProfiles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  LogProfileResource,
  LogProfilesListOptionalParams,
  LogProfilesListResponse,
  LogProfilesDeleteOptionalParams,
  LogProfilesGetOptionalParams,
  LogProfilesGetResponse,
  LogProfilesCreateOrUpdateOptionalParams,
  LogProfilesCreateOrUpdateResponse,
  LogProfileResourcePatch,
  LogProfilesUpdateOptionalParams,
  LogProfilesUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LogProfiles operations. */
export class LogProfilesImpl implements LogProfiles {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class LogProfiles class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * List the log profiles.
   * @param options The options parameters.
   */
  public list(
    options?: LogProfilesListOptionalParams
  ): PagedAsyncIterableIterator<LogProfileResource> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: LogProfilesListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<LogProfileResource[]> {
    let result: LogProfilesListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: LogProfilesListOptionalParams
  ): AsyncIterableIterator<LogProfileResource> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes the log profile.
   * @param logProfileName The name of the log profile.
   * @param options The options parameters.
   */
  delete(
    logProfileName: string,
    options?: LogProfilesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { logProfileName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the log profile.
   * @param logProfileName The name of the log profile.
   * @param options The options parameters.
   */
  get(
    logProfileName: string,
    options?: LogProfilesGetOptionalParams
  ): Promise<LogProfilesGetResponse> {
    return this.client.sendOperationRequest(
      { logProfileName, options },
      getOperationSpec
    );
  }

  /**
   * Create or update a log profile in Azure Monitoring REST API.
   * @param logProfileName The name of the log profile.
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    logProfileName: string,
    parameters: LogProfileResource,
    options?: LogProfilesCreateOrUpdateOptionalParams
  ): Promise<LogProfilesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { logProfileName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Updates an existing LogProfilesResource. To update other fields use the CreateOrUpdate method.
   * @param logProfileName The name of the log profile.
   * @param logProfilesResource Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    logProfileName: string,
    logProfilesResource: LogProfileResourcePatch,
    options?: LogProfilesUpdateOptionalParams
  ): Promise<LogProfilesUpdateResponse> {
    return this.client.sendOperationRequest(
      { logProfileName, logProfilesResource, options },
      updateOperationSpec
    );
  }

  /**
   * List the log profiles.
   * @param options The options parameters.
   */
  private _list(
    options?: LogProfilesListOptionalParams
  ): Promise<LogProfilesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/logprofiles/{logProfileName}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.logProfileName
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/logprofiles/{logProfileName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogProfileResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.logProfileName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/logprofiles/{logProfileName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LogProfileResource
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.logProfileName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/logprofiles/{logProfileName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.LogProfileResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponseAutoGenerated
    }
  },
  requestBody: Parameters.logProfilesResource,
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.logProfileName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/logprofiles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogProfileCollection
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
