// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Face list is a list of faces, up to 1,000 faces. */
export interface FaceList {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** Face resource for face list. */
export interface FaceListFace {
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

/** Model for add face by url. */
export interface AddFaceFromUrlContent {
  /** URL of input image. */
  url: string;
}

/** Large face list is a list of faces, up to 1,000,000 faces. */
export interface LargeFaceList {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** Face resource for large face list. */
export interface LargeFaceListFace {
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

/** Person resource for person directory */
export interface PersonDirectoryPerson {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** Face resource for person directory person. */
export interface PersonDirectoryFace {
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

/** A container that references PersonDirectory Person - Create. */
export interface DynamicPersonGroup {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
  /** Array of personIds created by PersonDirectory Person - Create to add. */
  addPersonIds?: string[];
}

/** Free-tier subscription quota: 1,000 person groups. Each holds up to 1,000 persons. S0-tier subscription quota: 1,000,000 person groups. Each holds up to 10,000 persons. To handle larger scale face identification problem, please consider using LargePersonGroup. */
export interface PersonGroup {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** The person in a specified person group. To add face to this person, please call LargePersonGroup PersonFace - Add. */
export interface PersonGroupPerson {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** Face resource for person group person. */
export interface PersonGroupPersonFace {
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

/** The container of the uploaded person data, including face recognition feature, and up to 1,000,000 people. */
export interface LargePersonGroup {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** The person in a specified large person group. To add face to this person, please call LargePersonGroup PersonFace - Add. */
export interface LargePersonGroupPerson {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16KB. */
  userData?: string;
}

/** Face resource for large person group person. */
export interface LargePersonGroupPersonFace {
  /** User-provided data attached to the face. The size limit is 1KB. */
  userData?: string;
}

/** Request for creating liveness session. */
export interface LivenessSessionCreationContent {
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Whether or not send back the operation response to client. */
  sendResultsToClient?: boolean;
  /** Whether or not the device correlation id is set by the client. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Request of liveness with verify session creation. */
export interface LivenessSessionWithVerifyImageCreationContent {
  /** The CreationContent for creating session. */
  CreationContent: LivenessSessionCreationContentForMultipart;
  /** The image stream for verify. */
  VerifyImage: string;
}

/** Dedicated parameter model for multipart/form-data. */
export interface LivenessSessionCreationContentForMultipart {
  /** The operation mode for the liveness modal. */
  livenessOperationMode: string;
  /** Whether or not send back the operation response to client. */
  sendResultsToClient?: boolean;
  /** Whether or not the device correlation id is set by the client. */
  deviceCorrelationIdSetInClient?: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
}
