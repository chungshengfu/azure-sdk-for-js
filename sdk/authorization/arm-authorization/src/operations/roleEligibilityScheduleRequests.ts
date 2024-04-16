/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RoleEligibilityScheduleRequests } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  RoleEligibilityScheduleRequest,
  RoleEligibilityScheduleRequestsListForScopeNextOptionalParams,
  RoleEligibilityScheduleRequestsListForScopeOptionalParams,
  RoleEligibilityScheduleRequestsListForScopeResponse,
  RoleEligibilityScheduleRequestsCreateOptionalParams,
  RoleEligibilityScheduleRequestsCreateResponse,
  RoleEligibilityScheduleRequestsGetOptionalParams,
  RoleEligibilityScheduleRequestsGetResponse,
  RoleEligibilityScheduleRequestsCancelOptionalParams,
  RoleEligibilityScheduleRequestsValidateOptionalParams,
  RoleEligibilityScheduleRequestsValidateResponse,
  RoleEligibilityScheduleRequestsListForScopeNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoleEligibilityScheduleRequests operations. */
export class RoleEligibilityScheduleRequestsImpl
  implements RoleEligibilityScheduleRequests
{
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class RoleEligibilityScheduleRequests class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Gets role eligibility schedule requests for a scope.
   * @param scope The scope of the role eligibility schedule requests.
   * @param options The options parameters.
   */
  public listForScope(
    scope: string,
    options?: RoleEligibilityScheduleRequestsListForScopeOptionalParams,
  ): PagedAsyncIterableIterator<RoleEligibilityScheduleRequest> {
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
    options?: RoleEligibilityScheduleRequestsListForScopeOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RoleEligibilityScheduleRequest[]> {
    let result: RoleEligibilityScheduleRequestsListForScopeResponse;
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
    options?: RoleEligibilityScheduleRequestsListForScopeOptionalParams,
  ): AsyncIterableIterator<RoleEligibilityScheduleRequest> {
    for await (const page of this.listForScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Creates a role eligibility schedule request.
   * @param scope The scope of the role eligibility schedule request to create. The scope can be any REST
   *              resource instance. For example, use
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/' for a subscription,
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}'
   *              for a resource group, and
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   *              for a resource.
   * @param roleEligibilityScheduleRequestName The name of the role eligibility to create. It can be any
   *                                           valid GUID.
   * @param parameters Parameters for the role eligibility schedule request.
   * @param options The options parameters.
   */
  create(
    scope: string,
    roleEligibilityScheduleRequestName: string,
    parameters: RoleEligibilityScheduleRequest,
    options?: RoleEligibilityScheduleRequestsCreateOptionalParams,
  ): Promise<RoleEligibilityScheduleRequestsCreateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleEligibilityScheduleRequestName, parameters, options },
      createOperationSpec,
    );
  }

  /**
   * Get the specified role eligibility schedule request.
   * @param scope The scope of the role eligibility schedule request.
   * @param roleEligibilityScheduleRequestName The name (guid) of the role eligibility schedule request
   *                                           to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    roleEligibilityScheduleRequestName: string,
    options?: RoleEligibilityScheduleRequestsGetOptionalParams,
  ): Promise<RoleEligibilityScheduleRequestsGetResponse> {
    return this.client.sendOperationRequest(
      { scope, roleEligibilityScheduleRequestName, options },
      getOperationSpec,
    );
  }

  /**
   * Gets role eligibility schedule requests for a scope.
   * @param scope The scope of the role eligibility schedule requests.
   * @param options The options parameters.
   */
  private _listForScope(
    scope: string,
    options?: RoleEligibilityScheduleRequestsListForScopeOptionalParams,
  ): Promise<RoleEligibilityScheduleRequestsListForScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listForScopeOperationSpec,
    );
  }

  /**
   * Cancels a pending role eligibility schedule request.
   * @param scope The scope of the role eligibility request to cancel.
   * @param roleEligibilityScheduleRequestName The name of the role eligibility request to cancel.
   * @param options The options parameters.
   */
  cancel(
    scope: string,
    roleEligibilityScheduleRequestName: string,
    options?: RoleEligibilityScheduleRequestsCancelOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, roleEligibilityScheduleRequestName, options },
      cancelOperationSpec,
    );
  }

  /**
   * Validates a new role eligibility schedule request.
   * @param scope The scope of the role eligibility request to validate.
   * @param roleEligibilityScheduleRequestName The name of the role eligibility request to validate.
   * @param parameters Parameters for the role eligibility schedule request.
   * @param options The options parameters.
   */
  validate(
    scope: string,
    roleEligibilityScheduleRequestName: string,
    parameters: RoleEligibilityScheduleRequest,
    options?: RoleEligibilityScheduleRequestsValidateOptionalParams,
  ): Promise<RoleEligibilityScheduleRequestsValidateResponse> {
    return this.client.sendOperationRequest(
      { scope, roleEligibilityScheduleRequestName, parameters, options },
      validateOperationSpec,
    );
  }

  /**
   * ListForScopeNext
   * @param scope The scope of the role eligibility schedule requests.
   * @param nextLink The nextLink from the previous successful call to the ListForScope method.
   * @param options The options parameters.
   */
  private _listForScopeNext(
    scope: string,
    nextLink: string,
    options?: RoleEligibilityScheduleRequestsListForScopeNextOptionalParams,
  ): Promise<RoleEligibilityScheduleRequestsListForScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listForScopeNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleEligibilityScheduleRequests/{roleEligibilityScheduleRequestName}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.RoleEligibilityScheduleRequest,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleEligibilityScheduleRequestName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleEligibilityScheduleRequests/{roleEligibilityScheduleRequestName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleEligibilityScheduleRequest,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleEligibilityScheduleRequestName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listForScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleEligibilityScheduleRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleEligibilityScheduleRequestListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion5],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleEligibilityScheduleRequests/{roleEligibilityScheduleRequestName}/cancel",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleEligibilityScheduleRequestName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const validateOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Authorization/roleEligibilityScheduleRequests/{roleEligibilityScheduleRequestName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RoleEligibilityScheduleRequest,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.roleEligibilityScheduleRequestName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listForScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoleEligibilityScheduleRequestListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer,
};
