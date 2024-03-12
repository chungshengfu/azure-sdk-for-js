/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { KustoPoolPrincipalAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClient } from "../synapseManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ClusterPrincipalAssignment,
  KustoPoolPrincipalAssignmentsListOptionalParams,
  KustoPoolPrincipalAssignmentsListResponse,
  ClusterPrincipalAssignmentCheckNameRequest,
  KustoPoolPrincipalAssignmentsCheckNameAvailabilityOptionalParams,
  KustoPoolPrincipalAssignmentsCheckNameAvailabilityResponse,
  KustoPoolPrincipalAssignmentsGetOptionalParams,
  KustoPoolPrincipalAssignmentsGetResponse,
  KustoPoolPrincipalAssignmentsCreateOrUpdateOptionalParams,
  KustoPoolPrincipalAssignmentsCreateOrUpdateResponse,
  KustoPoolPrincipalAssignmentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing KustoPoolPrincipalAssignments operations. */
export class KustoPoolPrincipalAssignmentsImpl
  implements KustoPoolPrincipalAssignments
{
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class KustoPoolPrincipalAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Lists all Kusto pool principalAssignments.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<ClusterPrincipalAssignment> {
    const iter = this.listPagingAll(
      workspaceName,
      kustoPoolName,
      resourceGroupName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          workspaceName,
          kustoPoolName,
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ClusterPrincipalAssignment[]> {
    let result: KustoPoolPrincipalAssignmentsListResponse;
    result = await this._list(
      workspaceName,
      kustoPoolName,
      resourceGroupName,
      options,
    );
    yield result.value || [];
  }

  private async *listPagingAll(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsListOptionalParams,
  ): AsyncIterableIterator<ClusterPrincipalAssignment> {
    for await (const page of this.listPagingPage(
      workspaceName,
      kustoPoolName,
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Checks that the principal assignment name is valid and is not already in use.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param principalAssignmentName The name of the principal assignment.
   * @param options The options parameters.
   */
  checkNameAvailability(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    principalAssignmentName: ClusterPrincipalAssignmentCheckNameRequest,
    options?: KustoPoolPrincipalAssignmentsCheckNameAvailabilityOptionalParams,
  ): Promise<KustoPoolPrincipalAssignmentsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        kustoPoolName,
        resourceGroupName,
        principalAssignmentName,
        options,
      },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Lists all Kusto pool principalAssignments.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsListOptionalParams,
  ): Promise<KustoPoolPrincipalAssignmentsListResponse> {
    return this.client.sendOperationRequest(
      { workspaceName, kustoPoolName, resourceGroupName, options },
      listOperationSpec,
    );
  }

  /**
   * Gets a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsGetOptionalParams,
  ): Promise<KustoPoolPrincipalAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        workspaceName,
        kustoPoolName,
        principalAssignmentName,
        resourceGroupName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Create a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The Kusto pool principalAssignment's parameters supplied for the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    parameters: ClusterPrincipalAssignment,
    options?: KustoPoolPrincipalAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KustoPoolPrincipalAssignmentsCreateOrUpdateResponse>,
      KustoPoolPrincipalAssignmentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<KustoPoolPrincipalAssignmentsCreateOrUpdateResponse> => {
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
        workspaceName,
        kustoPoolName,
        principalAssignmentName,
        resourceGroupName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      KustoPoolPrincipalAssignmentsCreateOrUpdateResponse,
      OperationState<KustoPoolPrincipalAssignmentsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The Kusto pool principalAssignment's parameters supplied for the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    parameters: ClusterPrincipalAssignment,
    options?: KustoPoolPrincipalAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<KustoPoolPrincipalAssignmentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      workspaceName,
      kustoPoolName,
      principalAssignmentName,
      resourceGroupName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  async beginDelete(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
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
        workspaceName,
        kustoPoolName,
        principalAssignmentName,
        resourceGroupName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a Kusto pool principalAssignment.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param principalAssignmentName The name of the Kusto principalAssignment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    workspaceName: string,
    kustoPoolName: string,
    principalAssignmentName: string,
    resourceGroupName: string,
    options?: KustoPoolPrincipalAssignmentsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      workspaceName,
      kustoPoolName,
      principalAssignmentName,
      resourceGroupName,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/checkPrincipalAssignmentNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.principalAssignmentName,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/principalAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPrincipalAssignmentListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/principalAssignments/{principalAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPrincipalAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.principalAssignmentName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/principalAssignments/{principalAssignmentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterPrincipalAssignment,
    },
    201: {
      bodyMapper: Mappers.ClusterPrincipalAssignment,
    },
    202: {
      bodyMapper: Mappers.ClusterPrincipalAssignment,
    },
    204: {
      bodyMapper: Mappers.ClusterPrincipalAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters28,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.principalAssignmentName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/principalAssignments/{principalAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.principalAssignmentName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
