/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { WorkspaceManagedIdentitySqlControlSettings } from "../operationsInterfaces";
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
  WorkspaceManagedIdentitySqlControlSettingsGetOptionalParams,
  WorkspaceManagedIdentitySqlControlSettingsGetResponse,
  ManagedIdentitySqlControlSettingsModel,
  WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOptionalParams,
  WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse,
} from "../models";

/** Class containing WorkspaceManagedIdentitySqlControlSettings operations. */
export class WorkspaceManagedIdentitySqlControlSettingsImpl
  implements WorkspaceManagedIdentitySqlControlSettings
{
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class WorkspaceManagedIdentitySqlControlSettings class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Get Managed Identity Sql Control Settings
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceManagedIdentitySqlControlSettingsGetOptionalParams,
  ): Promise<WorkspaceManagedIdentitySqlControlSettingsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, workspaceName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update Managed Identity Sql Control Settings
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param managedIdentitySqlControlSettings Managed Identity Sql Control Settings
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    managedIdentitySqlControlSettings: ManagedIdentitySqlControlSettingsModel,
    options?: WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse>,
      WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse> => {
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
        workspaceName,
        managedIdentitySqlControlSettings,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse,
      OperationState<WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update Managed Identity Sql Control Settings
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param managedIdentitySqlControlSettings Managed Identity Sql Control Settings
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    managedIdentitySqlControlSettings: ManagedIdentitySqlControlSettingsModel,
    options?: WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateOptionalParams,
  ): Promise<WorkspaceManagedIdentitySqlControlSettingsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      managedIdentitySqlControlSettings,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/managedIdentitySqlControlSettings/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedIdentitySqlControlSettingsModel,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/managedIdentitySqlControlSettings/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ManagedIdentitySqlControlSettingsModel,
    },
    201: {
      bodyMapper: Mappers.ManagedIdentitySqlControlSettingsModel,
    },
    202: {
      bodyMapper: Mappers.ManagedIdentitySqlControlSettingsModel,
    },
    204: {
      bodyMapper: Mappers.ManagedIdentitySqlControlSettingsModel,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.managedIdentitySqlControlSettings,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
