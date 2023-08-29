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
  Secret,
  SecretsListByProfileOptionalParams,
  SecretsGetOptionalParams,
  SecretsGetResponse,
  SecretsCreateOptionalParams,
  SecretsCreateResponse,
  SecretsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Secrets. */
export interface Secrets {
  /**
   * Lists existing AzureFrontDoor secrets.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param options The options parameters.
   */
  listByProfile(
    resourceGroupName: string,
    profileName: string,
    options?: SecretsListByProfileOptionalParams
  ): PagedAsyncIterableIterator<Secret>;
  /**
   * Gets an existing Secret within a profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    options?: SecretsGetOptionalParams
  ): Promise<SecretsGetResponse>;
  /**
   * Creates a new Secret within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param secret The Secret properties.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    secret: Secret,
    options?: SecretsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SecretsCreateResponse>,
      SecretsCreateResponse
    >
  >;
  /**
   * Creates a new Secret within the specified profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param secret The Secret properties.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    secret: Secret,
    options?: SecretsCreateOptionalParams
  ): Promise<SecretsCreateResponse>;
  /**
   * Deletes an existing Secret within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    options?: SecretsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an existing Secret within profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param secretName Name of the Secret under the profile.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    secretName: string,
    options?: SecretsDeleteOptionalParams
  ): Promise<void>;
}
