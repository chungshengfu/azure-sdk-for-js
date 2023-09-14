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
  RaiBlocklist,
  RaiBlocklistsListOptionalParams,
  RaiBlocklistsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RaiBlocklists. */
export interface RaiBlocklists {
  /**
   * Gets the custom blocklists associated with the Azure OpenAI account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: RaiBlocklistsListOptionalParams
  ): PagedAsyncIterableIterator<RaiBlocklist>;
  /**
   * Deletes the specified custom blocklist associated with the Azure OpenAI account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    options?: RaiBlocklistsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the specified custom blocklist associated with the Azure OpenAI account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName The name of Cognitive Services account.
   * @param raiBlocklistName The name of the RaiBlocklist associated with the Cognitive Services Account
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    raiBlocklistName: string,
    options?: RaiBlocklistsDeleteOptionalParams
  ): Promise<void>;
}
