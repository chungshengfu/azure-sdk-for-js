/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RecoveryPoints } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataProtectionClient } from "../dataProtectionClient";
import {
  AzureBackupRecoveryPointResource,
  RecoveryPointsListNextOptionalParams,
  RecoveryPointsListOptionalParams,
  RecoveryPointsListResponse,
  RecoveryPointsGetOptionalParams,
  RecoveryPointsGetResponse,
  RecoveryPointsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RecoveryPoints operations. */
export class RecoveryPointsImpl implements RecoveryPoints {
  private readonly client: DataProtectionClient;

  /**
   * Initialize a new instance of the class RecoveryPoints class.
   * @param client Reference to the service client
   */
  constructor(client: DataProtectionClient) {
    this.client = client;
  }

  /**
   * Returns a list of Recovery Points for a DataSource in a vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: RecoveryPointsListOptionalParams
  ): PagedAsyncIterableIterator<AzureBackupRecoveryPointResource> {
    const iter = this.listPagingAll(
      resourceGroupName,
      vaultName,
      backupInstanceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          resourceGroupName,
          vaultName,
          backupInstanceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: RecoveryPointsListOptionalParams
  ): AsyncIterableIterator<AzureBackupRecoveryPointResource[]> {
    let result = await this._list(
      resourceGroupName,
      vaultName,
      backupInstanceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
        backupInstanceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: RecoveryPointsListOptionalParams
  ): AsyncIterableIterator<AzureBackupRecoveryPointResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      backupInstanceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns a list of Recovery Points for a DataSource in a vault.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    options?: RecoveryPointsListOptionalParams
  ): Promise<RecoveryPointsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, backupInstanceName, options },
      listOperationSpec
    );
  }

  /**
   * Gets a Recovery Point using recoveryPointId for a Datasource.
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param recoveryPointId
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    recoveryPointId: string,
    options?: RecoveryPointsGetOptionalParams
  ): Promise<RecoveryPointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        backupInstanceName,
        recoveryPointId,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group where the backup vault is present.
   * @param vaultName The name of the backup vault.
   * @param backupInstanceName The name of the backup instance
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    backupInstanceName: string,
    nextLink: string,
    options?: RecoveryPointsListNextOptionalParams
  ): Promise<RecoveryPointsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, backupInstanceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/recoveryPoints",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBackupRecoveryPointResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.backupInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataProtection/backupVaults/{vaultName}/backupInstances/{backupInstanceName}/recoveryPoints/{recoveryPointId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBackupRecoveryPointResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.backupInstanceName,
    Parameters.recoveryPointId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureBackupRecoveryPointResourceList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.nextLink,
    Parameters.backupInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
