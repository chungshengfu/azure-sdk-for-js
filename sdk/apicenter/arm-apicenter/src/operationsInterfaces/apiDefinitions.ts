/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApiDefinition,
  ApiDefinitionsListOptionalParams,
  ApiDefinitionsGetOptionalParams,
  ApiDefinitionsGetResponse,
  ApiDefinitionsCreateOrUpdateOptionalParams,
  ApiDefinitionsCreateOrUpdateResponse,
  ApiDefinitionsDeleteOptionalParams,
  ApiDefinitionsHeadOptionalParams,
  ApiDefinitionsHeadResponse,
  ApiSpecImportRequest,
  ApiDefinitionsImportSpecificationOptionalParams,
  ApiDefinitionsExportSpecificationOptionalParams,
  ApiDefinitionsExportSpecificationResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiDefinitions. */
export interface ApiDefinitions {
  /**
   * Returns a collection of API definitions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiDefinitionsListOptionalParams,
  ): PagedAsyncIterableIterator<ApiDefinition>;
  /**
   * Returns details of the API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiDefinitionsGetOptionalParams,
  ): Promise<ApiDefinitionsGetResponse>;
  /**
   * Creates new or updates existing API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param payload API definition entity.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    payload: ApiDefinition,
    options?: ApiDefinitionsCreateOrUpdateOptionalParams,
  ): Promise<ApiDefinitionsCreateOrUpdateResponse>;
  /**
   * Deletes specified API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiDefinitionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Checks if specified API definition exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  head(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiDefinitionsHeadOptionalParams,
  ): Promise<ApiDefinitionsHeadResponse>;
  /**
   * Imports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param payload The API specification source entity.
   * @param options The options parameters.
   */
  importSpecification(
    resourceGroupName: string,
    serviceName: string,
    payload: ApiSpecImportRequest,
    options?: ApiDefinitionsImportSpecificationOptionalParams,
  ): Promise<void>;
  /**
   * Exports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param options The options parameters.
   */
  exportSpecification(
    resourceGroupName: string,
    serviceName: string,
    options?: ApiDefinitionsExportSpecificationOptionalParams,
  ): Promise<ApiDefinitionsExportSpecificationResponse>;
}
