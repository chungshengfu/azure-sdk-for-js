/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BillingPeriods } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  BillingPeriod,
  BillingPeriodsListNextOptionalParams,
  BillingPeriodsListOptionalParams,
  BillingPeriodsListResponse,
  BillingPeriodsGetOptionalParams,
  BillingPeriodsGetResponse,
  BillingPeriodsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingPeriods operations. */
export class BillingPeriodsImpl implements BillingPeriods {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingPeriods class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the available billing periods for a subscription in reverse chronological order. This is only
   * supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased
   * directly through the Azure web portal are not supported through this preview API.
   * @param options The options parameters.
   */
  public list(
    options?: BillingPeriodsListOptionalParams,
  ): PagedAsyncIterableIterator<BillingPeriod> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: BillingPeriodsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingPeriod[]> {
    let result: BillingPeriodsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: BillingPeriodsListOptionalParams,
  ): AsyncIterableIterator<BillingPeriod> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the available billing periods for a subscription in reverse chronological order. This is only
   * supported for Azure Web-Direct subscriptions. Other subscription types which were not purchased
   * directly through the Azure web portal are not supported through this preview API.
   * @param options The options parameters.
   */
  private _list(
    options?: BillingPeriodsListOptionalParams,
  ): Promise<BillingPeriodsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a named billing period.  This is only supported for Azure Web-Direct subscriptions. Other
   * subscription types which were not purchased directly through the Azure web portal are not supported
   * through this preview API.
   * @param billingPeriodName The name of a BillingPeriod resource.
   * @param options The options parameters.
   */
  get(
    billingPeriodName: string,
    options?: BillingPeriodsGetOptionalParams,
  ): Promise<BillingPeriodsGetResponse> {
    return this.client.sendOperationRequest(
      { billingPeriodName, options },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: BillingPeriodsListNextOptionalParams,
  ): Promise<BillingPeriodsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingPeriodsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion1,
    Parameters.skiptoken,
    Parameters.top,
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingPeriod,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.billingPeriodName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingPeriodsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
