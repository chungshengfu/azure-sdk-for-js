/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Sites } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateV2 } from "../azureMigrateV2";
import {
  SiteHealthSummary,
  SitesGetSiteHealthSummaryNextOptionalParams,
  SitesGetSiteHealthSummaryOptionalParams,
  SitesGetSiteHealthSummaryResponse,
  SitesGetSiteOptionalParams,
  SitesGetSiteResponse,
  VMwareSite,
  SitesPutSiteOptionalParams,
  SitesPutSiteResponse,
  SitesDeleteSiteOptionalParams,
  SitesPatchSiteOptionalParams,
  SitesPatchSiteResponse,
  SitesRefreshSiteOptionalParams,
  SitesRefreshSiteResponse,
  SitesGetSiteUsageOptionalParams,
  SitesGetSiteUsageResponse,
  SitesGetSiteHealthSummaryNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Sites operations. */
export class SitesImpl implements Sites {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class Sites class.
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
    options?: SitesGetSiteHealthSummaryOptionalParams
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
    options?: SitesGetSiteHealthSummaryOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SiteHealthSummary[]> {
    let result: SitesGetSiteHealthSummaryResponse;
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
    options?: SitesGetSiteHealthSummaryOptionalParams
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
   * Method to get a site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  getSite(
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetSiteOptionalParams
  ): Promise<SitesGetSiteResponse> {
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
    body: VMwareSite,
    options?: SitesPutSiteOptionalParams
  ): Promise<SitesPutSiteResponse> {
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
    options?: SitesDeleteSiteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      deleteSiteOperationSpec
    );
  }

  /**
   * Method to update an existing site.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param body Body with site details.
   * @param options The options parameters.
   */
  patchSite(
    resourceGroupName: string,
    siteName: string,
    body: VMwareSite,
    options?: SitesPatchSiteOptionalParams
  ): Promise<SitesPatchSiteResponse> {
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
    options?: SitesRefreshSiteOptionalParams
  ): Promise<SitesRefreshSiteResponse> {
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
    options?: SitesGetSiteHealthSummaryOptionalParams
  ): Promise<SitesGetSiteHealthSummaryResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getSiteHealthSummaryOperationSpec
    );
  }

  /**
   * Method to get site usage/summary.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param siteName Site name.
   * @param options The options parameters.
   */
  getSiteUsage(
    resourceGroupName: string,
    siteName: string,
    options?: SitesGetSiteUsageOptionalParams
  ): Promise<SitesGetSiteUsageResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, options },
      getSiteUsageOperationSpec
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
    options?: SitesGetSiteHealthSummaryNextOptionalParams
  ): Promise<SitesGetSiteHealthSummaryNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, siteName, nextLink, options },
      getSiteHealthSummaryNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getSiteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareSite
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareSite
    },
    201: {
      bodyMapper: Mappers.VMwareSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body3,
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}",
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareSite
    },
    201: {
      bodyMapper: Mappers.VMwareSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.body3,
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}/refresh",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.SitesRefreshSiteHeaders
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}/healthSummary",
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OffAzure/VMwareSites/{siteName}/summary",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VMwareSiteUsage
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
