// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DetectFromUrlParameters,
  DetectFromStreamParameters,
  FindSimilarParameters,
  FaceListsFindSimilarFromFaceListParameters,
  LargeFaceListsFindSimilarFromLargeFaceListParameters,
  VerifyParameters,
  PersonDirectoryPersonsVerifyFromPersonDirectoryParameters,
  PersonGroupsVerifyFromPersonGroupParameters,
  LargePersonGroupsVerifyFromLargePersonGroupParameters,
  GroupParameters,
  FaceListsCreateListParameters,
  FaceListsDeleteListParameters,
  FaceListsGetListParameters,
  FaceListsUpdateListParameters,
  FaceListsAddFaceFromUrlParameters,
  FaceListsAddFaceFromStreamParameters,
  FaceListsDeleteFaceParameters,
  FaceListsListListParameters,
  LargeFaceListsCreateListParameters,
  LargeFaceListsDeleteListParameters,
  LargeFaceListsGetListParameters,
  LargeFaceListsUpdateListParameters,
  LargeFaceListsAddFaceFromUrlParameters,
  LargeFaceListsAddFaceFromStreamParameters,
  LargeFaceListsListFaceParameters,
  LargeFaceListsDeleteFaceParameters,
  LargeFaceListsGetFaceParameters,
  LargeFaceListsUpdateFaceParameters,
  LargeFaceListsListListParameters,
  LargeFaceListsTrainListParameters,
  LargeFaceListsGetTrainingStatusParameters,
  FaceAsyncOperationsGetStatusParameters,
  PersonDirectoryPersonsCreatePersonParameters,
  PersonDirectoryPersonsListPersonParameters,
  PersonDirectoryPersonsDeletePersonParameters,
  PersonDirectoryPersonsGetPersonParameters,
  PersonDirectoryPersonsUpdatePersonParameters,
  PersonDirectoryPersonsListGroupReferenceParameters,
  PersonDirectoryPersonsAddFaceFromUrlParameters,
  PersonDirectoryPersonsAddFaceFromStreamParameters,
  PersonDirectoryPersonsListFaceParameters,
  PersonDirectoryPersonsDeleteFaceParameters,
  PersonDirectoryPersonsGetFaceParameters,
  PersonDirectoryPersonsUpdateFaceParameters,
  PersonDirectoryPersonsIdentifyFromPersonDirectoryParameters,
  PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupParameters,
  PersonGroupsIdentifyFromPersonGroupParameters,
  LargePersonGroupsIdentifyFromLargePersonGroupParameters,
  PersonDirectoryDynamicPersonGroupsCreateGroupParameters,
  PersonDirectoryDynamicPersonGroupsDeleteGroupParameters,
  PersonDirectoryDynamicPersonGroupsGetGroupParameters,
  PersonDirectoryDynamicPersonGroupsUpdateGroupParameters,
  PersonDirectoryDynamicPersonGroupsListGroupParameters,
  PersonDirectoryDynamicPersonGroupsListGroupPersonParameters,
  PersonGroupsCreateGroupParameters,
  PersonGroupsDeleteGroupParameters,
  PersonGroupsGetGroupParameters,
  PersonGroupsUpdateGroupParameters,
  PersonGroupsListGroupParameters,
  PersonGroupsCreatePersonParameters,
  PersonGroupsListPersonParameters,
  PersonGroupsDeletePersonParameters,
  PersonGroupsGetPersonParameters,
  PersonGroupsUpdatePersonParameters,
  PersonGroupsAddFaceFromUrlParameters,
  PersonGroupsAddFaceFromStreamParameters,
  PersonGroupsDeleteFaceParameters,
  PersonGroupsGetFaceParameters,
  PersonGroupsUpdateFaceParameters,
  PersonGroupsTrainGroupParameters,
  PersonGroupsGetTrainingStatusParameters,
  LargePersonGroupsCreateGroupParameters,
  LargePersonGroupsDeleteGroupParameters,
  LargePersonGroupsGetGroupParameters,
  LargePersonGroupsUpdateGroupParameters,
  LargePersonGroupsListGroupParameters,
  LargePersonGroupsCreatePersonParameters,
  LargePersonGroupsListPersonParameters,
  LargePersonGroupsDeletePersonParameters,
  LargePersonGroupsGetPersonParameters,
  LargePersonGroupsUpdatePersonParameters,
  LargePersonGroupsAddFaceFromUrlParameters,
  LargePersonGroupsAddFaceFromStreamParameters,
  LargePersonGroupsDeleteFaceParameters,
  LargePersonGroupsGetFaceParameters,
  LargePersonGroupsUpdateFaceParameters,
  LargePersonGroupsTrainGroupParameters,
  LargePersonGroupsGetTrainingStatusParameters,
  LivenessSessionsListSessionsParameters,
  LivenessSessionsCreateSessionParameters,
  LivenessSessionsGetSessionParameters,
  LivenessSessionsDeleteSessionParameters,
  LivenessSessionsListSessionAuditEntriesParameters,
  LivenessWithVerifySessionsListSessionsParameters,
  LivenessWithVerifySessionsCreateSessionParameters,
  LivenessWithVerifySessionsCreateSessionWithVerifyImageParameters,
  LivenessWithVerifySessionsGetSessionParameters,
  LivenessWithVerifySessionsDeleteSessionParameters,
  LivenessWithVerifySessionsListSessionAuditEntriesParameters,
} from "./parameters";
import {
  DetectFromUrl200Response,
  DetectFromUrlDefaultResponse,
  DetectFromStream200Response,
  DetectFromStreamDefaultResponse,
  FindSimilar200Response,
  FindSimilarDefaultResponse,
  FaceListsFindSimilarFromFaceList200Response,
  FaceListsFindSimilarFromFaceListDefaultResponse,
  LargeFaceListsFindSimilarFromLargeFaceList200Response,
  LargeFaceListsFindSimilarFromLargeFaceListDefaultResponse,
  Verify200Response,
  VerifyDefaultResponse,
  PersonDirectoryPersonsVerifyFromPersonDirectory200Response,
  PersonDirectoryPersonsVerifyFromPersonDirectoryDefaultResponse,
  PersonGroupsVerifyFromPersonGroup200Response,
  PersonGroupsVerifyFromPersonGroupDefaultResponse,
  LargePersonGroupsVerifyFromLargePersonGroup200Response,
  LargePersonGroupsVerifyFromLargePersonGroupDefaultResponse,
  Group200Response,
  GroupDefaultResponse,
  FaceListsCreateList200Response,
  FaceListsCreateListDefaultResponse,
  FaceListsDeleteList200Response,
  FaceListsDeleteListDefaultResponse,
  FaceListsGetList200Response,
  FaceListsGetListDefaultResponse,
  FaceListsUpdateList200Response,
  FaceListsUpdateListDefaultResponse,
  FaceListsAddFaceFromUrl200Response,
  FaceListsAddFaceFromUrlDefaultResponse,
  FaceListsAddFaceFromStream200Response,
  FaceListsAddFaceFromStreamDefaultResponse,
  FaceListsDeleteFace200Response,
  FaceListsDeleteFaceDefaultResponse,
  FaceListsListList200Response,
  FaceListsListListDefaultResponse,
  LargeFaceListsCreateList200Response,
  LargeFaceListsCreateListDefaultResponse,
  LargeFaceListsDeleteList200Response,
  LargeFaceListsDeleteListDefaultResponse,
  LargeFaceListsGetList200Response,
  LargeFaceListsGetListDefaultResponse,
  LargeFaceListsUpdateList200Response,
  LargeFaceListsUpdateListDefaultResponse,
  LargeFaceListsAddFaceFromUrl200Response,
  LargeFaceListsAddFaceFromUrlDefaultResponse,
  LargeFaceListsAddFaceFromStream200Response,
  LargeFaceListsAddFaceFromStreamDefaultResponse,
  LargeFaceListsListFace200Response,
  LargeFaceListsListFaceDefaultResponse,
  LargeFaceListsDeleteFace200Response,
  LargeFaceListsDeleteFaceDefaultResponse,
  LargeFaceListsGetFace200Response,
  LargeFaceListsGetFaceDefaultResponse,
  LargeFaceListsUpdateFace200Response,
  LargeFaceListsUpdateFaceDefaultResponse,
  LargeFaceListsListList200Response,
  LargeFaceListsListListDefaultResponse,
  LargeFaceListsTrainList202Response,
  LargeFaceListsTrainListDefaultResponse,
  LargeFaceListsGetTrainingStatus200Response,
  LargeFaceListsGetTrainingStatusDefaultResponse,
  FaceAsyncOperationsGetStatus200Response,
  FaceAsyncOperationsGetStatusDefaultResponse,
  PersonDirectoryPersonsCreatePerson202Response,
  PersonDirectoryPersonsCreatePersonDefaultResponse,
  PersonDirectoryPersonsListPerson200Response,
  PersonDirectoryPersonsListPersonDefaultResponse,
  PersonDirectoryPersonsDeletePerson202Response,
  PersonDirectoryPersonsDeletePersonDefaultResponse,
  PersonDirectoryPersonsGetPerson200Response,
  PersonDirectoryPersonsGetPersonDefaultResponse,
  PersonDirectoryPersonsUpdatePerson200Response,
  PersonDirectoryPersonsUpdatePersonDefaultResponse,
  PersonDirectoryPersonsListGroupReference200Response,
  PersonDirectoryPersonsListGroupReferenceDefaultResponse,
  PersonDirectoryPersonsAddFaceFromUrl202Response,
  PersonDirectoryPersonsAddFaceFromUrlDefaultResponse,
  PersonDirectoryPersonsAddFaceFromStream202Response,
  PersonDirectoryPersonsAddFaceFromStreamDefaultResponse,
  PersonDirectoryPersonsListFace200Response,
  PersonDirectoryPersonsListFaceDefaultResponse,
  PersonDirectoryPersonsDeleteFace202Response,
  PersonDirectoryPersonsDeleteFaceDefaultResponse,
  PersonDirectoryPersonsGetFace200Response,
  PersonDirectoryPersonsGetFaceDefaultResponse,
  PersonDirectoryPersonsUpdateFace200Response,
  PersonDirectoryPersonsUpdateFaceDefaultResponse,
  PersonDirectoryPersonsIdentifyFromPersonDirectory200Response,
  PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse,
  PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroup200Response,
  PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupDefaultResponse,
  PersonGroupsIdentifyFromPersonGroup200Response,
  PersonGroupsIdentifyFromPersonGroupDefaultResponse,
  LargePersonGroupsIdentifyFromLargePersonGroup200Response,
  LargePersonGroupsIdentifyFromLargePersonGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsCreateGroup200Response,
  PersonDirectoryDynamicPersonGroupsCreateGroup202Response,
  PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsDeleteGroup202Response,
  PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsGetGroup200Response,
  PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsUpdateGroup200Response,
  PersonDirectoryDynamicPersonGroupsUpdateGroup202Response,
  PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsListGroup200Response,
  PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsListGroupPerson200Response,
  PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse,
  PersonGroupsCreateGroup200Response,
  PersonGroupsCreateGroupDefaultResponse,
  PersonGroupsDeleteGroup200Response,
  PersonGroupsDeleteGroupDefaultResponse,
  PersonGroupsGetGroup200Response,
  PersonGroupsGetGroupDefaultResponse,
  PersonGroupsUpdateGroup200Response,
  PersonGroupsUpdateGroupDefaultResponse,
  PersonGroupsListGroup200Response,
  PersonGroupsListGroupDefaultResponse,
  PersonGroupsCreatePerson200Response,
  PersonGroupsCreatePersonDefaultResponse,
  PersonGroupsListPerson200Response,
  PersonGroupsListPersonDefaultResponse,
  PersonGroupsDeletePerson200Response,
  PersonGroupsDeletePersonDefaultResponse,
  PersonGroupsGetPerson200Response,
  PersonGroupsGetPersonDefaultResponse,
  PersonGroupsUpdatePerson200Response,
  PersonGroupsUpdatePersonDefaultResponse,
  PersonGroupsAddFaceFromUrl200Response,
  PersonGroupsAddFaceFromUrlDefaultResponse,
  PersonGroupsAddFaceFromStream200Response,
  PersonGroupsAddFaceFromStreamDefaultResponse,
  PersonGroupsDeleteFace200Response,
  PersonGroupsDeleteFaceDefaultResponse,
  PersonGroupsGetFace200Response,
  PersonGroupsGetFaceDefaultResponse,
  PersonGroupsUpdateFace200Response,
  PersonGroupsUpdateFaceDefaultResponse,
  PersonGroupsTrainGroup202Response,
  PersonGroupsTrainGroupDefaultResponse,
  PersonGroupsGetTrainingStatus200Response,
  PersonGroupsGetTrainingStatusDefaultResponse,
  LargePersonGroupsCreateGroup200Response,
  LargePersonGroupsCreateGroupDefaultResponse,
  LargePersonGroupsDeleteGroup200Response,
  LargePersonGroupsDeleteGroupDefaultResponse,
  LargePersonGroupsGetGroup200Response,
  LargePersonGroupsGetGroupDefaultResponse,
  LargePersonGroupsUpdateGroup200Response,
  LargePersonGroupsUpdateGroupDefaultResponse,
  LargePersonGroupsListGroup200Response,
  LargePersonGroupsListGroupDefaultResponse,
  LargePersonGroupsCreatePerson200Response,
  LargePersonGroupsCreatePersonDefaultResponse,
  LargePersonGroupsListPerson200Response,
  LargePersonGroupsListPersonDefaultResponse,
  LargePersonGroupsDeletePerson200Response,
  LargePersonGroupsDeletePersonDefaultResponse,
  LargePersonGroupsGetPerson200Response,
  LargePersonGroupsGetPersonDefaultResponse,
  LargePersonGroupsUpdatePerson200Response,
  LargePersonGroupsUpdatePersonDefaultResponse,
  LargePersonGroupsAddFaceFromUrl200Response,
  LargePersonGroupsAddFaceFromUrlDefaultResponse,
  LargePersonGroupsAddFaceFromStream200Response,
  LargePersonGroupsAddFaceFromStreamDefaultResponse,
  LargePersonGroupsDeleteFace200Response,
  LargePersonGroupsDeleteFaceDefaultResponse,
  LargePersonGroupsGetFace200Response,
  LargePersonGroupsGetFaceDefaultResponse,
  LargePersonGroupsUpdateFace200Response,
  LargePersonGroupsUpdateFaceDefaultResponse,
  LargePersonGroupsTrainGroup202Response,
  LargePersonGroupsTrainGroupDefaultResponse,
  LargePersonGroupsGetTrainingStatus200Response,
  LargePersonGroupsGetTrainingStatusDefaultResponse,
  LivenessSessionsListSessions200Response,
  LivenessSessionsListSessionsDefaultResponse,
  LivenessSessionsCreateSession200Response,
  LivenessSessionsCreateSessionDefaultResponse,
  LivenessSessionsGetSession200Response,
  LivenessSessionsGetSessionDefaultResponse,
  LivenessSessionsDeleteSession200Response,
  LivenessSessionsDeleteSessionDefaultResponse,
  LivenessSessionsListSessionAuditEntries200Response,
  LivenessSessionsListSessionAuditEntriesDefaultResponse,
  LivenessWithVerifySessionsListSessions200Response,
  LivenessWithVerifySessionsListSessionsDefaultResponse,
  LivenessWithVerifySessionsCreateSession200Response,
  LivenessWithVerifySessionsCreateSessionDefaultResponse,
  LivenessWithVerifySessionsCreateSessionWithVerifyImage200Response,
  LivenessWithVerifySessionsCreateSessionWithVerifyImageDefaultResponse,
  LivenessWithVerifySessionsGetSession200Response,
  LivenessWithVerifySessionsGetSessionDefaultResponse,
  LivenessWithVerifySessionsDeleteSession200Response,
  LivenessWithVerifySessionsDeleteSessionDefaultResponse,
  LivenessWithVerifySessionsListSessionAuditEntries200Response,
  LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface DetectFromUrl {
  /** Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes. */
  post(
    options: DetectFromUrlParameters,
  ): StreamableMethod<DetectFromUrl200Response | DetectFromUrlDefaultResponse>;
  /** Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes. */
  post(
    options: DetectFromStreamParameters,
  ): StreamableMethod<
    DetectFromStream200Response | DetectFromStreamDefaultResponse
  >;
}

export interface FindSimilar {
  /** Given query face's faceId, to search the similar-looking faces from a faceId array, a face list or a large face list. */
  post(
    options?: FindSimilarParameters,
  ): StreamableMethod<FindSimilar200Response | FindSimilarDefaultResponse>;
  /** Given query face's faceId, to search the similar-looking faces from a faceId array, a face list or a large face list. */
  post(
    options?: FaceListsFindSimilarFromFaceListParameters,
  ): StreamableMethod<
    | FaceListsFindSimilarFromFaceList200Response
    | FaceListsFindSimilarFromFaceListDefaultResponse
  >;
  /** Given query face's faceId, to search the similar-looking faces from a faceId array, a face list or a large face list. */
  post(
    options?: LargeFaceListsFindSimilarFromLargeFaceListParameters,
  ): StreamableMethod<
    | LargeFaceListsFindSimilarFromLargeFaceList200Response
    | LargeFaceListsFindSimilarFromLargeFaceListDefaultResponse
  >;
}

export interface Verify {
  /** Verify whether two faces belong to a same person or whether one face belongs to a person. */
  post(
    options?: VerifyParameters,
  ): StreamableMethod<Verify200Response | VerifyDefaultResponse>;
  /** A remote procedure call (RPC) operation. */
  post(
    options?: PersonDirectoryPersonsVerifyFromPersonDirectoryParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsVerifyFromPersonDirectory200Response
    | PersonDirectoryPersonsVerifyFromPersonDirectoryDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options?: PersonGroupsVerifyFromPersonGroupParameters,
  ): StreamableMethod<
    | PersonGroupsVerifyFromPersonGroup200Response
    | PersonGroupsVerifyFromPersonGroupDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options?: LargePersonGroupsVerifyFromLargePersonGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsVerifyFromLargePersonGroup200Response
    | LargePersonGroupsVerifyFromLargePersonGroupDefaultResponse
  >;
}

export interface Group {
  /** Divide candidate faces into groups based on face similarity. */
  post(
    options?: GroupParameters,
  ): StreamableMethod<Group200Response | GroupDefaultResponse>;
}

export interface FaceListsCreateList {
  /** The most basic operation that applies to a resource. */
  put(
    options: FaceListsCreateListParameters,
  ): StreamableMethod<
    FaceListsCreateList200Response | FaceListsCreateListDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: FaceListsDeleteListParameters,
  ): StreamableMethod<
    FaceListsDeleteList200Response | FaceListsDeleteListDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: FaceListsGetListParameters,
  ): StreamableMethod<
    FaceListsGetList200Response | FaceListsGetListDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: FaceListsUpdateListParameters,
  ): StreamableMethod<
    FaceListsUpdateList200Response | FaceListsUpdateListDefaultResponse
  >;
}

export interface FaceListsAddFaceFromUrl {
  /** Operation that applies to a collection of resources. */
  post(
    options?: FaceListsAddFaceFromUrlParameters,
  ): StreamableMethod<
    FaceListsAddFaceFromUrl200Response | FaceListsAddFaceFromUrlDefaultResponse
  >;
  /** Operation that applies to a collection of resources. */
  post(
    options: FaceListsAddFaceFromStreamParameters,
  ): StreamableMethod<
    | FaceListsAddFaceFromStream200Response
    | FaceListsAddFaceFromStreamDefaultResponse
  >;
}

export interface FaceListsDeleteFace {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: FaceListsDeleteFaceParameters,
  ): StreamableMethod<
    FaceListsDeleteFace200Response | FaceListsDeleteFaceDefaultResponse
  >;
}

export interface FaceListsListList {
  /** Operation that lists resources in a paginated way. */
  get(
    options?: FaceListsListListParameters,
  ): StreamableMethod<
    FaceListsListList200Response | FaceListsListListDefaultResponse
  >;
}

export interface LargeFaceListsCreateList {
  /** The most basic operation that applies to a resource. */
  put(
    options: LargeFaceListsCreateListParameters,
  ): StreamableMethod<
    | LargeFaceListsCreateList200Response
    | LargeFaceListsCreateListDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: LargeFaceListsDeleteListParameters,
  ): StreamableMethod<
    | LargeFaceListsDeleteList200Response
    | LargeFaceListsDeleteListDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: LargeFaceListsGetListParameters,
  ): StreamableMethod<
    LargeFaceListsGetList200Response | LargeFaceListsGetListDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: LargeFaceListsUpdateListParameters,
  ): StreamableMethod<
    | LargeFaceListsUpdateList200Response
    | LargeFaceListsUpdateListDefaultResponse
  >;
}

export interface LargeFaceListsAddFaceFromUrl {
  /** Operation that applies to a collection of resources. */
  post(
    options?: LargeFaceListsAddFaceFromUrlParameters,
  ): StreamableMethod<
    | LargeFaceListsAddFaceFromUrl200Response
    | LargeFaceListsAddFaceFromUrlDefaultResponse
  >;
  /** Operation that applies to a collection of resources. */
  post(
    options: LargeFaceListsAddFaceFromStreamParameters,
  ): StreamableMethod<
    | LargeFaceListsAddFaceFromStream200Response
    | LargeFaceListsAddFaceFromStreamDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: LargeFaceListsListFaceParameters,
  ): StreamableMethod<
    LargeFaceListsListFace200Response | LargeFaceListsListFaceDefaultResponse
  >;
}

export interface LargeFaceListsDeleteFace {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: LargeFaceListsDeleteFaceParameters,
  ): StreamableMethod<
    | LargeFaceListsDeleteFace200Response
    | LargeFaceListsDeleteFaceDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: LargeFaceListsGetFaceParameters,
  ): StreamableMethod<
    LargeFaceListsGetFace200Response | LargeFaceListsGetFaceDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: LargeFaceListsUpdateFaceParameters,
  ): StreamableMethod<
    | LargeFaceListsUpdateFace200Response
    | LargeFaceListsUpdateFaceDefaultResponse
  >;
}

export interface LargeFaceListsListList {
  /** Operation that lists resources in a paginated way. */
  get(
    options?: LargeFaceListsListListParameters,
  ): StreamableMethod<
    LargeFaceListsListList200Response | LargeFaceListsListListDefaultResponse
  >;
}

export interface LargeFaceListsTrainList {
  /** Resource action operation template. */
  post(
    options?: LargeFaceListsTrainListParameters,
  ): StreamableMethod<
    LargeFaceListsTrainList202Response | LargeFaceListsTrainListDefaultResponse
  >;
}

export interface LargeFaceListsGetTrainingStatus {
  /** The most basic operation that applies to a resource. */
  get(
    options?: LargeFaceListsGetTrainingStatusParameters,
  ): StreamableMethod<
    | LargeFaceListsGetTrainingStatus200Response
    | LargeFaceListsGetTrainingStatusDefaultResponse
  >;
}

export interface FaceAsyncOperationsGetStatus {
  /** A remote procedure call (RPC) operation. */
  get(
    options?: FaceAsyncOperationsGetStatusParameters,
  ): StreamableMethod<
    | FaceAsyncOperationsGetStatus200Response
    | FaceAsyncOperationsGetStatusDefaultResponse
  >;
}

export interface PersonDirectoryPersonsCreatePerson {
  /** Operation that applies to a collection of resources. */
  post(
    options: PersonDirectoryPersonsCreatePersonParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsCreatePerson202Response
    | PersonDirectoryPersonsCreatePersonDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: PersonDirectoryPersonsListPersonParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsListPerson200Response
    | PersonDirectoryPersonsListPersonDefaultResponse
  >;
}

export interface PersonDirectoryPersonsDeletePerson {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: PersonDirectoryPersonsDeletePersonParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsDeletePerson202Response
    | PersonDirectoryPersonsDeletePersonDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: PersonDirectoryPersonsGetPersonParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsGetPerson200Response
    | PersonDirectoryPersonsGetPersonDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: PersonDirectoryPersonsUpdatePersonParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsUpdatePerson200Response
    | PersonDirectoryPersonsUpdatePersonDefaultResponse
  >;
}

export interface PersonDirectoryPersonsListGroupReference {
  /** The most basic operation that applies to a resource. */
  get(
    options?: PersonDirectoryPersonsListGroupReferenceParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsListGroupReference200Response
    | PersonDirectoryPersonsListGroupReferenceDefaultResponse
  >;
}

export interface PersonDirectoryPersonsAddFaceFromUrl {
  /** Operation that applies to a collection of resources. */
  post(
    options: PersonDirectoryPersonsAddFaceFromUrlParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsAddFaceFromUrl202Response
    | PersonDirectoryPersonsAddFaceFromUrlDefaultResponse
  >;
  /** Operation that applies to a collection of resources. */
  post(
    options: PersonDirectoryPersonsAddFaceFromStreamParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsAddFaceFromStream202Response
    | PersonDirectoryPersonsAddFaceFromStreamDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: PersonDirectoryPersonsListFaceParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsListFace200Response
    | PersonDirectoryPersonsListFaceDefaultResponse
  >;
}

export interface PersonDirectoryPersonsDeleteFace {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: PersonDirectoryPersonsDeleteFaceParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsDeleteFace202Response
    | PersonDirectoryPersonsDeleteFaceDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: PersonDirectoryPersonsGetFaceParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsGetFace200Response
    | PersonDirectoryPersonsGetFaceDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: PersonDirectoryPersonsUpdateFaceParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsUpdateFace200Response
    | PersonDirectoryPersonsUpdateFaceDefaultResponse
  >;
}

export interface PersonDirectoryPersonsIdentifyFromPersonDirectory {
  /** A remote procedure call (RPC) operation. */
  post(
    options?: PersonDirectoryPersonsIdentifyFromPersonDirectoryParameters,
  ): StreamableMethod<
    | PersonDirectoryPersonsIdentifyFromPersonDirectory200Response
    | PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options?: PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroup200Response
    | PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options?: PersonGroupsIdentifyFromPersonGroupParameters,
  ): StreamableMethod<
    | PersonGroupsIdentifyFromPersonGroup200Response
    | PersonGroupsIdentifyFromPersonGroupDefaultResponse
  >;
  /** A remote procedure call (RPC) operation. */
  post(
    options?: LargePersonGroupsIdentifyFromLargePersonGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsIdentifyFromLargePersonGroup200Response
    | LargePersonGroupsIdentifyFromLargePersonGroupDefaultResponse
  >;
}

export interface PersonDirectoryDynamicPersonGroupsCreateGroup {
  /** The most basic operation that applies to a resource. */
  put(
    options: PersonDirectoryDynamicPersonGroupsCreateGroupParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsCreateGroup200Response
    | PersonDirectoryDynamicPersonGroupsCreateGroup202Response
    | PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: PersonDirectoryDynamicPersonGroupsDeleteGroupParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsDeleteGroup202Response
    | PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: PersonDirectoryDynamicPersonGroupsGetGroupParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsGetGroup200Response
    | PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: PersonDirectoryDynamicPersonGroupsUpdateGroupParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsUpdateGroup200Response
    | PersonDirectoryDynamicPersonGroupsUpdateGroup202Response
    | PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse
  >;
}

export interface PersonDirectoryDynamicPersonGroupsListGroup {
  /** Operation that lists resources in a paginated way. */
  get(
    options?: PersonDirectoryDynamicPersonGroupsListGroupParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsListGroup200Response
    | PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse
  >;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupPerson {
  /** The most basic operation that applies to a resource. */
  get(
    options?: PersonDirectoryDynamicPersonGroupsListGroupPersonParameters,
  ): StreamableMethod<
    | PersonDirectoryDynamicPersonGroupsListGroupPerson200Response
    | PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse
  >;
}

export interface PersonGroupsCreateGroup {
  /** The most basic operation that applies to a resource. */
  put(
    options: PersonGroupsCreateGroupParameters,
  ): StreamableMethod<
    PersonGroupsCreateGroup200Response | PersonGroupsCreateGroupDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: PersonGroupsDeleteGroupParameters,
  ): StreamableMethod<
    PersonGroupsDeleteGroup200Response | PersonGroupsDeleteGroupDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: PersonGroupsGetGroupParameters,
  ): StreamableMethod<
    PersonGroupsGetGroup200Response | PersonGroupsGetGroupDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: PersonGroupsUpdateGroupParameters,
  ): StreamableMethod<
    PersonGroupsUpdateGroup200Response | PersonGroupsUpdateGroupDefaultResponse
  >;
}

export interface PersonGroupsListGroup {
  /** Operation that lists resources in a paginated way. */
  get(
    options?: PersonGroupsListGroupParameters,
  ): StreamableMethod<
    PersonGroupsListGroup200Response | PersonGroupsListGroupDefaultResponse
  >;
}

export interface PersonGroupsCreatePerson {
  /** Operation that applies to a collection of resources. */
  post(
    options: PersonGroupsCreatePersonParameters,
  ): StreamableMethod<
    | PersonGroupsCreatePerson200Response
    | PersonGroupsCreatePersonDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: PersonGroupsListPersonParameters,
  ): StreamableMethod<
    PersonGroupsListPerson200Response | PersonGroupsListPersonDefaultResponse
  >;
}

export interface PersonGroupsDeletePerson {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: PersonGroupsDeletePersonParameters,
  ): StreamableMethod<
    | PersonGroupsDeletePerson200Response
    | PersonGroupsDeletePersonDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: PersonGroupsGetPersonParameters,
  ): StreamableMethod<
    PersonGroupsGetPerson200Response | PersonGroupsGetPersonDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: PersonGroupsUpdatePersonParameters,
  ): StreamableMethod<
    | PersonGroupsUpdatePerson200Response
    | PersonGroupsUpdatePersonDefaultResponse
  >;
}

export interface PersonGroupsAddFaceFromUrl {
  /** Operation that applies to a collection of resources. */
  post(
    options?: PersonGroupsAddFaceFromUrlParameters,
  ): StreamableMethod<
    | PersonGroupsAddFaceFromUrl200Response
    | PersonGroupsAddFaceFromUrlDefaultResponse
  >;
  /** Operation that applies to a collection of resources. */
  post(
    options: PersonGroupsAddFaceFromStreamParameters,
  ): StreamableMethod<
    | PersonGroupsAddFaceFromStream200Response
    | PersonGroupsAddFaceFromStreamDefaultResponse
  >;
}

export interface PersonGroupsDeleteFace {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: PersonGroupsDeleteFaceParameters,
  ): StreamableMethod<
    PersonGroupsDeleteFace200Response | PersonGroupsDeleteFaceDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: PersonGroupsGetFaceParameters,
  ): StreamableMethod<
    PersonGroupsGetFace200Response | PersonGroupsGetFaceDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: PersonGroupsUpdateFaceParameters,
  ): StreamableMethod<
    PersonGroupsUpdateFace200Response | PersonGroupsUpdateFaceDefaultResponse
  >;
}

export interface PersonGroupsTrainGroup {
  /** Resource action operation template. */
  post(
    options?: PersonGroupsTrainGroupParameters,
  ): StreamableMethod<
    PersonGroupsTrainGroup202Response | PersonGroupsTrainGroupDefaultResponse
  >;
}

export interface PersonGroupsGetTrainingStatus {
  /** The most basic operation that applies to a resource. */
  get(
    options?: PersonGroupsGetTrainingStatusParameters,
  ): StreamableMethod<
    | PersonGroupsGetTrainingStatus200Response
    | PersonGroupsGetTrainingStatusDefaultResponse
  >;
}

export interface LargePersonGroupsCreateGroup {
  /** The most basic operation that applies to a resource. */
  put(
    options: LargePersonGroupsCreateGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsCreateGroup200Response
    | LargePersonGroupsCreateGroupDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  delete(
    options?: LargePersonGroupsDeleteGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsDeleteGroup200Response
    | LargePersonGroupsDeleteGroupDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: LargePersonGroupsGetGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsGetGroup200Response
    | LargePersonGroupsGetGroupDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: LargePersonGroupsUpdateGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsUpdateGroup200Response
    | LargePersonGroupsUpdateGroupDefaultResponse
  >;
}

export interface LargePersonGroupsListGroup {
  /** Operation that lists resources in a paginated way. */
  get(
    options?: LargePersonGroupsListGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsListGroup200Response
    | LargePersonGroupsListGroupDefaultResponse
  >;
}

export interface LargePersonGroupsCreatePerson {
  /** Operation that applies to a collection of resources. */
  post(
    options: LargePersonGroupsCreatePersonParameters,
  ): StreamableMethod<
    | LargePersonGroupsCreatePerson200Response
    | LargePersonGroupsCreatePersonDefaultResponse
  >;
  /** Operation that lists resources in a paginated way. */
  get(
    options?: LargePersonGroupsListPersonParameters,
  ): StreamableMethod<
    | LargePersonGroupsListPerson200Response
    | LargePersonGroupsListPersonDefaultResponse
  >;
}

export interface LargePersonGroupsDeletePerson {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: LargePersonGroupsDeletePersonParameters,
  ): StreamableMethod<
    | LargePersonGroupsDeletePerson200Response
    | LargePersonGroupsDeletePersonDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: LargePersonGroupsGetPersonParameters,
  ): StreamableMethod<
    | LargePersonGroupsGetPerson200Response
    | LargePersonGroupsGetPersonDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: LargePersonGroupsUpdatePersonParameters,
  ): StreamableMethod<
    | LargePersonGroupsUpdatePerson200Response
    | LargePersonGroupsUpdatePersonDefaultResponse
  >;
}

export interface LargePersonGroupsAddFaceFromUrl {
  /** Operation that applies to a collection of resources. */
  post(
    options?: LargePersonGroupsAddFaceFromUrlParameters,
  ): StreamableMethod<
    | LargePersonGroupsAddFaceFromUrl200Response
    | LargePersonGroupsAddFaceFromUrlDefaultResponse
  >;
  /** Operation that applies to a collection of resources. */
  post(
    options: LargePersonGroupsAddFaceFromStreamParameters,
  ): StreamableMethod<
    | LargePersonGroupsAddFaceFromStream200Response
    | LargePersonGroupsAddFaceFromStreamDefaultResponse
  >;
}

export interface LargePersonGroupsDeleteFace {
  /** The most basic operation that applies to a resource. */
  delete(
    options?: LargePersonGroupsDeleteFaceParameters,
  ): StreamableMethod<
    | LargePersonGroupsDeleteFace200Response
    | LargePersonGroupsDeleteFaceDefaultResponse
  >;
  /** Resource read operation template. */
  get(
    options?: LargePersonGroupsGetFaceParameters,
  ): StreamableMethod<
    | LargePersonGroupsGetFace200Response
    | LargePersonGroupsGetFaceDefaultResponse
  >;
  /** The most basic operation that applies to a resource. */
  patch(
    options: LargePersonGroupsUpdateFaceParameters,
  ): StreamableMethod<
    | LargePersonGroupsUpdateFace200Response
    | LargePersonGroupsUpdateFaceDefaultResponse
  >;
}

export interface LargePersonGroupsTrainGroup {
  /** Resource action operation template. */
  post(
    options?: LargePersonGroupsTrainGroupParameters,
  ): StreamableMethod<
    | LargePersonGroupsTrainGroup202Response
    | LargePersonGroupsTrainGroupDefaultResponse
  >;
}

export interface LargePersonGroupsGetTrainingStatus {
  /** The most basic operation that applies to a resource. */
  get(
    options?: LargePersonGroupsGetTrainingStatusParameters,
  ): StreamableMethod<
    | LargePersonGroupsGetTrainingStatus200Response
    | LargePersonGroupsGetTrainingStatusDefaultResponse
  >;
}

export interface LivenessSessionsListSessions {
  /**
   * Lists all matching session types.
   * List sessions from the last sessionId greater than the "start".
   * The result should be ordered by sessionId in ascending order.
   */
  get(
    options?: LivenessSessionsListSessionsParameters,
  ): StreamableMethod<
    | LivenessSessionsListSessions200Response
    | LivenessSessionsListSessionsDefaultResponse
  >;
  /** Creates face liveness detection session. */
  post(
    options?: LivenessSessionsCreateSessionParameters,
  ): StreamableMethod<
    | LivenessSessionsCreateSession200Response
    | LivenessSessionsCreateSessionDefaultResponse
  >;
}

export interface LivenessSessionsGetSession {
  /** Get session result of detectLiveness. */
  get(
    options?: LivenessSessionsGetSessionParameters,
  ): StreamableMethod<
    | LivenessSessionsGetSession200Response
    | LivenessSessionsGetSessionDefaultResponse
  >;
  /** Deletes a session and all of it's audit results. */
  delete(
    options?: LivenessSessionsDeleteSessionParameters,
  ): StreamableMethod<
    | LivenessSessionsDeleteSession200Response
    | LivenessSessionsDeleteSessionDefaultResponse
  >;
}

export interface LivenessSessionsListSessionAuditEntries {
  /** Get session audit requests/responses for the session. */
  get(
    options?: LivenessSessionsListSessionAuditEntriesParameters,
  ): StreamableMethod<
    | LivenessSessionsListSessionAuditEntries200Response
    | LivenessSessionsListSessionAuditEntriesDefaultResponse
  >;
}

export interface LivenessWithVerifySessionsListSessions {
  /**
   * Lists all matching session types.
   * List sessions from the last sessionId greater than the "start".
   * The result should be ordered by sessionId in ascending order.
   */
  get(
    options?: LivenessWithVerifySessionsListSessionsParameters,
  ): StreamableMethod<
    | LivenessWithVerifySessionsListSessions200Response
    | LivenessWithVerifySessionsListSessionsDefaultResponse
  >;
  /** Creates face liveness detection session. */
  post(
    options?: LivenessWithVerifySessionsCreateSessionParameters,
  ): StreamableMethod<
    | LivenessWithVerifySessionsCreateSession200Response
    | LivenessWithVerifySessionsCreateSessionDefaultResponse
  >;
  /** Creates face liveness detection session with verify image. */
  post(
    options: LivenessWithVerifySessionsCreateSessionWithVerifyImageParameters,
  ): StreamableMethod<
    | LivenessWithVerifySessionsCreateSessionWithVerifyImage200Response
    | LivenessWithVerifySessionsCreateSessionWithVerifyImageDefaultResponse
  >;
}

export interface LivenessWithVerifySessionsGetSession {
  /** Get session result of detectLiveness. */
  get(
    options?: LivenessWithVerifySessionsGetSessionParameters,
  ): StreamableMethod<
    | LivenessWithVerifySessionsGetSession200Response
    | LivenessWithVerifySessionsGetSessionDefaultResponse
  >;
  /** Deletes a session and all of it's audit results. */
  delete(
    options?: LivenessWithVerifySessionsDeleteSessionParameters,
  ): StreamableMethod<
    | LivenessWithVerifySessionsDeleteSession200Response
    | LivenessWithVerifySessionsDeleteSessionDefaultResponse
  >;
}

export interface LivenessWithVerifySessionsListSessionAuditEntries {
  /** Get session audit requests/responses for the session. */
  get(
    options?: LivenessWithVerifySessionsListSessionAuditEntriesParameters,
  ): StreamableMethod<
    | LivenessWithVerifySessionsListSessionAuditEntries200Response
    | LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/face/\{apiVersion\}/detect' has methods for the following verbs: post */
  (path: "/face/{apiVersion}/detect", apiVersion: string): DetectFromUrl;
  /** Resource for '/face/\{apiVersion\}/findsimilars' has methods for the following verbs: post */
  (path: "/face/{apiVersion}/findsimilars", apiVersion: string): FindSimilar;
  /** Resource for '/face/\{apiVersion\}/verify' has methods for the following verbs: post */
  (path: "/face/{apiVersion}/verify", apiVersion: string): Verify;
  /** Resource for '/face/\{apiVersion\}/group' has methods for the following verbs: post */
  (path: "/face/{apiVersion}/group", apiVersion: string): Group;
  /** Resource for '/face/\{apiVersion\}/facelists/\{faceListId\}' has methods for the following verbs: put, delete, get, patch */
  (
    path: "/face/{apiVersion}/facelists/{faceListId}",
    apiVersion: string,
    faceListId: string,
  ): FaceListsCreateList;
  /** Resource for '/face/\{apiVersion\}/facelists/\{faceListId\}/persistedfaces' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/facelists/{faceListId}/persistedfaces",
    apiVersion: string,
    faceListId: string,
  ): FaceListsAddFaceFromUrl;
  /** Resource for '/face/\{apiVersion\}/facelists/\{faceListId\}/persistedfaces/\{persistedFaceId\}' has methods for the following verbs: delete */
  (
    path: "/face/{apiVersion}/facelists/{faceListId}/persistedfaces/{persistedFaceId}",
    apiVersion: string,
    faceListId: string,
    persistedFaceId: string,
  ): FaceListsDeleteFace;
  /** Resource for '/face/\{apiVersion\}/facelists' has methods for the following verbs: get */
  (path: "/face/{apiVersion}/facelists", apiVersion: string): FaceListsListList;
  /** Resource for '/face/\{apiVersion\}/largefacelists/\{largeFaceListId\}' has methods for the following verbs: put, delete, get, patch */
  (
    path: "/face/{apiVersion}/largefacelists/{largeFaceListId}",
    apiVersion: string,
    largeFaceListId: string,
  ): LargeFaceListsCreateList;
  /** Resource for '/face/\{apiVersion\}/largefacelists/\{largeFaceListId\}/persistedfaces' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces",
    apiVersion: string,
    largeFaceListId: string,
  ): LargeFaceListsAddFaceFromUrl;
  /** Resource for '/face/\{apiVersion\}/largefacelists/\{largeFaceListId\}/persistedfaces/\{persistedFaceId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}",
    apiVersion: string,
    largeFaceListId: string,
    persistedFaceId: string,
  ): LargeFaceListsDeleteFace;
  /** Resource for '/face/\{apiVersion\}/largefacelists' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/largefacelists",
    apiVersion: string,
  ): LargeFaceListsListList;
  /** Resource for '/face/\{apiVersion\}/largefacelists/\{largeFaceListId\}/train' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/largefacelists/{largeFaceListId}/train",
    apiVersion: string,
    largeFaceListId: string,
  ): LargeFaceListsTrainList;
  /** Resource for '/face/\{apiVersion\}/largefacelists/\{largeFaceListId\}/training' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/largefacelists/{largeFaceListId}/training",
    apiVersion: string,
    largeFaceListId: string,
  ): LargeFaceListsGetTrainingStatus;
  /** Resource for '/face/\{apiVersion\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/operations/{operationId}",
    apiVersion: string,
    operationId: string,
  ): FaceAsyncOperationsGetStatus;
  /** Resource for '/face/\{apiVersion\}/persons' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/persons",
    apiVersion: string,
  ): PersonDirectoryPersonsCreatePerson;
  /** Resource for '/face/\{apiVersion\}/persons/\{personId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/persons/{personId}",
    apiVersion: string,
    personId: string,
  ): PersonDirectoryPersonsDeletePerson;
  /** Resource for '/face/\{apiVersion\}/persons/\{personId\}/dynamicPersonGroupReferences' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/persons/{personId}/dynamicPersonGroupReferences",
    apiVersion: string,
    personId: string,
  ): PersonDirectoryPersonsListGroupReference;
  /** Resource for '/face/\{apiVersion\}/persons/\{personId\}/recognitionModels/\{recognitionModel\}/persistedfaces' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces",
    apiVersion: string,
    personId: string,
    recognitionModel:
      | "recognition_01"
      | "recognition_02"
      | "recognition_03"
      | "recognition_04",
  ): PersonDirectoryPersonsAddFaceFromUrl;
  /** Resource for '/face/\{apiVersion\}/persons/\{personId\}/recognitionModels/\{recognitionModel\}/persistedfaces/\{persistedFaceId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces/{persistedFaceId}",
    apiVersion: string,
    personId: string,
    recognitionModel:
      | "recognition_01"
      | "recognition_02"
      | "recognition_03"
      | "recognition_04",
    persistedFaceId: string,
  ): PersonDirectoryPersonsDeleteFace;
  /** Resource for '/face/\{apiVersion\}/identify' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/identify",
    apiVersion: string,
  ): PersonDirectoryPersonsIdentifyFromPersonDirectory;
  /** Resource for '/face/\{apiVersion\}/dynamicpersongroups/\{dynamicPersonGroupId\}' has methods for the following verbs: put, delete, get, patch */
  (
    path: "/face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}",
    apiVersion: string,
    dynamicPersonGroupId: string,
  ): PersonDirectoryDynamicPersonGroupsCreateGroup;
  /** Resource for '/face/\{apiVersion\}/dynamicpersongroups' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/dynamicpersongroups",
    apiVersion: string,
  ): PersonDirectoryDynamicPersonGroupsListGroup;
  /** Resource for '/face/\{apiVersion\}/dynamicpersongroups/\{dynamicPersonGroupId\}/persons' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}/persons",
    apiVersion: string,
    dynamicPersonGroupId: string,
  ): PersonDirectoryDynamicPersonGroupsListGroupPerson;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}' has methods for the following verbs: put, delete, get, patch */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}",
    apiVersion: string,
    personGroupId: string,
  ): PersonGroupsCreateGroup;
  /** Resource for '/face/\{apiVersion\}/persongroups' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/persongroups",
    apiVersion: string,
  ): PersonGroupsListGroup;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}/persons' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}/persons",
    apiVersion: string,
    personGroupId: string,
  ): PersonGroupsCreatePerson;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}/persons/\{personId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}",
    apiVersion: string,
    personGroupId: string,
    personId: string,
  ): PersonGroupsDeletePerson;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}/persons/\{personId\}/persistedfaces' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}/persistedfaces",
    apiVersion: string,
    personGroupId: string,
    personId: string,
  ): PersonGroupsAddFaceFromUrl;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}/persons/\{personId\}/persistedfaces/\{persistedFaceId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}",
    apiVersion: string,
    personGroupId: string,
    personId: string,
    persistedFaceId: string,
  ): PersonGroupsDeleteFace;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}/train' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}/train",
    apiVersion: string,
    personGroupId: string,
  ): PersonGroupsTrainGroup;
  /** Resource for '/face/\{apiVersion\}/persongroups/\{personGroupId\}/training' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/persongroups/{personGroupId}/training",
    apiVersion: string,
    personGroupId: string,
  ): PersonGroupsGetTrainingStatus;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}' has methods for the following verbs: put, delete, get, patch */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}",
    apiVersion: string,
    largePersonGroupId: string,
  ): LargePersonGroupsCreateGroup;
  /** Resource for '/face/\{apiVersion\}/largepersongroups' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/largepersongroups",
    apiVersion: string,
  ): LargePersonGroupsListGroup;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}/persons' has methods for the following verbs: post, get */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons",
    apiVersion: string,
    largePersonGroupId: string,
  ): LargePersonGroupsCreatePerson;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}/persons/\{personId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}",
    apiVersion: string,
    largePersonGroupId: string,
    personId: string,
  ): LargePersonGroupsDeletePerson;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}/persons/\{personId\}/persistedfaces' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces",
    apiVersion: string,
    largePersonGroupId: string,
    personId: string,
  ): LargePersonGroupsAddFaceFromUrl;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}/persons/\{personId\}/persistedfaces/\{persistedFaceId\}' has methods for the following verbs: delete, get, patch */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}",
    apiVersion: string,
    largePersonGroupId: string,
    personId: string,
    persistedFaceId: string,
  ): LargePersonGroupsDeleteFace;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}/train' has methods for the following verbs: post */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}/train",
    apiVersion: string,
    largePersonGroupId: string,
  ): LargePersonGroupsTrainGroup;
  /** Resource for '/face/\{apiVersion\}/largepersongroups/\{largePersonGroupId\}/training' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/largepersongroups/{largePersonGroupId}/training",
    apiVersion: string,
    largePersonGroupId: string,
  ): LargePersonGroupsGetTrainingStatus;
  /** Resource for '/face/\{apiVersion\}/detectLiveness/singleModal/sessions' has methods for the following verbs: get, post */
  (
    path: "/face/{apiVersion}/detectLiveness/singleModal/sessions",
    apiVersion: string,
  ): LivenessSessionsListSessions;
  /** Resource for '/face/\{apiVersion\}/detectLiveness/singleModal/sessions/\{sessionId\}' has methods for the following verbs: get, delete */
  (
    path: "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}",
    apiVersion: string,
    sessionId: string,
  ): LivenessSessionsGetSession;
  /** Resource for '/face/\{apiVersion\}/detectLiveness/singleModal/sessions/\{sessionId\}/audit' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}/audit",
    apiVersion: string,
    sessionId: string,
  ): LivenessSessionsListSessionAuditEntries;
  /** Resource for '/face/\{apiVersion\}/detectLivenessWithVerify/singleModal/sessions' has methods for the following verbs: get, post */
  (
    path: "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions",
    apiVersion: string,
  ): LivenessWithVerifySessionsListSessions;
  /** Resource for '/face/\{apiVersion\}/detectLivenessWithVerify/singleModal/sessions/\{sessionId\}' has methods for the following verbs: get, delete */
  (
    path: "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}",
    apiVersion: string,
    sessionId: string,
  ): LivenessWithVerifySessionsGetSession;
  /** Resource for '/face/\{apiVersion\}/detectLivenessWithVerify/singleModal/sessions/\{sessionId\}/audit' has methods for the following verbs: get */
  (
    path: "/face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}/audit",
    apiVersion: string,
    sessionId: string,
  ): LivenessWithVerifySessionsListSessionAuditEntries;
}

export type FaceClient = Client & {
  path: Routes;
};
