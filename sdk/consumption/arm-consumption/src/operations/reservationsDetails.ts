/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ReservationsDetails } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClient } from "../consumptionManagementClient";
import {
  ReservationDetail,
  ReservationsDetailsListByReservationOrderNextOptionalParams,
  ReservationsDetailsListByReservationOrderOptionalParams,
  ReservationsDetailsListByReservationOrderResponse,
  ReservationsDetailsListByReservationOrderAndReservationNextOptionalParams,
  ReservationsDetailsListByReservationOrderAndReservationOptionalParams,
  ReservationsDetailsListByReservationOrderAndReservationResponse,
  ReservationsDetailsListNextOptionalParams,
  ReservationsDetailsListOptionalParams,
  ReservationsDetailsListResponse,
  ReservationsDetailsListByReservationOrderNextResponse,
  ReservationsDetailsListByReservationOrderAndReservationNextResponse,
  ReservationsDetailsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ReservationsDetails operations. */
export class ReservationsDetailsImpl implements ReservationsDetails {
  private readonly client: ConsumptionManagementClient;

  /**
   * Initialize a new instance of the class ReservationsDetails class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClient) {
    this.client = client;
  }

  /**
   * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB,
   * so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too
   * large, customers may also get 504 as the API timed out preparing the data. In such cases, API call
   * should be made with smaller date ranges or a call to Generate Reservation Details Report API should
   * be made as it is asynchronous and will not run into response size time outs.
   * @param reservationOrderId Order Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date and
   *               end date. The filter supports 'le' and  'ge'
   * @param options The options parameters.
   */
  public listByReservationOrder(
    reservationOrderId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderOptionalParams
  ): PagedAsyncIterableIterator<ReservationDetail> {
    const iter = this.listByReservationOrderPagingAll(
      reservationOrderId,
      filter,
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
        return this.listByReservationOrderPagingPage(
          reservationOrderId,
          filter,
          options,
          settings
        );
      }
    };
  }

  private async *listByReservationOrderPagingPage(
    reservationOrderId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ReservationDetail[]> {
    let result: ReservationsDetailsListByReservationOrderResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReservationOrder(
        reservationOrderId,
        filter,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReservationOrderNext(
        reservationOrderId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReservationOrderPagingAll(
    reservationOrderId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderOptionalParams
  ): AsyncIterableIterator<ReservationDetail> {
    for await (const page of this.listByReservationOrderPagingPage(
      reservationOrderId,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB,
   * so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too
   * large, customers may also get 504 as the API timed out preparing the data. In such cases, API call
   * should be made with smaller date ranges or a call to Generate Reservation Details Report API should
   * be made as it is asynchronous and will not run into response size time outs.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date and
   *               end date. The filter supports 'le' and  'ge'
   * @param options The options parameters.
   */
  public listByReservationOrderAndReservation(
    reservationOrderId: string,
    reservationId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderAndReservationOptionalParams
  ): PagedAsyncIterableIterator<ReservationDetail> {
    const iter = this.listByReservationOrderAndReservationPagingAll(
      reservationOrderId,
      reservationId,
      filter,
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
        return this.listByReservationOrderAndReservationPagingPage(
          reservationOrderId,
          reservationId,
          filter,
          options,
          settings
        );
      }
    };
  }

  private async *listByReservationOrderAndReservationPagingPage(
    reservationOrderId: string,
    reservationId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderAndReservationOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ReservationDetail[]> {
    let result: ReservationsDetailsListByReservationOrderAndReservationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByReservationOrderAndReservation(
        reservationOrderId,
        reservationId,
        filter,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByReservationOrderAndReservationNext(
        reservationOrderId,
        reservationId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByReservationOrderAndReservationPagingAll(
    reservationOrderId: string,
    reservationId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderAndReservationOptionalParams
  ): AsyncIterableIterator<ReservationDetail> {
    for await (const page of this.listByReservationOrderAndReservationPagingPage(
      reservationOrderId,
      reservationId,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB,
   * so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too
   * large, customers may also get 504 as the API timed out preparing the data. In such cases, API call
   * should be made with smaller date ranges or a call to Generate Reservation Details Report API should
   * be made as it is asynchronous and will not run into response size time outs.
   * @param resourceScope The scope associated with reservations details operations. This includes
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope (legacy),
   *                      and
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *                      for BillingProfile scope (modern).
   * @param options The options parameters.
   */
  public list(
    resourceScope: string,
    options?: ReservationsDetailsListOptionalParams
  ): PagedAsyncIterableIterator<ReservationDetail> {
    const iter = this.listPagingAll(resourceScope, options);
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
        return this.listPagingPage(resourceScope, options, settings);
      }
    };
  }

  private async *listPagingPage(
    resourceScope: string,
    options?: ReservationsDetailsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ReservationDetail[]> {
    let result: ReservationsDetailsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceScope, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(resourceScope, continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceScope: string,
    options?: ReservationsDetailsListOptionalParams
  ): AsyncIterableIterator<ReservationDetail> {
    for await (const page of this.listPagingPage(resourceScope, options)) {
      yield* page;
    }
  }

  /**
   * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB,
   * so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too
   * large, customers may also get 504 as the API timed out preparing the data. In such cases, API call
   * should be made with smaller date ranges or a call to Generate Reservation Details Report API should
   * be made as it is asynchronous and will not run into response size time outs.
   * @param reservationOrderId Order Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date and
   *               end date. The filter supports 'le' and  'ge'
   * @param options The options parameters.
   */
  private _listByReservationOrder(
    reservationOrderId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderOptionalParams
  ): Promise<ReservationsDetailsListByReservationOrderResponse> {
    return this.client.sendOperationRequest(
      { reservationOrderId, filter, options },
      listByReservationOrderOperationSpec
    );
  }

  /**
   * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB,
   * so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too
   * large, customers may also get 504 as the API timed out preparing the data. In such cases, API call
   * should be made with smaller date ranges or a call to Generate Reservation Details Report API should
   * be made as it is asynchronous and will not run into response size time outs.
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param filter Filter reservation details by date range. The properties/UsageDate for start date and
   *               end date. The filter supports 'le' and  'ge'
   * @param options The options parameters.
   */
  private _listByReservationOrderAndReservation(
    reservationOrderId: string,
    reservationId: string,
    filter: string,
    options?: ReservationsDetailsListByReservationOrderAndReservationOptionalParams
  ): Promise<ReservationsDetailsListByReservationOrderAndReservationResponse> {
    return this.client.sendOperationRequest(
      { reservationOrderId, reservationId, filter, options },
      listByReservationOrderAndReservationOperationSpec
    );
  }

  /**
   * Lists the reservations details for provided date range. Note: ARM has a payload size limit of 12MB,
   * so currently callers get 400 when the response size exceeds the ARM limit. If the data size is too
   * large, customers may also get 504 as the API timed out preparing the data. In such cases, API call
   * should be made with smaller date ranges or a call to Generate Reservation Details Report API should
   * be made as it is asynchronous and will not run into response size time outs.
   * @param resourceScope The scope associated with reservations details operations. This includes
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope (legacy),
   *                      and
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *                      for BillingProfile scope (modern).
   * @param options The options parameters.
   */
  private _list(
    resourceScope: string,
    options?: ReservationsDetailsListOptionalParams
  ): Promise<ReservationsDetailsListResponse> {
    return this.client.sendOperationRequest(
      { resourceScope, options },
      listOperationSpec
    );
  }

  /**
   * ListByReservationOrderNext
   * @param reservationOrderId Order Id of the reservation
   * @param nextLink The nextLink from the previous successful call to the ListByReservationOrder method.
   * @param options The options parameters.
   */
  private _listByReservationOrderNext(
    reservationOrderId: string,
    nextLink: string,
    options?: ReservationsDetailsListByReservationOrderNextOptionalParams
  ): Promise<ReservationsDetailsListByReservationOrderNextResponse> {
    return this.client.sendOperationRequest(
      { reservationOrderId, nextLink, options },
      listByReservationOrderNextOperationSpec
    );
  }

  /**
   * ListByReservationOrderAndReservationNext
   * @param reservationOrderId Order Id of the reservation
   * @param reservationId Id of the reservation
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByReservationOrderAndReservation method.
   * @param options The options parameters.
   */
  private _listByReservationOrderAndReservationNext(
    reservationOrderId: string,
    reservationId: string,
    nextLink: string,
    options?: ReservationsDetailsListByReservationOrderAndReservationNextOptionalParams
  ): Promise<
    ReservationsDetailsListByReservationOrderAndReservationNextResponse
  > {
    return this.client.sendOperationRequest(
      { reservationOrderId, reservationId, nextLink, options },
      listByReservationOrderAndReservationNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceScope The scope associated with reservations details operations. This includes
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for BillingAccount scope (legacy),
   *                      and
   *                      '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *                      for BillingProfile scope (modern).
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceScope: string,
    nextLink: string,
    options?: ReservationsDetailsListNextOptionalParams
  ): Promise<ReservationsDetailsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceScope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByReservationOrderOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/providers/Microsoft.Consumption/reservationDetails",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [Parameters.$host, Parameters.reservationOrderId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReservationOrderAndReservationOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Capacity/reservationorders/{reservationOrderId}/reservations/{reservationId}/providers/Microsoft.Consumption/reservationDetails",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.reservationOrderId,
    Parameters.reservationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceScope}/providers/Microsoft.Consumption/reservationDetails",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion,
    Parameters.startDate,
    Parameters.endDate,
    Parameters.reservationId1,
    Parameters.reservationOrderId1
  ],
  urlParameters: [Parameters.$host, Parameters.resourceScope],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReservationOrderNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.reservationOrderId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByReservationOrderAndReservationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.reservationOrderId,
    Parameters.reservationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ReservationDetailsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.resourceScope
  ],
  headerParameters: [Parameters.accept],
  serializer
};
