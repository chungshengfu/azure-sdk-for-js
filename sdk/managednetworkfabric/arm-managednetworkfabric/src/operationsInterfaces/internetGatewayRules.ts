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
  InternetGatewayRule,
  InternetGatewayRulesListByResourceGroupOptionalParams,
  InternetGatewayRulesListBySubscriptionOptionalParams,
  InternetGatewayRulesCreateOptionalParams,
  InternetGatewayRulesCreateResponse,
  InternetGatewayRulesGetOptionalParams,
  InternetGatewayRulesGetResponse,
  InternetGatewayRulePatch,
  InternetGatewayRulesUpdateOptionalParams,
  InternetGatewayRulesUpdateResponse,
  InternetGatewayRulesDeleteOptionalParams,
  InternetGatewayRulesDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InternetGatewayRules. */
export interface InternetGatewayRules {
  /**
   * Implements Internet Gateway Rules list by resource group GET method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: InternetGatewayRulesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<InternetGatewayRule>;
  /**
   * List all Internet Gateway rules in the given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: InternetGatewayRulesListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<InternetGatewayRule>;
  /**
   * Creates an Internet Gateway rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRule,
    options?: InternetGatewayRulesCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewayRulesCreateResponse>,
      InternetGatewayRulesCreateResponse
    >
  >;
  /**
   * Creates an Internet Gateway rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Request payload.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRule,
    options?: InternetGatewayRulesCreateOptionalParams,
  ): Promise<InternetGatewayRulesCreateResponse>;
  /**
   * Gets an Internet Gateway Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    options?: InternetGatewayRulesGetOptionalParams,
  ): Promise<InternetGatewayRulesGetResponse>;
  /**
   * API to update certain properties of the Internet Gateway Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Internet Gateway Rule properties to update.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRulePatch,
    options?: InternetGatewayRulesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewayRulesUpdateResponse>,
      InternetGatewayRulesUpdateResponse
    >
  >;
  /**
   * API to update certain properties of the Internet Gateway Rule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param body Internet Gateway Rule properties to update.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    body: InternetGatewayRulePatch,
    options?: InternetGatewayRulesUpdateOptionalParams,
  ): Promise<InternetGatewayRulesUpdateResponse>;
  /**
   * Implements Internet Gateway Rules DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    options?: InternetGatewayRulesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<InternetGatewayRulesDeleteResponse>,
      InternetGatewayRulesDeleteResponse
    >
  >;
  /**
   * Implements Internet Gateway Rules DELETE method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param internetGatewayRuleName Name of the Internet Gateway rule.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    internetGatewayRuleName: string,
    options?: InternetGatewayRulesDeleteOptionalParams,
  ): Promise<InternetGatewayRulesDeleteResponse>;
}
