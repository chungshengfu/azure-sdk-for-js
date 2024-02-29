// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  DetectFromUrl200Response,
  DetectFromStream200Response,
  DetectFromUrlDefaultResponse,
  FindSimilar200Response,
  FaceListsFindSimilarFromFaceList200Response,
  LargeFaceListsFindSimilarFromLargeFaceList200Response,
  FindSimilarDefaultResponse,
  Verify200Response,
  PersonDirectoryPersonsVerifyFromPersonDirectory200Response,
  PersonGroupsVerifyFromPersonGroup200Response,
  LargePersonGroupsVerifyFromLargePersonGroup200Response,
  VerifyDefaultResponse,
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
  FaceListsAddFaceFromStream200Response,
  FaceListsAddFaceFromUrlDefaultResponse,
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
  LargeFaceListsAddFaceFromStream200Response,
  LargeFaceListsAddFaceFromUrlDefaultResponse,
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
  LargeFaceListsTrainListLogicalResponse,
  LargeFaceListsTrainListDefaultResponse,
  LargeFaceListsGetTrainingStatus200Response,
  LargeFaceListsGetTrainingStatusDefaultResponse,
  FaceAsyncOperationsGetStatus200Response,
  FaceAsyncOperationsGetStatusDefaultResponse,
  PersonDirectoryPersonsCreatePerson202Response,
  PersonDirectoryPersonsCreatePersonLogicalResponse,
  PersonDirectoryPersonsCreatePersonDefaultResponse,
  PersonDirectoryPersonsListPerson200Response,
  PersonDirectoryPersonsListPersonDefaultResponse,
  PersonDirectoryPersonsDeletePerson202Response,
  PersonDirectoryPersonsDeletePersonLogicalResponse,
  PersonDirectoryPersonsDeletePersonDefaultResponse,
  PersonDirectoryPersonsGetPerson200Response,
  PersonDirectoryPersonsGetPersonDefaultResponse,
  PersonDirectoryPersonsUpdatePerson200Response,
  PersonDirectoryPersonsUpdatePersonDefaultResponse,
  PersonDirectoryPersonsListGroupReference200Response,
  PersonDirectoryPersonsListGroupReferenceDefaultResponse,
  PersonDirectoryPersonsAddFaceFromUrl202Response,
  PersonDirectoryPersonsAddFaceFromStream202Response,
  PersonDirectoryPersonsAddFaceFromUrlLogicalResponse,
  PersonDirectoryPersonsAddFaceFromStreamLogicalResponse,
  PersonDirectoryPersonsAddFaceFromUrlDefaultResponse,
  PersonDirectoryPersonsListFace200Response,
  PersonDirectoryPersonsListFaceDefaultResponse,
  PersonDirectoryPersonsDeleteFace202Response,
  PersonDirectoryPersonsDeleteFaceLogicalResponse,
  PersonDirectoryPersonsDeleteFaceDefaultResponse,
  PersonDirectoryPersonsGetFace200Response,
  PersonDirectoryPersonsGetFaceDefaultResponse,
  PersonDirectoryPersonsUpdateFace200Response,
  PersonDirectoryPersonsUpdateFaceDefaultResponse,
  PersonDirectoryPersonsIdentifyFromPersonDirectory200Response,
  PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroup200Response,
  PersonGroupsIdentifyFromPersonGroup200Response,
  LargePersonGroupsIdentifyFromLargePersonGroup200Response,
  PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse,
  PersonDirectoryDynamicPersonGroupsCreateGroup200Response,
  PersonDirectoryDynamicPersonGroupsCreateGroup202Response,
  PersonDirectoryDynamicPersonGroupsCreateGroupLogicalResponse,
  PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsDeleteGroup202Response,
  PersonDirectoryDynamicPersonGroupsDeleteGroupLogicalResponse,
  PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsGetGroup200Response,
  PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse,
  PersonDirectoryDynamicPersonGroupsUpdateGroup200Response,
  PersonDirectoryDynamicPersonGroupsUpdateGroup202Response,
  PersonDirectoryDynamicPersonGroupsUpdateGroupLogicalResponse,
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
  PersonGroupsAddFaceFromStream200Response,
  PersonGroupsAddFaceFromUrlDefaultResponse,
  PersonGroupsDeleteFace200Response,
  PersonGroupsDeleteFaceDefaultResponse,
  PersonGroupsGetFace200Response,
  PersonGroupsGetFaceDefaultResponse,
  PersonGroupsUpdateFace200Response,
  PersonGroupsUpdateFaceDefaultResponse,
  PersonGroupsTrainGroup202Response,
  PersonGroupsTrainGroupLogicalResponse,
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
  LargePersonGroupsAddFaceFromStream200Response,
  LargePersonGroupsAddFaceFromUrlDefaultResponse,
  LargePersonGroupsDeleteFace200Response,
  LargePersonGroupsDeleteFaceDefaultResponse,
  LargePersonGroupsGetFace200Response,
  LargePersonGroupsGetFaceDefaultResponse,
  LargePersonGroupsUpdateFace200Response,
  LargePersonGroupsUpdateFaceDefaultResponse,
  LargePersonGroupsTrainGroup202Response,
  LargePersonGroupsTrainGroupLogicalResponse,
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
  LivenessWithVerifySessionsCreateSessionWithVerifyImage200Response,
  LivenessWithVerifySessionsCreateSessionDefaultResponse,
  LivenessWithVerifySessionsGetSession200Response,
  LivenessWithVerifySessionsGetSessionDefaultResponse,
  LivenessWithVerifySessionsDeleteSession200Response,
  LivenessWithVerifySessionsDeleteSessionDefaultResponse,
  LivenessWithVerifySessionsListSessionAuditEntries200Response,
  LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "POST /face/{apiVersion}/detect": ["200"],
  "POST /face/{apiVersion}/findsimilars": ["200"],
  "POST /face/{apiVersion}/verify": ["200"],
  "POST /face/{apiVersion}/group": ["200"],
  "PUT /face/{apiVersion}/facelists/{faceListId}": ["200"],
  "DELETE /face/{apiVersion}/facelists/{faceListId}": ["200"],
  "GET /face/{apiVersion}/facelists/{faceListId}": ["200"],
  "PATCH /face/{apiVersion}/facelists/{faceListId}": ["200"],
  "POST /face/{apiVersion}/facelists/{faceListId}/persistedfaces": ["200"],
  "DELETE /face/{apiVersion}/facelists/{faceListId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "GET /face/{apiVersion}/facelists": ["200"],
  "PUT /face/{apiVersion}/largefacelists/{largeFaceListId}": ["200"],
  "DELETE /face/{apiVersion}/largefacelists/{largeFaceListId}": ["200"],
  "GET /face/{apiVersion}/largefacelists/{largeFaceListId}": ["200"],
  "PATCH /face/{apiVersion}/largefacelists/{largeFaceListId}": ["200"],
  "POST /face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces": [
    "200",
  ],
  "GET /face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces": [
    "200",
  ],
  "DELETE /face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "GET /face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "PATCH /face/{apiVersion}/largefacelists/{largeFaceListId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "GET /face/{apiVersion}/largefacelists": ["200"],
  "POST /face/{apiVersion}/largefacelists/{largeFaceListId}/train": ["202"],
  "GET /face/{apiVersion}/largefacelists/{largeFaceListId}/train": [
    "200",
    "202",
  ],
  "GET /face/{apiVersion}/largefacelists/{largeFaceListId}/training": ["200"],
  "GET /face/{apiVersion}/operations/{operationId}": ["200"],
  "POST /face/{apiVersion}/persons": ["202"],
  "GET /face/{apiVersion}/persons": ["200"],
  "DELETE /face/{apiVersion}/persons/{personId}": ["202"],
  "GET /face/{apiVersion}/persons/{personId}": ["200"],
  "PATCH /face/{apiVersion}/persons/{personId}": ["200"],
  "GET /face/{apiVersion}/persons/{personId}/dynamicPersonGroupReferences": [
    "200",
  ],
  "POST /face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces":
    ["202"],
  "GET /face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces":
    ["200"],
  "DELETE /face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces/{persistedFaceId}":
    ["202"],
  "GET /face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces/{persistedFaceId}":
    ["200"],
  "PATCH /face/{apiVersion}/persons/{personId}/recognitionModels/{recognitionModel}/persistedfaces/{persistedFaceId}":
    ["200"],
  "POST /face/{apiVersion}/identify": ["200"],
  "PUT /face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}": [
    "200",
    "202",
  ],
  "GET /face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}": ["200"],
  "DELETE /face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}": [
    "202",
  ],
  "PATCH /face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}": [
    "200",
    "202",
  ],
  "GET /face/{apiVersion}/dynamicpersongroups": ["200"],
  "GET /face/{apiVersion}/dynamicpersongroups/{dynamicPersonGroupId}/persons": [
    "200",
  ],
  "PUT /face/{apiVersion}/persongroups/{personGroupId}": ["200"],
  "DELETE /face/{apiVersion}/persongroups/{personGroupId}": ["200"],
  "GET /face/{apiVersion}/persongroups/{personGroupId}": ["200"],
  "PATCH /face/{apiVersion}/persongroups/{personGroupId}": ["200"],
  "GET /face/{apiVersion}/persongroups": ["200"],
  "POST /face/{apiVersion}/persongroups/{personGroupId}/persons": ["200"],
  "GET /face/{apiVersion}/persongroups/{personGroupId}/persons": ["200"],
  "DELETE /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}": [
    "200",
  ],
  "GET /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}": [
    "200",
  ],
  "PATCH /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}": [
    "200",
  ],
  "POST /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}/persistedfaces":
    ["200"],
  "DELETE /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "GET /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "PATCH /face/{apiVersion}/persongroups/{personGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "POST /face/{apiVersion}/persongroups/{personGroupId}/train": ["202"],
  "GET /face/{apiVersion}/persongroups/{personGroupId}/train": ["200", "202"],
  "GET /face/{apiVersion}/persongroups/{personGroupId}/training": ["200"],
  "PUT /face/{apiVersion}/largepersongroups/{largePersonGroupId}": ["200"],
  "DELETE /face/{apiVersion}/largepersongroups/{largePersonGroupId}": ["200"],
  "GET /face/{apiVersion}/largepersongroups/{largePersonGroupId}": ["200"],
  "PATCH /face/{apiVersion}/largepersongroups/{largePersonGroupId}": ["200"],
  "GET /face/{apiVersion}/largepersongroups": ["200"],
  "POST /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons": [
    "200",
  ],
  "GET /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons": [
    "200",
  ],
  "DELETE /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}":
    ["200"],
  "GET /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}":
    ["200"],
  "PATCH /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}":
    ["200"],
  "POST /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces":
    ["200"],
  "DELETE /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "GET /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "PATCH /face/{apiVersion}/largepersongroups/{largePersonGroupId}/persons/{personId}/persistedfaces/{persistedFaceId}":
    ["200"],
  "POST /face/{apiVersion}/largepersongroups/{largePersonGroupId}/train": [
    "202",
  ],
  "GET /face/{apiVersion}/largepersongroups/{largePersonGroupId}/train": [
    "200",
    "202",
  ],
  "GET /face/{apiVersion}/largepersongroups/{largePersonGroupId}/training": [
    "200",
  ],
  "GET /face/{apiVersion}/detectLiveness/singleModal/sessions": ["200"],
  "POST /face/{apiVersion}/detectLiveness/singleModal/sessions": ["200"],
  "GET /face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}": [
    "200",
  ],
  "DELETE /face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}": [
    "200",
  ],
  "GET /face/{apiVersion}/detectLiveness/singleModal/sessions/{sessionId}/audit":
    ["200"],
  "GET /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions": [
    "200",
  ],
  "POST /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions": [
    "200",
  ],
  "GET /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}":
    ["200"],
  "DELETE /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}":
    ["200"],
  "GET /face/{apiVersion}/detectLivenessWithVerify/singleModal/sessions/{sessionId}/audit":
    ["200"],
};

export function isUnexpected(
  response:
    | DetectFromUrl200Response
    | DetectFromStream200Response
    | DetectFromUrlDefaultResponse,
): response is DetectFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | FindSimilar200Response
    | FaceListsFindSimilarFromFaceList200Response
    | LargeFaceListsFindSimilarFromLargeFaceList200Response
    | FindSimilarDefaultResponse,
): response is FindSimilarDefaultResponse;
export function isUnexpected(
  response:
    | Verify200Response
    | PersonDirectoryPersonsVerifyFromPersonDirectory200Response
    | PersonGroupsVerifyFromPersonGroup200Response
    | LargePersonGroupsVerifyFromLargePersonGroup200Response
    | VerifyDefaultResponse,
): response is VerifyDefaultResponse;
export function isUnexpected(
  response: Group200Response | GroupDefaultResponse,
): response is GroupDefaultResponse;
export function isUnexpected(
  response: FaceListsCreateList200Response | FaceListsCreateListDefaultResponse,
): response is FaceListsCreateListDefaultResponse;
export function isUnexpected(
  response: FaceListsDeleteList200Response | FaceListsDeleteListDefaultResponse,
): response is FaceListsDeleteListDefaultResponse;
export function isUnexpected(
  response: FaceListsGetList200Response | FaceListsGetListDefaultResponse,
): response is FaceListsGetListDefaultResponse;
export function isUnexpected(
  response: FaceListsUpdateList200Response | FaceListsUpdateListDefaultResponse,
): response is FaceListsUpdateListDefaultResponse;
export function isUnexpected(
  response:
    | FaceListsAddFaceFromUrl200Response
    | FaceListsAddFaceFromStream200Response
    | FaceListsAddFaceFromUrlDefaultResponse,
): response is FaceListsAddFaceFromUrlDefaultResponse;
export function isUnexpected(
  response: FaceListsDeleteFace200Response | FaceListsDeleteFaceDefaultResponse,
): response is FaceListsDeleteFaceDefaultResponse;
export function isUnexpected(
  response: FaceListsListList200Response | FaceListsListListDefaultResponse,
): response is FaceListsListListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsCreateList200Response
    | LargeFaceListsCreateListDefaultResponse,
): response is LargeFaceListsCreateListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsDeleteList200Response
    | LargeFaceListsDeleteListDefaultResponse,
): response is LargeFaceListsDeleteListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsGetList200Response
    | LargeFaceListsGetListDefaultResponse,
): response is LargeFaceListsGetListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsUpdateList200Response
    | LargeFaceListsUpdateListDefaultResponse,
): response is LargeFaceListsUpdateListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsAddFaceFromUrl200Response
    | LargeFaceListsAddFaceFromStream200Response
    | LargeFaceListsAddFaceFromUrlDefaultResponse,
): response is LargeFaceListsAddFaceFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsListFace200Response
    | LargeFaceListsListFaceDefaultResponse,
): response is LargeFaceListsListFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsDeleteFace200Response
    | LargeFaceListsDeleteFaceDefaultResponse,
): response is LargeFaceListsDeleteFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsGetFace200Response
    | LargeFaceListsGetFaceDefaultResponse,
): response is LargeFaceListsGetFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsUpdateFace200Response
    | LargeFaceListsUpdateFaceDefaultResponse,
): response is LargeFaceListsUpdateFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsListList200Response
    | LargeFaceListsListListDefaultResponse,
): response is LargeFaceListsListListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsTrainList202Response
    | LargeFaceListsTrainListLogicalResponse
    | LargeFaceListsTrainListDefaultResponse,
): response is LargeFaceListsTrainListDefaultResponse;
export function isUnexpected(
  response:
    | LargeFaceListsGetTrainingStatus200Response
    | LargeFaceListsGetTrainingStatusDefaultResponse,
): response is LargeFaceListsGetTrainingStatusDefaultResponse;
export function isUnexpected(
  response:
    | FaceAsyncOperationsGetStatus200Response
    | FaceAsyncOperationsGetStatusDefaultResponse,
): response is FaceAsyncOperationsGetStatusDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsCreatePerson202Response
    | PersonDirectoryPersonsCreatePersonLogicalResponse
    | PersonDirectoryPersonsCreatePersonDefaultResponse,
): response is PersonDirectoryPersonsCreatePersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsListPerson200Response
    | PersonDirectoryPersonsListPersonDefaultResponse,
): response is PersonDirectoryPersonsListPersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsDeletePerson202Response
    | PersonDirectoryPersonsDeletePersonLogicalResponse
    | PersonDirectoryPersonsDeletePersonDefaultResponse,
): response is PersonDirectoryPersonsDeletePersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsGetPerson200Response
    | PersonDirectoryPersonsGetPersonDefaultResponse,
): response is PersonDirectoryPersonsGetPersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsUpdatePerson200Response
    | PersonDirectoryPersonsUpdatePersonDefaultResponse,
): response is PersonDirectoryPersonsUpdatePersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsListGroupReference200Response
    | PersonDirectoryPersonsListGroupReferenceDefaultResponse,
): response is PersonDirectoryPersonsListGroupReferenceDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsAddFaceFromUrl202Response
    | PersonDirectoryPersonsAddFaceFromStream202Response
    | PersonDirectoryPersonsAddFaceFromUrlLogicalResponse
    | PersonDirectoryPersonsAddFaceFromStreamLogicalResponse
    | PersonDirectoryPersonsAddFaceFromUrlDefaultResponse,
): response is PersonDirectoryPersonsAddFaceFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsListFace200Response
    | PersonDirectoryPersonsListFaceDefaultResponse,
): response is PersonDirectoryPersonsListFaceDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsDeleteFace202Response
    | PersonDirectoryPersonsDeleteFaceLogicalResponse
    | PersonDirectoryPersonsDeleteFaceDefaultResponse,
): response is PersonDirectoryPersonsDeleteFaceDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsGetFace200Response
    | PersonDirectoryPersonsGetFaceDefaultResponse,
): response is PersonDirectoryPersonsGetFaceDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsUpdateFace200Response
    | PersonDirectoryPersonsUpdateFaceDefaultResponse,
): response is PersonDirectoryPersonsUpdateFaceDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryPersonsIdentifyFromPersonDirectory200Response
    | PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroup200Response
    | PersonGroupsIdentifyFromPersonGroup200Response
    | LargePersonGroupsIdentifyFromLargePersonGroup200Response
    | PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse,
): response is PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryDynamicPersonGroupsCreateGroup200Response
    | PersonDirectoryDynamicPersonGroupsCreateGroup202Response
    | PersonDirectoryDynamicPersonGroupsCreateGroupLogicalResponse
    | PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse,
): response is PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryDynamicPersonGroupsDeleteGroup202Response
    | PersonDirectoryDynamicPersonGroupsDeleteGroupLogicalResponse
    | PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse,
): response is PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryDynamicPersonGroupsGetGroup200Response
    | PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse,
): response is PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryDynamicPersonGroupsUpdateGroup200Response
    | PersonDirectoryDynamicPersonGroupsUpdateGroup202Response
    | PersonDirectoryDynamicPersonGroupsUpdateGroupLogicalResponse
    | PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse,
): response is PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryDynamicPersonGroupsListGroup200Response
    | PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse,
): response is PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonDirectoryDynamicPersonGroupsListGroupPerson200Response
    | PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse,
): response is PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsCreateGroup200Response
    | PersonGroupsCreateGroupDefaultResponse,
): response is PersonGroupsCreateGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsDeleteGroup200Response
    | PersonGroupsDeleteGroupDefaultResponse,
): response is PersonGroupsDeleteGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsGetGroup200Response
    | PersonGroupsGetGroupDefaultResponse,
): response is PersonGroupsGetGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsUpdateGroup200Response
    | PersonGroupsUpdateGroupDefaultResponse,
): response is PersonGroupsUpdateGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsListGroup200Response
    | PersonGroupsListGroupDefaultResponse,
): response is PersonGroupsListGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsCreatePerson200Response
    | PersonGroupsCreatePersonDefaultResponse,
): response is PersonGroupsCreatePersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsListPerson200Response
    | PersonGroupsListPersonDefaultResponse,
): response is PersonGroupsListPersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsDeletePerson200Response
    | PersonGroupsDeletePersonDefaultResponse,
): response is PersonGroupsDeletePersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsGetPerson200Response
    | PersonGroupsGetPersonDefaultResponse,
): response is PersonGroupsGetPersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsUpdatePerson200Response
    | PersonGroupsUpdatePersonDefaultResponse,
): response is PersonGroupsUpdatePersonDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsAddFaceFromUrl200Response
    | PersonGroupsAddFaceFromStream200Response
    | PersonGroupsAddFaceFromUrlDefaultResponse,
): response is PersonGroupsAddFaceFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsDeleteFace200Response
    | PersonGroupsDeleteFaceDefaultResponse,
): response is PersonGroupsDeleteFaceDefaultResponse;
export function isUnexpected(
  response: PersonGroupsGetFace200Response | PersonGroupsGetFaceDefaultResponse,
): response is PersonGroupsGetFaceDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsUpdateFace200Response
    | PersonGroupsUpdateFaceDefaultResponse,
): response is PersonGroupsUpdateFaceDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsTrainGroup202Response
    | PersonGroupsTrainGroupLogicalResponse
    | PersonGroupsTrainGroupDefaultResponse,
): response is PersonGroupsTrainGroupDefaultResponse;
export function isUnexpected(
  response:
    | PersonGroupsGetTrainingStatus200Response
    | PersonGroupsGetTrainingStatusDefaultResponse,
): response is PersonGroupsGetTrainingStatusDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsCreateGroup200Response
    | LargePersonGroupsCreateGroupDefaultResponse,
): response is LargePersonGroupsCreateGroupDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsDeleteGroup200Response
    | LargePersonGroupsDeleteGroupDefaultResponse,
): response is LargePersonGroupsDeleteGroupDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsGetGroup200Response
    | LargePersonGroupsGetGroupDefaultResponse,
): response is LargePersonGroupsGetGroupDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsUpdateGroup200Response
    | LargePersonGroupsUpdateGroupDefaultResponse,
): response is LargePersonGroupsUpdateGroupDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsListGroup200Response
    | LargePersonGroupsListGroupDefaultResponse,
): response is LargePersonGroupsListGroupDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsCreatePerson200Response
    | LargePersonGroupsCreatePersonDefaultResponse,
): response is LargePersonGroupsCreatePersonDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsListPerson200Response
    | LargePersonGroupsListPersonDefaultResponse,
): response is LargePersonGroupsListPersonDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsDeletePerson200Response
    | LargePersonGroupsDeletePersonDefaultResponse,
): response is LargePersonGroupsDeletePersonDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsGetPerson200Response
    | LargePersonGroupsGetPersonDefaultResponse,
): response is LargePersonGroupsGetPersonDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsUpdatePerson200Response
    | LargePersonGroupsUpdatePersonDefaultResponse,
): response is LargePersonGroupsUpdatePersonDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsAddFaceFromUrl200Response
    | LargePersonGroupsAddFaceFromStream200Response
    | LargePersonGroupsAddFaceFromUrlDefaultResponse,
): response is LargePersonGroupsAddFaceFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsDeleteFace200Response
    | LargePersonGroupsDeleteFaceDefaultResponse,
): response is LargePersonGroupsDeleteFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsGetFace200Response
    | LargePersonGroupsGetFaceDefaultResponse,
): response is LargePersonGroupsGetFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsUpdateFace200Response
    | LargePersonGroupsUpdateFaceDefaultResponse,
): response is LargePersonGroupsUpdateFaceDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsTrainGroup202Response
    | LargePersonGroupsTrainGroupLogicalResponse
    | LargePersonGroupsTrainGroupDefaultResponse,
): response is LargePersonGroupsTrainGroupDefaultResponse;
export function isUnexpected(
  response:
    | LargePersonGroupsGetTrainingStatus200Response
    | LargePersonGroupsGetTrainingStatusDefaultResponse,
): response is LargePersonGroupsGetTrainingStatusDefaultResponse;
export function isUnexpected(
  response:
    | LivenessSessionsListSessions200Response
    | LivenessSessionsListSessionsDefaultResponse,
): response is LivenessSessionsListSessionsDefaultResponse;
export function isUnexpected(
  response:
    | LivenessSessionsCreateSession200Response
    | LivenessSessionsCreateSessionDefaultResponse,
): response is LivenessSessionsCreateSessionDefaultResponse;
export function isUnexpected(
  response:
    | LivenessSessionsGetSession200Response
    | LivenessSessionsGetSessionDefaultResponse,
): response is LivenessSessionsGetSessionDefaultResponse;
export function isUnexpected(
  response:
    | LivenessSessionsDeleteSession200Response
    | LivenessSessionsDeleteSessionDefaultResponse,
): response is LivenessSessionsDeleteSessionDefaultResponse;
export function isUnexpected(
  response:
    | LivenessSessionsListSessionAuditEntries200Response
    | LivenessSessionsListSessionAuditEntriesDefaultResponse,
): response is LivenessSessionsListSessionAuditEntriesDefaultResponse;
export function isUnexpected(
  response:
    | LivenessWithVerifySessionsListSessions200Response
    | LivenessWithVerifySessionsListSessionsDefaultResponse,
): response is LivenessWithVerifySessionsListSessionsDefaultResponse;
export function isUnexpected(
  response:
    | LivenessWithVerifySessionsCreateSession200Response
    | LivenessWithVerifySessionsCreateSessionWithVerifyImage200Response
    | LivenessWithVerifySessionsCreateSessionDefaultResponse,
): response is LivenessWithVerifySessionsCreateSessionDefaultResponse;
export function isUnexpected(
  response:
    | LivenessWithVerifySessionsGetSession200Response
    | LivenessWithVerifySessionsGetSessionDefaultResponse,
): response is LivenessWithVerifySessionsGetSessionDefaultResponse;
export function isUnexpected(
  response:
    | LivenessWithVerifySessionsDeleteSession200Response
    | LivenessWithVerifySessionsDeleteSessionDefaultResponse,
): response is LivenessWithVerifySessionsDeleteSessionDefaultResponse;
export function isUnexpected(
  response:
    | LivenessWithVerifySessionsListSessionAuditEntries200Response
    | LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse,
): response is LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse;
export function isUnexpected(
  response:
    | DetectFromUrl200Response
    | DetectFromStream200Response
    | DetectFromUrlDefaultResponse
    | FindSimilar200Response
    | FaceListsFindSimilarFromFaceList200Response
    | LargeFaceListsFindSimilarFromLargeFaceList200Response
    | FindSimilarDefaultResponse
    | Verify200Response
    | PersonDirectoryPersonsVerifyFromPersonDirectory200Response
    | PersonGroupsVerifyFromPersonGroup200Response
    | LargePersonGroupsVerifyFromLargePersonGroup200Response
    | VerifyDefaultResponse
    | Group200Response
    | GroupDefaultResponse
    | FaceListsCreateList200Response
    | FaceListsCreateListDefaultResponse
    | FaceListsDeleteList200Response
    | FaceListsDeleteListDefaultResponse
    | FaceListsGetList200Response
    | FaceListsGetListDefaultResponse
    | FaceListsUpdateList200Response
    | FaceListsUpdateListDefaultResponse
    | FaceListsAddFaceFromUrl200Response
    | FaceListsAddFaceFromStream200Response
    | FaceListsAddFaceFromUrlDefaultResponse
    | FaceListsDeleteFace200Response
    | FaceListsDeleteFaceDefaultResponse
    | FaceListsListList200Response
    | FaceListsListListDefaultResponse
    | LargeFaceListsCreateList200Response
    | LargeFaceListsCreateListDefaultResponse
    | LargeFaceListsDeleteList200Response
    | LargeFaceListsDeleteListDefaultResponse
    | LargeFaceListsGetList200Response
    | LargeFaceListsGetListDefaultResponse
    | LargeFaceListsUpdateList200Response
    | LargeFaceListsUpdateListDefaultResponse
    | LargeFaceListsAddFaceFromUrl200Response
    | LargeFaceListsAddFaceFromStream200Response
    | LargeFaceListsAddFaceFromUrlDefaultResponse
    | LargeFaceListsListFace200Response
    | LargeFaceListsListFaceDefaultResponse
    | LargeFaceListsDeleteFace200Response
    | LargeFaceListsDeleteFaceDefaultResponse
    | LargeFaceListsGetFace200Response
    | LargeFaceListsGetFaceDefaultResponse
    | LargeFaceListsUpdateFace200Response
    | LargeFaceListsUpdateFaceDefaultResponse
    | LargeFaceListsListList200Response
    | LargeFaceListsListListDefaultResponse
    | LargeFaceListsTrainList202Response
    | LargeFaceListsTrainListLogicalResponse
    | LargeFaceListsTrainListDefaultResponse
    | LargeFaceListsGetTrainingStatus200Response
    | LargeFaceListsGetTrainingStatusDefaultResponse
    | FaceAsyncOperationsGetStatus200Response
    | FaceAsyncOperationsGetStatusDefaultResponse
    | PersonDirectoryPersonsCreatePerson202Response
    | PersonDirectoryPersonsCreatePersonLogicalResponse
    | PersonDirectoryPersonsCreatePersonDefaultResponse
    | PersonDirectoryPersonsListPerson200Response
    | PersonDirectoryPersonsListPersonDefaultResponse
    | PersonDirectoryPersonsDeletePerson202Response
    | PersonDirectoryPersonsDeletePersonLogicalResponse
    | PersonDirectoryPersonsDeletePersonDefaultResponse
    | PersonDirectoryPersonsGetPerson200Response
    | PersonDirectoryPersonsGetPersonDefaultResponse
    | PersonDirectoryPersonsUpdatePerson200Response
    | PersonDirectoryPersonsUpdatePersonDefaultResponse
    | PersonDirectoryPersonsListGroupReference200Response
    | PersonDirectoryPersonsListGroupReferenceDefaultResponse
    | PersonDirectoryPersonsAddFaceFromUrl202Response
    | PersonDirectoryPersonsAddFaceFromStream202Response
    | PersonDirectoryPersonsAddFaceFromUrlLogicalResponse
    | PersonDirectoryPersonsAddFaceFromStreamLogicalResponse
    | PersonDirectoryPersonsAddFaceFromUrlDefaultResponse
    | PersonDirectoryPersonsListFace200Response
    | PersonDirectoryPersonsListFaceDefaultResponse
    | PersonDirectoryPersonsDeleteFace202Response
    | PersonDirectoryPersonsDeleteFaceLogicalResponse
    | PersonDirectoryPersonsDeleteFaceDefaultResponse
    | PersonDirectoryPersonsGetFace200Response
    | PersonDirectoryPersonsGetFaceDefaultResponse
    | PersonDirectoryPersonsUpdateFace200Response
    | PersonDirectoryPersonsUpdateFaceDefaultResponse
    | PersonDirectoryPersonsIdentifyFromPersonDirectory200Response
    | PersonDirectoryDynamicPersonGroupsIdentifyFromDynamicPersonGroup200Response
    | PersonGroupsIdentifyFromPersonGroup200Response
    | LargePersonGroupsIdentifyFromLargePersonGroup200Response
    | PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse
    | PersonDirectoryDynamicPersonGroupsCreateGroup200Response
    | PersonDirectoryDynamicPersonGroupsCreateGroup202Response
    | PersonDirectoryDynamicPersonGroupsCreateGroupLogicalResponse
    | PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse
    | PersonDirectoryDynamicPersonGroupsDeleteGroup202Response
    | PersonDirectoryDynamicPersonGroupsDeleteGroupLogicalResponse
    | PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse
    | PersonDirectoryDynamicPersonGroupsGetGroup200Response
    | PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse
    | PersonDirectoryDynamicPersonGroupsUpdateGroup200Response
    | PersonDirectoryDynamicPersonGroupsUpdateGroup202Response
    | PersonDirectoryDynamicPersonGroupsUpdateGroupLogicalResponse
    | PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse
    | PersonDirectoryDynamicPersonGroupsListGroup200Response
    | PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse
    | PersonDirectoryDynamicPersonGroupsListGroupPerson200Response
    | PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse
    | PersonGroupsCreateGroup200Response
    | PersonGroupsCreateGroupDefaultResponse
    | PersonGroupsDeleteGroup200Response
    | PersonGroupsDeleteGroupDefaultResponse
    | PersonGroupsGetGroup200Response
    | PersonGroupsGetGroupDefaultResponse
    | PersonGroupsUpdateGroup200Response
    | PersonGroupsUpdateGroupDefaultResponse
    | PersonGroupsListGroup200Response
    | PersonGroupsListGroupDefaultResponse
    | PersonGroupsCreatePerson200Response
    | PersonGroupsCreatePersonDefaultResponse
    | PersonGroupsListPerson200Response
    | PersonGroupsListPersonDefaultResponse
    | PersonGroupsDeletePerson200Response
    | PersonGroupsDeletePersonDefaultResponse
    | PersonGroupsGetPerson200Response
    | PersonGroupsGetPersonDefaultResponse
    | PersonGroupsUpdatePerson200Response
    | PersonGroupsUpdatePersonDefaultResponse
    | PersonGroupsAddFaceFromUrl200Response
    | PersonGroupsAddFaceFromStream200Response
    | PersonGroupsAddFaceFromUrlDefaultResponse
    | PersonGroupsDeleteFace200Response
    | PersonGroupsDeleteFaceDefaultResponse
    | PersonGroupsGetFace200Response
    | PersonGroupsGetFaceDefaultResponse
    | PersonGroupsUpdateFace200Response
    | PersonGroupsUpdateFaceDefaultResponse
    | PersonGroupsTrainGroup202Response
    | PersonGroupsTrainGroupLogicalResponse
    | PersonGroupsTrainGroupDefaultResponse
    | PersonGroupsGetTrainingStatus200Response
    | PersonGroupsGetTrainingStatusDefaultResponse
    | LargePersonGroupsCreateGroup200Response
    | LargePersonGroupsCreateGroupDefaultResponse
    | LargePersonGroupsDeleteGroup200Response
    | LargePersonGroupsDeleteGroupDefaultResponse
    | LargePersonGroupsGetGroup200Response
    | LargePersonGroupsGetGroupDefaultResponse
    | LargePersonGroupsUpdateGroup200Response
    | LargePersonGroupsUpdateGroupDefaultResponse
    | LargePersonGroupsListGroup200Response
    | LargePersonGroupsListGroupDefaultResponse
    | LargePersonGroupsCreatePerson200Response
    | LargePersonGroupsCreatePersonDefaultResponse
    | LargePersonGroupsListPerson200Response
    | LargePersonGroupsListPersonDefaultResponse
    | LargePersonGroupsDeletePerson200Response
    | LargePersonGroupsDeletePersonDefaultResponse
    | LargePersonGroupsGetPerson200Response
    | LargePersonGroupsGetPersonDefaultResponse
    | LargePersonGroupsUpdatePerson200Response
    | LargePersonGroupsUpdatePersonDefaultResponse
    | LargePersonGroupsAddFaceFromUrl200Response
    | LargePersonGroupsAddFaceFromStream200Response
    | LargePersonGroupsAddFaceFromUrlDefaultResponse
    | LargePersonGroupsDeleteFace200Response
    | LargePersonGroupsDeleteFaceDefaultResponse
    | LargePersonGroupsGetFace200Response
    | LargePersonGroupsGetFaceDefaultResponse
    | LargePersonGroupsUpdateFace200Response
    | LargePersonGroupsUpdateFaceDefaultResponse
    | LargePersonGroupsTrainGroup202Response
    | LargePersonGroupsTrainGroupLogicalResponse
    | LargePersonGroupsTrainGroupDefaultResponse
    | LargePersonGroupsGetTrainingStatus200Response
    | LargePersonGroupsGetTrainingStatusDefaultResponse
    | LivenessSessionsListSessions200Response
    | LivenessSessionsListSessionsDefaultResponse
    | LivenessSessionsCreateSession200Response
    | LivenessSessionsCreateSessionDefaultResponse
    | LivenessSessionsGetSession200Response
    | LivenessSessionsGetSessionDefaultResponse
    | LivenessSessionsDeleteSession200Response
    | LivenessSessionsDeleteSessionDefaultResponse
    | LivenessSessionsListSessionAuditEntries200Response
    | LivenessSessionsListSessionAuditEntriesDefaultResponse
    | LivenessWithVerifySessionsListSessions200Response
    | LivenessWithVerifySessionsListSessionsDefaultResponse
    | LivenessWithVerifySessionsCreateSession200Response
    | LivenessWithVerifySessionsCreateSessionWithVerifyImage200Response
    | LivenessWithVerifySessionsCreateSessionDefaultResponse
    | LivenessWithVerifySessionsGetSession200Response
    | LivenessWithVerifySessionsGetSessionDefaultResponse
    | LivenessWithVerifySessionsDeleteSession200Response
    | LivenessWithVerifySessionsDeleteSessionDefaultResponse
    | LivenessWithVerifySessionsListSessionAuditEntries200Response
    | LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse,
): response is
  | DetectFromUrlDefaultResponse
  | FindSimilarDefaultResponse
  | VerifyDefaultResponse
  | GroupDefaultResponse
  | FaceListsCreateListDefaultResponse
  | FaceListsDeleteListDefaultResponse
  | FaceListsGetListDefaultResponse
  | FaceListsUpdateListDefaultResponse
  | FaceListsAddFaceFromUrlDefaultResponse
  | FaceListsDeleteFaceDefaultResponse
  | FaceListsListListDefaultResponse
  | LargeFaceListsCreateListDefaultResponse
  | LargeFaceListsDeleteListDefaultResponse
  | LargeFaceListsGetListDefaultResponse
  | LargeFaceListsUpdateListDefaultResponse
  | LargeFaceListsAddFaceFromUrlDefaultResponse
  | LargeFaceListsListFaceDefaultResponse
  | LargeFaceListsDeleteFaceDefaultResponse
  | LargeFaceListsGetFaceDefaultResponse
  | LargeFaceListsUpdateFaceDefaultResponse
  | LargeFaceListsListListDefaultResponse
  | LargeFaceListsTrainListDefaultResponse
  | LargeFaceListsGetTrainingStatusDefaultResponse
  | FaceAsyncOperationsGetStatusDefaultResponse
  | PersonDirectoryPersonsCreatePersonDefaultResponse
  | PersonDirectoryPersonsListPersonDefaultResponse
  | PersonDirectoryPersonsDeletePersonDefaultResponse
  | PersonDirectoryPersonsGetPersonDefaultResponse
  | PersonDirectoryPersonsUpdatePersonDefaultResponse
  | PersonDirectoryPersonsListGroupReferenceDefaultResponse
  | PersonDirectoryPersonsAddFaceFromUrlDefaultResponse
  | PersonDirectoryPersonsListFaceDefaultResponse
  | PersonDirectoryPersonsDeleteFaceDefaultResponse
  | PersonDirectoryPersonsGetFaceDefaultResponse
  | PersonDirectoryPersonsUpdateFaceDefaultResponse
  | PersonDirectoryPersonsIdentifyFromPersonDirectoryDefaultResponse
  | PersonDirectoryDynamicPersonGroupsCreateGroupDefaultResponse
  | PersonDirectoryDynamicPersonGroupsDeleteGroupDefaultResponse
  | PersonDirectoryDynamicPersonGroupsGetGroupDefaultResponse
  | PersonDirectoryDynamicPersonGroupsUpdateGroupDefaultResponse
  | PersonDirectoryDynamicPersonGroupsListGroupDefaultResponse
  | PersonDirectoryDynamicPersonGroupsListGroupPersonDefaultResponse
  | PersonGroupsCreateGroupDefaultResponse
  | PersonGroupsDeleteGroupDefaultResponse
  | PersonGroupsGetGroupDefaultResponse
  | PersonGroupsUpdateGroupDefaultResponse
  | PersonGroupsListGroupDefaultResponse
  | PersonGroupsCreatePersonDefaultResponse
  | PersonGroupsListPersonDefaultResponse
  | PersonGroupsDeletePersonDefaultResponse
  | PersonGroupsGetPersonDefaultResponse
  | PersonGroupsUpdatePersonDefaultResponse
  | PersonGroupsAddFaceFromUrlDefaultResponse
  | PersonGroupsDeleteFaceDefaultResponse
  | PersonGroupsGetFaceDefaultResponse
  | PersonGroupsUpdateFaceDefaultResponse
  | PersonGroupsTrainGroupDefaultResponse
  | PersonGroupsGetTrainingStatusDefaultResponse
  | LargePersonGroupsCreateGroupDefaultResponse
  | LargePersonGroupsDeleteGroupDefaultResponse
  | LargePersonGroupsGetGroupDefaultResponse
  | LargePersonGroupsUpdateGroupDefaultResponse
  | LargePersonGroupsListGroupDefaultResponse
  | LargePersonGroupsCreatePersonDefaultResponse
  | LargePersonGroupsListPersonDefaultResponse
  | LargePersonGroupsDeletePersonDefaultResponse
  | LargePersonGroupsGetPersonDefaultResponse
  | LargePersonGroupsUpdatePersonDefaultResponse
  | LargePersonGroupsAddFaceFromUrlDefaultResponse
  | LargePersonGroupsDeleteFaceDefaultResponse
  | LargePersonGroupsGetFaceDefaultResponse
  | LargePersonGroupsUpdateFaceDefaultResponse
  | LargePersonGroupsTrainGroupDefaultResponse
  | LargePersonGroupsGetTrainingStatusDefaultResponse
  | LivenessSessionsListSessionsDefaultResponse
  | LivenessSessionsCreateSessionDefaultResponse
  | LivenessSessionsGetSessionDefaultResponse
  | LivenessSessionsDeleteSessionDefaultResponse
  | LivenessSessionsListSessionAuditEntriesDefaultResponse
  | LivenessWithVerifySessionsListSessionsDefaultResponse
  | LivenessWithVerifySessionsCreateSessionDefaultResponse
  | LivenessWithVerifySessionsGetSessionDefaultResponse
  | LivenessWithVerifySessionsDeleteSessionDefaultResponse
  | LivenessWithVerifySessionsListSessionAuditEntriesDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
