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
  PostgresInstance,
  PostgresInstancesListOptionalParams,
  PostgresInstancesListByResourceGroupOptionalParams,
  PostgresInstancesGetOptionalParams,
  PostgresInstancesGetResponse,
  PostgresInstancesCreateOptionalParams,
  PostgresInstancesCreateResponse,
  PostgresInstancesDeleteOptionalParams,
  PostgresInstanceUpdate,
  PostgresInstancesUpdateOptionalParams,
  PostgresInstancesUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PostgresInstances. */
export interface PostgresInstances {
  /**
   * List postgres Instance resources in the subscription
   * @param options The options parameters.
   */
  list(
    options?: PostgresInstancesListOptionalParams,
  ): PagedAsyncIterableIterator<PostgresInstance>;
  /**
   * Get a postgres Instances list by Resource group name.
   * @param resourceGroupName The name of the Azure resource group
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: PostgresInstancesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<PostgresInstance>;
  /**
   * Retrieves a postgres Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param postgresInstanceName Name of Postgres Instance
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    postgresInstanceName: string,
    options?: PostgresInstancesGetOptionalParams,
  ): Promise<PostgresInstancesGetResponse>;
  /**
   * Creates or replaces a postgres Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param postgresInstanceName Name of Postgres Instance
   * @param resource The postgres instance
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    postgresInstanceName: string,
    resource: PostgresInstance,
    options?: PostgresInstancesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PostgresInstancesCreateResponse>,
      PostgresInstancesCreateResponse
    >
  >;
  /**
   * Creates or replaces a postgres Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param postgresInstanceName Name of Postgres Instance
   * @param resource The postgres instance
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    postgresInstanceName: string,
    resource: PostgresInstance,
    options?: PostgresInstancesCreateOptionalParams,
  ): Promise<PostgresInstancesCreateResponse>;
  /**
   * Deletes a postgres Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param postgresInstanceName Name of Postgres Instance
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    postgresInstanceName: string,
    options?: PostgresInstancesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a postgres Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param postgresInstanceName Name of Postgres Instance
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    postgresInstanceName: string,
    options?: PostgresInstancesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Updates a postgres Instance resource
   * @param resourceGroupName The name of the Azure resource group
   * @param postgresInstanceName Name of Postgres Instance
   * @param parameters The Postgres Instance.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    postgresInstanceName: string,
    parameters: PostgresInstanceUpdate,
    options?: PostgresInstancesUpdateOptionalParams,
  ): Promise<PostgresInstancesUpdateResponse>;
}
