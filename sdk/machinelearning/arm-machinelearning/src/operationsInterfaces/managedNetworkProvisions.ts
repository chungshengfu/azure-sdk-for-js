/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ManagedNetworkProvisionsProvisionManagedNetworkOptionalParams,
  ManagedNetworkProvisionsProvisionManagedNetworkResponse
} from "../models";

/** Interface representing a ManagedNetworkProvisions. */
export interface ManagedNetworkProvisions {
  /**
   * Provisions the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  beginProvisionManagedNetwork(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedNetworkProvisionsProvisionManagedNetworkOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedNetworkProvisionsProvisionManagedNetworkResponse>,
      ManagedNetworkProvisionsProvisionManagedNetworkResponse
    >
  >;
  /**
   * Provisions the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  beginProvisionManagedNetworkAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedNetworkProvisionsProvisionManagedNetworkOptionalParams
  ): Promise<ManagedNetworkProvisionsProvisionManagedNetworkResponse>;
}
