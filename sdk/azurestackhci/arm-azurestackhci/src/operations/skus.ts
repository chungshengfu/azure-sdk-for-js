/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Skus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureStackHCIClient } from "../azureStackHCIClient";
import {
  Sku,
  SkusListByOfferNextOptionalParams,
  SkusListByOfferOptionalParams,
  SkusListByOfferResponse,
  SkusGetOptionalParams,
  SkusGetResponse,
  SkusListByOfferNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Skus operations. */
export class SkusImpl implements Skus {
  private readonly client: AzureStackHCIClient;

  /**
   * Initialize a new instance of the class Skus class.
   * @param client Reference to the service client
   */
  constructor(client: AzureStackHCIClient) {
    this.client = client;
  }

  /**
   * List Skus available for a offer within the HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param publisherName The name of the publisher available within HCI cluster.
   * @param offerName The name of the offer available within HCI cluster.
   * @param options The options parameters.
   */
  public listByOffer(
    resourceGroupName: string,
    clusterName: string,
    publisherName: string,
    offerName: string,
    options?: SkusListByOfferOptionalParams,
  ): PagedAsyncIterableIterator<Sku> {
    const iter = this.listByOfferPagingAll(
      resourceGroupName,
      clusterName,
      publisherName,
      offerName,
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
        return this.listByOfferPagingPage(
          resourceGroupName,
          clusterName,
          publisherName,
          offerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByOfferPagingPage(
    resourceGroupName: string,
    clusterName: string,
    publisherName: string,
    offerName: string,
    options?: SkusListByOfferOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Sku[]> {
    let result: SkusListByOfferResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByOffer(
        resourceGroupName,
        clusterName,
        publisherName,
        offerName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByOfferNext(
        resourceGroupName,
        clusterName,
        publisherName,
        offerName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByOfferPagingAll(
    resourceGroupName: string,
    clusterName: string,
    publisherName: string,
    offerName: string,
    options?: SkusListByOfferOptionalParams,
  ): AsyncIterableIterator<Sku> {
    for await (const page of this.listByOfferPagingPage(
      resourceGroupName,
      clusterName,
      publisherName,
      offerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List Skus available for a offer within the HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param publisherName The name of the publisher available within HCI cluster.
   * @param offerName The name of the offer available within HCI cluster.
   * @param options The options parameters.
   */
  private _listByOffer(
    resourceGroupName: string,
    clusterName: string,
    publisherName: string,
    offerName: string,
    options?: SkusListByOfferOptionalParams,
  ): Promise<SkusListByOfferResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, publisherName, offerName, options },
      listByOfferOperationSpec,
    );
  }

  /**
   * Get SKU resource details within a offer of HCI Cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param publisherName The name of the publisher available within HCI cluster.
   * @param offerName The name of the offer available within HCI cluster.
   * @param skuName The name of the SKU available within HCI cluster.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    publisherName: string,
    offerName: string,
    skuName: string,
    options?: SkusGetOptionalParams,
  ): Promise<SkusGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        publisherName,
        offerName,
        skuName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListByOfferNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param publisherName The name of the publisher available within HCI cluster.
   * @param offerName The name of the offer available within HCI cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByOffer method.
   * @param options The options parameters.
   */
  private _listByOfferNext(
    resourceGroupName: string,
    clusterName: string,
    publisherName: string,
    offerName: string,
    nextLink: string,
    options?: SkusListByOfferNextOptionalParams,
  ): Promise<SkusListByOfferNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterName,
        publisherName,
        offerName,
        nextLink,
        options,
      },
      listByOfferNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByOfferOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/publishers/{publisherName}/offers/{offerName}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.publisherName,
    Parameters.offerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureStackHCI/clusters/{clusterName}/publishers/{publisherName}/offers/{offerName}/skus/{skuName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Sku,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.publisherName,
    Parameters.offerName,
    Parameters.skuName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByOfferNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.nextLink,
    Parameters.publisherName,
    Parameters.offerName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
