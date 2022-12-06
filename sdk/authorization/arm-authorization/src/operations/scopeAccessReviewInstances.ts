/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ScopeAccessReviewInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewInstance,
  ScopeAccessReviewInstancesListNextOptionalParams,
  ScopeAccessReviewInstancesListOptionalParams,
  ScopeAccessReviewInstancesListResponse,
  ScopeAccessReviewInstancesGetByIdOptionalParams,
  ScopeAccessReviewInstancesGetByIdResponse,
  AccessReviewInstanceProperties,
  ScopeAccessReviewInstancesCreateOptionalParams,
  ScopeAccessReviewInstancesCreateResponse,
  ScopeAccessReviewInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScopeAccessReviewInstances operations. */
export class ScopeAccessReviewInstancesImpl
  implements ScopeAccessReviewInstances {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class ScopeAccessReviewInstances class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review instances
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    scheduleDefinitionId: string,
    options?: ScopeAccessReviewInstancesListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewInstance> {
    const iter = this.listPagingAll(scope, scheduleDefinitionId, options);
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
          scope,
          scheduleDefinitionId,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    scheduleDefinitionId: string,
    options?: ScopeAccessReviewInstancesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccessReviewInstance[]> {
    let result: ScopeAccessReviewInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scope, scheduleDefinitionId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        scope,
        scheduleDefinitionId,
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
    scope: string,
    scheduleDefinitionId: string,
    options?: ScopeAccessReviewInstancesListOptionalParams
  ): AsyncIterableIterator<AccessReviewInstance> {
    for await (const page of this.listPagingPage(
      scope,
      scheduleDefinitionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get access review instances
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    scheduleDefinitionId: string,
    options?: ScopeAccessReviewInstancesListOptionalParams
  ): Promise<ScopeAccessReviewInstancesListResponse> {
    return this.client.sendOperationRequest(
      { scope, scheduleDefinitionId, options },
      listOperationSpec
    );
  }

  /**
   * Get access review instances
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  getById(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstancesGetByIdOptionalParams
  ): Promise<ScopeAccessReviewInstancesGetByIdResponse> {
    return this.client.sendOperationRequest(
      { scope, scheduleDefinitionId, id, options },
      getByIdOperationSpec
    );
  }

  /**
   * Update access review instance.
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param properties Access review instance properties.
   * @param options The options parameters.
   */
  create(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    properties: AccessReviewInstanceProperties,
    options?: ScopeAccessReviewInstancesCreateOptionalParams
  ): Promise<ScopeAccessReviewInstancesCreateResponse> {
    return this.client.sendOperationRequest(
      { scope, scheduleDefinitionId, id, properties, options },
      createOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    scheduleDefinitionId: string,
    nextLink: string,
    options?: ScopeAccessReviewInstancesListNextOptionalParams
  ): Promise<ScopeAccessReviewInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, scheduleDefinitionId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.scope
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewInstance
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.scope
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewInstance
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  requestBody: Parameters.properties2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.scope
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
      bodyMapper: Mappers.AccessReviewInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scheduleDefinitionId,
    Parameters.scope
  ],
  headerParameters: [Parameters.accept],
  serializer
};
