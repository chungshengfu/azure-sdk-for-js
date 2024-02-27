/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Queue } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  ListQueue,
  QueueListNextOptionalParams,
  QueueListOptionalParams,
  QueueListResponse,
  StorageQueue,
  QueueCreateOptionalParams,
  QueueCreateResponse,
  QueueUpdateOptionalParams,
  QueueUpdateResponse,
  QueueGetOptionalParams,
  QueueGetResponse,
  QueueDeleteOptionalParams,
  QueueListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Queue operations. */
export class QueueImpl implements Queue {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class Queue class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all the queues under the specified storage account
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
    options?: QueueListOptionalParams,
  ): PagedAsyncIterableIterator<ListQueue> {
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
    options?: QueueListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ListQueue[]> {
    let result: QueueListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, accountName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
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
    resourceGroupName: string,
    accountName: string,
    options?: QueueListOptionalParams,
  ): AsyncIterableIterator<ListQueue> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates a new queue with the specified queue name, under the specified account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param queue Queue properties and metadata to be created with
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    queue: StorageQueue,
    options?: QueueCreateOptionalParams,
  ): Promise<QueueCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, queueName, queue, options },
      createOperationSpec,
    );
  }

  /**
   * Creates a new queue with the specified queue name, under the specified account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param queue Queue properties and metadata to be created with
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    queue: StorageQueue,
    options?: QueueUpdateOptionalParams,
  ): Promise<QueueUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, queueName, queue, options },
      updateOperationSpec,
    );
  }

  /**
   * Gets the queue with the specified queue name, under the specified account if it exists.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    options?: QueueGetOptionalParams,
  ): Promise<QueueGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, queueName, options },
      getOperationSpec,
    );
  }

  /**
   * Deletes the queue with the specified queue name, under the specified account if it exists.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param queueName A queue name must be unique within a storage account and must be between 3 and 63
   *                  characters.The name must comprise of lowercase alphanumeric and dash(-) characters only, it should
   *                  begin and end with an alphanumeric character and it cannot have two consecutive dash(-) characters.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    queueName: string,
    options?: QueueDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, queueName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets a list of all the queues under the specified storage account
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
    options?: QueueListOptionalParams,
  ): Promise<QueueListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: QueueListNextOptionalParams,
  ): Promise<QueueListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.StorageQueue,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.queue,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.queueName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.StorageQueue,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.queue,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.queueName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageQueue,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.queueName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues/{queueName}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.queueName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/queueServices/default/queues",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListQueueResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.maxpagesize1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListQueueResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
