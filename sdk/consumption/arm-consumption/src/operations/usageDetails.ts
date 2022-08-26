/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { UsageDetails } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ConsumptionManagementClient } from "../consumptionManagementClient";
import {
  UsageDetailUnion,
  UsageDetailsListNextOptionalParams,
  UsageDetailsListOptionalParams,
  UsageDetailsListResponse,
  UsageDetailsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing UsageDetails operations. */
export class UsageDetailsImpl implements UsageDetails {
  private readonly client: ConsumptionManagementClient;

  /**
   * Initialize a new instance of the class UsageDetails class.
   * @param client Reference to the service client
   */
  constructor(client: ConsumptionManagementClient) {
    this.client = client;
  }

  /**
   * Note: _**Enterprise Agreement and Microsoft Customer Agreement customers:** Please do not use this
   * API. Use the [Cost Details
   * API](/rest/api/cost-management/generate-cost-details-report/create-operation?tabs=HTTP) instead._
   *
   * Lists the usage details for the defined scope. Usage details are available via this API only for May
   * 1, 2014 or later.
   * @param scope The scope associated with usage details operations. This includes
   *              '/subscriptions/{subscriptionId}/' for subscription scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              '/providers/Microsoft.Billing/departments/{departmentId}' for Department scope,
   *              '/providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope
   *              and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group
   *              scope. For subscription, billing account, department, enrollment account and management group, you
   *              can also add billing period to the scope using
   *              '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing
   *              period at department scope use
   *              '/providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'.
   *              Also, Modern Commerce Account scopes are
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for billingAccount scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for billingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   *              for invoiceSection scope, and
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for
   *              partners.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: UsageDetailsListOptionalParams
  ): PagedAsyncIterableIterator<UsageDetailUnion> {
    const iter = this.listPagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(scope, options);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: UsageDetailsListOptionalParams
  ): AsyncIterableIterator<UsageDetailUnion[]> {
    let result = await this._list(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: UsageDetailsListOptionalParams
  ): AsyncIterableIterator<UsageDetailUnion> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Note: _**Enterprise Agreement and Microsoft Customer Agreement customers:** Please do not use this
   * API. Use the [Cost Details
   * API](/rest/api/cost-management/generate-cost-details-report/create-operation?tabs=HTTP) instead._
   *
   * Lists the usage details for the defined scope. Usage details are available via this API only for May
   * 1, 2014 or later.
   * @param scope The scope associated with usage details operations. This includes
   *              '/subscriptions/{subscriptionId}/' for subscription scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              '/providers/Microsoft.Billing/departments/{departmentId}' for Department scope,
   *              '/providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope
   *              and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group
   *              scope. For subscription, billing account, department, enrollment account and management group, you
   *              can also add billing period to the scope using
   *              '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing
   *              period at department scope use
   *              '/providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'.
   *              Also, Modern Commerce Account scopes are
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for billingAccount scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for billingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   *              for invoiceSection scope, and
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for
   *              partners.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: UsageDetailsListOptionalParams
  ): Promise<UsageDetailsListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope associated with usage details operations. This includes
   *              '/subscriptions/{subscriptionId}/' for subscription scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              '/providers/Microsoft.Billing/departments/{departmentId}' for Department scope,
   *              '/providers/Microsoft.Billing/enrollmentAccounts/{enrollmentAccountId}' for EnrollmentAccount scope
   *              and '/providers/Microsoft.Management/managementGroups/{managementGroupId}' for Management Group
   *              scope. For subscription, billing account, department, enrollment account and management group, you
   *              can also add billing period to the scope using
   *              '/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'. For e.g. to specify billing
   *              period at department scope use
   *              '/providers/Microsoft.Billing/departments/{departmentId}/providers/Microsoft.Billing/billingPeriods/{billingPeriodName}'.
   *              Also, Modern Commerce Account scopes are
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for billingAccount scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for billingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   *              for invoiceSection scope, and
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific for
   *              partners.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: UsageDetailsListNextOptionalParams
  ): Promise<UsageDetailsListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Consumption/usageDetails",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageDetailsListResult
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.skiptoken,
    Parameters.top,
    Parameters.apiVersion,
    Parameters.metric
  ],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageDetailsListResult
    },
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.skiptoken,
    Parameters.top,
    Parameters.apiVersion,
    Parameters.metric
  ],
  urlParameters: [Parameters.$host, Parameters.scope, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
