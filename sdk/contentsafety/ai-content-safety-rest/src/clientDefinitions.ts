// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  TextOperationsAnalyzeTextParameters,
  TextOperationsDetectTextJailbreakParameters,
  TextOperationsDetectTextProtectedMaterialParameters,
  TextOperationsDetectTextPromptInjectionOptionsParameters,
  TextOperationsAutoReviewParameters,
  TextOperationsDetectTextIncidentsParameters,
  TextOperationsAnalyzeTextCustomCategoryParameters,
  ImageOperationsAnalyzeImageParameters,
  ImageOperationsDetectImageIncidentsParameters,
  TextBlocklistsGetTextBlocklistParameters,
  TextBlocklistsCreateOrUpdateTextBlocklistParameters,
  TextBlocklistsDeleteTextBlocklistParameters,
  TextBlocklistsListTextBlocklistsParameters,
  TextBlocklistsAddOrUpdateBlocklistItemsParameters,
  TextBlocklistsRemoveBlocklistItemsParameters,
  TextBlocklistsGetTextBlocklistItemParameters,
  TextBlocklistsListTextBlocklistItemsParameters,
  TextGroundednessDetectionOperationsDetectGroundednessOptionsParameters,
  AutoReviewerOperationsCreateOrReplaceAutoReviewerParameters,
  AutoReviewerOperationsGetAutoReviewerParameters,
  AutoReviewerOperationsDeleteAutoReviewerParameters,
  AutoReviewerOperationsListAutoReviewersParameters,
  AutoReviewerOperationsGetAutoReviewerOperationParameters,
  TextIncidentsGetIncidentsParameters,
  TextIncidentsCreateOrUpdateIncidentParameters,
  TextIncidentsDeleteIncidentParameters,
  TextIncidentsListIncidentsParameters,
  TextIncidentsAddIncidentSamplesParameters,
  TextIncidentsRemoveIncidentSamplesParameters,
  TextIncidentsGetIncidentSampleParameters,
  TextIncidentsListIncidentSamplesParameters,
  ImageIncidentsGetIncidentsParameters,
  ImageIncidentsCreateOrUpdateIncidentParameters,
  ImageIncidentsDeleteIncidentParameters,
  ImageIncidentsListIncidentsParameters,
  ImageIncidentsAddIncidentSamplesParameters,
  ImageIncidentsRemoveIncidentSamplesParameters,
  ImageIncidentsGetIncidentSampleParameters,
  ImageIncidentsListIncidentSamplesParameters,
  TextIncidentOperationDeployParameters,
  TextIncidentOperationGetTextIncidentOperationParameters,
  ImageIncidentOperationDeployParameters,
  ImageIncidentOperationGetImageIncidentOperationParameters,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters,
  TextCustomizedCategoryOperationsGetCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsListCustomizedCategoryParameters,
  TextCustomizedCategoryOperationsBuildParameters,
  TextCustomizedCategoryOperationsGetCustomCategoryOperationParameters,
} from "./parameters.js";
import {
  TextOperationsAnalyzeText200Response,
  TextOperationsAnalyzeTextDefaultResponse,
  TextOperationsDetectTextJailbreak200Response,
  TextOperationsDetectTextJailbreakDefaultResponse,
  TextOperationsDetectTextProtectedMaterial200Response,
  TextOperationsDetectTextProtectedMaterialDefaultResponse,
  TextOperationsDetectTextPromptInjectionOptions200Response,
  TextOperationsDetectTextPromptInjectionOptionsDefaultResponse,
  TextOperationsAutoReview200Response,
  TextOperationsAutoReviewDefaultResponse,
  TextOperationsDetectTextIncidents200Response,
  TextOperationsDetectTextIncidentsDefaultResponse,
  TextOperationsAnalyzeTextCustomCategory200Response,
  TextOperationsAnalyzeTextCustomCategoryDefaultResponse,
  ImageOperationsAnalyzeImage200Response,
  ImageOperationsAnalyzeImageDefaultResponse,
  ImageOperationsDetectImageIncidents200Response,
  ImageOperationsDetectImageIncidentsDefaultResponse,
  TextBlocklistsGetTextBlocklist200Response,
  TextBlocklistsGetTextBlocklistDefaultResponse,
  TextBlocklistsCreateOrUpdateTextBlocklist200Response,
  TextBlocklistsCreateOrUpdateTextBlocklist201Response,
  TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse,
  TextBlocklistsDeleteTextBlocklist204Response,
  TextBlocklistsDeleteTextBlocklistDefaultResponse,
  TextBlocklistsListTextBlocklists200Response,
  TextBlocklistsListTextBlocklistsDefaultResponse,
  TextBlocklistsAddOrUpdateBlocklistItems200Response,
  TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse,
  TextBlocklistsRemoveBlocklistItems204Response,
  TextBlocklistsRemoveBlocklistItemsDefaultResponse,
  TextBlocklistsGetTextBlocklistItem200Response,
  TextBlocklistsGetTextBlocklistItemDefaultResponse,
  TextBlocklistsListTextBlocklistItems200Response,
  TextBlocklistsListTextBlocklistItemsDefaultResponse,
  TextGroundednessDetectionOperationsDetectGroundednessOptions200Response,
  TextGroundednessDetectionOperationsDetectGroundednessOptionsDefaultResponse,
  AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response,
  AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response,
  AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse,
  AutoReviewerOperationsGetAutoReviewer200Response,
  AutoReviewerOperationsGetAutoReviewerDefaultResponse,
  AutoReviewerOperationsDeleteAutoReviewer204Response,
  AutoReviewerOperationsDeleteAutoReviewerDefaultResponse,
  AutoReviewerOperationsListAutoReviewers200Response,
  AutoReviewerOperationsListAutoReviewersDefaultResponse,
  AutoReviewerOperationsGetAutoReviewerOperation200Response,
  AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse,
  TextIncidentsGetIncidents200Response,
  TextIncidentsGetIncidentsDefaultResponse,
  TextIncidentsCreateOrUpdateIncident200Response,
  TextIncidentsCreateOrUpdateIncident201Response,
  TextIncidentsCreateOrUpdateIncidentDefaultResponse,
  TextIncidentsDeleteIncident204Response,
  TextIncidentsDeleteIncidentDefaultResponse,
  TextIncidentsListIncidents200Response,
  TextIncidentsListIncidentsDefaultResponse,
  TextIncidentsAddIncidentSamples200Response,
  TextIncidentsAddIncidentSamplesDefaultResponse,
  TextIncidentsRemoveIncidentSamples204Response,
  TextIncidentsRemoveIncidentSamplesDefaultResponse,
  TextIncidentsGetIncidentSample200Response,
  TextIncidentsGetIncidentSampleDefaultResponse,
  TextIncidentsListIncidentSamples200Response,
  TextIncidentsListIncidentSamplesDefaultResponse,
  ImageIncidentsGetIncidents200Response,
  ImageIncidentsGetIncidentsDefaultResponse,
  ImageIncidentsCreateOrUpdateIncident200Response,
  ImageIncidentsCreateOrUpdateIncident201Response,
  ImageIncidentsCreateOrUpdateIncidentDefaultResponse,
  ImageIncidentsDeleteIncident204Response,
  ImageIncidentsDeleteIncidentDefaultResponse,
  ImageIncidentsListIncidents200Response,
  ImageIncidentsListIncidentsDefaultResponse,
  ImageIncidentsAddIncidentSamples200Response,
  ImageIncidentsAddIncidentSamplesDefaultResponse,
  ImageIncidentsRemoveIncidentSamples204Response,
  ImageIncidentsRemoveIncidentSamplesDefaultResponse,
  ImageIncidentsGetIncidentSample200Response,
  ImageIncidentsGetIncidentSampleDefaultResponse,
  ImageIncidentsListIncidentSamples200Response,
  ImageIncidentsListIncidentSamplesDefaultResponse,
  TextIncidentOperationDeploy202Response,
  TextIncidentOperationDeployDefaultResponse,
  TextIncidentOperationGetTextIncidentOperation200Response,
  TextIncidentOperationGetTextIncidentOperationDefaultResponse,
  ImageIncidentOperationDeploy202Response,
  ImageIncidentOperationDeployDefaultResponse,
  ImageIncidentOperationGetImageIncidentOperation200Response,
  ImageIncidentOperationGetImageIncidentOperationDefaultResponse,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response,
  TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse,
  TextCustomizedCategoryOperationsGetCustomizedCategory200Response,
  TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response,
  TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsListCustomizedCategory200Response,
  TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse,
  TextCustomizedCategoryOperationsBuild202Response,
  TextCustomizedCategoryOperationsBuildDefaultResponse,
  TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response,
  TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface TextOperationsAnalyzeText {
  /** A synchronous API for the analysis of potentially harmful text content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: TextOperationsAnalyzeTextParameters,
  ): StreamableMethod<
    | TextOperationsAnalyzeText200Response
    | TextOperationsAnalyzeTextDefaultResponse
  >;
}

export interface TextOperationsDetectTextJailbreak {
  /** A synchronous API for the analysis of text jailbreak. */
  post(
    options: TextOperationsDetectTextJailbreakParameters,
  ): StreamableMethod<
    | TextOperationsDetectTextJailbreak200Response
    | TextOperationsDetectTextJailbreakDefaultResponse
  >;
}

export interface TextOperationsDetectTextProtectedMaterial {
  /** A synchronous API for the analysis of protected material. */
  post(
    options: TextOperationsDetectTextProtectedMaterialParameters,
  ): StreamableMethod<
    | TextOperationsDetectTextProtectedMaterial200Response
    | TextOperationsDetectTextProtectedMaterialDefaultResponse
  >;
}

export interface TextOperationsDetectTextPromptInjectionOptions {
  /** A synchronous API for the analysis of text prompt injection attacks. */
  post(
    options: TextOperationsDetectTextPromptInjectionOptionsParameters,
  ): StreamableMethod<
    | TextOperationsDetectTextPromptInjectionOptions200Response
    | TextOperationsDetectTextPromptInjectionOptionsDefaultResponse
  >;
}

export interface TextOperationsAutoReview {
  /** A synchronous API for the automatic review of harmful content */
  post(
    options: TextOperationsAutoReviewParameters,
  ): StreamableMethod<
    | TextOperationsAutoReview200Response
    | TextOperationsAutoReviewDefaultResponse
  >;
}

export interface TextOperationsDetectTextIncidents {
  /** A synchronous API for the analysis of text detect incidents. */
  post(
    options: TextOperationsDetectTextIncidentsParameters,
  ): StreamableMethod<
    | TextOperationsDetectTextIncidents200Response
    | TextOperationsDetectTextIncidentsDefaultResponse
  >;
}

export interface TextOperationsAnalyzeTextCustomCategory {
  /** A synchronous API for the analysis of text on custom category. */
  post(
    options: TextOperationsAnalyzeTextCustomCategoryParameters,
  ): StreamableMethod<
    | TextOperationsAnalyzeTextCustomCategory200Response
    | TextOperationsAnalyzeTextCustomCategoryDefaultResponse
  >;
}

export interface ImageOperationsAnalyzeImage {
  /** A synchronous API for the analysis of potentially harmful image content. Currently, it supports four categories: Hate, SelfHarm, Sexual, and Violence. */
  post(
    options: ImageOperationsAnalyzeImageParameters,
  ): StreamableMethod<
    | ImageOperationsAnalyzeImage200Response
    | ImageOperationsAnalyzeImageDefaultResponse
  >;
}

export interface ImageOperationsDetectImageIncidents {
  /** A synchronous API for the analysis of image detect incidents. */
  post(
    options: ImageOperationsDetectImageIncidentsParameters,
  ): StreamableMethod<
    | ImageOperationsDetectImageIncidents200Response
    | ImageOperationsDetectImageIncidentsDefaultResponse
  >;
}

export interface TextBlocklistsGetTextBlocklist {
  /** Returns text blocklist details. */
  get(
    options?: TextBlocklistsGetTextBlocklistParameters,
  ): StreamableMethod<
    | TextBlocklistsGetTextBlocklist200Response
    | TextBlocklistsGetTextBlocklistDefaultResponse
  >;
  /** Updates a text blocklist. If the blocklistName does not exist, a new blocklist will be created. */
  patch(
    options: TextBlocklistsCreateOrUpdateTextBlocklistParameters,
  ): StreamableMethod<
    | TextBlocklistsCreateOrUpdateTextBlocklist200Response
    | TextBlocklistsCreateOrUpdateTextBlocklist201Response
    | TextBlocklistsCreateOrUpdateTextBlocklistDefaultResponse
  >;
  /** Deletes a text blocklist. */
  delete(
    options?: TextBlocklistsDeleteTextBlocklistParameters,
  ): StreamableMethod<
    | TextBlocklistsDeleteTextBlocklist204Response
    | TextBlocklistsDeleteTextBlocklistDefaultResponse
  >;
}

export interface TextBlocklistsListTextBlocklists {
  /** Get all text blocklists details. */
  get(
    options?: TextBlocklistsListTextBlocklistsParameters,
  ): StreamableMethod<
    | TextBlocklistsListTextBlocklists200Response
    | TextBlocklistsListTextBlocklistsDefaultResponse
  >;
}

export interface TextBlocklistsAddOrUpdateBlocklistItems {
  /** Add or update blocklistItems to a text blocklist. You can add or update at most 100 blocklistItems in one request. */
  post(
    options: TextBlocklistsAddOrUpdateBlocklistItemsParameters,
  ): StreamableMethod<
    | TextBlocklistsAddOrUpdateBlocklistItems200Response
    | TextBlocklistsAddOrUpdateBlocklistItemsDefaultResponse
  >;
}

export interface TextBlocklistsRemoveBlocklistItems {
  /** Remove blocklistItems from a text blocklist. You can remove at most 100 BlocklistItems in one request. */
  post(
    options: TextBlocklistsRemoveBlocklistItemsParameters,
  ): StreamableMethod<
    | TextBlocklistsRemoveBlocklistItems204Response
    | TextBlocklistsRemoveBlocklistItemsDefaultResponse
  >;
}

export interface TextBlocklistsGetTextBlocklistItem {
  /** Get blocklistItem by blocklistName and blocklistItemId from a text blocklist. */
  get(
    options?: TextBlocklistsGetTextBlocklistItemParameters,
  ): StreamableMethod<
    | TextBlocklistsGetTextBlocklistItem200Response
    | TextBlocklistsGetTextBlocklistItemDefaultResponse
  >;
}

export interface TextBlocklistsListTextBlocklistItems {
  /** Get all blocklistItems in a text blocklist. */
  get(
    options?: TextBlocklistsListTextBlocklistItemsParameters,
  ): StreamableMethod<
    | TextBlocklistsListTextBlocklistItems200Response
    | TextBlocklistsListTextBlocklistItemsDefaultResponse
  >;
}

export interface TextGroundednessDetectionOperationsDetectGroundednessOptions {
  /** A synchronous API for the analysis of language model outputs to determine alignment with user-provided information or identify fictional content. */
  post(
    options: TextGroundednessDetectionOperationsDetectGroundednessOptionsParameters,
  ): StreamableMethod<
    | TextGroundednessDetectionOperationsDetectGroundednessOptions200Response
    | TextGroundednessDetectionOperationsDetectGroundednessOptionsDefaultResponse
  >;
}

export interface AutoReviewerOperationsCreateOrReplaceAutoReviewer {
  /** Create new auto reviewer or a new version of existing auto reviewer. */
  put(
    options: AutoReviewerOperationsCreateOrReplaceAutoReviewerParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer200Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewer201Response
    | AutoReviewerOperationsCreateOrReplaceAutoReviewerDefaultResponse
  >;
  /** Get a auto reviewer or a specific version of it. */
  get(
    options?: AutoReviewerOperationsGetAutoReviewerParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsGetAutoReviewer200Response
    | AutoReviewerOperationsGetAutoReviewerDefaultResponse
  >;
  /** Delete an auto reviewer or a specific version of it. */
  delete(
    options?: AutoReviewerOperationsDeleteAutoReviewerParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsDeleteAutoReviewer204Response
    | AutoReviewerOperationsDeleteAutoReviewerDefaultResponse
  >;
}

export interface AutoReviewerOperationsListAutoReviewers {
  /** List latest versions of auto reviewers. */
  get(
    options?: AutoReviewerOperationsListAutoReviewersParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsListAutoReviewers200Response
    | AutoReviewerOperationsListAutoReviewersDefaultResponse
  >;
}

export interface AutoReviewerOperationsGetAutoReviewerOperation {
  /** Get an auto reviewer operation. */
  get(
    options?: AutoReviewerOperationsGetAutoReviewerOperationParameters,
  ): StreamableMethod<
    | AutoReviewerOperationsGetAutoReviewerOperation200Response
    | AutoReviewerOperationsGetAutoReviewerOperationDefaultResponse
  >;
}

export interface TextIncidentsGetIncidents {
  /** Returns text incident details. */
  get(
    options?: TextIncidentsGetIncidentsParameters,
  ): StreamableMethod<
    | TextIncidentsGetIncidents200Response
    | TextIncidentsGetIncidentsDefaultResponse
  >;
  /** Updates a text incident. If the text incident does not exist, a new text incident will be created. */
  patch(
    options: TextIncidentsCreateOrUpdateIncidentParameters,
  ): StreamableMethod<
    | TextIncidentsCreateOrUpdateIncident200Response
    | TextIncidentsCreateOrUpdateIncident201Response
    | TextIncidentsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes a text incident. */
  delete(
    options?: TextIncidentsDeleteIncidentParameters,
  ): StreamableMethod<
    | TextIncidentsDeleteIncident204Response
    | TextIncidentsDeleteIncidentDefaultResponse
  >;
}

export interface TextIncidentsListIncidents {
  /** Get all incidents details. */
  get(
    options?: TextIncidentsListIncidentsParameters,
  ): StreamableMethod<
    | TextIncidentsListIncidents200Response
    | TextIncidentsListIncidentsDefaultResponse
  >;
}

export interface TextIncidentsAddIncidentSamples {
  /** Add textIncidentSamples to an incident. You can add at most 100 textIncidentSamples in one request. */
  post(
    options?: TextIncidentsAddIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentsAddIncidentSamples200Response
    | TextIncidentsAddIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentsRemoveIncidentSamples {
  /** Remove textIncidentSamples from an incident. You can remove at most 100 Text Incident in one request. */
  post(
    options?: TextIncidentsRemoveIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentsRemoveIncidentSamples204Response
    | TextIncidentsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentsGetIncidentSample {
  /** Get textIncidentSample by textIncidentName and textIncidentSampleId from a text incident. */
  get(
    options?: TextIncidentsGetIncidentSampleParameters,
  ): StreamableMethod<
    | TextIncidentsGetIncidentSample200Response
    | TextIncidentsGetIncidentSampleDefaultResponse
  >;
}

export interface TextIncidentsListIncidentSamples {
  /** Get all TextIncidentSamples in a text incident. */
  get(
    options?: TextIncidentsListIncidentSamplesParameters,
  ): StreamableMethod<
    | TextIncidentsListIncidentSamples200Response
    | TextIncidentsListIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsGetIncidents {
  /** Returns image incident details. */
  get(
    options?: ImageIncidentsGetIncidentsParameters,
  ): StreamableMethod<
    | ImageIncidentsGetIncidents200Response
    | ImageIncidentsGetIncidentsDefaultResponse
  >;
  /** Updates a image incident. If the image incident does not exist, a new image incident will be created. */
  patch(
    options: ImageIncidentsCreateOrUpdateIncidentParameters,
  ): StreamableMethod<
    | ImageIncidentsCreateOrUpdateIncident200Response
    | ImageIncidentsCreateOrUpdateIncident201Response
    | ImageIncidentsCreateOrUpdateIncidentDefaultResponse
  >;
  /** Deletes a image incident. */
  delete(
    options?: ImageIncidentsDeleteIncidentParameters,
  ): StreamableMethod<
    | ImageIncidentsDeleteIncident204Response
    | ImageIncidentsDeleteIncidentDefaultResponse
  >;
}

export interface ImageIncidentsListIncidents {
  /** Get all incidents details. */
  get(
    options?: ImageIncidentsListIncidentsParameters,
  ): StreamableMethod<
    | ImageIncidentsListIncidents200Response
    | ImageIncidentsListIncidentsDefaultResponse
  >;
}

export interface ImageIncidentsAddIncidentSamples {
  /** Add imageIncidentSamples to an incident. You can add at most 100 imageIncidentSamples in one request. */
  post(
    options?: ImageIncidentsAddIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentsAddIncidentSamples200Response
    | ImageIncidentsAddIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsRemoveIncidentSamples {
  /** Remove imageIncidentSamples from an incident. You can remove at most 100 Image Incident in one request. */
  post(
    options?: ImageIncidentsRemoveIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentsRemoveIncidentSamples204Response
    | ImageIncidentsRemoveIncidentSamplesDefaultResponse
  >;
}

export interface ImageIncidentsGetIncidentSample {
  /** Get imageIncidentSample by imageIncidentName and imageIncidentSampleId from a image incident. */
  get(
    options?: ImageIncidentsGetIncidentSampleParameters,
  ): StreamableMethod<
    | ImageIncidentsGetIncidentSample200Response
    | ImageIncidentsGetIncidentSampleDefaultResponse
  >;
}

export interface ImageIncidentsListIncidentSamples {
  /** Get all ImageIncidentSamples in a image incident. */
  get(
    options?: ImageIncidentsListIncidentSamplesParameters,
  ): StreamableMethod<
    | ImageIncidentsListIncidentSamples200Response
    | ImageIncidentsListIncidentSamplesDefaultResponse
  >;
}

export interface TextIncidentOperationDeploy {
  /** Deploy text incident operation. */
  post(
    options?: TextIncidentOperationDeployParameters,
  ): StreamableMethod<
    | TextIncidentOperationDeploy202Response
    | TextIncidentOperationDeployDefaultResponse
  >;
}

export interface TextIncidentOperationGetTextIncidentOperation {
  /** Get a text incident operation. */
  get(
    options?: TextIncidentOperationGetTextIncidentOperationParameters,
  ): StreamableMethod<
    | TextIncidentOperationGetTextIncidentOperation200Response
    | TextIncidentOperationGetTextIncidentOperationDefaultResponse
  >;
}

export interface ImageIncidentOperationDeploy {
  /** Deploy image incident operation. */
  post(
    options?: ImageIncidentOperationDeployParameters,
  ): StreamableMethod<
    | ImageIncidentOperationDeploy202Response
    | ImageIncidentOperationDeployDefaultResponse
  >;
}

export interface ImageIncidentOperationGetImageIncidentOperation {
  /** Get a image incident operation. */
  get(
    options?: ImageIncidentOperationGetImageIncidentOperationParameters,
  ): StreamableMethod<
    | ImageIncidentOperationGetImageIncidentOperation200Response
    | ImageIncidentOperationGetImageIncidentOperationDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion {
  /** Create new category version. */
  put(
    options: TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion200Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion201Response
    | TextCustomizedCategoryOperationsCreateTextCustomCategoryVersionDefaultResponse
  >;
  /** Get a custom category or a specific version of it. */
  get(
    options?: TextCustomizedCategoryOperationsGetCustomizedCategoryParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsGetCustomizedCategory200Response
    | TextCustomizedCategoryOperationsGetCustomizedCategoryDefaultResponse
  >;
  /** Delete a custom category or a specific version of it. */
  delete(
    options?: TextCustomizedCategoryOperationsDeleteCustomizedCategoryParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsDeleteCustomizedCategory204Response
    | TextCustomizedCategoryOperationsDeleteCustomizedCategoryDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsListCustomizedCategory {
  /** List categories of their latest versions. */
  get(
    options?: TextCustomizedCategoryOperationsListCustomizedCategoryParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsListCustomizedCategory200Response
    | TextCustomizedCategoryOperationsListCustomizedCategoryDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsBuild {
  /** Trigger the category build process. */
  post(
    options: TextCustomizedCategoryOperationsBuildParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsBuild202Response
    | TextCustomizedCategoryOperationsBuildDefaultResponse
  >;
}

export interface TextCustomizedCategoryOperationsGetCustomCategoryOperation {
  /** Get an custom category operation. */
  get(
    options?: TextCustomizedCategoryOperationsGetCustomCategoryOperationParameters,
  ): StreamableMethod<
    | TextCustomizedCategoryOperationsGetCustomCategoryOperation200Response
    | TextCustomizedCategoryOperationsGetCustomCategoryOperationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/text:analyze' has methods for the following verbs: post */
  (path: "/text:analyze"): TextOperationsAnalyzeText;
  /** Resource for '/text:detectJailbreak' has methods for the following verbs: post */
  (path: "/text:detectJailbreak"): TextOperationsDetectTextJailbreak;
  /** Resource for '/text:detectProtectedMaterial' has methods for the following verbs: post */
  (
    path: "/text:detectProtectedMaterial",
  ): TextOperationsDetectTextProtectedMaterial;
  /** Resource for '/text:shieldPrompt' has methods for the following verbs: post */
  (path: "/text:shieldPrompt"): TextOperationsDetectTextPromptInjectionOptions;
  /** Resource for '/text:autoReview' has methods for the following verbs: post */
  (path: "/text:autoReview"): TextOperationsAutoReview;
  /** Resource for '/text:detectIncidents' has methods for the following verbs: post */
  (path: "/text:detectIncidents"): TextOperationsDetectTextIncidents;
  /** Resource for '/text:analyzeCustomCategory' has methods for the following verbs: post */
  (
    path: "/text:analyzeCustomCategory",
  ): TextOperationsAnalyzeTextCustomCategory;
  /** Resource for '/image:analyze' has methods for the following verbs: post */
  (path: "/image:analyze"): ImageOperationsAnalyzeImage;
  /** Resource for '/image:detectIncidents' has methods for the following verbs: post */
  (path: "/image:detectIncidents"): ImageOperationsDetectImageIncidents;
  /** Resource for '/text/blocklists/\{blocklistName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/blocklists/{blocklistName}",
    blocklistName: string,
  ): TextBlocklistsGetTextBlocklist;
  /** Resource for '/text/blocklists' has methods for the following verbs: get */
  (path: "/text/blocklists"): TextBlocklistsListTextBlocklists;
  /** Resource for '/text/blocklists/\{blocklistName\}:addOrUpdateBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:addOrUpdateBlocklistItems",
    blocklistName: string,
  ): TextBlocklistsAddOrUpdateBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}:removeBlocklistItems' has methods for the following verbs: post */
  (
    path: "/text/blocklists/{blocklistName}:removeBlocklistItems",
    blocklistName: string,
  ): TextBlocklistsRemoveBlocklistItems;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems/\{blocklistItemId\}' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems/{blocklistItemId}",
    blocklistName: string,
    blocklistItemId: string,
  ): TextBlocklistsGetTextBlocklistItem;
  /** Resource for '/text/blocklists/\{blocklistName\}/blocklistItems' has methods for the following verbs: get */
  (
    path: "/text/blocklists/{blocklistName}/blocklistItems",
    blocklistName: string,
  ): TextBlocklistsListTextBlocklistItems;
  /** Resource for '/text:detectGroundedness' has methods for the following verbs: post */
  (
    path: "/text:detectGroundedness",
  ): TextGroundednessDetectionOperationsDetectGroundednessOptions;
  /** Resource for '/text/autoReviewers/\{autoReviewerName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/autoReviewers/{autoReviewerName}",
    autoReviewerName: string,
  ): AutoReviewerOperationsCreateOrReplaceAutoReviewer;
  /** Resource for '/text/autoReviewers' has methods for the following verbs: get */
  (path: "/text/autoReviewers"): AutoReviewerOperationsListAutoReviewers;
  /** Resource for '/text/autoReviewers/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/autoReviewers/operations/{operationId}",
    operationId: string,
  ): AutoReviewerOperationsGetAutoReviewerOperation;
  /** Resource for '/text/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/text/incidents/{incidentName}",
    incidentName: string,
  ): TextIncidentsGetIncidents;
  /** Resource for '/text/incidents' has methods for the following verbs: get */
  (path: "/text/incidents"): TextIncidentsListIncidents;
  /** Resource for '/text/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:addIncidentSamples",
    incidentName: string,
  ): TextIncidentsAddIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string,
  ): TextIncidentsRemoveIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string,
  ): TextIncidentsGetIncidentSample;
  /** Resource for '/text/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/text/incidents/{incidentName}/incidentSamples",
    incidentName: string,
  ): TextIncidentsListIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/image/incidents/{incidentName}",
    incidentName: string,
  ): ImageIncidentsGetIncidents;
  /** Resource for '/image/incidents' has methods for the following verbs: get */
  (path: "/image/incidents"): ImageIncidentsListIncidents;
  /** Resource for '/image/incidents/\{incidentName\}:addIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:addIncidentSamples",
    incidentName: string,
  ): ImageIncidentsAddIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}:removeIncidentSamples' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:removeIncidentSamples",
    incidentName: string,
  ): ImageIncidentsRemoveIncidentSamples;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples/\{incidentSampleId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples/{incidentSampleId}",
    incidentName: string,
    incidentSampleId: string,
  ): ImageIncidentsGetIncidentSample;
  /** Resource for '/image/incidents/\{incidentName\}/incidentSamples' has methods for the following verbs: get */
  (
    path: "/image/incidents/{incidentName}/incidentSamples",
    incidentName: string,
  ): ImageIncidentsListIncidentSamples;
  /** Resource for '/text/incidents/\{incidentName\}:deploy' has methods for the following verbs: post */
  (
    path: "/text/incidents/{incidentName}:deploy",
    incidentName: string,
  ): TextIncidentOperationDeploy;
  /** Resource for '/text/incidents/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/incidents/operations/{operationId}",
    operationId: string,
  ): TextIncidentOperationGetTextIncidentOperation;
  /** Resource for '/image/incidents/\{incidentName\}:deploy' has methods for the following verbs: post */
  (
    path: "/image/incidents/{incidentName}:deploy",
    incidentName: string,
  ): ImageIncidentOperationDeploy;
  /** Resource for '/image/incidents/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/image/incidents/operations/{operationId}",
    operationId: string,
  ): ImageIncidentOperationGetImageIncidentOperation;
  /** Resource for '/text/categories/\{categoryName\}' has methods for the following verbs: put, get, delete */
  (
    path: "/text/categories/{categoryName}",
    categoryName: string,
  ): TextCustomizedCategoryOperationsCreateTextCustomCategoryVersion;
  /** Resource for '/text/categories' has methods for the following verbs: get */
  (
    path: "/text/categories",
  ): TextCustomizedCategoryOperationsListCustomizedCategory;
  /** Resource for '/text/categories/\{categoryName\}:build' has methods for the following verbs: post */
  (
    path: "/text/categories/{categoryName}:build",
    categoryName: string,
  ): TextCustomizedCategoryOperationsBuild;
  /** Resource for '/text/categories/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/text/categories/operations/{operationId}",
    operationId: string,
  ): TextCustomizedCategoryOperationsGetCustomCategoryOperation;
}

export type ContentSafetyClient = Client & {
  path: Routes;
};
