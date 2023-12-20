// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  SendMessageResultOutput,
  ListTemplatesResponseOutput,
} from "./outputModels";

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SendMessage202Response extends HttpResponse {
  status: "202";
  body: SendMessageResultOutput;
}

export interface SendMessageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SendMessageDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SendMessageDefaultHeaders;
}

/** The request has succeeded. */
export interface DownloadMedia200Response extends HttpResponse {
  status: "200";
  /** Value may contain any sequence of octets */
  body: Uint8Array;
}

export interface DownloadMediaDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DownloadMediaDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DownloadMediaDefaultHeaders;
}

/** The request has succeeded. */
export interface List200Response extends HttpResponse {
  status: "200";
  body: ListTemplatesResponseOutput;
}

export interface ListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDefaultHeaders;
}
