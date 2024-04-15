/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ApiManagementGatewayConfigConnectionResource,
  ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
  ApiManagementGatewayConfigConnectionGetOptionalParams,
  ApiManagementGatewayConfigConnectionGetResponse,
  ApiManagementGatewayConfigConnectionCreateOrUpdateOptionalParams,
  ApiManagementGatewayConfigConnectionCreateOrUpdateResponse,
  ApiManagementGatewayConfigConnectionDeleteOptionalParams,
  ApiManagementGatewayConfigConnectionDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiManagementGatewayConfigConnection. */
export interface ApiManagementGatewayConfigConnection {
  /**
   * List all API Management gateway config connections within a gateway.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param options The options parameters.
   */
  listByGateway(
    resourceGroupName: string,
    gatewayName: string,
    options?: ApiManagementGatewayConfigConnectionListByGatewayOptionalParams,
  ): PagedAsyncIterableIterator<ApiManagementGatewayConfigConnectionResource>;
  /**
   * Gets an API Management gateway config connection resource description.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    options?: ApiManagementGatewayConfigConnectionGetOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionGetResponse>;
  /**
   * Creates or updates an API Management gateway config connection. This is long running operation and
   * could take several minutes to complete.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management gateway config connection
   *                   operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    parameters: ApiManagementGatewayConfigConnectionResource,
    options?: ApiManagementGatewayConfigConnectionCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiManagementGatewayConfigConnectionCreateOrUpdateResponse>,
      ApiManagementGatewayConfigConnectionCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an API Management gateway config connection. This is long running operation and
   * could take several minutes to complete.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param parameters Parameters supplied to the CreateOrUpdate API Management gateway config connection
   *                   operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    parameters: ApiManagementGatewayConfigConnectionResource,
    options?: ApiManagementGatewayConfigConnectionCreateOrUpdateOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionCreateOrUpdateResponse>;
  /**
   * Deletes an existing API Management gateway config connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    ifMatch: string,
    options?: ApiManagementGatewayConfigConnectionDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiManagementGatewayConfigConnectionDeleteResponse>,
      ApiManagementGatewayConfigConnectionDeleteResponse
    >
  >;
  /**
   * Deletes an existing API Management gateway config connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param gatewayName The name of the API Management gateway.
   * @param configConnectionId The name of the API Management gateway config connection.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    gatewayName: string,
    configConnectionId: string,
    ifMatch: string,
    options?: ApiManagementGatewayConfigConnectionDeleteOptionalParams,
  ): Promise<ApiManagementGatewayConfigConnectionDeleteResponse>;
}
