/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RegistryDataReferences } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import {
  GetBlobReferenceSASRequestDto,
  RegistryDataReferencesGetBlobReferenceSASOptionalParams,
  RegistryDataReferencesGetBlobReferenceSASResponse,
} from "../models";

/** Class containing RegistryDataReferences operations. */
export class RegistryDataReferencesImpl implements RegistryDataReferences {
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class RegistryDataReferences class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * Get blob reference SAS Uri value.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param registryName Name of Azure Machine Learning registry. This is case-insensitive
   * @param name Data reference name.
   * @param version Version identifier.
   * @param body Asset id and blob uri.
   * @param options The options parameters.
   */
  getBlobReferenceSAS(
    resourceGroupName: string,
    registryName: string,
    name: string,
    version: string,
    body: GetBlobReferenceSASRequestDto,
    options?: RegistryDataReferencesGetBlobReferenceSASOptionalParams,
  ): Promise<RegistryDataReferencesGetBlobReferenceSASResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, registryName, name, version, body, options },
      getBlobReferenceSASOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getBlobReferenceSASOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/registries/{registryName}/datareferences/{name}/versions/{version}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetBlobReferenceSASResponseDto,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.registryName,
    Parameters.version,
    Parameters.name1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
