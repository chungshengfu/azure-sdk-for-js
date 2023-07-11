/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { WorkspaceManagedSqlServerExtendedBlobAuditingPolicies } from "../operationsInterfaces";
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
  ExtendedServerBlobAuditingPolicy,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextOptionalParams,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse,
  BlobAuditingPolicyName,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOptionalParams,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOptionalParams,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse,
  WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspaceManagedSqlServerExtendedBlobAuditingPolicies operations. */
export class WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesImpl
  implements WorkspaceManagedSqlServerExtendedBlobAuditingPolicies {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceManagedSqlServerExtendedBlobAuditingPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * List workspace managed sql server's extended blob auditing policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  public listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<ExtendedServerBlobAuditingPolicy> {
    const iter = this.listByWorkspacePagingAll(
      resourceGroupName,
      workspaceName,
      options
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
        return this.listByWorkspacePagingPage(
          resourceGroupName,
          workspaceName,
          options,
          settings
        );
      }
    };
  }

  private async *listByWorkspacePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ExtendedServerBlobAuditingPolicy[]> {
    let result: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(
        resourceGroupName,
        workspaceName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(
        resourceGroupName,
        workspaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams
  ): AsyncIterableIterator<ExtendedServerBlobAuditingPolicy> {
    for await (const page of this.listByWorkspacePagingPage(
      resourceGroupName,
      workspaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a workspace SQL server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param blobAuditingPolicyName The name of the blob auditing policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    blobAuditingPolicyName: BlobAuditingPolicyName,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetOptionalParams
  ): Promise<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, blobAuditingPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update a workspace managed sql server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param blobAuditingPolicyName The name of the blob auditing policy.
   * @param parameters Properties of extended blob auditing policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    blobAuditingPolicyName: BlobAuditingPolicyName,
    parameters: ExtendedServerBlobAuditingPolicy,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<
        WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse
      >,
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse> => {
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
        blobAuditingPolicyName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse,
      OperationState<
        WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse
      >
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or Update a workspace managed sql server's extended blob auditing policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param blobAuditingPolicyName The name of the blob auditing policy.
   * @param parameters Properties of extended blob auditing policy.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    blobAuditingPolicyName: BlobAuditingPolicyName,
    parameters: ExtendedServerBlobAuditingPolicy,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesCreateOrUpdateResponse
  > {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      blobAuditingPolicyName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List workspace managed sql server's extended blob auditing policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  private _listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      listByWorkspaceOperationSpec
    );
  }

  /**
   * ListByWorkspaceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param nextLink The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options The options parameters.
   */
  private _listByWorkspaceNext(
    resourceGroupName: string,
    workspaceName: string,
    nextLink: string,
    options?: WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextOptionalParams
  ): Promise<
    WorkspaceManagedSqlServerExtendedBlobAuditingPoliciesListByWorkspaceNextResponse
  > {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, nextLink, options },
      listByWorkspaceNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.blobAuditingPolicyName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings/{blobAuditingPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    201: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    202: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    204: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicy
    },
    default: {}
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.blobAuditingPolicyName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/extendedAuditingSettings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicyListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtendedServerBlobAuditingPolicyListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
