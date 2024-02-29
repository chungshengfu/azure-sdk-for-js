// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  FaceDetectionResultOutput,
  FindSimilarResultOutput,
  VerifyResultOutput,
  GroupResultOutput,
  FaceListOutput,
  AddFaceResultOutput,
  LargeFaceListOutput,
  TrainingStatusOutput,
  LargeFaceListFaceOutput,
  AsyncOperationStatusOutput,
  CreatePersonResultOutput,
  PersonDirectoryPersonOutput,
  ListGroupReferenceResultOutput,
  PersonDirectoryFaceOutput,
  ListFaceResultOutput,
  IdentifyResultOutput,
  DynamicPersonGroupOutput,
  ListPersonResultOutput,
  PersonGroupOutput,
  PersonGroupPersonOutput,
  PersonGroupPersonFaceOutput,
  LargePersonGroupOutput,
  LargePersonGroupPersonOutput,
  LargePersonGroupPersonFaceOutput,
  LivenessSessionItemOutput,
  LivenessSessionOutput,
  LivenessSessionAuditEntryOutput,
  LivenessSessionCreationResultOutput,
  LivenessWithVerifySessionOutput,
  LivenessWithVerifySessionAuditEntryOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface DetectFromUrl200Response extends HttpResponse {
  status: "200";
  body: Array<FaceDetectionResultOutput>;
}

export interface DetectFromUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DetectFromUrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DetectFromUrlDefaultHeaders;
}

/** The request has succeeded. */
export interface DetectFromStream200Response extends HttpResponse {
  status: "200";
  body: Array<FaceDetectionResultOutput>;
}

export interface DetectFromStreamDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DetectFromStreamDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DetectFromStreamDefaultHeaders;
}

/** The request has succeeded. */
export interface FindSimilar200Response extends HttpResponse {
  status: "200";
  body: Array<FindSimilarResultOutput>;
}

export interface FindSimilarDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FindSimilarDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FindSimilarDefaultHeaders;
}

/** The request has succeeded. */
export interface Verify200Response extends HttpResponse {
  status: "200";
  body: VerifyResultOutput;
}

export interface VerifyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface VerifyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & VerifyDefaultHeaders;
}

/** The request has succeeded. */
export interface Group200Response extends HttpResponse {
  status: "200";
  body: GroupResultOutput;
}

export interface GroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GroupDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsCreateList200Response extends HttpResponse {
  status: "200";
}

export interface FaceListsCreateListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsCreateListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsCreateListDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsDeleteList200Response extends HttpResponse {
  status: "200";
}

export interface FaceListsDeleteListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsDeleteListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsDeleteListDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsGetList200Response extends HttpResponse {
  status: "200";
  body: FaceListOutput;
}

export interface FaceListsGetListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsGetListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsGetListDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsUpdateList200Response extends HttpResponse {
  status: "200";
}

export interface FaceListsUpdateListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsUpdateListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsUpdateListDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsAddFaceFromUrl200Response extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface FaceListsAddFaceFromUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsAddFaceFromUrlDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsAddFaceFromUrlDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsAddFaceFromStream200Response extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface FaceListsAddFaceFromStreamDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsAddFaceFromStreamDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsAddFaceFromStreamDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsDeleteFace200Response extends HttpResponse {
  status: "200";
}

export interface FaceListsDeleteFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsDeleteFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsDeleteFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsListList200Response extends HttpResponse {
  status: "200";
  body: Array<FaceListOutput>;
}

export interface FaceListsListListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsListListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsListListDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceListsFindSimilarFromFaceList200Response
  extends HttpResponse {
  status: "200";
  body: Array<FindSimilarResultOutput>;
}

export interface FaceListsFindSimilarFromFaceListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceListsFindSimilarFromFaceListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceListsFindSimilarFromFaceListDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsCreateList200Response extends HttpResponse {
  status: "200";
}

export interface LargeFaceListsCreateListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsCreateListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsCreateListDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsDeleteList200Response extends HttpResponse {
  status: "200";
}

export interface LargeFaceListsDeleteListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsDeleteListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsDeleteListDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsGetList200Response extends HttpResponse {
  status: "200";
  body: LargeFaceListOutput;
}

export interface LargeFaceListsGetListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsGetListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsGetListDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsUpdateList200Response extends HttpResponse {
  status: "200";
}

export interface LargeFaceListsUpdateListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsUpdateListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsUpdateListDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsAddFaceFromUrl200Response extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface LargeFaceListsAddFaceFromUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsAddFaceFromUrlDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsAddFaceFromUrlDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsAddFaceFromStream200Response
  extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface LargeFaceListsAddFaceFromStreamDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsAddFaceFromStreamDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsAddFaceFromStreamDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsDeleteFace200Response extends HttpResponse {
  status: "200";
}

export interface LargeFaceListsDeleteFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsDeleteFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsDeleteFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsListList200Response extends HttpResponse {
  status: "200";
  body: Array<LargeFaceListOutput>;
}

export interface LargeFaceListsListListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsListListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsListListDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface LargeFaceListsTrainList202Response extends HttpResponse {
  status: "202";
}

export interface LargeFaceListsTrainListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsTrainListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsTrainListDefaultHeaders;
}

/** The final response for long-running trainList operation */
export interface LargeFaceListsTrainListLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface LargeFaceListsGetTrainingStatus200Response
  extends HttpResponse {
  status: "200";
  body: TrainingStatusOutput;
}

export interface LargeFaceListsGetTrainingStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsGetTrainingStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsGetTrainingStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsGetFace200Response extends HttpResponse {
  status: "200";
  body: LargeFaceListFaceOutput;
}

export interface LargeFaceListsGetFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsGetFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsGetFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsUpdateFace200Response extends HttpResponse {
  status: "200";
}

export interface LargeFaceListsUpdateFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsUpdateFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsUpdateFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsListFace200Response extends HttpResponse {
  status: "200";
  body: Array<LargeFaceListFaceOutput>;
}

export interface LargeFaceListsListFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsListFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargeFaceListsListFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargeFaceListsFindSimilarFromLargeFaceList200Response
  extends HttpResponse {
  status: "200";
  body: Array<FindSimilarResultOutput>;
}

export interface LargeFaceListsFindSimilarFromLargeFaceListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargeFaceListsFindSimilarFromLargeFaceListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LargeFaceListsFindSimilarFromLargeFaceListDefaultHeaders;
}

/** The request has succeeded. */
export interface FaceAsyncOperationsGetStatus200Response extends HttpResponse {
  status: "200";
  body: AsyncOperationStatusOutput;
}

export interface FaceAsyncOperationsGetStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FaceAsyncOperationsGetStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FaceAsyncOperationsGetStatusDefaultHeaders;
}

export interface PersonDirectoryPersonsCreatePerson202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryPersonsCreatePerson202Response
  extends HttpResponse {
  status: "202";
  body: CreatePersonResultOutput;
  headers: RawHttpHeaders & PersonDirectoryPersonsCreatePerson202Headers;
}

export interface PersonDirectoryPersonsCreatePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsCreatePersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsCreatePersonDefaultHeaders;
}

/** The final response for long-running createPerson operation */
export interface PersonDirectoryPersonsCreatePersonLogicalResponse
  extends HttpResponse {
  status: "200";
  body: CreatePersonResultOutput;
}

export interface PersonDirectoryPersonsDeletePerson202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryPersonsDeletePerson202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & PersonDirectoryPersonsDeletePerson202Headers;
}

export interface PersonDirectoryPersonsDeletePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsDeletePersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsDeletePersonDefaultHeaders;
}

/** The final response for long-running deletePerson operation */
export interface PersonDirectoryPersonsDeletePersonLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsGetPerson200Response
  extends HttpResponse {
  status: "200";
  body: PersonDirectoryPersonOutput;
}

export interface PersonDirectoryPersonsGetPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsGetPersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsGetPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsUpdatePerson200Response
  extends HttpResponse {
  status: "200";
}

export interface PersonDirectoryPersonsUpdatePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsUpdatePersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsUpdatePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsListPerson200Response
  extends HttpResponse {
  status: "200";
  body: Array<PersonDirectoryPersonOutput>;
}

export interface PersonDirectoryPersonsListPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsListPersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsListPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsListGroupReference200Response
  extends HttpResponse {
  status: "200";
  body: ListGroupReferenceResultOutput;
}

export interface PersonDirectoryPersonsListGroupReferenceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsListGroupReferenceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryPersonsListGroupReferenceDefaultHeaders;
}

export interface PersonDirectoryPersonsAddFaceFromUrl202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryPersonsAddFaceFromUrl202Response
  extends HttpResponse {
  status: "202";
  body: AddFaceResultOutput;
  headers: RawHttpHeaders & PersonDirectoryPersonsAddFaceFromUrl202Headers;
}

export interface PersonDirectoryPersonsAddFaceFromUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsAddFaceFromUrlDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsAddFaceFromUrlDefaultHeaders;
}

/** The final response for long-running addFaceFromUrl operation */
export interface PersonDirectoryPersonsAddFaceFromUrlLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface PersonDirectoryPersonsAddFaceFromStream202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryPersonsAddFaceFromStream202Response
  extends HttpResponse {
  status: "202";
  body: AddFaceResultOutput;
  headers: RawHttpHeaders & PersonDirectoryPersonsAddFaceFromStream202Headers;
}

export interface PersonDirectoryPersonsAddFaceFromStreamDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsAddFaceFromStreamDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryPersonsAddFaceFromStreamDefaultHeaders;
}

/** The final response for long-running addFaceFromStream operation */
export interface PersonDirectoryPersonsAddFaceFromStreamLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface PersonDirectoryPersonsDeleteFace202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryPersonsDeleteFace202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & PersonDirectoryPersonsDeleteFace202Headers;
}

export interface PersonDirectoryPersonsDeleteFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsDeleteFaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsDeleteFaceDefaultHeaders;
}

/** The final response for long-running deleteFace operation */
export interface PersonDirectoryPersonsDeleteFaceLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsGetFace200Response extends HttpResponse {
  status: "200";
  body: PersonDirectoryFaceOutput;
}

export interface PersonDirectoryPersonsGetFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsGetFaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsGetFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsUpdateFace200Response
  extends HttpResponse {
  status: "200";
}

export interface PersonDirectoryPersonsUpdateFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsUpdateFaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsUpdateFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsListFace200Response
  extends HttpResponse {
  status: "200";
  body: ListFaceResultOutput;
}

export interface PersonDirectoryPersonsListFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsListFaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonDirectoryPersonsListFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsIdentifyFromPersonDirectory200Response
  extends HttpResponse {
  status: "200";
  body: Array<IdentifyResultOutput>;
}

export interface PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryPersonsVerifyFromPersonDirectory200Response
  extends HttpResponse {
  status: "200";
  body: VerifyResultOutput;
}

export interface PersonDirectoryPersonsVerifyFromPersonDirectoryDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryPersonsVerifyFromPersonDirectoryDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryPersonsVerifyFromPersonDirectoryDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryDynamicPersonGroupsCreateGroup200Response
  extends HttpResponse {
  status: "200";
}

export interface PersonDirectoryDynamicPersonGroupsCreateGroup202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryDynamicPersonGroupsCreateGroup202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsCreateGroup202Headers;
}

export interface PersonDirectoryDynamicPersonGroupsCreateGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsCreateGroupDefaultHeaders;
}

/** The final response for long-running createGroup operation */
export interface PersonDirectoryDynamicPersonGroupsCreateGroupLogicalResponse
  extends HttpResponse {
  status: "200";
}

export interface PersonDirectoryDynamicPersonGroupsDeleteGroup202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryDynamicPersonGroupsDeleteGroup202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsDeleteGroup202Headers;
}

export interface PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultHeaders;
}

/** The final response for long-running deleteGroup operation */
export interface PersonDirectoryDynamicPersonGroupsDeleteGroupLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface PersonDirectoryDynamicPersonGroupsGetGroup200Response
  extends HttpResponse {
  status: "200";
  body: DynamicPersonGroupOutput;
}

export interface PersonDirectoryDynamicPersonGroupsGetGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsGetGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryDynamicPersonGroupsUpdateGroup200Response
  extends HttpResponse {
  status: "200";
}

export interface PersonDirectoryDynamicPersonGroupsUpdateGroup202Headers {
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonDirectoryDynamicPersonGroupsUpdateGroup202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsUpdateGroup202Headers;
}

export interface PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultHeaders;
}

/** The final response for long-running updateGroup operation */
export interface PersonDirectoryDynamicPersonGroupsUpdateGroupLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface PersonDirectoryDynamicPersonGroupsListGroup200Response
  extends HttpResponse {
  status: "200";
  body: Array<DynamicPersonGroupOutput>;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsListGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryDynamicPersonGroupsListGroupPerson200Response
  extends HttpResponse {
  status: "200";
  body: ListPersonResultOutput;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroup200Response
  extends HttpResponse {
  status: "200";
  body: Array<IdentifyResultOutput>;
}

export interface PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsCreateGroup200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsCreateGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsCreateGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsCreateGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsDeleteGroup200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsDeleteGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsDeleteGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsDeleteGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsGetGroup200Response extends HttpResponse {
  status: "200";
  body: PersonGroupOutput;
}

export interface PersonGroupsGetGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsGetGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsGetGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsUpdateGroup200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsUpdateGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsUpdateGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsUpdateGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsListGroup200Response extends HttpResponse {
  status: "200";
  body: Array<PersonGroupOutput>;
}

export interface PersonGroupsListGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsListGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsListGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsCreatePerson200Response extends HttpResponse {
  status: "200";
  body: PersonGroupPersonOutput;
}

export interface PersonGroupsCreatePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsCreatePersonDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsCreatePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsDeletePerson200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsDeletePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsDeletePersonDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsDeletePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsGetPerson200Response extends HttpResponse {
  status: "200";
  body: PersonGroupPersonOutput;
}

export interface PersonGroupsGetPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsGetPersonDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsGetPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsUpdatePerson200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsUpdatePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsUpdatePersonDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsUpdatePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsListPerson200Response extends HttpResponse {
  status: "200";
  body: Array<PersonGroupPersonOutput>;
}

export interface PersonGroupsListPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsListPersonDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsListPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsAddFaceFromUrl200Response extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface PersonGroupsAddFaceFromUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsAddFaceFromUrlDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsAddFaceFromUrlDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsAddFaceFromStream200Response extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface PersonGroupsAddFaceFromStreamDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsAddFaceFromStreamDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsAddFaceFromStreamDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsDeleteFace200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsDeleteFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsDeleteFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsDeleteFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsGetFace200Response extends HttpResponse {
  status: "200";
  body: PersonGroupPersonFaceOutput;
}

export interface PersonGroupsGetFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsGetFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsGetFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsUpdateFace200Response extends HttpResponse {
  status: "200";
}

export interface PersonGroupsUpdateFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsUpdateFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsUpdateFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsIdentifyFromPersonGroup200Response
  extends HttpResponse {
  status: "200";
  body: Array<IdentifyResultOutput>;
}

export interface PersonGroupsIdentifyFromPersonGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsIdentifyFromPersonGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsIdentifyFromPersonGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface PersonGroupsVerifyFromPersonGroup200Response
  extends HttpResponse {
  status: "200";
  body: VerifyResultOutput;
}

export interface PersonGroupsVerifyFromPersonGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsVerifyFromPersonGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsVerifyFromPersonGroupDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface PersonGroupsTrainGroup202Response extends HttpResponse {
  status: "202";
}

export interface PersonGroupsTrainGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsTrainGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsTrainGroupDefaultHeaders;
}

/** The final response for long-running trainGroup operation */
export interface PersonGroupsTrainGroupLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface PersonGroupsGetTrainingStatus200Response extends HttpResponse {
  status: "200";
  body: TrainingStatusOutput;
}

export interface PersonGroupsGetTrainingStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PersonGroupsGetTrainingStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PersonGroupsGetTrainingStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsCreateGroup200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsCreateGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsCreateGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsCreateGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsDeleteGroup200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsDeleteGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsDeleteGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsDeleteGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsGetGroup200Response extends HttpResponse {
  status: "200";
  body: LargePersonGroupOutput;
}

export interface LargePersonGroupsGetGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsGetGroupDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsGetGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsUpdateGroup200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsUpdateGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsUpdateGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsUpdateGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsListGroup200Response extends HttpResponse {
  status: "200";
  body: Array<LargePersonGroupOutput>;
}

export interface LargePersonGroupsListGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsListGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsListGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsCreatePerson200Response extends HttpResponse {
  status: "200";
  body: LargePersonGroupPersonOutput;
}

export interface LargePersonGroupsCreatePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsCreatePersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsCreatePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsDeletePerson200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsDeletePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsDeletePersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsDeletePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsGetPerson200Response extends HttpResponse {
  status: "200";
  body: LargePersonGroupPersonOutput;
}

export interface LargePersonGroupsGetPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsGetPersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsGetPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsUpdatePerson200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsUpdatePersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsUpdatePersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsUpdatePersonDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsListPerson200Response extends HttpResponse {
  status: "200";
  body: Array<LargePersonGroupPersonOutput>;
}

export interface LargePersonGroupsListPersonDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsListPersonDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsListPersonDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsAddFaceFromUrl200Response
  extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface LargePersonGroupsAddFaceFromUrlDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsAddFaceFromUrlDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsAddFaceFromUrlDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsAddFaceFromStream200Response
  extends HttpResponse {
  status: "200";
  body: AddFaceResultOutput;
}

export interface LargePersonGroupsAddFaceFromStreamDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsAddFaceFromStreamDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsAddFaceFromStreamDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsDeleteFace200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsDeleteFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsDeleteFaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsDeleteFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsGetFace200Response extends HttpResponse {
  status: "200";
  body: LargePersonGroupPersonFaceOutput;
}

export interface LargePersonGroupsGetFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsGetFaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsGetFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsUpdateFace200Response extends HttpResponse {
  status: "200";
}

export interface LargePersonGroupsUpdateFaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsUpdateFaceDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsUpdateFaceDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsIdentifyFromLargePersonGroup200Response
  extends HttpResponse {
  status: "200";
  body: Array<IdentifyResultOutput>;
}

export interface LargePersonGroupsIdentifyFromLargePersonGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsIdentifyFromLargePersonGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LargePersonGroupsIdentifyFromLargePersonGroupDefaultHeaders;
}

/** The request has succeeded. */
export interface LargePersonGroupsVerifyFromLargePersonGroup200Response
  extends HttpResponse {
  status: "200";
  body: VerifyResultOutput;
}

export interface LargePersonGroupsVerifyFromLargePersonGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsVerifyFromLargePersonGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LargePersonGroupsVerifyFromLargePersonGroupDefaultHeaders;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface LargePersonGroupsTrainGroup202Response extends HttpResponse {
  status: "202";
}

export interface LargePersonGroupsTrainGroupDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsTrainGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsTrainGroupDefaultHeaders;
}

/** The final response for long-running trainGroup operation */
export interface LargePersonGroupsTrainGroupLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface LargePersonGroupsGetTrainingStatus200Response
  extends HttpResponse {
  status: "200";
  body: TrainingStatusOutput;
}

export interface LargePersonGroupsGetTrainingStatusDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LargePersonGroupsGetTrainingStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LargePersonGroupsGetTrainingStatusDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessSessionsListSessions200Response extends HttpResponse {
  status: "200";
  body: Array<LivenessSessionItemOutput>;
}

export interface LivenessSessionsListSessionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessSessionsListSessionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LivenessSessionsListSessionsDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessSessionsGetSession200Response extends HttpResponse {
  status: "200";
  body: LivenessSessionOutput;
}

export interface LivenessSessionsGetSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessSessionsGetSessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LivenessSessionsGetSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessSessionsDeleteSession200Response extends HttpResponse {
  status: "200";
}

export interface LivenessSessionsDeleteSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessSessionsDeleteSessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LivenessSessionsDeleteSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessSessionsListSessionAuditEntries200Response
  extends HttpResponse {
  status: "200";
  body: Array<LivenessSessionAuditEntryOutput>;
}

export interface LivenessSessionsListSessionAuditEntriesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessSessionsListSessionAuditEntriesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LivenessSessionsListSessionAuditEntriesDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessSessionsCreateSession200Response extends HttpResponse {
  status: "200";
  body: LivenessSessionCreationResultOutput;
}

export interface LivenessSessionsCreateSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessSessionsCreateSessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LivenessSessionsCreateSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessWithVerifySessionsListSessions200Response
  extends HttpResponse {
  status: "200";
  body: Array<LivenessSessionItemOutput>;
}

export interface LivenessWithVerifySessionsListSessionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessWithVerifySessionsListSessionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LivenessWithVerifySessionsListSessionsDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessWithVerifySessionsGetSession200Response
  extends HttpResponse {
  status: "200";
  body: LivenessWithVerifySessionOutput;
}

export interface LivenessWithVerifySessionsGetSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessWithVerifySessionsGetSessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & LivenessWithVerifySessionsGetSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessWithVerifySessionsDeleteSession200Response
  extends HttpResponse {
  status: "200";
}

export interface LivenessWithVerifySessionsDeleteSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessWithVerifySessionsDeleteSessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LivenessWithVerifySessionsDeleteSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessWithVerifySessionsListSessionAuditEntries200Response
  extends HttpResponse {
  status: "200";
  body: Array<LivenessWithVerifySessionAuditEntryOutput>;
}

export interface LivenessWithVerifySessionsListSessionAuditEntriesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LivenessWithVerifySessionsListSessionAuditEntriesDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessWithVerifySessionsCreateSession200Response
  extends HttpResponse {
  status: "200";
  body: LivenessSessionCreationResultOutput;
}

export interface LivenessWithVerifySessionsCreateSessionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessWithVerifySessionsCreateSessionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LivenessWithVerifySessionsCreateSessionDefaultHeaders;
}

/** The request has succeeded. */
export interface LivenessWithVerifySessionsCreateSessionWithVerifyImage200Response
  extends HttpResponse {
  status: "200";
  body: LivenessSessionCreationResultOutput;
}

export interface LivenessWithVerifySessionsCreateSessionWithVerifyImageDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface LivenessWithVerifySessionsCreateSessionWithVerifyImageDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    LivenessWithVerifySessionsCreateSessionWithVerifyImageDefaultHeaders;
}
