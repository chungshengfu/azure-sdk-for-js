// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  KeyValueFields,
  KeyValue,
  SnapshotFields,
  SnapshotStatus,
  Snapshot,
  SnapshotUpdateParameters,
  LabelFields,
} from "./models.js";

export interface GetKeysHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
}

export interface GetKeysQueryParamProperties {
  /** A filter for the name of the returned keys. */
  name?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
}

export interface GetKeysQueryParam {
  queryParameters?: GetKeysQueryParamProperties;
}

export interface GetKeysHeaderParam {
  headers?: RawHttpHeadersInput & GetKeysHeaders;
}

export type GetKeysParameters = GetKeysQueryParam &
  GetKeysHeaderParam &
  RequestParameters;

export interface CheckKeysHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
}

export interface CheckKeysQueryParamProperties {
  /** A filter for the name of the returned keys. */
  name?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
}

export interface CheckKeysQueryParam {
  queryParameters?: CheckKeysQueryParamProperties;
}

export interface CheckKeysHeaderParam {
  headers?: RawHttpHeadersInput & CheckKeysHeaders;
}

export type CheckKeysParameters = CheckKeysQueryParam &
  CheckKeysHeaderParam &
  RequestParameters;

export interface GetKeyValuesHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface GetKeyValuesQueryParamProperties {
  /**
   * A filter used to match keys. Syntax reference:
   * https://aka.ms/azconfig/docs/keyvaluefiltering
   */
  key?: string;
  /**
   * A filter used to match labels. Syntax reference:
   * https://aka.ms/azconfig/docs/keyvaluefiltering
   */
  label?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: KeyValueFields[];
  /**
   * A filter used get key-values for a snapshot. The value should be the name of
   * the snapshot. Not valid when used with 'key' and 'label' filters.
   */
  snapshot?: string;
  /**
   * A filter used to query by tags. Syntax reference:
   * https://aka.ms/azconfig/docs/keyvaluefiltering This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request
   */
  tags?: string;
}

export interface GetKeyValuesQueryParam {
  queryParameters?: GetKeyValuesQueryParamProperties;
}

export interface GetKeyValuesHeaderParam {
  headers?: RawHttpHeadersInput & GetKeyValuesHeaders;
}

export type GetKeyValuesParameters = GetKeyValuesQueryParam &
  GetKeyValuesHeaderParam &
  RequestParameters;

export interface CheckKeyValuesHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface CheckKeyValuesQueryParamProperties {
  /**
   * A filter used to match keys. Syntax reference:
   * https://aka.ms/azconfig/docs/keyvaluefiltering
   */
  key?: string;
  /**
   * A filter used to match labels. Syntax reference:
   * https://aka.ms/azconfig/docs/keyvaluefiltering
   */
  label?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: KeyValueFields[];
  /** A filter used get key-values for a snapshot. Not valid when used with 'key' and 'label' filters. */
  snapshot?: string;
  /**
   * A filter used to query by tags. Syntax reference:
   * https://aka.ms/azconfig/docs/keyvaluefiltering This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request
   */
  tags?: string;
}

export interface CheckKeyValuesQueryParam {
  queryParameters?: CheckKeyValuesQueryParamProperties;
}

export interface CheckKeyValuesHeaderParam {
  headers?: RawHttpHeadersInput & CheckKeyValuesHeaders;
}

export type CheckKeyValuesParameters = CheckKeyValuesQueryParam &
  CheckKeyValuesHeaderParam &
  RequestParameters;

export interface GetKeyValueHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface GetKeyValueQueryParamProperties {
  /** The label of the key-value to retrieve. */
  label?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: KeyValueFields[];
}

export interface GetKeyValueQueryParam {
  queryParameters?: GetKeyValueQueryParamProperties;
}

export interface GetKeyValueHeaderParam {
  headers?: RawHttpHeadersInput & GetKeyValueHeaders;
}

export type GetKeyValueParameters = GetKeyValueQueryParam &
  GetKeyValueHeaderParam &
  RequestParameters;

export interface PutKeyValueHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface PutKeyValueBodyParam {
  /** The key-value to create. */
  body?: KeyValue;
}

export interface PutKeyValueQueryParamProperties {
  /** The label of the key-value to create. */
  label?: string;
}

export interface PutKeyValueQueryParam {
  queryParameters?: PutKeyValueQueryParamProperties;
}

export interface PutKeyValueHeaderParam {
  headers?: RawHttpHeadersInput & PutKeyValueHeaders;
}

export type PutKeyValueParameters = PutKeyValueQueryParam &
  PutKeyValueHeaderParam &
  PutKeyValueBodyParam &
  RequestParameters;

export interface DeleteKeyValueHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
}

export interface DeleteKeyValueQueryParamProperties {
  /** The label of the key-value to delete. */
  label?: string;
}

export interface DeleteKeyValueQueryParam {
  queryParameters?: DeleteKeyValueQueryParamProperties;
}

export interface DeleteKeyValueHeaderParam {
  headers?: RawHttpHeadersInput & DeleteKeyValueHeaders;
}

export type DeleteKeyValueParameters = DeleteKeyValueQueryParam &
  DeleteKeyValueHeaderParam &
  RequestParameters;

export interface CheckKeyValueHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface CheckKeyValueQueryParamProperties {
  /** The label of the key-value to retrieve. */
  label?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: KeyValueFields[];
}

export interface CheckKeyValueQueryParam {
  queryParameters?: CheckKeyValueQueryParamProperties;
}

export interface CheckKeyValueHeaderParam {
  headers?: RawHttpHeadersInput & CheckKeyValueHeaders;
}

export type CheckKeyValueParameters = CheckKeyValueQueryParam &
  CheckKeyValueHeaderParam &
  RequestParameters;

export interface GetSnapshotsHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
}

export interface GetSnapshotsQueryParamProperties {
  /** A filter for the name of the returned snapshots. */
  name?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: SnapshotFields[];
  /** Used to filter returned snapshots by their status property. */
  status?: SnapshotStatus[];
}

export interface GetSnapshotsQueryParam {
  queryParameters?: GetSnapshotsQueryParamProperties;
}

export interface GetSnapshotsHeaderParam {
  headers?: RawHttpHeadersInput & GetSnapshotsHeaders;
}

export type GetSnapshotsParameters = GetSnapshotsQueryParam &
  GetSnapshotsHeaderParam &
  RequestParameters;

export interface CheckSnapshotsHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
}

export interface CheckSnapshotsQueryParamProperties {
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
}

export interface CheckSnapshotsQueryParam {
  queryParameters?: CheckSnapshotsQueryParamProperties;
}

export interface CheckSnapshotsHeaderParam {
  headers?: RawHttpHeadersInput & CheckSnapshotsHeaders;
}

export type CheckSnapshotsParameters = CheckSnapshotsQueryParam &
  CheckSnapshotsHeaderParam &
  RequestParameters;

export interface GetSnapshotHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface GetSnapshotQueryParamProperties {
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: SnapshotFields[];
}

export interface GetSnapshotQueryParam {
  queryParameters?: GetSnapshotQueryParamProperties;
}

export interface GetSnapshotHeaderParam {
  headers?: RawHttpHeadersInput & GetSnapshotHeaders;
}

export type GetSnapshotParameters = GetSnapshotQueryParam &
  GetSnapshotHeaderParam &
  RequestParameters;

export interface GetSnapshotOperationDetailsQueryParamProperties {
  /** Snapshot identifier for the long running operation. */
  snapshot: string;
}

export interface GetSnapshotOperationDetailsQueryParam {
  queryParameters: GetSnapshotOperationDetailsQueryParamProperties;
}

export type GetSnapshotOperationDetailsParameters =
  GetSnapshotOperationDetailsQueryParam & RequestParameters;

export interface CreateSnapshotHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
}

export interface CreateSnapshotBodyParam {
  /** The key-value snapshot to create. */
  body: Snapshot;
}

export interface CreateSnapshotHeaderParam {
  headers?: RawHttpHeadersInput & CreateSnapshotHeaders;
}

export type CreateSnapshotParameters = CreateSnapshotHeaderParam &
  CreateSnapshotBodyParam &
  RequestParameters;

export interface UpdateSnapshotHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface UpdateSnapshotBodyParam {
  /** The parameters used to update the snapshot. */
  body: SnapshotUpdateParameters;
}

export interface UpdateSnapshotHeaderParam {
  headers?: RawHttpHeadersInput & UpdateSnapshotHeaders;
}

export type UpdateSnapshotParameters = UpdateSnapshotHeaderParam &
  UpdateSnapshotBodyParam &
  RequestParameters;

export interface CheckSnapshotHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface CheckSnapshotHeaderParam {
  headers?: RawHttpHeadersInput & CheckSnapshotHeaders;
}

export type CheckSnapshotParameters = CheckSnapshotHeaderParam &
  RequestParameters;

export interface GetLabelsHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
}

export interface GetLabelsQueryParamProperties {
  /** A filter for the name of the returned labels. */
  name?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: LabelFields[];
}

export interface GetLabelsQueryParam {
  queryParameters?: GetLabelsQueryParamProperties;
}

export interface GetLabelsHeaderParam {
  headers?: RawHttpHeadersInput & GetLabelsHeaders;
}

export type GetLabelsParameters = GetLabelsQueryParam &
  GetLabelsHeaderParam &
  RequestParameters;

export interface CheckLabelsHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
}

export interface CheckLabelsQueryParamProperties {
  /** A filter for the name of the returned labels. */
  name?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: LabelFields[];
}

export interface CheckLabelsQueryParam {
  queryParameters?: CheckLabelsQueryParamProperties;
}

export interface CheckLabelsHeaderParam {
  headers?: RawHttpHeadersInput & CheckLabelsHeaders;
}

export type CheckLabelsParameters = CheckLabelsQueryParam &
  CheckLabelsHeaderParam &
  RequestParameters;

export interface PutLockHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface PutLockQueryParamProperties {
  /** The label, if any, of the key-value to lock. */
  label?: string;
}

export interface PutLockQueryParam {
  queryParameters?: PutLockQueryParamProperties;
}

export interface PutLockHeaderParam {
  headers?: RawHttpHeadersInput & PutLockHeaders;
}

export type PutLockParameters = PutLockQueryParam &
  PutLockHeaderParam &
  RequestParameters;

export interface DeleteLockHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag matches the
   * value provided.
   */
  "If-Match"?: string;
  /**
   * Used to perform an operation only if the targeted resource's etag does not
   * match the value provided.
   */
  "If-None-Match"?: string;
}

export interface DeleteLockQueryParamProperties {
  /** The label, if any, of the key-value to unlock. */
  label?: string;
}

export interface DeleteLockQueryParam {
  queryParameters?: DeleteLockQueryParamProperties;
}

export interface DeleteLockHeaderParam {
  headers?: RawHttpHeadersInput & DeleteLockHeaders;
}

export type DeleteLockParameters = DeleteLockQueryParam &
  DeleteLockHeaderParam &
  RequestParameters;

export interface GetRevisionsHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
}

export interface GetRevisionsQueryParamProperties {
  /**
   * A filter used to match keys. Syntax reference:
   * https://aka.ms/azconfig/docs/restapirevisions
   */
  key?: string;
  /**
   * A filter used to match labels. Syntax reference:
   * https://aka.ms/azconfig/docs/restapirevisions
   */
  label?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: KeyValueFields[];
  /**
   * A filter used to query by tags. Syntax reference:
   * https://aka.ms/azconfig/docs/restapirevisions This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request
   */
  tags?: string;
}

export interface GetRevisionsQueryParam {
  queryParameters?: GetRevisionsQueryParamProperties;
}

export interface GetRevisionsHeaderParam {
  headers?: RawHttpHeadersInput & GetRevisionsHeaders;
}

export type GetRevisionsParameters = GetRevisionsQueryParam &
  GetRevisionsHeaderParam &
  RequestParameters;

export interface CheckRevisionsHeaders {
  /** Used to guarantee real-time consistency between requests. */
  "Sync-Token"?: string;
  /**
   * Requests the server to respond with the state of the resource at the specified
   * time.
   */
  "Accept-Datetime"?: string;
}

export interface CheckRevisionsQueryParamProperties {
  /**
   * A filter used to match keys. Syntax reference:
   * https://aka.ms/azconfig/docs/restapirevisions
   */
  key?: string;
  /**
   * A filter used to match labels. Syntax reference:
   * https://aka.ms/azconfig/docs/restapirevisions
   */
  label?: string;
  /**
   * Instructs the server to return elements that appear after the element referred
   * to by the specified token.
   */
  After?: string;
  /** Used to select what fields are present in the returned resource(s). */
  $Select?: KeyValueFields[];
  /**
   * A filter used to query by tags. Syntax reference:
   * https://aka.ms/azconfig/docs/restapirevisions This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request
   */
  tags?: string;
}

export interface CheckRevisionsQueryParam {
  queryParameters?: CheckRevisionsQueryParamProperties;
}

export interface CheckRevisionsHeaderParam {
  headers?: RawHttpHeadersInput & CheckRevisionsHeaders;
}

export type CheckRevisionsParameters = CheckRevisionsQueryParam &
  CheckRevisionsHeaderParam &
  RequestParameters;
