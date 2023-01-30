/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  VMwareMachine,
  MachinesGetAllMachinesInSiteOptionalParams,
  MachinesGetMachineOptionalParams,
  MachinesGetMachineResponse,
  MachinesStopMachineOptionalParams,
  MachinesStopMachineResponse,
  MachinesStartMachineOptionalParams,
  MachinesStartMachineResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Machines. */
export interface Machines {
  /**
   * Method to get machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  listAllMachinesInSite(
    resourceGroupName: string,
    siteName: string,
    options?: MachinesGetAllMachinesInSiteOptionalParams
  ): PagedAsyncIterableIterator<VMwareMachine>;
  /**
   * Method to get machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param machineName Machine ARM name.
   * @param options The options parameters.
   */
  getMachine(
    resourceGroupName: string,
    siteName: string,
    machineName: string,
    options?: MachinesGetMachineOptionalParams
  ): Promise<MachinesGetMachineResponse>;
  /**
   * Method to stop a machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param machineName Machine ARM name.
   * @param options The options parameters.
   */
  stopMachine(
    resourceGroupName: string,
    siteName: string,
    machineName: string,
    options?: MachinesStopMachineOptionalParams
  ): Promise<MachinesStopMachineResponse>;
  /**
   * Method to start a machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param machineName Machine ARM name.
   * @param options The options parameters.
   */
  startMachine(
    resourceGroupName: string,
    siteName: string,
    machineName: string,
    options?: MachinesStartMachineOptionalParams
  ): Promise<MachinesStartMachineResponse>;
}
