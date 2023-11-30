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
  BareMetalMachine,
  BareMetalMachinesListBySubscriptionOptionalParams,
  BareMetalMachinesListByResourceGroupOptionalParams,
  BareMetalMachinesGetOptionalParams,
  BareMetalMachinesGetResponse,
  BareMetalMachinesCreateOrUpdateOptionalParams,
  BareMetalMachinesCreateOrUpdateResponse,
  BareMetalMachinesDeleteOptionalParams,
  BareMetalMachinesUpdateOptionalParams,
  BareMetalMachinesUpdateResponse,
  BareMetalMachinesCordonOptionalParams,
  BareMetalMachinesCordonResponse,
  BareMetalMachinesPowerOffOptionalParams,
  BareMetalMachinesPowerOffResponse,
  BareMetalMachinesReimageOptionalParams,
  BareMetalMachinesReimageResponse,
  BareMetalMachinesReplaceOptionalParams,
  BareMetalMachinesReplaceResponse,
  BareMetalMachinesRestartOptionalParams,
  BareMetalMachinesRestartResponse,
  BareMetalMachinesRunCommandOptionalParams,
  BareMetalMachinesRunCommandResponse,
  BareMetalMachinesRunDataExtractsOptionalParams,
  BareMetalMachinesRunDataExtractsResponse,
  BareMetalMachinesRunReadCommandsOptionalParams,
  BareMetalMachinesRunReadCommandsResponse,
  BareMetalMachinesStartOptionalParams,
  BareMetalMachinesStartResponse,
  BareMetalMachinesUncordonOptionalParams,
  BareMetalMachinesUncordonResponse,
  BareMetalMachinesValidateHardwareOptionalParams,
  BareMetalMachinesValidateHardwareResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a BareMetalMachines. */
export interface BareMetalMachines {
  /**
   * Get a list of bare metal machines in the provided subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: BareMetalMachinesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<BareMetalMachine>;
  /**
   * Get a list of bare metal machines in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: BareMetalMachinesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<BareMetalMachine>;
  /**
   * Get properties of the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesGetOptionalParams
  ): Promise<BareMetalMachinesGetResponse>;
  /**
   * Create a new bare metal machine or update the properties of the existing one.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesCreateOrUpdateResponse>,
      BareMetalMachinesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new bare metal machine or update the properties of the existing one.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesCreateOrUpdateOptionalParams
  ): Promise<BareMetalMachinesCreateOrUpdateResponse>;
  /**
   * Delete the provided bare metal machine.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete the provided bare metal machine.
   * All customer initiated requests will be rejected as the life cycle of this resource is managed by
   * the system.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Patch properties of the provided bare metal machine, or update tags associated with the bare metal
   * machine. Properties and tag updates can be done independently.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesUpdateResponse>,
      BareMetalMachinesUpdateResponse
    >
  >;
  /**
   * Patch properties of the provided bare metal machine, or update tags associated with the bare metal
   * machine. Properties and tag updates can be done independently.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesUpdateOptionalParams
  ): Promise<BareMetalMachinesUpdateResponse>;
  /**
   * Cordon the provided bare metal machine's Kubernetes node.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginCordon(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesCordonOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesCordonResponse>,
      BareMetalMachinesCordonResponse
    >
  >;
  /**
   * Cordon the provided bare metal machine's Kubernetes node.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginCordonAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesCordonOptionalParams
  ): Promise<BareMetalMachinesCordonResponse>;
  /**
   * Power off the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginPowerOff(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesPowerOffOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesPowerOffResponse>,
      BareMetalMachinesPowerOffResponse
    >
  >;
  /**
   * Power off the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginPowerOffAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesPowerOffOptionalParams
  ): Promise<BareMetalMachinesPowerOffResponse>;
  /**
   * Reimage the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginReimage(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesReimageOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesReimageResponse>,
      BareMetalMachinesReimageResponse
    >
  >;
  /**
   * Reimage the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginReimageAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesReimageOptionalParams
  ): Promise<BareMetalMachinesReimageResponse>;
  /**
   * Replace the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginReplace(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesReplaceOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesReplaceResponse>,
      BareMetalMachinesReplaceResponse
    >
  >;
  /**
   * Replace the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginReplaceAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesReplaceOptionalParams
  ): Promise<BareMetalMachinesReplaceResponse>;
  /**
   * Restart the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRestartOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesRestartResponse>,
      BareMetalMachinesRestartResponse
    >
  >;
  /**
   * Restart the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRestartOptionalParams
  ): Promise<BareMetalMachinesRestartResponse>;
  /**
   * Run the command or the script on the provided bare metal machine. The URL to storage account with
   * the command execution results and the command exit code can be retrieved from the operation status
   * API once available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRunCommand(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRunCommandOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesRunCommandResponse>,
      BareMetalMachinesRunCommandResponse
    >
  >;
  /**
   * Run the command or the script on the provided bare metal machine. The URL to storage account with
   * the command execution results and the command exit code can be retrieved from the operation status
   * API once available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRunCommandAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRunCommandOptionalParams
  ): Promise<BareMetalMachinesRunCommandResponse>;
  /**
   * Run one or more data extractions on the provided bare metal machine. The URL to storage account with
   * the command execution results and the command exit code can be retrieved from the operation status
   * API once available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRunDataExtracts(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRunDataExtractsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesRunDataExtractsResponse>,
      BareMetalMachinesRunDataExtractsResponse
    >
  >;
  /**
   * Run one or more data extractions on the provided bare metal machine. The URL to storage account with
   * the command execution results and the command exit code can be retrieved from the operation status
   * API once available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRunDataExtractsAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRunDataExtractsOptionalParams
  ): Promise<BareMetalMachinesRunDataExtractsResponse>;
  /**
   * Run one or more read-only commands on the provided bare metal machine. The URL to storage account
   * with the command execution results and the command exit code can be retrieved from the operation
   * status API once available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRunReadCommands(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRunReadCommandsOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesRunReadCommandsResponse>,
      BareMetalMachinesRunReadCommandsResponse
    >
  >;
  /**
   * Run one or more read-only commands on the provided bare metal machine. The URL to storage account
   * with the command execution results and the command exit code can be retrieved from the operation
   * status API once available.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginRunReadCommandsAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesRunReadCommandsOptionalParams
  ): Promise<BareMetalMachinesRunReadCommandsResponse>;
  /**
   * Start the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesStartOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesStartResponse>,
      BareMetalMachinesStartResponse
    >
  >;
  /**
   * Start the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesStartOptionalParams
  ): Promise<BareMetalMachinesStartResponse>;
  /**
   * Uncordon the provided bare metal machine's Kubernetes node.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginUncordon(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesUncordonOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesUncordonResponse>,
      BareMetalMachinesUncordonResponse
    >
  >;
  /**
   * Uncordon the provided bare metal machine's Kubernetes node.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginUncordonAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesUncordonOptionalParams
  ): Promise<BareMetalMachinesUncordonResponse>;
  /**
   * Validate the hardware of the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginValidateHardware(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesValidateHardwareOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachinesValidateHardwareResponse>,
      BareMetalMachinesValidateHardwareResponse
    >
  >;
  /**
   * Validate the hardware of the provided bare metal machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param bareMetalMachineName The name of the bare metal machine.
   * @param options The options parameters.
   */
  beginValidateHardwareAndWait(
    resourceGroupName: string,
    bareMetalMachineName: string,
    options?: BareMetalMachinesValidateHardwareOptionalParams
  ): Promise<BareMetalMachinesValidateHardwareResponse>;
}
