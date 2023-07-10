/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SqlPoolOperationResults } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SqlPoolOperationResultsGetLocationHeaderResultOptionalParams,
  SqlPoolOperationResultsGetLocationHeaderResultResponse
} from "../models";

/** Class containing SqlPoolOperationResults operations. */
export class SqlPoolOperationResultsImpl implements SqlPoolOperationResults {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class SqlPoolOperationResults class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get the status of a SQL pool operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param operationId Operation ID
   * @param options The options parameters.
   */
  async beginGetLocationHeaderResult(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    operationId: string,
    options?: SqlPoolOperationResultsGetLocationHeaderResultOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<SqlPoolOperationResultsGetLocationHeaderResultResponse>,
      SqlPoolOperationResultsGetLocationHeaderResultResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SqlPoolOperationResultsGetLocationHeaderResultResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        operationId,
        options
      },
      spec: getLocationHeaderResultOperationSpec
    });
    const poller = await createHttpPoller<
      SqlPoolOperationResultsGetLocationHeaderResultResponse,
      OperationState<SqlPoolOperationResultsGetLocationHeaderResultResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Get the status of a SQL pool operation
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param sqlPoolName SQL pool name
   * @param operationId Operation ID
   * @param options The options parameters.
   */
  async beginGetLocationHeaderResultAndWait(
    resourceGroupName: string,
    workspaceName: string,
    sqlPoolName: string,
    operationId: string,
    options?: SqlPoolOperationResultsGetLocationHeaderResultOptionalParams
  ): Promise<SqlPoolOperationResultsGetLocationHeaderResultResponse> {
    const poller = await this.beginGetLocationHeaderResult(
      resourceGroupName,
      workspaceName,
      sqlPoolName,
      operationId,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getLocationHeaderResultOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/operationResults/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SqlPool
    },
    201: {
      bodyMapper: Mappers.SqlPool
    },
    202: {
      bodyMapper: Mappers.SqlPool
    },
    204: {
      bodyMapper: Mappers.SqlPool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.operationId,
    Parameters.sqlPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
