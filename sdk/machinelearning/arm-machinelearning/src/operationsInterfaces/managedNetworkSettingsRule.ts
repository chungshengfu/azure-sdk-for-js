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
  OutboundRuleBasicResource,
  ManagedNetworkSettingsRuleListOptionalParams,
  ManagedNetworkSettingsRuleDeleteOptionalParams,
  ManagedNetworkSettingsRuleGetOptionalParams,
  ManagedNetworkSettingsRuleGetResponse,
  ManagedNetworkSettingsRuleCreateOrUpdateOptionalParams,
  ManagedNetworkSettingsRuleCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedNetworkSettingsRule. */
export interface ManagedNetworkSettingsRule {
  /**
   * Lists the managed network outbound rules for a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedNetworkSettingsRuleListOptionalParams
  ): PagedAsyncIterableIterator<OutboundRuleBasicResource>;
  /**
   * Deletes an outbound rule from the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param ruleName Name of the workspace managed network outbound rule
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    ruleName: string,
    options?: ManagedNetworkSettingsRuleDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes an outbound rule from the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param ruleName Name of the workspace managed network outbound rule
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    ruleName: string,
    options?: ManagedNetworkSettingsRuleDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets an outbound rule from the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param ruleName Name of the workspace managed network outbound rule
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    ruleName: string,
    options?: ManagedNetworkSettingsRuleGetOptionalParams
  ): Promise<ManagedNetworkSettingsRuleGetResponse>;
  /**
   * Creates or updates an outbound rule in the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param ruleName Name of the workspace managed network outbound rule
   * @param body Outbound Rule to be created or updated in the managed network of a machine learning
   *             workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    ruleName: string,
    body: OutboundRuleBasicResource,
    options?: ManagedNetworkSettingsRuleCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedNetworkSettingsRuleCreateOrUpdateResponse>,
      ManagedNetworkSettingsRuleCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an outbound rule in the managed network of a machine learning workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param ruleName Name of the workspace managed network outbound rule
   * @param body Outbound Rule to be created or updated in the managed network of a machine learning
   *             workspace.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    ruleName: string,
    body: OutboundRuleBasicResource,
    options?: ManagedNetworkSettingsRuleCreateOrUpdateOptionalParams
  ): Promise<ManagedNetworkSettingsRuleCreateOrUpdateResponse>;
}
