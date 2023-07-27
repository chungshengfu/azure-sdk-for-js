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
  ServerSecurityAlertPolicy,
  ServerSecurityAlertPoliciesListByServerOptionalParams,
  SecurityAlertPolicyNameAutoGenerated,
  ServerSecurityAlertPoliciesGetOptionalParams,
  ServerSecurityAlertPoliciesGetResponse,
  ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams,
  ServerSecurityAlertPoliciesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerSecurityAlertPolicies. */
export interface ServerSecurityAlertPolicies {
  /**
   * Get the server's threat detection policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerSecurityAlertPoliciesListByServerOptionalParams
  ): PagedAsyncIterableIterator<ServerSecurityAlertPolicy>;
  /**
   * Get a server's security alert policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the security alert policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    options?: ServerSecurityAlertPoliciesGetOptionalParams
  ): Promise<ServerSecurityAlertPoliciesGetResponse>;
  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ServerSecurityAlertPoliciesCreateOrUpdateResponse>,
      ServerSecurityAlertPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a threat detection policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param securityAlertPolicyName The name of the threat detection policy.
   * @param parameters The server security alert policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    securityAlertPolicyName: SecurityAlertPolicyNameAutoGenerated,
    parameters: ServerSecurityAlertPolicy,
    options?: ServerSecurityAlertPoliciesCreateOrUpdateOptionalParams
  ): Promise<ServerSecurityAlertPoliciesCreateOrUpdateResponse>;
}
