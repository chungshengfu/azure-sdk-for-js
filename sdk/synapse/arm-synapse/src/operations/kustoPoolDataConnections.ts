/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { KustoPoolDataConnections } from "../operationsInterfaces";
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
  DataConnectionUnion,
  KustoPoolDataConnectionsListByDatabaseOptionalParams,
  KustoPoolDataConnectionsListByDatabaseResponse,
  DataConnectionCheckNameRequest,
  KustoPoolDataConnectionsCheckNameAvailabilityOptionalParams,
  KustoPoolDataConnectionsCheckNameAvailabilityResponse,
  DataConnectionValidation,
  KustoPoolDataConnectionsDataConnectionValidationOptionalParams,
  KustoPoolDataConnectionsDataConnectionValidationResponse,
  KustoPoolDataConnectionsGetOptionalParams,
  KustoPoolDataConnectionsGetResponse,
  KustoPoolDataConnectionsCreateOrUpdateOptionalParams,
  KustoPoolDataConnectionsCreateOrUpdateResponse,
  KustoPoolDataConnectionsUpdateOptionalParams,
  KustoPoolDataConnectionsUpdateResponse,
  KustoPoolDataConnectionsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing KustoPoolDataConnections operations. */
export class KustoPoolDataConnectionsImpl implements KustoPoolDataConnections {
  private readonly client: SynapseManagementClient;

  /**
   * Initialize a new instance of the class KustoPoolDataConnections class.
   * @param client Reference to the service client
   */
  constructor(client: SynapseManagementClient) {
    this.client = client;
  }

  /**
   * Returns the list of data connections of the given Kusto pool database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    options?: KustoPoolDataConnectionsListByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<DataConnectionUnion> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          workspaceName,
          kustoPoolName,
          databaseName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    options?: KustoPoolDataConnectionsListByDatabaseOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<DataConnectionUnion[]> {
    let result: KustoPoolDataConnectionsListByDatabaseResponse;
    result = await this._listByDatabase(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
      options,
    );
    yield result.value || [];
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    options?: KustoPoolDataConnectionsListByDatabaseOptionalParams,
  ): AsyncIterableIterator<DataConnectionUnion> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Checks that the data connection name is valid and is not already in use.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  checkNameAvailability(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: DataConnectionCheckNameRequest,
    options?: KustoPoolDataConnectionsCheckNameAvailabilityOptionalParams,
  ): Promise<KustoPoolDataConnectionsCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        dataConnectionName,
        options,
      },
      checkNameAvailabilityOperationSpec,
    );
  }

  /**
   * Checks that the data connection parameters are valid.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginDataConnectionValidation(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    parameters: DataConnectionValidation,
    options?: KustoPoolDataConnectionsDataConnectionValidationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KustoPoolDataConnectionsDataConnectionValidationResponse>,
      KustoPoolDataConnectionsDataConnectionValidationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<KustoPoolDataConnectionsDataConnectionValidationResponse> => {
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
        kustoPoolName,
        databaseName,
        parameters,
        options,
      },
      spec: dataConnectionValidationOperationSpec,
    });
    const poller = await createHttpPoller<
      KustoPoolDataConnectionsDataConnectionValidationResponse,
      OperationState<KustoPoolDataConnectionsDataConnectionValidationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Checks that the data connection parameters are valid.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginDataConnectionValidationAndWait(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    parameters: DataConnectionValidation,
    options?: KustoPoolDataConnectionsDataConnectionValidationOptionalParams,
  ): Promise<KustoPoolDataConnectionsDataConnectionValidationResponse> {
    const poller = await this.beginDataConnectionValidation(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns the list of data connections of the given Kusto pool database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    options?: KustoPoolDataConnectionsListByDatabaseOptionalParams,
  ): Promise<KustoPoolDataConnectionsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        options,
      },
      listByDatabaseOperationSpec,
    );
  }

  /**
   * Returns a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: KustoPoolDataConnectionsGetOptionalParams,
  ): Promise<KustoPoolDataConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        dataConnectionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: KustoPoolDataConnectionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KustoPoolDataConnectionsCreateOrUpdateResponse>,
      KustoPoolDataConnectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<KustoPoolDataConnectionsCreateOrUpdateResponse> => {
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
        kustoPoolName,
        databaseName,
        dataConnectionName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      KustoPoolDataConnectionsCreateOrUpdateResponse,
      OperationState<KustoPoolDataConnectionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: KustoPoolDataConnectionsCreateOrUpdateOptionalParams,
  ): Promise<KustoPoolDataConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
      dataConnectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: KustoPoolDataConnectionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KustoPoolDataConnectionsUpdateResponse>,
      KustoPoolDataConnectionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<KustoPoolDataConnectionsUpdateResponse> => {
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
        kustoPoolName,
        databaseName,
        dataConnectionName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      KustoPoolDataConnectionsUpdateResponse,
      OperationState<KustoPoolDataConnectionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates a data connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param parameters The data connection parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    parameters: DataConnectionUnion,
    options?: KustoPoolDataConnectionsUpdateOptionalParams,
  ): Promise<KustoPoolDataConnectionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
      dataConnectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the data connection with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: KustoPoolDataConnectionsDeleteOptionalParams,
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
        resourceGroupName,
        workspaceName,
        kustoPoolName,
        databaseName,
        dataConnectionName,
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
   * Deletes the data connection with the given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param databaseName The name of the database in the Kusto pool.
   * @param dataConnectionName The name of the data connection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    kustoPoolName: string,
    databaseName: string,
    dataConnectionName: string,
    options?: KustoPoolDataConnectionsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      workspaceName,
      kustoPoolName,
      databaseName,
      dataConnectionName,
      options,
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const checkNameAvailabilityOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.dataConnectionName,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const dataConnectionValidationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/dataConnectionValidation",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectionValidationListResult,
    },
    201: {
      bodyMapper: Mappers.DataConnectionValidationListResult,
    },
    202: {
      bodyMapper: Mappers.DataConnectionValidationListResult,
    },
    204: {
      bodyMapper: Mappers.DataConnectionValidationListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters26,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/dataConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnectionListResult,
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
    Parameters.databaseName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnection,
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
    Parameters.databaseName,
    Parameters.dataConnectionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnection,
    },
    201: {
      bodyMapper: Mappers.DataConnection,
    },
    202: {
      bodyMapper: Mappers.DataConnection,
    },
    204: {
      bodyMapper: Mappers.DataConnection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.databaseName,
    Parameters.dataConnectionName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DataConnection,
    },
    201: {
      bodyMapper: Mappers.DataConnection,
    },
    202: {
      bodyMapper: Mappers.DataConnection,
    },
    204: {
      bodyMapper: Mappers.DataConnection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters27,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.kustoPoolName1,
    Parameters.databaseName,
    Parameters.dataConnectionName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/kustoPools/{kustoPoolName}/databases/{databaseName}/dataConnections/{dataConnectionName}",
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
    Parameters.databaseName,
    Parameters.dataConnectionName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
