/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AttestationProvider,
  AttestationProvidersListByResourceGroupOptionalParams,
  AttestationProvidersGetOptionalParams,
  AttestationProvidersGetResponse,
  AttestationProvidersCreateOptionalParams,
  AttestationProvidersCreateResponse,
  AttestationProviderUpdate,
  AttestationProvidersUpdateOptionalParams,
  AttestationProvidersUpdateResponse,
  AttestationProvidersDeleteOptionalParams,
  AttestationProvidersListByProviderOptionalParams,
  AttestationProvidersListByProviderResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AttestationProviders. */
export interface AttestationProviders {
  /**
   * Returns attestation providers list in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AttestationProvidersListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<AttestationProvider>;
  /**
   * Get the status of Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    providerName: string,
    options?: AttestationProvidersGetOptionalParams
  ): Promise<AttestationProvidersGetResponse>;
  /**
   * Creates or updates an Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    providerName: string,
    resource: AttestationProvider,
    options?: AttestationProvidersCreateOptionalParams
  ): Promise<AttestationProvidersCreateResponse>;
  /**
   * Updates the Attestation Provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param properties The resource properties to be updated.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    providerName: string,
    properties: AttestationProviderUpdate,
    options?: AttestationProvidersUpdateOptionalParams
  ): Promise<AttestationProvidersUpdateResponse>;
  /**
   * Delete Attestation Service.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName Name of the attestation provider.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    providerName: string,
    options?: AttestationProvidersDeleteOptionalParams
  ): Promise<void>;
  /**
   * Returns a list of attestation providers in a subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName The name of the attestation provider.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  listByProvider(
    resourceGroupName: string,
    providerName: string,
    subscriptionId: string,
    options?: AttestationProvidersListByProviderOptionalParams
  ): Promise<AttestationProvidersListByProviderResponse>;
}
