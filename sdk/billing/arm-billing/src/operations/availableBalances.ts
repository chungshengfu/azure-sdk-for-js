/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AvailableBalances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  AvailableBalancesGetOptionalParams,
  AvailableBalancesGetResponse,
} from "../models";

/** Class containing AvailableBalances operations. */
export class AvailableBalancesImpl implements AvailableBalances {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class AvailableBalances class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * The available credit balance for a billing profile. This is the balance that can be used for pay now
   * to settle due or past due invoices. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    options?: AvailableBalancesGetOptionalParams,
  ): Promise<AvailableBalancesGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, billingProfileName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/availableBalance/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableBalance,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.billingAccountName,
    Parameters.billingProfileName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
