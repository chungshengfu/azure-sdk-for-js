// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  AnalyzeTextResultOutput,
  AnalyzeTextJailbreakResultOutput,
  AnalyzeTextProtectedMaterialResultOutput,
  AnalyzeTextPromptInjectionResultOutput,
  AnalyzeTextCustomCategoryResultOutput,
  AnalyzeImageResultOutput,
  TextBlocklistOutput,
  PagedTextBlocklistOutput,
  AddOrUpdateTextBlocklistItemsResultOutput,
  TextBlocklistItemOutput,
  PagedTextBlocklistItemOutput,
  AnalyzeTextGroundednessResultOutput,
  TextCustomCategoryVersionOutput,
  TextCustomCategoryVersionListOutput,
  PagedTextCustomCategoryVersionOutput,
  ResourceOperationStatusOutput,
  CustomCategoryOperationDetailOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface AnalyzeText200Response extends HttpResponse {
  status: "200";
  body: AnalyzeTextResultOutput;
}

export interface AnalyzeTextDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AnalyzeTextDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AnalyzeTextDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectTextJailbreak200Response extends HttpResponse {
  status: "200";
  body: AnalyzeTextJailbreakResultOutput;
}

export interface DetectTextJailbreakDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DetectTextJailbreakDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DetectTextJailbreakDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectTextProtectedMaterial200Response extends HttpResponse {
  status: "200";
  body: AnalyzeTextProtectedMaterialResultOutput;
}

export interface DetectTextProtectedMaterialDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DetectTextProtectedMaterialDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DetectTextProtectedMaterialDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectTextPromptInjectionOptions200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeTextPromptInjectionResultOutput;
}

export interface DetectTextPromptInjectionOptionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DetectTextPromptInjectionOptionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DetectTextPromptInjectionOptionsDefaultHeaders;
}

/** The request has succeeded. */
export interface AnalyzeTextCustomCategory200Response extends HttpResponse {
  status: "200";
  body: AnalyzeTextCustomCategoryResultOutput;
}

export interface AnalyzeTextCustomCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AnalyzeTextCustomCategoryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AnalyzeTextCustomCategoryDefaultHeaders;
}

/** The request has succeeded. */
export interface AnalyzeImage200Response extends HttpResponse {
  status: "200";
  body: AnalyzeImageResultOutput;
}

export interface AnalyzeImageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AnalyzeImageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AnalyzeImageDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTextBlocklist200Response extends HttpResponse {
  status: "200";
  body: TextBlocklistOutput;
}

export interface GetTextBlocklistDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTextBlocklistDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTextBlocklistDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateOrUpdateTextBlocklist200Response extends HttpResponse {
  status: "200";
  body: TextBlocklistOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateOrUpdateTextBlocklist201Response extends HttpResponse {
  status: "201";
  body: TextBlocklistOutput;
}

export interface CreateOrUpdateTextBlocklistDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateOrUpdateTextBlocklistDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateOrUpdateTextBlocklistDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTextBlocklist204Response extends HttpResponse {
  status: "204";
}

export interface DeleteTextBlocklistDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteTextBlocklistDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteTextBlocklistDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTextBlocklists200Response extends HttpResponse {
  status: "200";
  body: PagedTextBlocklistOutput;
}

export interface ListTextBlocklistsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTextBlocklistsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTextBlocklistsDefaultHeaders;
}

/** The request has succeeded. */
export interface AddOrUpdateBlocklistItems200Response extends HttpResponse {
  status: "200";
  body: AddOrUpdateTextBlocklistItemsResultOutput;
}

export interface AddOrUpdateBlocklistItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AddOrUpdateBlocklistItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AddOrUpdateBlocklistItemsDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface RemoveBlocklistItems204Response extends HttpResponse {
  status: "204";
}

export interface RemoveBlocklistItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface RemoveBlocklistItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & RemoveBlocklistItemsDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTextBlocklistItem200Response extends HttpResponse {
  status: "200";
  body: TextBlocklistItemOutput;
}

export interface GetTextBlocklistItemDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTextBlocklistItemDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTextBlocklistItemDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTextBlocklistItems200Response extends HttpResponse {
  status: "200";
  body: PagedTextBlocklistItemOutput;
}

export interface ListTextBlocklistItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTextBlocklistItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTextBlocklistItemsDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectGroundednessOptions200Response extends HttpResponse {
  status: "200";
  body: AnalyzeTextGroundednessResultOutput;
}

export interface DetectGroundednessOptionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DetectGroundednessOptionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DetectGroundednessOptionsDefaultHeaders;
}

/** The request has succeeded. */
export interface CreateTextCustomCategoryVersion200Response
  extends HttpResponse {
  status: "200";
  body: TextCustomCategoryVersionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateTextCustomCategoryVersion201Response
  extends HttpResponse {
  status: "201";
  body: TextCustomCategoryVersionOutput;
}

export interface CreateTextCustomCategoryVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateTextCustomCategoryVersionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateTextCustomCategoryVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface GetCustomizedCategory200Response extends HttpResponse {
  status: "200";
  body: TextCustomCategoryVersionListOutput;
}

export interface GetCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCustomizedCategoryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCustomizedCategoryDefaultHeaders;
}

/** The request has succeeded. */
export interface ListCustomizedCategory200Response extends HttpResponse {
  status: "200";
  body: PagedTextCustomCategoryVersionOutput;
}

export interface ListCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListCustomizedCategoryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListCustomizedCategoryDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteCustomizedCategory204Response extends HttpResponse {
  status: "204";
}

export interface DeleteCustomizedCategoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteCustomizedCategoryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteCustomizedCategoryDefaultHeaders;
}

export interface Build202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Build202Response extends HttpResponse {
  status: "202";
  body: ResourceOperationStatusOutput;
  headers: RawHttpHeaders & Build202Headers;
}

export interface BuildDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface BuildDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & BuildDefaultHeaders;
}

/** The final response for long-running build operation */
export interface BuildLogicalResponse extends HttpResponse {
  status: "200";
  body: ResourceOperationStatusOutput;
}

/** The request has succeeded. */
export interface GetCustomCategoryOperation200Response extends HttpResponse {
  status: "200";
  body: CustomCategoryOperationDetailOutput;
}

export interface GetCustomCategoryOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCustomCategoryOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCustomCategoryOperationDefaultHeaders;
}
