// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  PagedProjectOutput,
  ProjectOutput,
  OperationStatusOutput,
  PagedPoolOutput,
  PoolOutput,
  PagedDevBoxOutput,
  PagedScheduleOutput,
  ScheduleOutput,
  DevBoxOutput,
  RemoteConnectionOutput,
  PagedDevBoxActionOutput,
  DevBoxActionOutput,
  PagedDevBoxActionDelayResultOutput,
  PagedDevBoxOperationOutput,
  DevBoxOperationOutput,
  PagedEnvironmentOutput,
  EnvironmentOutput,
  EnvironmentOutputsOutput,
  PagedEnvironmentOperationOutput,
  EnvironmentOperationOutput,
  PagedEnvironmentActionOutput,
  EnvironmentActionOutput,
  PagedCatalogOutput,
  CatalogOutput,
  PagedEnvironmentDefinitionOutput,
  EnvironmentDefinitionOutput,
  PagedEnvironmentTypeOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface DevCenterListProjects200Response extends HttpResponse {
  status: "200";
  body: PagedProjectOutput;
}

export interface DevCenterListProjectsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevCenterListProjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevCenterListProjectsDefaultHeaders;
}

/** The request has succeeded. */
export interface DevCenterGetProject200Response extends HttpResponse {
  status: "200";
  body: ProjectOutput;
}

export interface DevCenterGetProjectDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevCenterGetProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevCenterGetProjectDefaultHeaders;
}

/** The request has succeeded. */
export interface OperationStatusesGet200Response extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface OperationStatusesGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface OperationStatusesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & OperationStatusesGetDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListPools200Response extends HttpResponse {
  status: "200";
  body: PagedPoolOutput;
}

export interface DevBoxesListPoolsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListPoolsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListPoolsDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesGetPool200Response extends HttpResponse {
  status: "200";
  body: PoolOutput;
}

export interface DevBoxesGetPoolDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesGetPoolDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesGetPoolDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListAllDevBoxes200Response extends HttpResponse {
  status: "200";
  body: PagedDevBoxOutput;
}

export interface DevBoxesListAllDevBoxesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListAllDevBoxesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListAllDevBoxesDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListAllDevBoxesByUser200Response extends HttpResponse {
  status: "200";
  body: PagedDevBoxOutput;
}

export interface DevBoxesListAllDevBoxesByUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListAllDevBoxesByUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListAllDevBoxesByUserDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListSchedulesByPool200Response extends HttpResponse {
  status: "200";
  body: PagedScheduleOutput;
}

export interface DevBoxesListSchedulesByPoolDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListSchedulesByPoolDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListSchedulesByPoolDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesGetScheduleByPool200Response extends HttpResponse {
  status: "200";
  body: ScheduleOutput;
}

export interface DevBoxesGetScheduleByPoolDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesGetScheduleByPoolDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesGetScheduleByPoolDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListSchedulesByProject200Response
  extends HttpResponse {
  status: "200";
  body: PagedScheduleOutput;
}

export interface DevBoxesListSchedulesByProjectDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListSchedulesByProjectDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListSchedulesByProjectDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListDevBoxesByUser200Response extends HttpResponse {
  status: "200";
  body: PagedDevBoxOutput;
}

export interface DevBoxesListDevBoxesByUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListDevBoxesByUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListDevBoxesByUserDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesGetDevBoxByUser200Response extends HttpResponse {
  status: "200";
  body: DevBoxOutput;
}

export interface DevBoxesGetDevBoxByUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesGetDevBoxByUserDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesGetDevBoxByUserDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesCreateDevBox200Response extends HttpResponse {
  status: "200";
  body: DevBoxOutput;
}

export interface DevBoxesCreateDevBox201Headers {
  location: string;
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface DevBoxesCreateDevBox201Response extends HttpResponse {
  status: "201";
  body: DevBoxOutput;
  headers: RawHttpHeaders & DevBoxesCreateDevBox201Headers;
}

export interface DevBoxesCreateDevBoxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesCreateDevBoxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesCreateDevBoxDefaultHeaders;
}

/** The final response for long-running createDevBox operation */
export interface DevBoxesCreateDevBoxLogicalResponse extends HttpResponse {
  status: "200";
  body: DevBoxOutput;
}

export interface DevBoxesDeleteDevBox202Headers {
  location: string;
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DevBoxesDeleteDevBox202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DevBoxesDeleteDevBox202Headers;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DevBoxesDeleteDevBox204Response extends HttpResponse {
  status: "204";
}

export interface DevBoxesDeleteDevBoxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesDeleteDevBoxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesDeleteDevBoxDefaultHeaders;
}

/** The final response for long-running deleteDevBox operation */
export interface DevBoxesDeleteDevBoxLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface DevBoxesStartDevBox202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DevBoxesStartDevBox202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DevBoxesStartDevBox202Headers;
}

export interface DevBoxesStartDevBoxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesStartDevBoxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesStartDevBoxDefaultHeaders;
}

/** The final response for long-running startDevBox operation */
export interface DevBoxesStartDevBoxLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface DevBoxesStopDevBox202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DevBoxesStopDevBox202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DevBoxesStopDevBox202Headers;
}

export interface DevBoxesStopDevBoxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesStopDevBoxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesStopDevBoxDefaultHeaders;
}

/** The final response for long-running stopDevBox operation */
export interface DevBoxesStopDevBoxLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface DevBoxesRestartDevBox202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DevBoxesRestartDevBox202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DevBoxesRestartDevBox202Headers;
}

export interface DevBoxesRestartDevBoxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesRestartDevBoxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesRestartDevBoxDefaultHeaders;
}

/** The final response for long-running restartDevBox operation */
export interface DevBoxesRestartDevBoxLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

export interface DevBoxesRepairDevBox202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DevBoxesRepairDevBox202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & DevBoxesRepairDevBox202Headers;
}

export interface DevBoxesRepairDevBoxDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesRepairDevBoxDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesRepairDevBoxDefaultHeaders;
}

/** The final response for long-running repairDevBox operation */
export interface DevBoxesRepairDevBoxLogicalResponse extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

/** The request has succeeded. */
export interface DevBoxesGetRemoteConnection200Response extends HttpResponse {
  status: "200";
  body: RemoteConnectionOutput;
}

export interface DevBoxesGetRemoteConnectionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesGetRemoteConnectionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesGetRemoteConnectionDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListActions200Response extends HttpResponse {
  status: "200";
  body: PagedDevBoxActionOutput;
}

export interface DevBoxesListActionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListActionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListActionsDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesGetAction200Response extends HttpResponse {
  status: "200";
  body: DevBoxActionOutput;
}

export interface DevBoxesGetActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesGetActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesGetActionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DevBoxesSkipAction204Response extends HttpResponse {
  status: "204";
}

export interface DevBoxesSkipActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesSkipActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesSkipActionDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesDelayAction200Response extends HttpResponse {
  status: "200";
  body: DevBoxActionOutput;
}

export interface DevBoxesDelayActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesDelayActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesDelayActionDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesDelayActions200Response extends HttpResponse {
  status: "200";
  body: PagedDevBoxActionDelayResultOutput;
}

export interface DevBoxesDelayActionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesDelayActionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesDelayActionsDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesListOperations200Response extends HttpResponse {
  status: "200";
  body: PagedDevBoxOperationOutput;
}

export interface DevBoxesListOperationsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesListOperationsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesListOperationsDefaultHeaders;
}

/** The request has succeeded. */
export interface DevBoxesGetOperation200Response extends HttpResponse {
  status: "200";
  body: DevBoxOperationOutput;
}

export interface DevBoxesGetOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DevBoxesGetOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DevBoxesGetOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListEnvironments200Response extends HttpResponse {
  status: "200";
  body: PagedEnvironmentOutput;
}

export interface EnvironmentsListEnvironmentsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListEnvironmentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListEnvironmentsDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListEnvironmentsByUser200Response
  extends HttpResponse {
  status: "200";
  body: PagedEnvironmentOutput;
}

export interface EnvironmentsListEnvironmentsByUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListEnvironmentsByUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListEnvironmentsByUserDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGetEnvironmentByUser200Response
  extends HttpResponse {
  status: "200";
  body: EnvironmentOutput;
}

export interface EnvironmentsGetEnvironmentByUserDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetEnvironmentByUserDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetEnvironmentByUserDefaultHeaders;
}

export interface EnvironmentsCreateOrReplaceEnvironment201Headers {
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface EnvironmentsCreateOrReplaceEnvironment201Response
  extends HttpResponse {
  status: "201";
  body: EnvironmentOutput;
  headers: RawHttpHeaders & EnvironmentsCreateOrReplaceEnvironment201Headers;
}

export interface EnvironmentsCreateOrReplaceEnvironmentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsCreateOrReplaceEnvironmentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EnvironmentsCreateOrReplaceEnvironmentDefaultHeaders;
}

/** The final response for long-running createOrReplaceEnvironment operation */
export interface EnvironmentsCreateOrReplaceEnvironmentLogicalResponse
  extends HttpResponse {
  status: "200";
  body: EnvironmentOutput;
}

/** The request has succeeded. */
export interface EnvironmentsPatchEnvironment200Response extends HttpResponse {
  status: "200";
  body: EnvironmentOutput;
}

export interface EnvironmentsPatchEnvironmentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsPatchEnvironmentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsPatchEnvironmentDefaultHeaders;
}

export interface EnvironmentsDeleteEnvironment202Headers {
  location: string;
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface EnvironmentsDeleteEnvironment202Response extends HttpResponse {
  status: "202";
  body: OperationStatusOutput;
  headers: RawHttpHeaders & EnvironmentsDeleteEnvironment202Headers;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EnvironmentsDeleteEnvironment204Response extends HttpResponse {
  status: "204";
}

export interface EnvironmentsDeleteEnvironmentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsDeleteEnvironmentDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsDeleteEnvironmentDefaultHeaders;
}

/** The final response for long-running deleteEnvironment operation */
export interface EnvironmentsDeleteEnvironmentLogicalResponse
  extends HttpResponse {
  status: "200";
  body: OperationStatusOutput;
}

/** The request has succeeded. */
export interface EnvironmentsGetOutputs200Response extends HttpResponse {
  status: "200";
  body: EnvironmentOutputsOutput;
}

export interface EnvironmentsGetOutputsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetOutputsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetOutputsDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListOperations200Response extends HttpResponse {
  status: "200";
  body: PagedEnvironmentOperationOutput;
}

export interface EnvironmentsListOperationsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListOperationsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListOperationsDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGetOperation200Response extends HttpResponse {
  status: "200";
  body: EnvironmentOperationOutput;
}

export interface EnvironmentsGetOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetOperationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGetLogsByOperation200Response
  extends HttpResponse {
  status: "200";
  body: string;
}

export interface EnvironmentsGetLogsByOperationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetLogsByOperationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetLogsByOperationDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListActions200Response extends HttpResponse {
  status: "200";
  body: PagedEnvironmentActionOutput;
}

export interface EnvironmentsListActionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListActionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListActionsDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGetAction200Response extends HttpResponse {
  status: "200";
  body: EnvironmentActionOutput;
}

export interface EnvironmentsGetActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetActionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface EnvironmentsSkipAction204Response extends HttpResponse {
  status: "204";
}

export interface EnvironmentsSkipActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsSkipActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsSkipActionDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsDelayAction200Response extends HttpResponse {
  status: "200";
  body: EnvironmentActionOutput;
}

export interface EnvironmentsDelayActionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsDelayActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsDelayActionDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListCatalogsByProject200Response
  extends HttpResponse {
  status: "200";
  body: PagedCatalogOutput;
}

export interface EnvironmentsListCatalogsByProjectDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListCatalogsByProjectDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListCatalogsByProjectDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGetCatalog200Response extends HttpResponse {
  status: "200";
  body: CatalogOutput;
}

export interface EnvironmentsGetCatalogDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetCatalogDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetCatalogDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListEnvironmentDefinitionsByProject200Response
  extends HttpResponse {
  status: "200";
  body: PagedEnvironmentDefinitionOutput;
}

export interface EnvironmentsListEnvironmentDefinitionsByProjectDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListEnvironmentDefinitionsByProjectDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EnvironmentsListEnvironmentDefinitionsByProjectDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListEnvironmentDefinitionsByCatalog200Response
  extends HttpResponse {
  status: "200";
  body: PagedEnvironmentDefinitionOutput;
}

export interface EnvironmentsListEnvironmentDefinitionsByCatalogDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListEnvironmentDefinitionsByCatalogDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    EnvironmentsListEnvironmentDefinitionsByCatalogDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsGetEnvironmentDefinition200Response
  extends HttpResponse {
  status: "200";
  body: EnvironmentDefinitionOutput;
}

export interface EnvironmentsGetEnvironmentDefinitionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsGetEnvironmentDefinitionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsGetEnvironmentDefinitionDefaultHeaders;
}

/** The request has succeeded. */
export interface EnvironmentsListEnvironmentTypes200Response
  extends HttpResponse {
  status: "200";
  body: PagedEnvironmentTypeOutput;
}

export interface EnvironmentsListEnvironmentTypesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface EnvironmentsListEnvironmentTypesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & EnvironmentsListEnvironmentTypesDefaultHeaders;
}
