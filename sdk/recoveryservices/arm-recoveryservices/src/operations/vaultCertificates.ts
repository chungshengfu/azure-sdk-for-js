/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VaultCertificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesClient } from "../recoveryServicesClient";
import {
  CertificateRequest,
  VaultCertificatesCreateOptionalParams,
  VaultCertificatesCreateResponse,
} from "../models";

/** Class containing VaultCertificates operations. */
export class VaultCertificatesImpl implements VaultCertificates {
  private readonly client: RecoveryServicesClient;

  /**
   * Initialize a new instance of the class VaultCertificates class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesClient) {
    this.client = client;
  }

  /**
   * Uploads a certificate for a resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The name of the recovery services vault.
   * @param certificateName Certificate friendly name.
   * @param certificateRequest Input parameters for uploading the vault certificate.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    vaultName: string,
    certificateName: string,
    certificateRequest: CertificateRequest,
    options?: VaultCertificatesCreateOptionalParams,
  ): Promise<VaultCertificatesCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        certificateName,
        certificateRequest,
        options,
      },
      createOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VaultCertificateResponse,
    },
  },
  requestBody: Parameters.certificateRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.certificateName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
