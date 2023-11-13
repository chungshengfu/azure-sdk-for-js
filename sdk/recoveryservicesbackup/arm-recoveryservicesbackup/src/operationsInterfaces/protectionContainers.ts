/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ProtectionContainersGetOptionalParams,
  ProtectionContainersGetResponse,
  ProtectionContainerResource,
  ProtectionContainersRegisterOptionalParams,
  ProtectionContainersRegisterResponse,
  ProtectionContainersUnregisterOptionalParams,
  ProtectionContainersInquireOptionalParams,
  ProtectionContainersRefreshOptionalParams
} from "../models";

/** Interface representing a ProtectionContainers. */
export interface ProtectionContainers {
  /**
   * Gets details of the specific container registered to your Recovery Services Vault.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container whose details need to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersGetOptionalParams
  ): Promise<ProtectionContainersGetResponse>;
  /**
   * Registers the container with Recovery Services vault.
   * This is an asynchronous operation. To track the operation status, use location header to call get
   * latest status of
   * the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginRegister(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    parameters: ProtectionContainerResource,
    options?: ProtectionContainersRegisterOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectionContainersRegisterResponse>,
      ProtectionContainersRegisterResponse
    >
  >;
  /**
   * Registers the container with Recovery Services vault.
   * This is an asynchronous operation. To track the operation status, use location header to call get
   * latest status of
   * the operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the container.
   * @param containerName Name of the container to be registered.
   * @param parameters Request body for operation
   * @param options The options parameters.
   */
  beginRegisterAndWait(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    parameters: ProtectionContainerResource,
    options?: ProtectionContainersRegisterOptionalParams
  ): Promise<ProtectionContainersRegisterResponse>;
  /**
   * Unregisters the given container from your Recovery Services Vault. This is an asynchronous
   * operation. To determine
   * whether the backend service has finished processing the request, call Get Container Operation Result
   * API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container which needs to be unregistered from the Recovery Services
   *                      Vault.
   * @param options The options parameters.
   */
  beginUnregister(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersUnregisterOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Unregisters the given container from your Recovery Services Vault. This is an asynchronous
   * operation. To determine
   * whether the backend service has finished processing the request, call Get Container Operation Result
   * API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Name of the fabric where the container belongs.
   * @param containerName Name of the container which needs to be unregistered from the Recovery Services
   *                      Vault.
   * @param options The options parameters.
   */
  beginUnregisterAndWait(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersUnregisterOptionalParams
  ): Promise<void>;
  /**
   * This is an async operation and the results should be tracked using location header or
   * Azure-async-url.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric Name associated with the container.
   * @param containerName Name of the container in which inquiry needs to be triggered.
   * @param options The options parameters.
   */
  inquire(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    options?: ProtectionContainersInquireOptionalParams
  ): Promise<void>;
  /**
   * Discovers all the containers in the subscription that can be backed up to Recovery Services Vault.
   * This is an
   * asynchronous operation. To know the status of the operation, call GetRefreshOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated the container.
   * @param options The options parameters.
   */
  refresh(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    options?: ProtectionContainersRefreshOptionalParams
  ): Promise<void>;
}
