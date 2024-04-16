// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  GetLanguagesResultOutput,
  ErrorResponseOutput,
  TranslatedTextItemOutput,
  TransliteratedTextOutput,
  BreakSentenceItemOutput,
  DictionaryLookupItemOutput,
  DictionaryExampleItemOutput,
} from "./outputModels.js";

export interface GetLanguages200Headers {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
  /**
   * Current value of the entity tag for the requested groups of supported languages.
   * To make subsequent requests more efficient, the client may send the `ETag` value in an
   * `If-None-Match` header field.
   */
  etag: string;
}

/** The request has succeeded. */
export interface GetLanguages200Response extends HttpResponse {
  status: "200";
  body: GetLanguagesResultOutput;
  headers: RawHttpHeaders & GetLanguages200Headers;
}

export interface GetLanguagesDefaultHeaders {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

export interface GetLanguagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & GetLanguagesDefaultHeaders;
}

export interface Translate200Headers {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
  /**
   * Specifies the system type that was used for translation for each 'to' language requested for translation.
   * The value is a comma-separated list of strings. Each string indicates a type:
   *
   * * Custom - Request includes a custom system and at least one custom system was used during translation.
   * * Team - All other requests
   */
  "x-mt-system": string;
  /**
   * Specifies consumption (the number of characters for which the user will be charged) for the translation
   * job request. For example, if the word "Hello" is translated from English (en) to French (fr),
   * this field will return the value '5'.
   */
  "x-metered-usage": number;
}

/** Response for the translation API. */
export interface Translate200Response extends HttpResponse {
  status: "200";
  body: Array<TranslatedTextItemOutput>;
  headers: RawHttpHeaders & Translate200Headers;
}

export interface TranslateDefaultHeaders {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

export interface TranslateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & TranslateDefaultHeaders;
}

export interface Transliterate200Headers {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

/** Response for the transliteration API. */
export interface Transliterate200Response extends HttpResponse {
  status: "200";
  body: Array<TransliteratedTextOutput>;
  headers: RawHttpHeaders & Transliterate200Headers;
}

export interface TransliterateDefaultHeaders {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

export interface TransliterateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & TransliterateDefaultHeaders;
}

export interface FindSentenceBoundaries200Headers {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

/** Response for the Break SEntence API. */
export interface FindSentenceBoundaries200Response extends HttpResponse {
  status: "200";
  body: Array<BreakSentenceItemOutput>;
  headers: RawHttpHeaders & FindSentenceBoundaries200Headers;
}

export interface FindSentenceBoundariesDefaultHeaders {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

export interface FindSentenceBoundariesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & FindSentenceBoundariesDefaultHeaders;
}

export interface LookupDictionaryEntries200Headers {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

/** Response for the dictionary lookup API. */
export interface LookupDictionaryEntries200Response extends HttpResponse {
  status: "200";
  body: Array<DictionaryLookupItemOutput>;
  headers: RawHttpHeaders & LookupDictionaryEntries200Headers;
}

export interface LookupDictionaryEntriesDefaultHeaders {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

export interface LookupDictionaryEntriesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & LookupDictionaryEntriesDefaultHeaders;
}

export interface LookupDictionaryExamples200Headers {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

/** Response for the dictionary examples API. */
export interface LookupDictionaryExamples200Response extends HttpResponse {
  status: "200";
  body: Array<DictionaryExampleItemOutput>;
  headers: RawHttpHeaders & LookupDictionaryExamples200Headers;
}

export interface LookupDictionaryExamplesDefaultHeaders {
  /** Value generated by the service to identify the request. It is used for troubleshooting purposes. */
  "x-requestid": string;
}

export interface LookupDictionaryExamplesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & LookupDictionaryExamplesDefaultHeaders;
}
