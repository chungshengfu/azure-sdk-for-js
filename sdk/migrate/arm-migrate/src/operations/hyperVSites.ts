/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { HyperVSites } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2 } from "../azureMigrateV2";
import {
  SiteHealthSummary,
  HyperVSitesGetSiteHealthSummaryNextOptionalParams,
  HyperVSitesGetSiteHealthSummaryOptionalParams,
  HyperVSitesGetSiteHealthSummaryResponse,
  HyperVSite,
  HyperVSitesListBySubscriptionNextOptionalParams,
  HyperVSitesListBySubscriptionOptionalParams,
  HyperVSitesListBySubscriptionResponse,
  HyperVSitesListNextOptionalParams,
  HyperVSitesListOptionalParams,
  HyperVSitesListResponse,
  HyperVSitesGetSiteOptionalParams,
  HyperVSitesGetSiteResponse,
  HyperVSitesPutSiteOptionalParams,
  HyperVSitesPutSiteResponse,
  HyperVSitesDeleteSiteOptionalParams,
  HyperVSitesPatchSiteOptionalParams,
  HyperVSitesPatchSiteResponse,
  HyperVSitesRefreshSiteOptionalParams,
  HyperVSitesRefreshSiteResponse,
  HyperVSitesGetSiteUsageOptionalParams,
  HyperVSitesGetSiteUsageResponse,
  HyperVSitesGetSiteHealthSummaryNextResponse,
  HyperVSitesListBySubscriptionNextResponse,
  HyperVSitesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing HyperVSites operations. */
export class HyperVSitesImpl implements HyperVSites {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class HyperVSites class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateV2) {
    this.client = client;
  }

  /**
   * Method to get site health summary.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  public listSiteHealthSummary(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesGetSiteHealthSummaryOptionalParams
  ): PagedAsyncIterableIterator<SiteHealthSummary> {
    const iter = this.getSiteHealthSummaryPagingAll(
      resourceGroupName,
      siteName,
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
        return this.getSiteHealthSummaryPagingPage(
          resourceGroupName,
          siteName,
          options,
          settings
        );
      }
    };
  }

  private async *getSiteHealthSummaryPagingPage(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesGetSiteHealthSummaryOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SiteHealthSummary[]> {
    let result: HyperVSitesGetSiteHealthSummaryResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getSiteHealthSummary(
        resourceGroupName,
        siteName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getSiteHealthSummaryNext(
        resourceGroupName,
        siteName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getSiteHealthSummaryPagingAll(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesGetSiteHealthSummaryOptionalParams
  ): AsyncIterableIterator<SiteHealthSummary> {
    for await (const page of this.getSiteHealthSummaryPagingPage(
      resourceGroupName,
      siteName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all the hyperv sites in the subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: HyperVSitesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<HyperVSite> {
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
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: HyperVSitesListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<HyperVSite[]> {
    let result: HyperVSitesListBySubscriptionResponse;
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
    options?: HyperVSitesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<HyperVSite> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the hyperv sites in the subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: HyperVSitesListOptionalParams
  ): PagedAsyncIterableIterator<HyperVSite> {
    const iter = this.listPagingAll(resourceGroupName, options);
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
        return this.listPagingPage(resourceGroupName, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: HyperVSitesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<HyperVSite[]> {
    let result: HyperVSitesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
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
    options?: HyperVSitesListOptionalParams
  ): AsyncIterableIterator<HyperVSite> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Method to get a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  getSite(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesGetSiteOptionalParams
  ): Promise<HyperVSitesGetSiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getSiteOperationSpec
    );
  }

  /**
   * Method to create or update a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param body Body with site details.
   * @param options The options parameters.
   */
  putSite(
    resourceGroupName: string,
    siteName: string,
    body: HyperVSite,
    options?: HyperVSitesPutSiteOptionalParams
  ): Promise<HyperVSitesPutSiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, body, options },
      putSiteOperationSpec
    );
  }

  /**
   * Method to delete a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  deleteSite(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesDeleteSiteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      deleteSiteOperationSpec
    );
  }

  /**
   * Method to patch an existing site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName The site name.
   * @param body Body with site details.
   * @param options The options parameters.
   */
  patchSite(
    resourceGroupName: string,
    siteName: string,
    body: HyperVSite,
    options?: HyperVSitesPatchSiteOptionalParams
  ): Promise<HyperVSitesPatchSiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, body, options },
      patchSiteOperationSpec
    );
  }

  /**
   * Method to refresh a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  refreshSite(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesRefreshSiteOptionalParams
  ): Promise<HyperVSitesRefreshSiteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      refreshSiteOperationSpec
    );
  }

  /**
   * Method to get site health summary.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  private _getSiteHealthSummary(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesGetSiteHealthSummaryOptionalParams
  ): Promise<HyperVSitesGetSiteHealthSummaryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getSiteHealthSummaryOperationSpec
    );
  }

  /**
   * Method to get site usage.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  getSiteUsage(
    resourceGroupName: string,
    siteName: string,
    options?: HyperVSitesGetSiteUsageOptionalParams
  ): Promise<HyperVSitesGetSiteUsageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getSiteUsageOperationSpec
    );
  }

  /**
   * Get all the hyperv sites in the subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: HyperVSitesListBySubscriptionOptionalParams
  ): Promise<HyperVSitesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Get all the hyperv sites in the subscription.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: HyperVSitesListOptionalParams
  ): Promise<HyperVSitesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * GetSiteHealthSummaryNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param nextLink The nextLink from the previous successful call to the GetSiteHealthSummary method.
   * @param options The options parameters.
   */
  private _getSiteHealthSummaryNext(
    resourceGroupName: string,
    siteName: string,
    nextLink: string,
    options?: HyperVSitesGetSiteHealthSummaryNextOptionalParams
  ): Promise<HyperVSitesGetSiteHealthSummaryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, nextLink, options },
      getSiteHealthSummaryNextOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: HyperVSitesListBySubscriptionNextOptionalParams
  ): Promise<HyperVSitesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: HyperVSitesListNextOptionalParams
  ): Promise<HyperVSitesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSite
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
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const putSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSite
    },
    201: {
      bodyMapper: Mappers.HyperVSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}",
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
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const patchSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSite
    },
    201: {
      bodyMapper: Mappers.HyperVSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const refreshSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}/refresh",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.HyperVSitesRefreshSiteHeaders
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
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSiteHealthSummaryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}/healthSummary",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SiteHealthSummaryCollection
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
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSiteUsageOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites/{siteName}/summary",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSiteUsage
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
    Parameters.siteName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.OffAzure/HyperVSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSitesResultList,
      headersMapper: Mappers.HyperVSitesListBySubscriptionHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.OffAzure/HyperVSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSitesResultList,
      headersMapper: Mappers.HyperVSitesListHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSiteHealthSummaryNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SiteHealthSummaryCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.siteName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSitesResultList,
      headersMapper: Mappers.HyperVSitesListBySubscriptionNextHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HyperVSitesResultList,
      headersMapper: Mappers.HyperVSitesListNextHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
