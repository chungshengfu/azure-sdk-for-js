/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TagOperationLinkContract,
  TagOperationLinkListByProductOptionalParams,
  TagOperationLinkGetOptionalParams,
  TagOperationLinkGetResponse,
  TagOperationLinkCreateOrUpdateOptionalParams,
  TagOperationLinkCreateOrUpdateResponse,
  TagOperationLinkDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TagOperationLink. */
export interface TagOperationLink {
  /**
   * Lists a collection of the operation links associated with a tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByProduct(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    options?: TagOperationLinkListByProductOptionalParams,
  ): PagedAsyncIterableIterator<TagOperationLinkContract>;
  /**
   * Gets the operation link for the tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param operationLinkId Tag-operation link identifier. Must be unique in the current API Management
   *                        service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    operationLinkId: string,
    options?: TagOperationLinkGetOptionalParams,
  ): Promise<TagOperationLinkGetResponse>;
  /**
   * Adds an operation to the specified tag via link.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param operationLinkId Tag-operation link identifier. Must be unique in the current API Management
   *                        service instance.
   * @param parameters Create or update parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    operationLinkId: string,
    parameters: TagOperationLinkContract,
    options?: TagOperationLinkCreateOrUpdateOptionalParams,
  ): Promise<TagOperationLinkCreateOrUpdateResponse>;
  /**
   * Deletes the specified operation from the specified tag.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param tagId Tag identifier. Must be unique in the current API Management service instance.
   * @param operationLinkId Tag-operation link identifier. Must be unique in the current API Management
   *                        service instance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    tagId: string,
    operationLinkId: string,
    options?: TagOperationLinkDeleteOptionalParams,
  ): Promise<void>;
}
