/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RoleManagementPolicyAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  RoleManagementPolicyAssignment,
  RoleManagementPolicyAssignmentsListForScopeNextOptionalParams,
  RoleManagementPolicyAssignmentsListForScopeOptionalParams,
  RoleManagementPolicyAssignmentsListForScopeResponse,
  RoleManagementPolicyAssignmentsGetOptionalParams,
  RoleManagementPolicyAssignmentsGetResponse,
  RoleManagementPolicyAssignmentsCreateOptionalParams,
  RoleManagementPolicyAssignmentsCreateResponse,
  RoleManagementPolicyAssignmentsDeleteOptionalParams,
  RoleManagementPolicyAssignmentsListForScopeNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleManagementPolicyAssignments operations. */
export class RoleManagementPolicyAssignmentsImpl
  implements RoleManagementPolicyAssignments
{
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class RoleManagementPolicyAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets role management assignment policies for a resource scope.
   * @param scope The scope of the role management policy.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: RoleManagementPolicyAssignmentsListForScopeOptionalParams,
  ): PagedAsyncIterableIterator<RoleManagementPolicyAssignment> {
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
    options?: RoleManagementPolicyAssignmentsListForScopeOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RoleManagementPolicyAssignment[]> {
    let result: RoleManagementPolicyAssignmentsListForScopeResponse;
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
    options?: RoleManagementPolicyAssignmentsListForScopeOptionalParams,
  ): AsyncIterableIterator<RoleManagementPolicyAssignment> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get the specified role management policy assignment for a resource scope
   * @param scope The scope of the role management policy.
   * @param roleManagementPolicyAssignmentName The name of format {guid_guid} the role management policy
   *                                           assignment to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleManagementPolicyAssignmentName: string,
    options?: RoleManagementPolicyAssignmentsGetOptionalParams,
  ): Promise<RoleManagementPolicyAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleManagementPolicyAssignmentName, options },
      getOperationSpec,
    );
  }

  /**
   * Create a role management policy assignment
   * @param scope The scope of the role management policy assignment to upsert.
   * @param roleManagementPolicyAssignmentName The name of format {guid_guid} the role management policy
   *                                           assignment to upsert.
   * @param parameters Parameters for the role management policy assignment.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleManagementPolicyAssignmentName: string,
    parameters: RoleManagementPolicyAssignment,
    options?: RoleManagementPolicyAssignmentsCreateOptionalParams,
  ): Promise<RoleManagementPolicyAssignmentsCreateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleManagementPolicyAssignmentName, parameters, options },
      createOperationSpec,
    );
  }

  /**
   * Delete a role management policy assignment
   * @param scope The scope of the role management policy assignment to delete.
   * @param roleManagementPolicyAssignmentName The name of format {guid_guid} the role management policy
   *                                           assignment to delete.
   * @param options The options parameters.
   */
  delete(
    scope: string,
    roleManagementPolicyAssignmentName: string,
    options?: RoleManagementPolicyAssignmentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, roleManagementPolicyAssignmentName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets role management assignment policies for a resource scope.
   * @param scope The scope of the role management policy.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: RoleManagementPolicyAssignmentsListForScopeOptionalParams,
  ): Promise<RoleManagementPolicyAssignmentsListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec,
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the role management policy.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: RoleManagementPolicyAssignmentsListForScopeNextOptionalParams,
  ): Promise<RoleManagementPolicyAssignmentsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleManagementPolicyAssignments/{roleManagementPolicyAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleManagementPolicyAssignment,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleManagementPolicyAssignmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleManagementPolicyAssignments/{roleManagementPolicyAssignmentName}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RoleManagementPolicyAssignment,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleManagementPolicyAssignmentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleManagementPolicyAssignments/{roleManagementPolicyAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleManagementPolicyAssignmentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleManagementPolicyAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleManagementPolicyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleManagementPolicyAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.$host, Parameters.scope, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
