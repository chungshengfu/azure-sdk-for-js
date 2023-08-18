/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ApiRevisionContract,
  WorkspaceApiRevisionListByServiceOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceApiRevision. */
export interface WorkspaceApiRevision {
  /**
   * Lists all revisions of an API.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param apiId API identifier. Must be unique in the current API Management service instance.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    apiId: string,
    options?: WorkspaceApiRevisionListByServiceOptionalParams
  ): PagedAsyncIterableIterator<ApiRevisionContract>;
}
