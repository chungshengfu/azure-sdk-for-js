/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ConnectionRaiPolicyDeleteOptionalParams,
  ConnectionRaiPolicyDeleteResponse,
  ConnectionRaiPolicyGetOptionalParams,
  ConnectionRaiPolicyGetResponse,
  RaiPolicyPropertiesBasicResource,
  ConnectionRaiPolicyCreateOptionalParams,
  ConnectionRaiPolicyCreateResponse,
} from "../models";

/** Interface representing a ConnectionRaiPolicy. */
export interface ConnectionRaiPolicy {
  /**
   * Deletes the specified Content Filters associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiPolicyName Name of the Rai Policy.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiPolicyName: string,
    options?: ConnectionRaiPolicyDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConnectionRaiPolicyDeleteResponse>,
      ConnectionRaiPolicyDeleteResponse
    >
  >;
  /**
   * Deletes the specified Content Filters associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiPolicyName Name of the Rai Policy.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiPolicyName: string,
    options?: ConnectionRaiPolicyDeleteOptionalParams,
  ): Promise<ConnectionRaiPolicyDeleteResponse>;
  /**
   * Gets the specified Content Filters associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiPolicyName Name of the Rai Policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiPolicyName: string,
    options?: ConnectionRaiPolicyGetOptionalParams,
  ): Promise<ConnectionRaiPolicyGetResponse>;
  /**
   * Update the state of specified Content Filters associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiPolicyName Name of the Rai Policy.
   * @param body Azure OpenAI Content Filters resource.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiPolicyName: string,
    body: RaiPolicyPropertiesBasicResource,
    options?: ConnectionRaiPolicyCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConnectionRaiPolicyCreateResponse>,
      ConnectionRaiPolicyCreateResponse
    >
  >;
  /**
   * Update the state of specified Content Filters associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiPolicyName Name of the Rai Policy.
   * @param body Azure OpenAI Content Filters resource.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiPolicyName: string,
    body: RaiPolicyPropertiesBasicResource,
    options?: ConnectionRaiPolicyCreateOptionalParams,
  ): Promise<ConnectionRaiPolicyCreateResponse>;
}
