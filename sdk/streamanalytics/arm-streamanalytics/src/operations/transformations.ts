/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Transformations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClient } from "../streamAnalyticsManagementClient";
import {
  Transformation,
  TransformationsCreateOrReplaceOptionalParams,
  TransformationsCreateOrReplaceResponse,
  TransformationsUpdateOptionalParams,
  TransformationsUpdateResponse,
  TransformationsGetOptionalParams,
  TransformationsGetResponse,
} from "../models";

/** Class containing Transformations operations. */
export class TransformationsImpl implements Transformations {
  private readonly client: StreamAnalyticsManagementClient;

  /**
   * Initialize a new instance of the class Transformations class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClient) {
    this.client = client;
  }

  /**
   * Creates a transformation or replaces an already existing transformation under an existing streaming
   * job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param transformation The definition of the transformation that will be used to create a new
   *                       transformation or replace the existing one under the streaming job.
   * @param options The options parameters.
   */
  createOrReplace(
    resourceGroupName: string,
    jobName: string,
    transformationName: string,
    transformation: Transformation,
    options?: TransformationsCreateOrReplaceOptionalParams,
  ): Promise<TransformationsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        transformationName,
        transformation,
        options,
      },
      createOrReplaceOperationSpec,
    );
  }

  /**
   * Updates an existing transformation under an existing streaming job. This can be used to partially
   * update (ie. update one or two properties) a transformation without affecting the rest the job or
   * transformation definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param transformation A Transformation object. The properties specified here will overwrite the
   *                       corresponding properties in the existing transformation (ie. Those properties will be updated). Any
   *                       properties that are set to null here will mean that the corresponding property in the existing
   *                       transformation will remain the same and not change as a result of this PATCH operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    jobName: string,
    transformationName: string,
    transformation: Transformation,
    options?: TransformationsUpdateOptionalParams,
  ): Promise<TransformationsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        transformationName,
        transformation,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * Gets details about the specified transformation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    transformationName: string,
    options?: TransformationsGetOptionalParams,
  ): Promise<TransformationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, transformationName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrReplaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsCreateOrReplaceHeaders,
    },
    201: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsCreateOrReplaceHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.transformation,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.transformationName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.transformation,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.transformationName,
  ],
  headerParameters: [
    Parameters.accept,
    Parameters.contentType,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.transformationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
