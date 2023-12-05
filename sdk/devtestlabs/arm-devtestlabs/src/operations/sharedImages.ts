/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SharedImages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClient } from "../devTestLabsClient";
import {
  SharedImage,
  SharedImagesListNextOptionalParams,
  SharedImagesListOptionalParams,
  SharedImagesListResponse,
  SharedImagesGetOptionalParams,
  SharedImagesGetResponse,
  SharedImagesCreateOrUpdateOptionalParams,
  SharedImagesCreateOrUpdateResponse,
  SharedImagesDeleteOptionalParams,
  SharedImageFragment,
  SharedImagesUpdateOptionalParams,
  SharedImagesUpdateResponse,
  SharedImagesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SharedImages operations. */
export class SharedImagesImpl implements SharedImages {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class SharedImages class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * List shared images in a given shared gallery.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    options?: SharedImagesListOptionalParams
  ): PagedAsyncIterableIterator<SharedImage> {
    const iter = this.listPagingAll(
      resourceGroupName,
      labName,
      sharedGalleryName,
      options
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
          resourceGroupName,
          labName,
          sharedGalleryName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    options?: SharedImagesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SharedImage[]> {
    let result: SharedImagesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        labName,
        sharedGalleryName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        labName,
        sharedGalleryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    options?: SharedImagesListOptionalParams
  ): AsyncIterableIterator<SharedImage> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      labName,
      sharedGalleryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List shared images in a given shared gallery.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    options?: SharedImagesListOptionalParams
  ): Promise<SharedImagesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, sharedGalleryName, options },
      listOperationSpec
    );
  }

  /**
   * Get shared image.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param name The name of the shared image.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    name: string,
    options?: SharedImagesGetOptionalParams
  ): Promise<SharedImagesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, sharedGalleryName, name, options },
      getOperationSpec
    );
  }

  /**
   * Create or replace an existing Shared Image.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param name The name of the shared image.
   * @param sharedImage Properties of a shared image
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    name: string,
    sharedImage: SharedImage,
    options?: SharedImagesCreateOrUpdateOptionalParams
  ): Promise<SharedImagesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        sharedGalleryName,
        name,
        sharedImage,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete shared image.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param name The name of the shared image.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    name: string,
    options?: SharedImagesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, sharedGalleryName, name, options },
      deleteOperationSpec
    );
  }

  /**
   * Allows modifying tags of shared images. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param name The name of the shared image.
   * @param sharedImage Allows modifying tags of shared images. All other properties will be ignored.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    name: string,
    sharedImage: SharedImageFragment,
    options?: SharedImagesUpdateOptionalParams
  ): Promise<SharedImagesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        sharedGalleryName,
        name,
        sharedImage,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param sharedGalleryName The name of the shared gallery.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    labName: string,
    sharedGalleryName: string,
    nextLink: string,
    options?: SharedImagesListNextOptionalParams
  ): Promise<SharedImagesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, labName, sharedGalleryName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/sharedgalleries/{sharedGalleryName}/sharedimages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.sharedGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/sharedgalleries/{sharedGalleryName}/sharedimages/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.sharedGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/sharedgalleries/{sharedGalleryName}/sharedimages/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SharedImage
    },
    201: {
      bodyMapper: Mappers.SharedImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.sharedImage,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.sharedGalleryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/sharedgalleries/{sharedGalleryName}/sharedimages/{name}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.sharedGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/sharedgalleries/{sharedGalleryName}/sharedimages/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SharedImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.sharedImage1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name,
    Parameters.labName,
    Parameters.sharedGalleryName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.sharedGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
