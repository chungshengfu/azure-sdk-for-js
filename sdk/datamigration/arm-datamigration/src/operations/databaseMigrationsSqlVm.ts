/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { DatabaseMigrationsSqlVm } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataMigrationManagementClient } from "../dataMigrationManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DatabaseMigrationsSqlVmGetOptionalParams,
  DatabaseMigrationsSqlVmGetResponse,
  DatabaseMigrationSqlVm,
  DatabaseMigrationsSqlVmCreateOrUpdateOptionalParams,
  DatabaseMigrationsSqlVmCreateOrUpdateResponse,
  DatabaseMigrationsSqlVmDeleteOptionalParams,
  DatabaseMigrationsSqlVmListByScopeOptionalParams,
  DatabaseMigrationsSqlVmListByScopeResponse,
  MigrationOperationInput,
  DatabaseMigrationsSqlVmCancelOptionalParams,
  DatabaseMigrationsSqlVmCutoverOptionalParams
} from "../models";

/** Class containing DatabaseMigrationsSqlVm operations. */
export class DatabaseMigrationsSqlVmImpl implements DatabaseMigrationsSqlVm {
  private readonly client: DataMigrationManagementClient;

  /**
   * Initialize a new instance of the class DatabaseMigrationsSqlVm class.
   * @param client Reference to the service client
   */
  constructor(client: DataMigrationManagementClient) {
    this.client = client;
  }

  /**
   * Retrieve the specified database migration for a given SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlVmGetOptionalParams
  ): Promise<DatabaseMigrationsSqlVmGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlVirtualMachineName, targetDbName, options },
      getOperationSpec
    );
  }

  /**
   * Create a new database migration to a given SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: DatabaseMigrationSqlVm,
    options?: DatabaseMigrationsSqlVmCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DatabaseMigrationsSqlVmCreateOrUpdateResponse>,
      DatabaseMigrationsSqlVmCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DatabaseMigrationsSqlVmCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sqlVirtualMachineName,
        targetDbName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a new database migration to a given SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Details of SqlMigrationService resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: DatabaseMigrationSqlVm,
    options?: DatabaseMigrationsSqlVmCreateOrUpdateOptionalParams
  ): Promise<DatabaseMigrationsSqlVmCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      sqlVirtualMachineName,
      targetDbName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlVmDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, sqlVirtualMachineName, targetDbName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete Database Migration resource.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    options?: DatabaseMigrationsSqlVmDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sqlVirtualMachineName,
      targetDbName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieve Database Migration in the scope.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param options The options parameters.
   */
  listByScope(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    options?: DatabaseMigrationsSqlVmListByScopeOptionalParams
  ): Promise<DatabaseMigrationsSqlVmListByScopeResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sqlVirtualMachineName, options },
      listByScopeOperationSpec
    );
  }

  /**
   * Stop in-progress database migration to SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  async beginCancel(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCancelOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sqlVirtualMachineName,
        targetDbName,
        parameters,
        options
      },
      cancelOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Stop in-progress database migration to SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  async beginCancelAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCancelOptionalParams
  ): Promise<void> {
    const poller = await this.beginCancel(
      resourceGroupName,
      sqlVirtualMachineName,
      targetDbName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Initiate cutover for in-progress online database migration to SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  async beginCutover(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCutoverOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
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

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sqlVirtualMachineName,
        targetDbName,
        parameters,
        options
      },
      cutoverOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Initiate cutover for in-progress online database migration to SQL VM.
   * @param resourceGroupName Name of the resource group that contains the resource. You can obtain this
   *                          value from the Azure Resource Manager API or the portal.
   * @param sqlVirtualMachineName
   * @param targetDbName The name of the target database.
   * @param parameters Migration Operation Input
   * @param options The options parameters.
   */
  async beginCutoverAndWait(
    resourceGroupName: string,
    sqlVirtualMachineName: string,
    targetDbName: string,
    parameters: MigrationOperationInput,
    options?: DatabaseMigrationsSqlVmCutoverOptionalParams
  ): Promise<void> {
    const poller = await this.beginCutover(
      resourceGroupName,
      sqlVirtualMachineName,
      targetDbName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseMigrationSqlVm
    },
    default: {}
  },
  queryParameters: [
    Parameters.migrationOperationId,
    Parameters.expand,
    Parameters.apiVersion
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.targetDbName,
    Parameters.subscriptionId,
    Parameters.sqlVirtualMachineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseMigrationSqlVm
    },
    201: {
      bodyMapper: Mappers.DatabaseMigrationSqlVm
    },
    202: {
      bodyMapper: Mappers.DatabaseMigrationSqlVm
    },
    204: {
      bodyMapper: Mappers.DatabaseMigrationSqlVm
    },
    default: {}
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.targetDbName,
    Parameters.subscriptionId,
    Parameters.sqlVirtualMachineName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.targetDbName,
    Parameters.subscriptionId,
    Parameters.sqlVirtualMachineName
  ],
  serializer
};
const listByScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseMigrationSqlVmListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.sqlVirtualMachineName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cancel",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.targetDbName,
    Parameters.subscriptionId,
    Parameters.sqlVirtualMachineName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const cutoverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName}/providers/Microsoft.DataMigration/databaseMigrations/{targetDbName}/cutover",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.targetDbName,
    Parameters.subscriptionId,
    Parameters.sqlVirtualMachineName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
