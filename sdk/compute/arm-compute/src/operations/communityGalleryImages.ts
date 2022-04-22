/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CommunityGalleryImages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  CommunityGalleryImage,
  CommunityGalleryImagesListNextOptionalParams,
  CommunityGalleryImagesListOptionalParams,
  CommunityGalleryImagesGetOptionalParams,
  CommunityGalleryImagesGetResponse,
  CommunityGalleryImagesListResponse,
  CommunityGalleryImagesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CommunityGalleryImages operations. */
export class CommunityGalleryImagesImpl implements CommunityGalleryImages {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class CommunityGalleryImages class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * List community gallery images inside a gallery.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param options The options parameters.
   */
  public list(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleryImagesListOptionalParams
  ): PagedAsyncIterableIterator<CommunityGalleryImage> {
    const iter = this.listPagingAll(location, publicGalleryName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, publicGalleryName, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleryImagesListOptionalParams
  ): AsyncIterableIterator<CommunityGalleryImage[]> {
    let result = await this._list(location, publicGalleryName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        location,
        publicGalleryName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleryImagesListOptionalParams
  ): AsyncIterableIterator<CommunityGalleryImage> {
    for await (const page of this.listPagingPage(
      location,
      publicGalleryName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a community gallery image.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param galleryImageName The name of the community gallery image definition.
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    options?: CommunityGalleryImagesGetOptionalParams
  ): Promise<CommunityGalleryImagesGetResponse> {
    return this.client.sendOperationRequest(
      { location, publicGalleryName, galleryImageName, options },
      getOperationSpec
    );
  }

  /**
   * List community gallery images inside a gallery.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleryImagesListOptionalParams
  ): Promise<CommunityGalleryImagesListResponse> {
    return this.client.sendOperationRequest(
      { location, publicGalleryName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    publicGalleryName: string,
    nextLink: string,
    options?: CommunityGalleryImagesListNextOptionalParams
  ): Promise<CommunityGalleryImagesListNextResponse> {
    return this.client.sendOperationRequest(
      { location, publicGalleryName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images/{galleryImageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunityGalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryImageName,
    Parameters.publicGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/communityGalleries/{publicGalleryName}/images",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunityGalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publicGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CommunityGalleryImageList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location,
    Parameters.publicGalleryName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
