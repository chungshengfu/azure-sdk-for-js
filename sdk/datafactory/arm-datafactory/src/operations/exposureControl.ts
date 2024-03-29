/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ExposureControl } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryManagementClient } from "../dataFactoryManagementClient";
import {
  ExposureControlRequest,
  ExposureControlGetFeatureValueOptionalParams,
  ExposureControlGetFeatureValueResponse,
  ExposureControlGetFeatureValueByFactoryOptionalParams,
  ExposureControlGetFeatureValueByFactoryResponse,
  ExposureControlBatchRequest,
  ExposureControlQueryFeatureValuesByFactoryOptionalParams,
  ExposureControlQueryFeatureValuesByFactoryResponse,
} from "../models";

/** Class containing ExposureControl operations. */
export class ExposureControlImpl implements ExposureControl {
  private readonly client: DataFactoryManagementClient;

  /**
   * Initialize a new instance of the class ExposureControl class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryManagementClient) {
    this.client = client;
  }

  /**
   * Get exposure control feature for specific location.
   * @param locationId The location identifier.
   * @param exposureControlRequest The exposure control request.
   * @param options The options parameters.
   */
  getFeatureValue(
    locationId: string,
    exposureControlRequest: ExposureControlRequest,
    options?: ExposureControlGetFeatureValueOptionalParams,
  ): Promise<ExposureControlGetFeatureValueResponse> {
    return this.client.sendOperationRequest(
      { locationId, exposureControlRequest, options },
      getFeatureValueOperationSpec,
    );
  }

  /**
   * Get exposure control feature for specific factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param exposureControlRequest The exposure control request.
   * @param options The options parameters.
   */
  getFeatureValueByFactory(
    resourceGroupName: string,
    factoryName: string,
    exposureControlRequest: ExposureControlRequest,
    options?: ExposureControlGetFeatureValueByFactoryOptionalParams,
  ): Promise<ExposureControlGetFeatureValueByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, exposureControlRequest, options },
      getFeatureValueByFactoryOperationSpec,
    );
  }

  /**
   * Get list of exposure control features for specific factory.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param exposureControlBatchRequest The exposure control request for list of features.
   * @param options The options parameters.
   */
  queryFeatureValuesByFactory(
    resourceGroupName: string,
    factoryName: string,
    exposureControlBatchRequest: ExposureControlBatchRequest,
    options?: ExposureControlQueryFeatureValuesByFactoryOptionalParams,
  ): Promise<ExposureControlQueryFeatureValuesByFactoryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, exposureControlBatchRequest, options },
      queryFeatureValuesByFactoryOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getFeatureValueOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DataFactory/locations/{locationId}/getFeatureValue",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExposureControlResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.exposureControlRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationId,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getFeatureValueByFactoryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/getFeatureValue",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExposureControlResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.exposureControlRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const queryFeatureValuesByFactoryOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/queryFeaturesValue",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ExposureControlBatchResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.exposureControlBatchRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
