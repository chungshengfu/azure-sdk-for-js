/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { LocalUsersOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  LocalUser,
  LocalUsersListOptionalParams,
  LocalUsersListResponse,
  LocalUsersGetOptionalParams,
  LocalUsersGetResponse,
  LocalUsersCreateOrUpdateOptionalParams,
  LocalUsersCreateOrUpdateResponse,
  LocalUsersDeleteOptionalParams,
  LocalUsersListKeysOptionalParams,
  LocalUsersListKeysResponse,
  LocalUsersRegeneratePasswordOptionalParams,
  LocalUsersRegeneratePasswordResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LocalUsersOperations operations. */
export class LocalUsersOperationsImpl implements LocalUsersOperations {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class LocalUsersOperations class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * List the local users associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: LocalUsersListOptionalParams,
  ): PagedAsyncIterableIterator<LocalUser> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
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
          resourceGroupName,
          accountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: LocalUsersListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<LocalUser[]> {
    let result: LocalUsersListResponse;
    result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: LocalUsersListOptionalParams,
  ): AsyncIterableIterator<LocalUser> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List the local users associated with the storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: LocalUsersListOptionalParams,
  ): Promise<LocalUsersListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec,
    );
  }

  /**
   * Get the local user of the storage account by username.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param username The name of local user. The username must contain lowercase letters and numbers
   *                 only. It must be unique only within the storage account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    username: string,
    options?: LocalUsersGetOptionalParams,
  ): Promise<LocalUsersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, username, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update the properties of a local user associated with the storage account
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param username The name of local user. The username must contain lowercase letters and numbers
   *                 only. It must be unique only within the storage account.
   * @param properties The local user associated with a storage account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    username: string,
    properties: LocalUser,
    options?: LocalUsersCreateOrUpdateOptionalParams,
  ): Promise<LocalUsersCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, username, properties, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes the local user associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param username The name of local user. The username must contain lowercase letters and numbers
   *                 only. It must be unique only within the storage account.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    username: string,
    options?: LocalUsersDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, username, options },
      deleteOperationSpec,
    );
  }

  /**
   * List SSH authorized keys and shared key of the local user.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param username The name of local user. The username must contain lowercase letters and numbers
   *                 only. It must be unique only within the storage account.
   * @param options The options parameters.
   */
  listKeys(
    resourceGroupName: string,
    accountName: string,
    username: string,
    options?: LocalUsersListKeysOptionalParams,
  ): Promise<LocalUsersListKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, username, options },
      listKeysOperationSpec,
    );
  }

  /**
   * Regenerate the local user SSH password.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param username The name of local user. The username must contain lowercase letters and numbers
   *                 only. It must be unique only within the storage account.
   * @param options The options parameters.
   */
  regeneratePassword(
    resourceGroupName: string,
    accountName: string,
    username: string,
    options?: LocalUsersRegeneratePasswordOptionalParams,
  ): Promise<LocalUsersRegeneratePasswordResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, username, options },
      regeneratePasswordOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocalUsers,
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
    Parameters.accountName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocalUser,
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
    Parameters.accountName1,
    Parameters.username,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LocalUser,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.properties4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.username,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.username,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LocalUserKeys,
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
    Parameters.accountName1,
    Parameters.username,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const regeneratePasswordOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/localUsers/{username}/regeneratePassword",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LocalUserRegeneratePasswordResult,
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
    Parameters.accountName1,
    Parameters.username,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
