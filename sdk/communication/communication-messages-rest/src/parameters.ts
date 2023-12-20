// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { SendNotificationRequest } from "./models";

export interface SendMessageHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
}

export interface SendMessageBodyParam {
  /** Details of the message to send. */
  body: SendNotificationRequest;
}

export interface SendMessageHeaderParam {
  headers?: RawHttpHeadersInput & SendMessageHeaders;
}

export type SendMessageParameters = SendMessageHeaderParam &
  SendMessageBodyParam &
  RequestParameters;
export type DownloadMediaParameters = RequestParameters;

export interface ListQueryParamProperties {
  /** The max page size. */
  maxPageSize?: number;
}

export interface ListQueryParam {
  queryParameters?: ListQueryParamProperties;
}

export type ListParameters = ListQueryParam & RequestParameters;
