/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Operation } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  ValidateOperationRequestResource,
  OperationValidateOptionalParams,
  OperationValidateResponse
} from "../models";

/** Class containing Operation operations. */
export class OperationImpl implements Operation {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class Operation class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Validate operation for specified backed up item. This is a synchronous operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param parameters resource validate operation request
   * @param options The options parameters.
   */
  validate(
    vaultName: string,
    resourceGroupName: string,
    parameters: ValidateOperationRequestResource,
    options?: OperationValidateOptionalParams
  ): Promise<OperationValidateResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, parameters, options },
      validateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperation",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateOperationsResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters14,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
