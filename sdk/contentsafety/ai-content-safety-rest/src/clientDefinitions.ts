// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AnalyzeTextParameters,
  DetectTextJailbreakParameters,
  DetectTextProtectedMaterialParameters,
  DetectTextPromptInjectionOptionsParameters,
  AnalyzeTextCustomCategoryParameters,
  AnalyzeImageParameters,
  GetTextBlocklistParameters,
  CreateOrUpdateTextBlocklistParameters,
  DeleteTextBlocklistParameters,
  ListTextBlocklistsParameters,
  AddOrUpdateBlocklistItemsParameters,
  RemoveBlocklistItemsParameters,
  GetTextBlocklistItemParameters,
  ListTextBlocklistItemsParameters,
  DetectGroundednessOptionsParameters,
  CreateTextCustomCategoryVersionParameters,
  GetCustomizedCategoryParameters,
  DeleteCustomizedCategoryParameters,
  ListCustomizedCategoryParameters,
  BuildParameters,
  GetCustomCategoryOperationParameters,
} from "./parameters.js";
import {
  AnalyzeText200Response,
  AnalyzeTextDefaultResponse,
  DetectTextJailbreak200Response,
  DetectTextJailbreakDefaultResponse,
  DetectTextProtectedMaterial200Response,
  DetectTextProtectedMaterialDefaultResponse,
  DetectTextPromptInjectionOptions200Response,
  DetectTextPromptInjectionOptionsDefaultResponse,
  AnalyzeTextCustomCategory200Response,
  AnalyzeTextCustomCategoryDefaultResponse,
  AnalyzeImage200Response,
  AnalyzeImageDefaultResponse,
  GetTextBlocklist200Response,
  GetTextBlocklistDefaultResponse,
  CreateOrUpdateTextBlocklist200Response,
  CreateOrUpdateTextBlocklist201Response,
  CreateOrUpdateTextBlocklistDefaultResponse,
  DeleteTextBlocklist204Response,
  DeleteTextBlocklistDefaultResponse,
  ListTextBlocklists200Response,
  ListTextBlocklistsDefaultResponse,
  AddOrUpdateBlocklistItems200Response,
  AddOrUpdateBlocklistItemsDefaultResponse,
  RemoveBlocklistItems204Response,
  RemoveBlocklistItemsDefaultResponse,
  GetTextBlocklistItem200Response,
  GetTextBlocklistItemDefaultResponse,
  ListTextBlocklistItems200Response,
  ListTextBlocklistItemsDefaultResponse,
  DetectGroundednessOptions200Response,
  DetectGroundednessOptionsDefaultResponse,
  CreateTextCustomCategoryVersion200Response,
  CreateTextCustomCategoryVersion201Response,
  CreateTextCustomCategoryVersionDefaultResponse,
  GetCustomizedCategory200Response,
  GetCustomizedCategoryDefaultResponse,
  DeleteCustomizedCategory204Response,
  DeleteCustomizedCategoryDefaultResponse,
  ListCustomizedCategory200Response,
  ListCustomizedCategoryDefaultResponse,
  Build202Response,
  BuildDefaultResponse,
  GetCustomCategoryOperation200Response,
  GetCustomCategoryOperationDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface AnalyzeText {
  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: AnalyzeTextParameters,
  ): StreamableMethod<AnalyzeText200Response | AnalyzeTextDefaultResponse>;
}

export interface DetectTextJailbreak {
  /** A synchronous API for the analysis of text jailbreak. */
  post(
    options: DetectTextJailbreakParameters,
  ): StreamableMethod<
    DetectTextJailbreak200Response | DetectTextJailbreakDefaultResponse
  >;
}

export interface DetectTextProtectedMaterial {
  /** A synchronous API for the analysis of protected material. */
  post(
    options: DetectTextProtectedMaterialParameters,
  ): StreamableMethod<
    | DetectTextProtectedMaterial200Response
    | DetectTextProtectedMaterialDefaultResponse
  >;
}

export interface DetectTextPromptInjectionOptions {
  /** A synchronous API for the analysis of text prompt injection attacks. */
  post(
    options: DetectTextPromptInjectionOptionsParameters,
  ): StreamableMethod<
    | DetectTextPromptInjectionOptions200Response
    | DetectTextPromptInjectionOptionsDefaultResponse
  >;
}

export interface AnalyzeTextCustomCategory {
  /** A synchronous API for the analysis of text on custom category. */
  post(
    options: AnalyzeTextCustomCategoryParameters,
  ): StreamableMethod<
    | AnalyzeTextCustomCategory200Response
    | AnalyzeTextCustomCategoryDefaultResponse
  >;
}

export interface AnalyzeImage {
  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: AnalyzeImageParameters,
  ): StreamableMethod<AnalyzeImage200Response | AnalyzeImageDefaultResponse>;
}

export interface GetTextBlocklist {
  /** Returns text blocklist details. */
  get(
    options?: GetTextBlocklistParameters,
  ): StreamableMethod<
    GetTextBlocklist200Response | GetTextBlocklistDefaultResponse
  >;
  /** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
  patch(
    options: CreateOrUpdateTextBlocklistParameters,
  ): StreamableMethod<
    | CreateOrUpdateTextBlocklist200Response
    | CreateOrUpdateTextBlocklist201Response
    | CreateOrUpdateTextBlocklistDefaultResponse
  >;
  /** Deletes a text blocklist. */
  delete(
    options?: DeleteTextBlocklistParameters,
  ): StreamableMethod<
    DeleteTextBlocklist204Response | DeleteTextBlocklistDefaultResponse
  >;
}

export interface ListTextBlocklists {
  /** Get all text blocklists details. */
  get(
    options?: ListTextBlocklistsParameters,
  ): StreamableMethod<
    ListTextBlocklists200Response | ListTextBlocklistsDefaultResponse
  >;
}

export interface AddOrUpdateBlocklistItems {
  /** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
  post(
    options: AddOrUpdateBlocklistItemsParameters,
  ): StreamableMethod<
    | AddOrUpdateBlocklistItems200Response
    | AddOrUpdateBlocklistItemsDefaultResponse
  >;
}

export interface RemoveBlocklistItems {
  /** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
  post(
    options: RemoveBlocklistItemsParameters,
  ): StreamableMethod<
    RemoveBlocklistItems204Response | RemoveBlocklistItemsDefaultResponse
  >;
}

export interface GetTextBlocklistItem {
  /** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
  get(
    options?: GetTextBlocklistItemParameters,
  ): StreamableMethod<
    GetTextBlocklistItem200Response | GetTextBlocklistItemDefaultResponse
  >;
}

export interface ListTextBlocklistItems {
  /** Get all blocklistItems in a text blocklist. */
  get(
    options?: ListTextBlocklistItemsParameters,
  ): StreamableMethod<
    ListTextBlocklistItems200Response | ListTextBlocklistItemsDefaultResponse
  >;
}

export interface DetectGroundednessOptions {
  /** A synchronous API for the analysis of language model outputs to determine alignment with user-provided information or identify fictional content. */
  post(
    options: DetectGroundednessOptionsParameters,
  ): StreamableMethod<
    | DetectGroundednessOptions200Response
    | DetectGroundednessOptionsDefaultResponse
  >;
}

export interface CreateTextCustomCategoryVersion {
  /** Create a new version of text custom category. */
  put(
    options: CreateTextCustomCategoryVersionParameters,
  ): StreamableMethod<
    | CreateTextCustomCategoryVersion200Response
    | CreateTextCustomCategoryVersion201Response
    | CreateTextCustomCategoryVersionDefaultResponse
  >;
  /** Get a custom category or a specific version of it. */
  get(
    options?: GetCustomizedCategoryParameters,
  ): StreamableMethod<
    GetCustomizedCategory200Response | GetCustomizedCategoryDefaultResponse
  >;
  /** Delete a custom category or a specific version of it. */
  delete(
    options?: DeleteCustomizedCategoryParameters,
  ): StreamableMethod<
    | DeleteCustomizedCategory204Response
    | DeleteCustomizedCategoryDefaultResponse
  >;
}

export interface ListCustomizedCategory {
  /** List categories of their latest versions. */
  get(
    options?: ListCustomizedCategoryParameters,
  ): StreamableMethod<
    ListCustomizedCategory200Response | ListCustomizedCategoryDefaultResponse
  >;
}

export interface Build {
  /** Trigger the category build process. */
  post(
    options: BuildParameters,
  ): StreamableMethod<Build202Response | BuildDefaultResponse>;
}

export interface GetCustomCategoryOperation {
  /** Get an custom category operation. */
  get(
    options?: GetCustomCategoryOperationParameters,
  ): StreamableMethod<
    | GetCustomCategoryOperation200Response
    | GetCustomCategoryOperationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/text:analyze' has methods for the following verbs: post */
  (path: "/text:analyze"): AnalyzeText;
  /** Resource for '/text:detectJailbreak' has methods for the following verbs: post */
  (path: "/text:detectJailbreak"): DetectTextJailbreak;
  /** Resource for '/text:detectProtectedMaterial' has methods for the following verbs: post */
  (path: "/text:detectProtectedMaterial"): DetectTextProtectedMaterial;
  /** Resource for '/text:shieldPrompt' has methods for the following verbs: post */
  (path: "/text:shieldPrompt"): DetectTextPromptInjectionOptions;
  /** Resource for '/text:analyzeCustomCategory' has methods for the following verbs: post */
  (path: "/text:analyzeCustomCategory"): AnalyzeTextCustomCategory;
  /** Resource for '/image:analyze' has methods for the following verbs: post */
  (path: "/image:analyze"): AnalyzeImage;
  /** Resource for '/text/blocklists/\{blocklistName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/blocklists/{blocklistName}",
    blocklistName: string,
  ): GetTextBlocklist;
  /** Resource for '/text/blocklists' has methods for the following verbs: get */
  (path: "/text/blocklists"): ListTextBlocklists;
  /** Resource for '/text/blocklists/\{blocklistName\}:addOrUpdateBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems",
    blocklistName: string,
  ): AddOrUpdateBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}:removeBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:removeBlocklistItems",
    blocklistName: string,
  ): RemoveBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems/\{blocklistItemId\}' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}",
    blocklistName: string,
    blocklistItemId: string,
  ): GetTextBlocklistItem;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems",
    blocklistName: string,
  ): ListTextBlocklistItems;
  /** Resource for '/text:detectGroundedness' has methods for the following verbs: post */
  (path: "/text:detectGroundedness"): DetectGroundednessOptions;
  /** Resource for '/text/categories/\{categoryName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/categories/{categoryName}",
    categoryName: string,
  ): CreateTextCustomCategoryVersion;
  /** Resource for '/text/categories' has methods for the following verbs: get */
  (path: "/text/categories"): ListCustomizedCategory;
  /** Resource for '/text/categories/\{categoryName\}:build' has methods for the following verbs: post */
  (path: "/text/categories/{categoryName}:build", categoryName: string): Build;
  /** Resource for '/text/categories/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/categories/operations/{operationId}",
    operationId: string,
  ): GetCustomCategoryOperation;
}

export type ContentSafetyClient = Client & {
  path: Routes;
};
