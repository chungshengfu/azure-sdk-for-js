/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AzureLargeStorageInstanceOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureLargeInstance } from "../azureLargeInstance";
import {
  AzureLargeStorageInstance,
  AzureLargeStorageInstanceListBySubscriptionNextOptionalParams,
  AzureLargeStorageInstanceListBySubscriptionOptionalParams,
  AzureLargeStorageInstanceListBySubscriptionResponse,
  AzureLargeStorageInstanceListByResourceGroupNextOptionalParams,
  AzureLargeStorageInstanceListByResourceGroupOptionalParams,
  AzureLargeStorageInstanceListByResourceGroupResponse,
  AzureLargeStorageInstanceGetOptionalParams,
  AzureLargeStorageInstanceGetResponse,
  Tags,
  AzureLargeStorageInstanceUpdateOptionalParams,
  AzureLargeStorageInstanceUpdateResponse,
  AzureLargeStorageInstanceListBySubscriptionNextResponse,
  AzureLargeStorageInstanceListByResourceGroupNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AzureLargeStorageInstanceOperations operations. */
export class AzureLargeStorageInstanceOperationsImpl
  implements AzureLargeStorageInstanceOperations
{
  private readonly client: AzureLargeInstance;

  /**
   * Initialize a new instance of the class AzureLargeStorageInstanceOperations class.
   * @param client Reference to the service client
   */
  constructor(client: AzureLargeInstance) {
    this.client = client;
  }

  /**
   * Gets a list of AzureLargeStorageInstances in the specified subscription. The operations returns
   * various properties of each Azure LargeStorage instance.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: AzureLargeStorageInstanceListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AzureLargeStorageInstance> {
    const iter = this.listBySubscriptionPagingAll(options);
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
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: AzureLargeStorageInstanceListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AzureLargeStorageInstance[]> {
    let result: AzureLargeStorageInstanceListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: AzureLargeStorageInstanceListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<AzureLargeStorageInstance> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of AzureLargeStorageInstances in the specified subscription and resource group. The
   * operations returns various properties of each Azure LargeStorage instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AzureLargeStorageInstanceListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AzureLargeStorageInstance> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AzureLargeStorageInstanceListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<AzureLargeStorageInstance[]> {
    let result: AzureLargeStorageInstanceListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AzureLargeStorageInstanceListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<AzureLargeStorageInstance> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of AzureLargeStorageInstances in the specified subscription. The operations returns
   * various properties of each Azure LargeStorage instance.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: AzureLargeStorageInstanceListBySubscriptionOptionalParams,
  ): Promise<AzureLargeStorageInstanceListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * Gets a list of AzureLargeStorageInstances in the specified subscription and resource group. The
   * operations returns various properties of each Azure LargeStorage instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AzureLargeStorageInstanceListByResourceGroupOptionalParams,
  ): Promise<AzureLargeStorageInstanceListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Gets an Azure Large Storage instance for the specified subscription, resource group, and instance
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeStorageInstanceName Name of the AzureLargeStorageInstance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    azureLargeStorageInstanceName: string,
    options?: AzureLargeStorageInstanceGetOptionalParams,
  ): Promise<AzureLargeStorageInstanceGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, azureLargeStorageInstanceName, options },
      getOperationSpec,
    );
  }

  /**
   * Patches the Tags field of a Azure Large Storage Instance for the specified subscription, resource
   * group, and instance name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param azureLargeStorageInstanceName Name of the AzureLargeStorageInstance.
   * @param tagsParameter Request body that only contains the new Tags field
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    azureLargeStorageInstanceName: string,
    tagsParameter: Tags,
    options?: AzureLargeStorageInstanceUpdateOptionalParams,
  ): Promise<AzureLargeStorageInstanceUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        azureLargeStorageInstanceName,
        tagsParameter,
        options,
      },
      updateOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: AzureLargeStorageInstanceListBySubscriptionNextOptionalParams,
  ): Promise<AzureLargeStorageInstanceListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AzureLargeStorageInstanceListByResourceGroupNextOptionalParams,
  ): Promise<AzureLargeStorageInstanceListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureLargeStorageInstanceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureLargeStorageInstanceListResult,
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
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureLargeStorageInstance,
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
    Parameters.azureLargeStorageInstanceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureLargeInstance/azureLargeStorageInstances/{azureLargeStorageInstanceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AzureLargeStorageInstance,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.tagsParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.azureLargeStorageInstanceName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureLargeStorageInstanceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AzureLargeStorageInstanceListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
