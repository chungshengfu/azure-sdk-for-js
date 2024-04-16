/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PrivateLinkResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AttestationManagementClient } from "../attestationManagementClient";
import {
  PrivateLinkResourcesListByProviderOptionalParams,
  PrivateLinkResourcesListByProviderResponse,
} from "../models";

/** Class containing PrivateLinkResources operations. */
export class PrivateLinkResourcesImpl implements PrivateLinkResources {
  private readonly client: AttestationManagementClient;

  /**
   * Initialize a new instance of the class PrivateLinkResources class.
   * @param client Reference to the service client
   */
  constructor(client: AttestationManagementClient) {
    this.client = client;
  }

  /**
   * Gets the private link resources supported for the attestation provider.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param providerName The name of the attestation provider.
   * @param options The options parameters.
   */
  listByProvider(
    resourceGroupName: string,
    providerName: string,
    options?: PrivateLinkResourcesListByProviderOptionalParams,
  ): Promise<PrivateLinkResourcesListByProviderResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, providerName, options },
      listByProviderOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProviderOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Attestation/attestationProviders/{providerName}/privateLinkResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateLinkResourceListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
