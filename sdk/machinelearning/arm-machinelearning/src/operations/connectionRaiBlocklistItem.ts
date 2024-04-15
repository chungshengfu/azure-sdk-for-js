/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ConnectionRaiBlocklistItem } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMachineLearningServices } from "../azureMachineLearningServices";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ConnectionRaiBlocklistItemGetOptionalParams,
  ConnectionRaiBlocklistItemGetResponse,
  ConnectionRaiBlocklistItemDeleteOptionalParams,
  ConnectionRaiBlocklistItemDeleteResponse,
  RaiBlocklistItemPropertiesBasicResource,
  ConnectionRaiBlocklistItemCreateOptionalParams,
  ConnectionRaiBlocklistItemCreateResponse,
} from "../models";

/** Class containing ConnectionRaiBlocklistItem operations. */
export class ConnectionRaiBlocklistItemImpl
  implements ConnectionRaiBlocklistItem
{
  private readonly client: AzureMachineLearningServices;

  /**
   * Initialize a new instance of the class ConnectionRaiBlocklistItem class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMachineLearningServices) {
    this.client = client;
  }

  /**
   * Gets the specified custom blocklist associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiBlocklistName The name of the RaiBlocklist.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiBlocklistName: string,
    options?: ConnectionRaiBlocklistItemGetOptionalParams,
  ): Promise<ConnectionRaiBlocklistItemGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        connectionName,
        raiBlocklistName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Deletes the specified custom blocklist item associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiBlocklistName The name of the RaiBlocklist.
   * @param raiBlocklistItemName Name of the RaiBlocklist Item
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    options?: ConnectionRaiBlocklistItemDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConnectionRaiBlocklistItemDeleteResponse>,
      ConnectionRaiBlocklistItemDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ConnectionRaiBlocklistItemDeleteResponse> => {
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
        connectionName,
        raiBlocklistName,
        raiBlocklistItemName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      ConnectionRaiBlocklistItemDeleteResponse,
      OperationState<ConnectionRaiBlocklistItemDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified custom blocklist item associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiBlocklistName The name of the RaiBlocklist.
   * @param raiBlocklistItemName Name of the RaiBlocklist Item
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    options?: ConnectionRaiBlocklistItemDeleteOptionalParams,
  ): Promise<ConnectionRaiBlocklistItemDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      connectionName,
      raiBlocklistName,
      raiBlocklistItemName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update the state of specified blocklist item associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiBlocklistName The name of the RaiBlocklist.
   * @param raiBlocklistItemName Name of the RaiBlocklist Item
   * @param body
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    body: RaiBlocklistItemPropertiesBasicResource,
    options?: ConnectionRaiBlocklistItemCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ConnectionRaiBlocklistItemCreateResponse>,
      ConnectionRaiBlocklistItemCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ConnectionRaiBlocklistItemCreateResponse> => {
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
        connectionName,
        raiBlocklistName,
        raiBlocklistItemName,
        body,
        options,
      },
      spec: createOperationSpec,
    });
    const poller = await createHttpPoller<
      ConnectionRaiBlocklistItemCreateResponse,
      OperationState<ConnectionRaiBlocklistItemCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the state of specified blocklist item associated with the Azure OpenAI connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Azure Machine Learning Workspace Name
   * @param connectionName Friendly name of the workspace connection
   * @param raiBlocklistName The name of the RaiBlocklist.
   * @param raiBlocklistItemName Name of the RaiBlocklist Item
   * @param body
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    raiBlocklistName: string,
    raiBlocklistItemName: string,
    body: RaiBlocklistItemPropertiesBasicResource,
    options?: ConnectionRaiBlocklistItemCreateOptionalParams,
  ): Promise<ConnectionRaiBlocklistItemCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      workspaceName,
      connectionName,
      raiBlocklistName,
      raiBlocklistItemName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}/raiBlocklists/{raiBlocklistName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RaiBlocklistPropertiesBasicResource,
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
    Parameters.connectionName,
    Parameters.raiBlocklistName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ConnectionRaiBlocklistItemDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.ConnectionRaiBlocklistItemDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.ConnectionRaiBlocklistItemDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.ConnectionRaiBlocklistItemDeleteHeaders,
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
    Parameters.connectionName,
    Parameters.raiBlocklistName,
    Parameters.raiBlocklistItemName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/connections/{connectionName}/raiBlocklists/{raiBlocklistName}/raiBlocklistItems/{raiBlocklistItemName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RaiBlocklistItemPropertiesBasicResource,
    },
    201: {
      bodyMapper: Mappers.RaiBlocklistItemPropertiesBasicResource,
    },
    202: {
      bodyMapper: Mappers.RaiBlocklistItemPropertiesBasicResource,
    },
    204: {
      bodyMapper: Mappers.RaiBlocklistItemPropertiesBasicResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body52,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.connectionName,
    Parameters.raiBlocklistName,
    Parameters.raiBlocklistItemName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
