/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RecoveryPointsRecommendedForMove } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  RecoveryPointResource,
  ListRecoveryPointsRecommendedForMoveRequest,
  RecoveryPointsRecommendedForMoveListNextOptionalParams,
  RecoveryPointsRecommendedForMoveListOptionalParams,
  RecoveryPointsRecommendedForMoveListResponse,
  RecoveryPointsRecommendedForMoveListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RecoveryPointsRecommendedForMove operations. */
export class RecoveryPointsRecommendedForMoveImpl
  implements RecoveryPointsRecommendedForMove
{
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class RecoveryPointsRecommendedForMove class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Lists the recovery points recommended for move to another tier
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName
   * @param containerName
   * @param protectedItemName
   * @param parameters List Recovery points Recommended for Move Request
   * @param options The options parameters.
   */
  public list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: ListRecoveryPointsRecommendedForMoveRequest,
    options?: RecoveryPointsRecommendedForMoveListOptionalParams,
  ): PagedAsyncIterableIterator<RecoveryPointResource> {
    const iter = this.listPagingAll(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      protectedItemName,
      parameters,
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
          vaultName,
          resourceGroupName,
          fabricName,
          containerName,
          protectedItemName,
          parameters,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: ListRecoveryPointsRecommendedForMoveRequest,
    options?: RecoveryPointsRecommendedForMoveListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RecoveryPointResource[]> {
    let result: RecoveryPointsRecommendedForMoveListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        parameters,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        parameters,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: ListRecoveryPointsRecommendedForMoveRequest,
    options?: RecoveryPointsRecommendedForMoveListOptionalParams,
  ): AsyncIterableIterator<RecoveryPointResource> {
    for await (const page of this.listPagingPage(
      vaultName,
      resourceGroupName,
      fabricName,
      containerName,
      protectedItemName,
      parameters,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the recovery points recommended for move to another tier
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName
   * @param containerName
   * @param protectedItemName
   * @param parameters List Recovery points Recommended for Move Request
   * @param options The options parameters.
   */
  private _list(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: ListRecoveryPointsRecommendedForMoveRequest,
    options?: RecoveryPointsRecommendedForMoveListOptionalParams,
  ): Promise<RecoveryPointsRecommendedForMoveListResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        parameters,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName
   * @param containerName
   * @param protectedItemName
   * @param parameters List Recovery points Recommended for Move Request
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    containerName: string,
    protectedItemName: string,
    parameters: ListRecoveryPointsRecommendedForMoveRequest,
    nextLink: string,
    options?: RecoveryPointsRecommendedForMoveListNextOptionalParams,
  ): Promise<RecoveryPointsRecommendedForMoveListNextResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        containerName,
        protectedItemName,
        parameters,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPointsRecommendedForMove",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters19,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.containerName,
    Parameters.protectedItemName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoveryPointResourceList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.nextLink,
    Parameters.containerName,
    Parameters.protectedItemName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
