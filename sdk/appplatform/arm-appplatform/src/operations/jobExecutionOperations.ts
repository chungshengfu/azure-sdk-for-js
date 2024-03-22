/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { JobExecutionOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AppPlatformManagementClient } from "../appPlatformManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  JobExecutionCancelOptionalParams,
  JobExecutionCancelResponse,
  JobExecutionGetOptionalParams,
  JobExecutionGetResponse,
  JobExecutionListEnvSecretsOptionalParams,
  JobExecutionListEnvSecretsResponse,
} from "../models";

/** Class containing JobExecutionOperations operations. */
export class JobExecutionOperationsImpl implements JobExecutionOperations {
  private readonly client: AppPlatformManagementClient;

  /**
   * Initialize a new instance of the class JobExecutionOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AppPlatformManagementClient) {
    this.client = client;
  }

  /**
   * Terminate execution of a running Azure Spring Apps Job
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param jobExecutionName The name of the Job execution.
   * @param options The options parameters.
   */
  async beginCancel(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    jobExecutionName: string,
    options?: JobExecutionCancelOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<JobExecutionCancelResponse>,
      JobExecutionCancelResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<JobExecutionCancelResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        jobName,
        jobExecutionName,
        options,
      },
      spec: cancelOperationSpec,
    });
    const poller = await createHttpPoller<
      JobExecutionCancelResponse,
      OperationState<JobExecutionCancelResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Terminate execution of a running Azure Spring Apps Job
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param jobExecutionName The name of the Job execution.
   * @param options The options parameters.
   */
  async beginCancelAndWait(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    jobExecutionName: string,
    options?: JobExecutionCancelOptionalParams,
  ): Promise<JobExecutionCancelResponse> {
    const poller = await this.beginCancel(
      resourceGroupName,
      serviceName,
      jobName,
      jobExecutionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Get details of an execution of an Azure Spring Apps Job
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param jobExecutionName The name of the Job execution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    jobExecutionName: string,
    options?: JobExecutionGetOptionalParams,
  ): Promise<JobExecutionGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, jobName, jobExecutionName, options },
      getOperationSpec,
    );
  }

  /**
   * List sensitive environment variables of Job execution.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serviceName The name of the Service resource.
   * @param jobName The name of the Job resource.
   * @param jobExecutionName The name of the Job execution.
   * @param options The options parameters.
   */
  listEnvSecrets(
    resourceGroupName: string,
    serviceName: string,
    jobName: string,
    jobExecutionName: string,
    options?: JobExecutionListEnvSecretsOptionalParams,
  ): Promise<JobExecutionListEnvSecretsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, jobName, jobExecutionName, options },
      listEnvSecretsOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const cancelOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/jobs/{jobName}/executions/{jobExecutionName}/cancel",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.JobExecutionCancelHeaders,
    },
    201: {
      headersMapper: Mappers.JobExecutionCancelHeaders,
    },
    202: {
      headersMapper: Mappers.JobExecutionCancelHeaders,
    },
    204: {
      headersMapper: Mappers.JobExecutionCancelHeaders,
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
    Parameters.serviceName,
    Parameters.jobName,
    Parameters.jobExecutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/jobs/{jobName}/executions/{jobExecutionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobExecution,
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
    Parameters.serviceName,
    Parameters.jobName,
    Parameters.jobExecutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listEnvSecretsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AppPlatform/Spring/{serviceName}/jobs/{jobName}/executions/{jobExecutionName}/listEnvSecrets",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EnvSecretsCollection,
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
    Parameters.serviceName,
    Parameters.jobName,
    Parameters.jobExecutionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
