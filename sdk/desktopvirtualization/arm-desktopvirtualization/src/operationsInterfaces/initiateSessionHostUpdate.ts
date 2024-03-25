/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  InitiateSessionHostUpdatePostOptionalParams,
  InitiateSessionHostUpdatePostResponse,
} from "../models";

/** Interface representing a InitiateSessionHostUpdate. */
export interface InitiateSessionHostUpdate {
  /**
   * Initiates a hostpool update or schedule an update for the future.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  beginPost(
    resourceGroupName: string,
    hostPoolName: string,
    options?: InitiateSessionHostUpdatePostOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InitiateSessionHostUpdatePostResponse>,
      InitiateSessionHostUpdatePostResponse
    >
  >;
  /**
   * Initiates a hostpool update or schedule an update for the future.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param hostPoolName The name of the host pool within the specified resource group
   * @param options The options parameters.
   */
  beginPostAndWait(
    resourceGroupName: string,
    hostPoolName: string,
    options?: InitiateSessionHostUpdatePostOptionalParams,
  ): Promise<InitiateSessionHostUpdatePostResponse>;
}
