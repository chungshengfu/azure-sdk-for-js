/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BillingAccounts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClient } from "../billingManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BillingAccount,
  BillingAccountsListNextOptionalParams,
  BillingAccountsListOptionalParams,
  BillingAccountsListResponse,
  InvoiceSectionWithCreateSubPermission,
  BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextOptionalParams,
  BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams,
  BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse,
  BillingAccountsGetOptionalParams,
  BillingAccountsGetResponse,
  BillingAccountUpdateRequest,
  BillingAccountsUpdateOptionalParams,
  BillingAccountsUpdateResponse,
  BillingAccountsListNextResponse,
  BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BillingAccounts operations. */
export class BillingAccountsImpl implements BillingAccounts {
  private readonly client: BillingManagementClient;

  /**
   * Initialize a new instance of the class BillingAccounts class.
   * @param client Reference to the service client
   */
  constructor(client: BillingManagementClient) {
    this.client = client;
  }

  /**
   * Lists the billing accounts that a user has access to.
   * @param options The options parameters.
   */
  public list(
    options?: BillingAccountsListOptionalParams,
  ): PagedAsyncIterableIterator<BillingAccount> {
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
    options?: BillingAccountsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<BillingAccount[]> {
    let result: BillingAccountsListResponse;
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
    options?: BillingAccountsListOptionalParams,
  ): AsyncIterableIterator<BillingAccount> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists the invoice sections for which the user has permission to create Azure subscriptions. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  public listInvoiceSectionsByCreateSubscriptionPermission(
    billingAccountName: string,
    options?: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams,
  ): PagedAsyncIterableIterator<InvoiceSectionWithCreateSubPermission> {
    const iter =
      this.listInvoiceSectionsByCreateSubscriptionPermissionPagingAll(
        billingAccountName,
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
        return this.listInvoiceSectionsByCreateSubscriptionPermissionPagingPage(
          billingAccountName,
          options,
          settings,
        );
      },
    };
  }

  private async *listInvoiceSectionsByCreateSubscriptionPermissionPagingPage(
    billingAccountName: string,
    options?: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<InvoiceSectionWithCreateSubPermission[]> {
    let result: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listInvoiceSectionsByCreateSubscriptionPermission(
        billingAccountName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result =
        await this._listInvoiceSectionsByCreateSubscriptionPermissionNext(
          billingAccountName,
          continuationToken,
          options,
        );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listInvoiceSectionsByCreateSubscriptionPermissionPagingAll(
    billingAccountName: string,
    options?: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams,
  ): AsyncIterableIterator<InvoiceSectionWithCreateSubPermission> {
    for await (const page of this.listInvoiceSectionsByCreateSubscriptionPermissionPagingPage(
      billingAccountName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists the billing accounts that a user has access to.
   * @param options The options parameters.
   */
  private _list(
    options?: BillingAccountsListOptionalParams,
  ): Promise<BillingAccountsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a billing account by its ID.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    options?: BillingAccountsGetOptionalParams,
  ): Promise<BillingAccountsGetResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      getOperationSpec,
    );
  }

  /**
   * Updates the properties of a billing account. Currently, displayName and address can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing account operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    billingAccountName: string,
    parameters: BillingAccountUpdateRequest,
    options?: BillingAccountsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BillingAccountsUpdateResponse>,
      BillingAccountsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<BillingAccountsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { billingAccountName, parameters, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      BillingAccountsUpdateResponse,
      OperationState<BillingAccountsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the properties of a billing account. Currently, displayName and address can be updated. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param parameters Request parameters that are provided to the update billing account operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    billingAccountName: string,
    parameters: BillingAccountUpdateRequest,
    options?: BillingAccountsUpdateOptionalParams,
  ): Promise<BillingAccountsUpdateResponse> {
    const poller = await this.beginUpdate(
      billingAccountName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the invoice sections for which the user has permission to create Azure subscriptions. The
   * operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param options The options parameters.
   */
  private _listInvoiceSectionsByCreateSubscriptionPermission(
    billingAccountName: string,
    options?: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOptionalParams,
  ): Promise<BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, options },
      listInvoiceSectionsByCreateSubscriptionPermissionOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: BillingAccountsListNextOptionalParams,
  ): Promise<BillingAccountsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListInvoiceSectionsByCreateSubscriptionPermissionNext
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListInvoiceSectionsByCreateSubscriptionPermission method.
   * @param options The options parameters.
   */
  private _listInvoiceSectionsByCreateSubscriptionPermissionNext(
    billingAccountName: string,
    nextLink: string,
    options?: BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextOptionalParams,
  ): Promise<BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionNextResponse> {
    return this.client.sendOperationRequest(
      { billingAccountName, nextLink, options },
      listInvoiceSectionsByCreateSubscriptionPermissionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccountListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccount,
    },
    201: {
      bodyMapper: Mappers.BillingAccount,
    },
    202: {
      bodyMapper: Mappers.BillingAccount,
    },
    204: {
      bodyMapper: Mappers.BillingAccount,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.billingAccountName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listInvoiceSectionsByCreateSubscriptionPermissionOperationSpec: coreClient.OperationSpec =
  {
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.InvoiceSectionListWithCreateSubPermissionResult,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [Parameters.$host, Parameters.billingAccountName],
    headerParameters: [Parameters.accept],
    serializer,
  };
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingAccountListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const listInvoiceSectionsByCreateSubscriptionPermissionNextOperationSpec: coreClient.OperationSpec =
  {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.InvoiceSectionListWithCreateSubPermissionResult,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    urlParameters: [
      Parameters.$host,
      Parameters.billingAccountName,
      Parameters.nextLink,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
