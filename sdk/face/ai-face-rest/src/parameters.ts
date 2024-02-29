// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  FaceList,
  AddFaceFromUrlContent,
  LargeFaceList,
  LargeFaceListFace,
  PersonDirectoryPerson,
  PersonDirectoryFace,
  DynamicPersonGroup,
  PersonGroup,
  PersonGroupPerson,
  PersonGroupPersonFace,
  LargePersonGroup,
  LargePersonGroupPerson,
  LargePersonGroupPersonFace,
  LivenessSessionCreationContent,
  LivenessSessionWithVerifyImageCreationContent,
} from "./models";

export interface DetectFromUrlBodyParam {
  body?: { url: string };
}

export interface DetectFromUrlQueryParamProperties {
  /** Return faceIds of the detected faces or not. The default value is true. */
  returnFaceId?: boolean;
  /** Return face landmarks of the detected faces or not. The default value is false. */
  returnFaceLandmarks?: boolean;
  /** Analyze and return the one or more specified face attributes in the comma-separated string like 'returnFaceAttributes=headPose,glasses'. Supported face attributes include headPose, glasses, occlusion, accessories, blur, exposure, noise, mask, and qualityForRecognition. Face attribute analysis has additional computational and time cost. */
  returnFaceAttributes?: string;
  /**
   * The 'recognitionModel' associated with the detected faceIds.
   *
   * Possible values: "recognition_01", "recognition_02", "recognition_03", "recognition_04"
   */
  recognitionModel?: string;
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
  /**
   * The 'detectionModel' associated with the detected faceIds.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** The number of seconds for the face ID being cached. Supported range from 60 seconds up to 86400 seconds. The default value is 86400 (24 hours). */
  faceIdTimeToLive?: number;
}

export interface DetectFromUrlQueryParam {
  queryParameters?: DetectFromUrlQueryParamProperties;
}

export interface DetectFromUrlMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/json";
}

export type DetectFromUrlParameters = DetectFromUrlQueryParam &
  DetectFromUrlMediaTypesParam &
  DetectFromUrlBodyParam &
  RequestParameters;

export interface DetectFromStreamBodyParam {
  /**
   * The image to be analyzed
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface DetectFromStreamQueryParamProperties {
  /** Return faceIds of the detected faces or not. The default value is true. */
  returnFaceId?: boolean;
  /** Return face landmarks of the detected faces or not. The default value is false. */
  returnFaceLandmarks?: boolean;
  /** Analyze and return the one or more specified face attributes in the comma-separated string like 'returnFaceAttributes=headPose,glasses'. Supported face attributes include headPose, glasses, occlusion, accessories, blur, exposure, noise, mask, and qualityForRecognition. Face attribute analysis has additional computational and time cost. */
  returnFaceAttributes?: string;
  /**
   * The 'recognitionModel' associated with the detected faceIds.
   *
   * Possible values: "recognition_01", "recognition_02", "recognition_03", "recognition_04"
   */
  recognitionModel?: string;
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
  /**
   * The 'detectionModel' associated with the detected faceIds.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** The number of seconds for the face ID being cached. Supported range from 60 seconds up to 86400 seconds. The default value is 86400 (24 hours). */
  faceIdTimeToLive?: number;
}

export interface DetectFromStreamQueryParam {
  queryParameters?: DetectFromStreamQueryParamProperties;
}

export interface DetectFromStreamMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/octet-stream";
}

export type DetectFromStreamParameters = DetectFromStreamQueryParam &
  DetectFromStreamMediaTypesParam &
  DetectFromStreamBodyParam &
  RequestParameters;

export interface FindSimilarBodyParam {
  body?: {
    faceId: string;
    maxNumOfCandidatesReturned?: number;
    mode?: string;
    faceIds: string[];
  };
}

export type FindSimilarParameters = FindSimilarBodyParam & RequestParameters;

export interface VerifyBodyParam {
  body?: { faceId1: string; faceId2: string };
}

export type VerifyParameters = VerifyBodyParam & RequestParameters;

export interface GroupBodyParam {
  body?: { faceIds: string[] };
}

export type GroupParameters = GroupBodyParam & RequestParameters;

export interface FaceListsCreateListBodyParam {
  /** The resource instance. */
  body: FaceList;
}

export type FaceListsCreateListParameters = FaceListsCreateListBodyParam &
  RequestParameters;
export type FaceListsDeleteListParameters = RequestParameters;

export interface FaceListsGetListQueryParamProperties {
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface FaceListsGetListQueryParam {
  queryParameters?: FaceListsGetListQueryParamProperties;
}

export type FaceListsGetListParameters = FaceListsGetListQueryParam &
  RequestParameters;

export interface FaceListsUpdateListBodyParam {
  /** The resource instance. */
  body: FaceList;
}

export type FaceListsUpdateListParameters = FaceListsUpdateListBodyParam &
  RequestParameters;

export interface FaceListsAddFaceFromUrlBodyParam {
  body?: AddFaceFromUrlContent;
}

export interface FaceListsAddFaceFromUrlQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface FaceListsAddFaceFromUrlQueryParam {
  queryParameters?: FaceListsAddFaceFromUrlQueryParamProperties;
}

export type FaceListsAddFaceFromUrlParameters =
  FaceListsAddFaceFromUrlQueryParam &
    FaceListsAddFaceFromUrlBodyParam &
    RequestParameters;

export interface FaceListsAddFaceFromStreamBodyParam {
  /**
   * The image to be analyzed
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface FaceListsAddFaceFromStreamQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface FaceListsAddFaceFromStreamQueryParam {
  queryParameters?: FaceListsAddFaceFromStreamQueryParamProperties;
}

export interface FaceListsAddFaceFromStreamMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/octet-stream";
}

export type FaceListsAddFaceFromStreamParameters =
  FaceListsAddFaceFromStreamQueryParam &
    FaceListsAddFaceFromStreamMediaTypesParam &
    FaceListsAddFaceFromStreamBodyParam &
    RequestParameters;
export type FaceListsDeleteFaceParameters = RequestParameters;

export interface FaceListsListListQueryParamProperties {
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface FaceListsListListQueryParam {
  queryParameters?: FaceListsListListQueryParamProperties;
}

export type FaceListsListListParameters = FaceListsListListQueryParam &
  RequestParameters;

export interface FaceListsFindSimilarFromFaceListBodyParam {
  body?: {
    faceId: string;
    maxNumOfCandidatesReturned?: number;
    mode?: string;
    faceListId: string;
  };
}

export type FaceListsFindSimilarFromFaceListParameters =
  FaceListsFindSimilarFromFaceListBodyParam & RequestParameters;

export interface LargeFaceListsCreateListBodyParam {
  /** The resource instance. */
  body: LargeFaceList;
}

export type LargeFaceListsCreateListParameters =
  LargeFaceListsCreateListBodyParam & RequestParameters;
export type LargeFaceListsDeleteListParameters = RequestParameters;

export interface LargeFaceListsGetListQueryParamProperties {
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface LargeFaceListsGetListQueryParam {
  queryParameters?: LargeFaceListsGetListQueryParamProperties;
}

export type LargeFaceListsGetListParameters = LargeFaceListsGetListQueryParam &
  RequestParameters;

export interface LargeFaceListsUpdateListBodyParam {
  /** The resource instance. */
  body: LargeFaceList;
}

export type LargeFaceListsUpdateListParameters =
  LargeFaceListsUpdateListBodyParam & RequestParameters;

export interface LargeFaceListsAddFaceFromUrlBodyParam {
  body?: AddFaceFromUrlContent;
}

export interface LargeFaceListsAddFaceFromUrlQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface LargeFaceListsAddFaceFromUrlQueryParam {
  queryParameters?: LargeFaceListsAddFaceFromUrlQueryParamProperties;
}

export type LargeFaceListsAddFaceFromUrlParameters =
  LargeFaceListsAddFaceFromUrlQueryParam &
    LargeFaceListsAddFaceFromUrlBodyParam &
    RequestParameters;

export interface LargeFaceListsAddFaceFromStreamBodyParam {
  /**
   * The image to be analyzed
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface LargeFaceListsAddFaceFromStreamQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface LargeFaceListsAddFaceFromStreamQueryParam {
  queryParameters?: LargeFaceListsAddFaceFromStreamQueryParamProperties;
}

export interface LargeFaceListsAddFaceFromStreamMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/octet-stream";
}

export type LargeFaceListsAddFaceFromStreamParameters =
  LargeFaceListsAddFaceFromStreamQueryParam &
    LargeFaceListsAddFaceFromStreamMediaTypesParam &
    LargeFaceListsAddFaceFromStreamBodyParam &
    RequestParameters;
export type LargeFaceListsDeleteFaceParameters = RequestParameters;

export interface LargeFaceListsListListQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface LargeFaceListsListListQueryParam {
  queryParameters?: LargeFaceListsListListQueryParamProperties;
}

export type LargeFaceListsListListParameters =
  LargeFaceListsListListQueryParam & RequestParameters;
export type LargeFaceListsTrainListParameters = RequestParameters;
export type LargeFaceListsGetTrainingStatusParameters = RequestParameters;
export type LargeFaceListsGetFaceParameters = RequestParameters;

export interface LargeFaceListsUpdateFaceBodyParam {
  /** The resource instance. */
  body: LargeFaceListFace;
}

export type LargeFaceListsUpdateFaceParameters =
  LargeFaceListsUpdateFaceBodyParam & RequestParameters;

export interface LargeFaceListsListFaceQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface LargeFaceListsListFaceQueryParam {
  queryParameters?: LargeFaceListsListFaceQueryParamProperties;
}

export type LargeFaceListsListFaceParameters =
  LargeFaceListsListFaceQueryParam & RequestParameters;

export interface LargeFaceListsFindSimilarFromLargeFaceListBodyParam {
  body?: {
    faceId: string;
    maxNumOfCandidatesReturned?: number;
    mode?: string;
    largeFaceListId: string;
  };
}

export type LargeFaceListsFindSimilarFromLargeFaceListParameters =
  LargeFaceListsFindSimilarFromLargeFaceListBodyParam & RequestParameters;
export type FaceAsyncOperationsGetStatusParameters = RequestParameters;

export interface PersonDirectoryPersonsCreatePersonBodyParam {
  /** The resource instance. */
  body: PersonDirectoryPerson;
}

export type PersonDirectoryPersonsCreatePersonParameters =
  PersonDirectoryPersonsCreatePersonBodyParam & RequestParameters;
export type PersonDirectoryPersonsDeletePersonParameters = RequestParameters;
export type PersonDirectoryPersonsGetPersonParameters = RequestParameters;

export interface PersonDirectoryPersonsUpdatePersonBodyParam {
  /** The resource instance. */
  body: PersonDirectoryPerson;
}

export type PersonDirectoryPersonsUpdatePersonParameters =
  PersonDirectoryPersonsUpdatePersonBodyParam & RequestParameters;

export interface PersonDirectoryPersonsListPersonQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface PersonDirectoryPersonsListPersonQueryParam {
  queryParameters?: PersonDirectoryPersonsListPersonQueryParamProperties;
}

export type PersonDirectoryPersonsListPersonParameters =
  PersonDirectoryPersonsListPersonQueryParam & RequestParameters;

export interface PersonDirectoryPersonsListGroupReferenceQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface PersonDirectoryPersonsListGroupReferenceQueryParam {
  queryParameters?: PersonDirectoryPersonsListGroupReferenceQueryParamProperties;
}

export type PersonDirectoryPersonsListGroupReferenceParameters =
  PersonDirectoryPersonsListGroupReferenceQueryParam & RequestParameters;

export interface PersonDirectoryPersonsAddFaceFromUrlBodyParam {
  /** The body type of the operation request or response. */
  body: AddFaceFromUrlContent;
}

export interface PersonDirectoryPersonsAddFaceFromUrlQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface PersonDirectoryPersonsAddFaceFromUrlQueryParam {
  queryParameters?: PersonDirectoryPersonsAddFaceFromUrlQueryParamProperties;
}

export type PersonDirectoryPersonsAddFaceFromUrlParameters =
  PersonDirectoryPersonsAddFaceFromUrlQueryParam &
    PersonDirectoryPersonsAddFaceFromUrlBodyParam &
    RequestParameters;

export interface PersonDirectoryPersonsAddFaceFromStreamBodyParam {
  /**
   * The image to be analyzed
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface PersonDirectoryPersonsAddFaceFromStreamQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface PersonDirectoryPersonsAddFaceFromStreamQueryParam {
  queryParameters?: PersonDirectoryPersonsAddFaceFromStreamQueryParamProperties;
}

export interface PersonDirectoryPersonsAddFaceFromStreamMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/octet-stream";
}

export type PersonDirectoryPersonsAddFaceFromStreamParameters =
  PersonDirectoryPersonsAddFaceFromStreamQueryParam &
    PersonDirectoryPersonsAddFaceFromStreamMediaTypesParam &
    PersonDirectoryPersonsAddFaceFromStreamBodyParam &
    RequestParameters;
export type PersonDirectoryPersonsDeleteFaceParameters = RequestParameters;
export type PersonDirectoryPersonsGetFaceParameters = RequestParameters;

export interface PersonDirectoryPersonsUpdateFaceBodyParam {
  /** The resource instance. */
  body: PersonDirectoryFace;
}

export type PersonDirectoryPersonsUpdateFaceParameters =
  PersonDirectoryPersonsUpdateFaceBodyParam & RequestParameters;
export type PersonDirectoryPersonsListFaceParameters = RequestParameters;

export interface PersonDirectoryPersonsIdentifyFromPersonDirectoryBodyParam {
  body?: {
    faceIds: string[];
    personIds: string[];
    maxNumOfCandidatesReturned?: number;
    confidenceThreshold?: number;
  };
}

export type PersonDirectoryPersonsIdentifyFromPersonDirectoryParameters =
  PersonDirectoryPersonsIdentifyFromPersonDirectoryBodyParam &
    RequestParameters;

export interface PersonDirectoryPersonsVerifyFromPersonDirectoryBodyParam {
  body?: { faceId: string; personId: string };
}

export type PersonDirectoryPersonsVerifyFromPersonDirectoryParameters =
  PersonDirectoryPersonsVerifyFromPersonDirectoryBodyParam & RequestParameters;

export interface PersonDirectoryDynamicPersonGroupsCreateGroupBodyParam {
  /** The resource instance. */
  body: DynamicPersonGroup;
}

export type PersonDirectoryDynamicPersonGroupsCreateGroupParameters =
  PersonDirectoryDynamicPersonGroupsCreateGroupBodyParam & RequestParameters;
export type PersonDirectoryDynamicPersonGroupsDeleteGroupParameters =
  RequestParameters;
export type PersonDirectoryDynamicPersonGroupsGetGroupParameters =
  RequestParameters;

export interface PersonDirectoryDynamicPersonGroupsUpdateGroupBodyParam {
  /** The resource instance. */
  body: {
    dynamicPersonGroupId: string;
    name: string;
    userData?: string;
    addPersonIds?: string[];
    removePersonIds?: string[];
  };
}

export type PersonDirectoryDynamicPersonGroupsUpdateGroupParameters =
  PersonDirectoryDynamicPersonGroupsUpdateGroupBodyParam & RequestParameters;

export interface PersonDirectoryDynamicPersonGroupsListGroupQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupQueryParam {
  queryParameters?: PersonDirectoryDynamicPersonGroupsListGroupQueryParamProperties;
}

export type PersonDirectoryDynamicPersonGroupsListGroupParameters =
  PersonDirectoryDynamicPersonGroupsListGroupQueryParam & RequestParameters;

export interface PersonDirectoryDynamicPersonGroupsListGroupPersonQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface PersonDirectoryDynamicPersonGroupsListGroupPersonQueryParam {
  queryParameters?: PersonDirectoryDynamicPersonGroupsListGroupPersonQueryParamProperties;
}

export type PersonDirectoryDynamicPersonGroupsListGroupPersonParameters =
  PersonDirectoryDynamicPersonGroupsListGroupPersonQueryParam &
    RequestParameters;

export interface PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupBodyParam {
  body?: {
    faceIds: string[];
    dynamicPersonGroupId: string;
    maxNumOfCandidatesReturned?: number;
    confidenceThreshold?: number;
  };
}

export type PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupParameters =
  PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroupBodyParam &
    RequestParameters;

export interface PersonGroupsCreateGroupBodyParam {
  /** The resource instance. */
  body: PersonGroup;
}

export type PersonGroupsCreateGroupParameters =
  PersonGroupsCreateGroupBodyParam & RequestParameters;
export type PersonGroupsDeleteGroupParameters = RequestParameters;

export interface PersonGroupsGetGroupQueryParamProperties {
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface PersonGroupsGetGroupQueryParam {
  queryParameters?: PersonGroupsGetGroupQueryParamProperties;
}

export type PersonGroupsGetGroupParameters = PersonGroupsGetGroupQueryParam &
  RequestParameters;

export interface PersonGroupsUpdateGroupBodyParam {
  /** The resource instance. */
  body: PersonGroup;
}

export type PersonGroupsUpdateGroupParameters =
  PersonGroupsUpdateGroupBodyParam & RequestParameters;

export interface PersonGroupsListGroupQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface PersonGroupsListGroupQueryParam {
  queryParameters?: PersonGroupsListGroupQueryParamProperties;
}

export type PersonGroupsListGroupParameters = PersonGroupsListGroupQueryParam &
  RequestParameters;

export interface PersonGroupsCreatePersonBodyParam {
  /** The resource instance. */
  body: PersonGroupPerson;
}

export type PersonGroupsCreatePersonParameters =
  PersonGroupsCreatePersonBodyParam & RequestParameters;
export type PersonGroupsDeletePersonParameters = RequestParameters;
export type PersonGroupsGetPersonParameters = RequestParameters;

export interface PersonGroupsUpdatePersonBodyParam {
  /** The resource instance. */
  body: PersonGroupPerson;
}

export type PersonGroupsUpdatePersonParameters =
  PersonGroupsUpdatePersonBodyParam & RequestParameters;

export interface PersonGroupsListPersonQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface PersonGroupsListPersonQueryParam {
  queryParameters?: PersonGroupsListPersonQueryParamProperties;
}

export type PersonGroupsListPersonParameters =
  PersonGroupsListPersonQueryParam & RequestParameters;

export interface PersonGroupsAddFaceFromUrlBodyParam {
  body?: AddFaceFromUrlContent;
}

export interface PersonGroupsAddFaceFromUrlQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface PersonGroupsAddFaceFromUrlQueryParam {
  queryParameters?: PersonGroupsAddFaceFromUrlQueryParamProperties;
}

export type PersonGroupsAddFaceFromUrlParameters =
  PersonGroupsAddFaceFromUrlQueryParam &
    PersonGroupsAddFaceFromUrlBodyParam &
    RequestParameters;

export interface PersonGroupsAddFaceFromStreamBodyParam {
  /**
   * The image to be analyzed
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface PersonGroupsAddFaceFromStreamQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface PersonGroupsAddFaceFromStreamQueryParam {
  queryParameters?: PersonGroupsAddFaceFromStreamQueryParamProperties;
}

export interface PersonGroupsAddFaceFromStreamMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/octet-stream";
}

export type PersonGroupsAddFaceFromStreamParameters =
  PersonGroupsAddFaceFromStreamQueryParam &
    PersonGroupsAddFaceFromStreamMediaTypesParam &
    PersonGroupsAddFaceFromStreamBodyParam &
    RequestParameters;
export type PersonGroupsDeleteFaceParameters = RequestParameters;
export type PersonGroupsGetFaceParameters = RequestParameters;

export interface PersonGroupsUpdateFaceBodyParam {
  /** The resource instance. */
  body: PersonGroupPersonFace;
}

export type PersonGroupsUpdateFaceParameters = PersonGroupsUpdateFaceBodyParam &
  RequestParameters;

export interface PersonGroupsIdentifyFromPersonGroupBodyParam {
  body?: {
    faceIds: string[];
    personGroupId: string;
    maxNumOfCandidatesReturned?: number;
    confidenceThreshold?: number;
  };
}

export type PersonGroupsIdentifyFromPersonGroupParameters =
  PersonGroupsIdentifyFromPersonGroupBodyParam & RequestParameters;

export interface PersonGroupsVerifyFromPersonGroupBodyParam {
  body?: { faceId: string; personGroupId: string; personId: string };
}

export type PersonGroupsVerifyFromPersonGroupParameters =
  PersonGroupsVerifyFromPersonGroupBodyParam & RequestParameters;
export type PersonGroupsTrainGroupParameters = RequestParameters;
export type PersonGroupsGetTrainingStatusParameters = RequestParameters;

export interface LargePersonGroupsCreateGroupBodyParam {
  /** The resource instance. */
  body: LargePersonGroup;
}

export type LargePersonGroupsCreateGroupParameters =
  LargePersonGroupsCreateGroupBodyParam & RequestParameters;
export type LargePersonGroupsDeleteGroupParameters = RequestParameters;

export interface LargePersonGroupsGetGroupQueryParamProperties {
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface LargePersonGroupsGetGroupQueryParam {
  queryParameters?: LargePersonGroupsGetGroupQueryParamProperties;
}

export type LargePersonGroupsGetGroupParameters =
  LargePersonGroupsGetGroupQueryParam & RequestParameters;

export interface LargePersonGroupsUpdateGroupBodyParam {
  /** The resource instance. */
  body: LargePersonGroup;
}

export type LargePersonGroupsUpdateGroupParameters =
  LargePersonGroupsUpdateGroupBodyParam & RequestParameters;

export interface LargePersonGroupsListGroupQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
  /** Return 'recognitionModel' or not. The default value is false. */
  returnRecognitionModel?: boolean;
}

export interface LargePersonGroupsListGroupQueryParam {
  queryParameters?: LargePersonGroupsListGroupQueryParamProperties;
}

export type LargePersonGroupsListGroupParameters =
  LargePersonGroupsListGroupQueryParam & RequestParameters;

export interface LargePersonGroupsCreatePersonBodyParam {
  /** The resource instance. */
  body: LargePersonGroupPerson;
}

export type LargePersonGroupsCreatePersonParameters =
  LargePersonGroupsCreatePersonBodyParam & RequestParameters;
export type LargePersonGroupsDeletePersonParameters = RequestParameters;
export type LargePersonGroupsGetPersonParameters = RequestParameters;

export interface LargePersonGroupsUpdatePersonBodyParam {
  /** The resource instance. */
  body: LargePersonGroupPerson;
}

export type LargePersonGroupsUpdatePersonParameters =
  LargePersonGroupsUpdatePersonBodyParam & RequestParameters;

export interface LargePersonGroupsListPersonQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface LargePersonGroupsListPersonQueryParam {
  queryParameters?: LargePersonGroupsListPersonQueryParamProperties;
}

export type LargePersonGroupsListPersonParameters =
  LargePersonGroupsListPersonQueryParam & RequestParameters;

export interface LargePersonGroupsAddFaceFromUrlBodyParam {
  body?: AddFaceFromUrlContent;
}

export interface LargePersonGroupsAddFaceFromUrlQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface LargePersonGroupsAddFaceFromUrlQueryParam {
  queryParameters?: LargePersonGroupsAddFaceFromUrlQueryParamProperties;
}

export type LargePersonGroupsAddFaceFromUrlParameters =
  LargePersonGroupsAddFaceFromUrlQueryParam &
    LargePersonGroupsAddFaceFromUrlBodyParam &
    RequestParameters;

export interface LargePersonGroupsAddFaceFromStreamBodyParam {
  /**
   * The image to be analyzed
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface LargePersonGroupsAddFaceFromStreamQueryParamProperties {
  /** A face rectangle to specify the target face to be added to a person, in the format of 'targetFace=left,top,width,height'. */
  targetFace?: string;
  /**
   * The 'detectionModel' associated with the detected faceIds. Supported 'detectionModel' values include 'detection_01', 'detection_02' and 'detection_03'. The default value is 'detection_01'.
   *
   * Possible values: "detection_01", "detection_02", "detection_03"
   */
  detectionModel?: string;
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

export interface LargePersonGroupsAddFaceFromStreamQueryParam {
  queryParameters?: LargePersonGroupsAddFaceFromStreamQueryParamProperties;
}

export interface LargePersonGroupsAddFaceFromStreamMediaTypesParam {
  /** The format of the HTTP payload. */
  contentType: "application/octet-stream";
}

export type LargePersonGroupsAddFaceFromStreamParameters =
  LargePersonGroupsAddFaceFromStreamQueryParam &
    LargePersonGroupsAddFaceFromStreamMediaTypesParam &
    LargePersonGroupsAddFaceFromStreamBodyParam &
    RequestParameters;
export type LargePersonGroupsDeleteFaceParameters = RequestParameters;
export type LargePersonGroupsGetFaceParameters = RequestParameters;

export interface LargePersonGroupsUpdateFaceBodyParam {
  /** The resource instance. */
  body: LargePersonGroupPersonFace;
}

export type LargePersonGroupsUpdateFaceParameters =
  LargePersonGroupsUpdateFaceBodyParam & RequestParameters;

export interface LargePersonGroupsIdentifyFromLargePersonGroupBodyParam {
  body?: {
    faceIds: string[];
    largePersonGroupId: string;
    maxNumOfCandidatesReturned?: number;
    confidenceThreshold?: number;
  };
}

export type LargePersonGroupsIdentifyFromLargePersonGroupParameters =
  LargePersonGroupsIdentifyFromLargePersonGroupBodyParam & RequestParameters;

export interface LargePersonGroupsVerifyFromLargePersonGroupBodyParam {
  body?: { faceId: string; largePersonGroupId: string; personId: string };
}

export type LargePersonGroupsVerifyFromLargePersonGroupParameters =
  LargePersonGroupsVerifyFromLargePersonGroupBodyParam & RequestParameters;
export type LargePersonGroupsTrainGroupParameters = RequestParameters;
export type LargePersonGroupsGetTrainingStatusParameters = RequestParameters;

export interface LivenessSessionsListSessionsQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface LivenessSessionsListSessionsQueryParam {
  queryParameters?: LivenessSessionsListSessionsQueryParamProperties;
}

export type LivenessSessionsListSessionsParameters =
  LivenessSessionsListSessionsQueryParam & RequestParameters;
export type LivenessSessionsGetSessionParameters = RequestParameters;
export type LivenessSessionsDeleteSessionParameters = RequestParameters;

export interface LivenessSessionsListSessionAuditEntriesQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface LivenessSessionsListSessionAuditEntriesQueryParam {
  queryParameters?: LivenessSessionsListSessionAuditEntriesQueryParamProperties;
}

export type LivenessSessionsListSessionAuditEntriesParameters =
  LivenessSessionsListSessionAuditEntriesQueryParam & RequestParameters;

export interface LivenessSessionsCreateSessionBodyParam {
  body?: LivenessSessionCreationContent;
}

export type LivenessSessionsCreateSessionParameters =
  LivenessSessionsCreateSessionBodyParam & RequestParameters;

export interface LivenessWithVerifySessionsListSessionsQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface LivenessWithVerifySessionsListSessionsQueryParam {
  queryParameters?: LivenessWithVerifySessionsListSessionsQueryParamProperties;
}

export type LivenessWithVerifySessionsListSessionsParameters =
  LivenessWithVerifySessionsListSessionsQueryParam & RequestParameters;
export type LivenessWithVerifySessionsGetSessionParameters = RequestParameters;
export type LivenessWithVerifySessionsDeleteSessionParameters =
  RequestParameters;

export interface LivenessWithVerifySessionsListSessionAuditEntriesQueryParamProperties {
  /** List resources greater than the "start". It contains no more than 64 characters. Default is empty. */
  start?: string;
  /** The number of items to list, ranging in [1, 1000]. Default is 1000. */
  top?: number;
}

export interface LivenessWithVerifySessionsListSessionAuditEntriesQueryParam {
  queryParameters?: LivenessWithVerifySessionsListSessionAuditEntriesQueryParamProperties;
}

export type LivenessWithVerifySessionsListSessionAuditEntriesParameters =
  LivenessWithVerifySessionsListSessionAuditEntriesQueryParam &
    RequestParameters;

export interface LivenessWithVerifySessionsCreateSessionBodyParam {
  body?: LivenessSessionCreationContent;
}

export type LivenessWithVerifySessionsCreateSessionParameters =
  LivenessWithVerifySessionsCreateSessionBodyParam & RequestParameters;

export interface LivenessWithVerifySessionsCreateSessionWithVerifyImageBodyParam {
  body?: LivenessSessionWithVerifyImageCreationContent;
}

export interface LivenessWithVerifySessionsCreateSessionWithVerifyImageMediaTypesParam {
  /** The content type for the operation. Always multipart/form-data for this operation. */
  contentType: "multipart/form-data";
}

export type LivenessWithVerifySessionsCreateSessionWithVerifyImageParameters =
  LivenessWithVerifySessionsCreateSessionWithVerifyImageMediaTypesParam &
    LivenessWithVerifySessionsCreateSessionWithVerifyImageBodyParam &
    RequestParameters;
