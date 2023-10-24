/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  InvoiceSection,
  InvoiceSectionsListByBillingProfileOptionalParams,
  InvoiceSectionsGetOptionalParams,
  InvoiceSectionsGetResponse,
  InvoiceSectionsCreateOrUpdateOptionalParams,
  InvoiceSectionsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a InvoiceSections. */
export interface InvoiceSections {
  /**
   * Lists the invoice sections that a user has access to. The operation is supported only for billing
   * accounts with agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param options The options parameters.
   */
  listByBillingProfile(
    billingAccountName: string,
    billingProfileName: string,
    options?: InvoiceSectionsListByBillingProfileOptionalParams
  ): PagedAsyncIterableIterator<InvoiceSection>;
  /**
   * Gets an invoice section by its ID. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param options The options parameters.
   */
  get(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    options?: InvoiceSectionsGetOptionalParams
  ): Promise<InvoiceSectionsGetResponse>;
  /**
   * Creates or updates an invoice section. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param parameters The new or updated invoice section.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    parameters: InvoiceSection,
    options?: InvoiceSectionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<InvoiceSectionsCreateOrUpdateResponse>,
      InvoiceSectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an invoice section. The operation is supported only for billing accounts with
   * agreement type Microsoft Customer Agreement.
   * @param billingAccountName The ID that uniquely identifies a billing account.
   * @param billingProfileName The ID that uniquely identifies a billing profile.
   * @param invoiceSectionName The ID that uniquely identifies an invoice section.
   * @param parameters The new or updated invoice section.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    billingAccountName: string,
    billingProfileName: string,
    invoiceSectionName: string,
    parameters: InvoiceSection,
    options?: InvoiceSectionsCreateOrUpdateOptionalParams
  ): Promise<InvoiceSectionsCreateOrUpdateResponse>;
}
