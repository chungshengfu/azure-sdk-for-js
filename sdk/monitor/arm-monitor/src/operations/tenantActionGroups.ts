/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { TenantActionGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  TenantActionGroupResource,
  TenantActionGroupsListByManagementGroupIdOptionalParams,
  TenantActionGroupsListByManagementGroupIdResponse,
  TenantActionGroupsCreateOrUpdateOptionalParams,
  TenantActionGroupsCreateOrUpdateResponse,
  TenantActionGroupsGetOptionalParams,
  TenantActionGroupsGetResponse,
  TenantActionGroupsDeleteOptionalParams,
  ActionGroupPatchBodyAutoGenerated,
  TenantActionGroupsUpdateOptionalParams,
  TenantActionGroupsUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TenantActionGroups operations. */
export class TenantActionGroupsImpl implements TenantActionGroups {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class TenantActionGroups class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Get a list of all tenant action groups in a management group.
   * @param managementGroupId The management group id.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  public listByManagementGroupId(
    managementGroupId: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsListByManagementGroupIdOptionalParams
  ): PagedAsyncIterableIterator<TenantActionGroupResource> {
    const iter = this.listByManagementGroupIdPagingAll(
      managementGroupId,
      xMsClientTenantId,
      options
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
        return this.listByManagementGroupIdPagingPage(
          managementGroupId,
          xMsClientTenantId,
          options,
          settings
        );
      }
    };
  }

  private async *listByManagementGroupIdPagingPage(
    managementGroupId: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsListByManagementGroupIdOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<TenantActionGroupResource[]> {
    let result: TenantActionGroupsListByManagementGroupIdResponse;
    result = await this._listByManagementGroupId(
      managementGroupId,
      xMsClientTenantId,
      options
    );
    yield result.value || [];
  }

  private async *listByManagementGroupIdPagingAll(
    managementGroupId: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsListByManagementGroupIdOptionalParams
  ): AsyncIterableIterator<TenantActionGroupResource> {
    for await (const page of this.listByManagementGroupIdPagingPage(
      managementGroupId,
      xMsClientTenantId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a new tenant action group or update an existing one.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param actionGroup The tenant action group to create or use for the update.
   * @param options The options parameters.
   */
  createOrUpdate(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    actionGroup: TenantActionGroupResource,
    options?: TenantActionGroupsCreateOrUpdateOptionalParams
  ): Promise<TenantActionGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        tenantActionGroupName,
        xMsClientTenantId,
        actionGroup,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Get a tenant action group.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  get(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsGetOptionalParams
  ): Promise<TenantActionGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, tenantActionGroupName, xMsClientTenantId, options },
      getOperationSpec
    );
  }

  /**
   * Delete a tenant action group.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  delete(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { managementGroupId, tenantActionGroupName, xMsClientTenantId, options },
      deleteOperationSpec
    );
  }

  /**
   * Updates an existing tenant action group's tags. To update other fields use the CreateOrUpdate
   * method.
   * @param managementGroupId The management group id.
   * @param tenantActionGroupName The name of the action group.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param tenantActionGroupPatch Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    managementGroupId: string,
    tenantActionGroupName: string,
    xMsClientTenantId: string,
    tenantActionGroupPatch: ActionGroupPatchBodyAutoGenerated,
    options?: TenantActionGroupsUpdateOptionalParams
  ): Promise<TenantActionGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        managementGroupId,
        tenantActionGroupName,
        xMsClientTenantId,
        tenantActionGroupPatch,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Get a list of all tenant action groups in a management group.
   * @param managementGroupId The management group id.
   * @param xMsClientTenantId The tenant ID of the client making the request.
   * @param options The options parameters.
   */
  private _listByManagementGroupId(
    managementGroupId: string,
    xMsClientTenantId: string,
    options?: TenantActionGroupsListByManagementGroupIdOptionalParams
  ): Promise<TenantActionGroupsListByManagementGroupIdResponse> {
    return this.client.sendOperationRequest(
      { managementGroupId, xMsClientTenantId, options },
      listByManagementGroupIdOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Insights/tenantActionGroups/{tenantActionGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TenantActionGroupResource
    },
    201: {
      bodyMapper: Mappers.TenantActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.actionGroup1,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.tenantActionGroupName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.xMsClientTenantId
  ],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Insights/tenantActionGroups/{tenantActionGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TenantActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.tenantActionGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.xMsClientTenantId],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Insights/tenantActionGroups/{tenantActionGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.tenantActionGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.xMsClientTenantId],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Insights/tenantActionGroups/{tenantActionGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.TenantActionGroupResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.tenantActionGroupPatch,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.managementGroupId,
    Parameters.tenantActionGroupName
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.xMsClientTenantId
  ],
  mediaType: "json",
  serializer
};
const listByManagementGroupIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{managementGroupId}/providers/Microsoft.Insights/tenantActionGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TenantActionGroupList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.$host, Parameters.managementGroupId],
  headerParameters: [Parameters.accept, Parameters.xMsClientTenantId],
  serializer
};
