/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DenyAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  DenyAssignment,
  DenyAssignmentsListForResourceNextOptionalParams,
  DenyAssignmentsListForResourceOptionalParams,
  DenyAssignmentsListForResourceResponse,
  DenyAssignmentsListForResourceGroupNextOptionalParams,
  DenyAssignmentsListForResourceGroupOptionalParams,
  DenyAssignmentsListForResourceGroupResponse,
  DenyAssignmentsListNextOptionalParams,
  DenyAssignmentsListOptionalParams,
  DenyAssignmentsListResponse,
  DenyAssignmentsListForScopeNextOptionalParams,
  DenyAssignmentsListForScopeOptionalParams,
  DenyAssignmentsListForScopeResponse,
  DenyAssignmentsGetOptionalParams,
  DenyAssignmentsGetResponse,
  DenyAssignmentsGetByIdOptionalParams,
  DenyAssignmentsGetByIdResponse,
  DenyAssignmentsListForResourceNextResponse,
  DenyAssignmentsListForResourceGroupNextResponse,
  DenyAssignmentsListNextResponse,
  DenyAssignmentsListForScopeNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DenyAssignments operations. */
export class DenyAssignmentsImpl implements DenyAssignments {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class DenyAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets deny assignments for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get deny assignments for.
   * @param options The options parameters.
   */
  public listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: DenyAssignmentsListForResourceOptionalParams,
  ): PagedAsyncIterableIterator<DenyAssignment> {
    const iter = this.listForResourcePagingAll(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
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
        return this.listForResourcePagingPage(
          resourceGroupName,
          resourceProviderNamespace,
          parentResourcePath,
          resourceType,
          resourceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listForResourcePagingPage(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: DenyAssignmentsListForResourceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DenyAssignment[]> {
    let result: DenyAssignmentsListForResourceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForResource(
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForResourceNext(
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForResourcePagingAll(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: DenyAssignmentsListForResourceOptionalParams,
  ): AsyncIterableIterator<DenyAssignment> {
    for await (const page of this.listForResourcePagingPage(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets deny assignments for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listForResourceGroup(
    resourceGroupName: string,
    options?: DenyAssignmentsListForResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<DenyAssignment> {
    const iter = this.listForResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listForResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listForResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DenyAssignmentsListForResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DenyAssignment[]> {
    let result: DenyAssignmentsListForResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DenyAssignmentsListForResourceGroupOptionalParams,
  ): AsyncIterableIterator<DenyAssignment> {
    for await (const page of this.listForResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deny assignments for the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DenyAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<DenyAssignment> {
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
      },
    };
  }

  private async *listPagingPage(
    options?: DenyAssignmentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DenyAssignment[]> {
    let result: DenyAssignmentsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: DenyAssignmentsListOptionalParams,
  ): AsyncIterableIterator<DenyAssignment> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets deny assignments for a scope.
   * @param scope The scope of the deny assignments.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: DenyAssignmentsListForScopeOptionalParams,
  ): PagedAsyncIterableIterator<DenyAssignment> {
    const iter = this.listForScopePagingAll(scope, options);
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
        return this.listForScopePagingPage(scope, options, settings);
      },
    };
  }

  private async *listForScopePagingPage(
    scope: string,
    options?: DenyAssignmentsListForScopeOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DenyAssignment[]> {
    let result: DenyAssignmentsListForScopeResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listForScope(scope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listForScopeNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listForScopePagingAll(
    scope: string,
    options?: DenyAssignmentsListForScopeOptionalParams,
  ): AsyncIterableIterator<DenyAssignment> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Gets deny assignments for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get deny assignments for.
   * @param options The options parameters.
   */
  private _listForResource(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    options?: DenyAssignmentsListForResourceOptionalParams,
  ): Promise<DenyAssignmentsListForResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        options,
      },
      listForResourceOperationSpec,
    );
  }

  /**
   * Gets deny assignments for a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listForResourceGroup(
    resourceGroupName: string,
    options?: DenyAssignmentsListForResourceGroupOptionalParams,
  ): Promise<DenyAssignmentsListForResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listForResourceGroupOperationSpec,
    );
  }

  /**
   * Gets all deny assignments for the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DenyAssignmentsListOptionalParams,
  ): Promise<DenyAssignmentsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get the specified deny assignment.
   * @param scope The scope of the deny assignment.
   * @param denyAssignmentId The ID of the deny assignment to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    denyAssignmentId: string,
    options?: DenyAssignmentsGetOptionalParams,
  ): Promise<DenyAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, denyAssignmentId, options },
      getOperationSpec,
    );
  }

  /**
   * Gets a deny assignment by ID.
   * @param denyAssignmentId The fully qualified deny assignment ID. For example, use the format,
   *                         /subscriptions/{guid}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for
   *                         subscription level deny assignments, or
   *                         /providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId} for tenant level deny
   *                         assignments.
   * @param options The options parameters.
   */
  getById(
    denyAssignmentId: string,
    options?: DenyAssignmentsGetByIdOptionalParams,
  ): Promise<DenyAssignmentsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { denyAssignmentId, options },
      getByIdOperationSpec,
    );
  }

  /**
   * Gets deny assignments for a scope.
   * @param scope The scope of the deny assignments.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: DenyAssignmentsListForScopeOptionalParams,
  ): Promise<DenyAssignmentsListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec,
    );
  }

  /**
   * ListForResourceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get deny assignments for.
   * @param nextLink The nextLink from the previous successful call to the ListForResource method.
   * @param options The options parameters.
   */
  private _listForResourceNext(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    nextLink: string,
    options?: DenyAssignmentsListForResourceNextOptionalParams,
  ): Promise<DenyAssignmentsListForResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        nextLink,
        options,
      },
      listForResourceNextOperationSpec,
    );
  }

  /**
   * ListForResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListForResourceGroup method.
   * @param options The options parameters.
   */
  private _listForResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DenyAssignmentsListForResourceGroupNextOptionalParams,
  ): Promise<DenyAssignmentsListForResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listForResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DenyAssignmentsListNextOptionalParams,
  ): Promise<DenyAssignmentsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the deny assignments.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: DenyAssignmentsListForScopeNextOptionalParams,
  ): Promise<DenyAssignmentsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listForResourceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}/providers/Microsoft.Authorization/denyAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Authorization/denyAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/denyAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/denyAssignments/{denyAssignmentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.denyAssignmentId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{denyAssignmentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.denyAssignmentId1],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/denyAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForResourceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
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
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DenyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
