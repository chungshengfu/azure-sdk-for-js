/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  EntityQueryUnion,
  EntityQueriesListOptionalParams,
  EntityQueriesGetOptionalParams,
  EntityQueriesGetResponse,
  CustomEntityQueryUnion,
  EntityQueriesCreateOrUpdateOptionalParams,
  EntityQueriesCreateOrUpdateResponse,
  EntityQueriesDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a EntityQueries. */
export interface EntityQueries {
  /**
   * Gets all entity queries.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: EntityQueriesListOptionalParams,
  ): PagedAsyncIterableIterator<EntityQueryUnion>;
  /**
   * Gets an entity query.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityQueryId entity query ID
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    entityQueryId: string,
    options?: EntityQueriesGetOptionalParams,
  ): Promise<EntityQueriesGetResponse>;
  /**
   * Creates or updates the entity query.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityQueryId entity query ID
   * @param entityQuery The entity query we want to create or update
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    entityQueryId: string,
    entityQuery: CustomEntityQueryUnion,
    options?: EntityQueriesCreateOrUpdateOptionalParams,
  ): Promise<EntityQueriesCreateOrUpdateResponse>;
  /**
   * Delete the entity query.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param entityQueryId entity query ID
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    entityQueryId: string,
    options?: EntityQueriesDeleteOptionalParams,
  ): Promise<void>;
}
