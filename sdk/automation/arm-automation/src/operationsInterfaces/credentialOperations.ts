/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Credential,
  CredentialListByAutomationAccountOptionalParams,
  CredentialDeleteOptionalParams,
  CredentialGetOptionalParams,
  CredentialGetResponse,
  CredentialCreateOrUpdateParameters,
  CredentialCreateOrUpdateOptionalParams,
  CredentialCreateOrUpdateResponse,
  CredentialUpdateParameters,
  CredentialUpdateOptionalParams,
  CredentialUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CredentialOperations. */
export interface CredentialOperations {
  /**
   * Retrieve a list of credentials.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The options parameters.
   */
  listByAutomationAccount(
    resourceGroupName: string,
    automationAccountName: string,
    options?: CredentialListByAutomationAccountOptionalParams,
  ): PagedAsyncIterableIterator<Credential>;
  /**
   * Delete the credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    options?: CredentialDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Retrieve the credential identified by credential name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The name of credential.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    options?: CredentialGetOptionalParams,
  ): Promise<CredentialGetResponse>;
  /**
   * Create a credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the create or update credential operation.
   * @param parameters The parameters supplied to the create or update credential operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    parameters: CredentialCreateOrUpdateParameters,
    options?: CredentialCreateOrUpdateOptionalParams,
  ): Promise<CredentialCreateOrUpdateResponse>;
  /**
   * Update a credential.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param credentialName The parameters supplied to the Update credential operation.
   * @param parameters The parameters supplied to the Update credential operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    automationAccountName: string,
    credentialName: string,
    parameters: CredentialUpdateParameters,
    options?: CredentialUpdateOptionalParams,
  ): Promise<CredentialUpdateResponse>;
}
