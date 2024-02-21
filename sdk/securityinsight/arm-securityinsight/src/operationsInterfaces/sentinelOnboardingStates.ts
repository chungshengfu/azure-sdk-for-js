/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SentinelOnboardingStatesGetOptionalParams,
  SentinelOnboardingStatesGetResponse,
  SentinelOnboardingStatesCreateOptionalParams,
  SentinelOnboardingStatesCreateResponse,
  SentinelOnboardingStatesDeleteOptionalParams,
  SentinelOnboardingStatesListOptionalParams,
  SentinelOnboardingStatesListResponse,
} from "../models";

/** Interface representing a SentinelOnboardingStates. */
export interface SentinelOnboardingStates {
  /**
   * Get Sentinel onboarding state
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sentinelOnboardingStateName The Sentinel onboarding state name. Supports - default
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    sentinelOnboardingStateName: string,
    options?: SentinelOnboardingStatesGetOptionalParams,
  ): Promise<SentinelOnboardingStatesGetResponse>;
  /**
   * Create Sentinel onboarding state
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sentinelOnboardingStateName The Sentinel onboarding state name. Supports - default
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    sentinelOnboardingStateName: string,
    options?: SentinelOnboardingStatesCreateOptionalParams,
  ): Promise<SentinelOnboardingStatesCreateResponse>;
  /**
   * Delete Sentinel onboarding state
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sentinelOnboardingStateName The Sentinel onboarding state name. Supports - default
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    sentinelOnboardingStateName: string,
    options?: SentinelOnboardingStatesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets all Sentinel onboarding states
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: SentinelOnboardingStatesListOptionalParams,
  ): Promise<SentinelOnboardingStatesListResponse>;
}
