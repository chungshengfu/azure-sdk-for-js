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
  ExtendedServerBlobAuditingPolicy,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams,
  BlobAuditingPolicyName,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOptionalParams,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceManagedSqlServerExtendedBlobAuditingPolicies. */
export interface WorkspaceManagedSqlServerExtendedBlobAuditingPolicies {
  /**
   * List workspace managed sql server's extended blob auditing policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<ExtendedServerBlobAuditingPolicy>;
  /**
   * Get a workspace SQL server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param blobAuditingPolicyName The name of the blob auditing policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    blobAuditingPolicyName: BlobAuditingPolicyName,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOptionalParams,
  ): Promise<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse>;
  /**
   * Create or Update a workspace managed sql server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param blobAuditingPolicyName The name of the blob auditing policy.
   * @param parameters Properties of extended blob auditing policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    blobAuditingPolicyName: BlobAuditingPolicyName,
    parameters: ExtendedServerBlobAuditingPolicy,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse>,
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or Update a workspace managed sql server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param blobAuditingPolicyName The name of the blob auditing policy.
   * @param parameters Properties of extended blob auditing policy.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    blobAuditingPolicyName: BlobAuditingPolicyName,
    parameters: ExtendedServerBlobAuditingPolicy,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse>;
}
