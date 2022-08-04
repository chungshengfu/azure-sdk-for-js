/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** High-level information about a Template Spec version. */
export interface TemplateSpecVersionInfo {
  /**
   * Template Spec version description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * The timestamp of when the version was created.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly timeCreated?: Date;
  /**
   * The timestamp of when the version was last modified.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly timeModified?: Date;
}

/** Common properties for all Azure resources. */
export interface AzureResourceBase {
  /**
   * String Id used to locate any resource on Azure.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Name of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Type of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Template Specs error response. */
export interface TemplateSpecsError {
  /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
  error?: ErrorResponse;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
export interface ErrorResponse {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** List of Template Specs. */
export interface TemplateSpecsListResult {
  /** An array of Template Specs. */
  value?: TemplateSpec[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Represents a Template Spec artifact containing an embedded Azure Resource Manager template for use as a linked template. */
export interface LinkedTemplateArtifact {
  /** A filesystem safe relative path of the artifact. */
  path: string;
  /** The Azure Resource Manager template. */
  template: Record<string, unknown>;
}

/** List of Template Specs versions */
export interface TemplateSpecVersionsListResult {
  /** An array of Template Spec versions. */
  value?: TemplateSpecVersion[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Template Spec object. */
export interface TemplateSpec extends AzureResourceBase {
  /** The location of the Template Spec. It cannot be changed after Template Spec creation. It must be one of the supported Azure locations. */
  location: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Template Spec description. */
  description?: string;
  /** Template Spec display name. */
  displayName?: string;
  /** The Template Spec metadata. Metadata is an open-ended object and is typically a collection of key-value pairs. */
  metadata?: Record<string, unknown>;
  /**
   * High-level information about the versions within this Template Spec. The keys are the version names. Only populated if the $expand query parameter is set to 'versions'.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly versions?: { [propertyName: string]: TemplateSpecVersionInfo };
}

/** Template Spec properties to be updated (only tags are currently supported). */
export interface TemplateSpecUpdateModel extends AzureResourceBase {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** Template Spec Version object. */
export interface TemplateSpecVersion extends AzureResourceBase {
  /** The location of the Template Spec Version. It must match the location of the parent Template Spec. */
  location: string;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** Template Spec version description. */
  description?: string;
  /** An array of linked template artifacts. */
  linkedTemplates?: LinkedTemplateArtifact[];
  /** The version metadata. Metadata is an open-ended object and is typically a collection of key-value pairs. */
  metadata?: Record<string, unknown>;
  /** The main Azure Resource Manager template content. */
  mainTemplate?: Record<string, unknown>;
  /** The Azure Resource Manager template UI definition content. */
  uiFormDefinition?: Record<string, unknown>;
}

/** Template Spec Version properties to be updated (only tags are currently supported). */
export interface TemplateSpecVersionUpdateModel extends AzureResourceBase {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link TemplateSpecExpandKind} that the service accepts. */
export enum KnownTemplateSpecExpandKind {
  /** Includes version information with the Template Spec. */
  Versions = "versions"
}

/**
 * Defines values for TemplateSpecExpandKind. \
 * {@link KnownTemplateSpecExpandKind} can be used interchangeably with TemplateSpecExpandKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **versions**: Includes version information with the Template Spec.
 */
export type TemplateSpecExpandKind = string;

/** Optional parameters. */
export interface TemplateSpecsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type TemplateSpecsCreateOrUpdateResponse = TemplateSpec;

/** Optional parameters. */
export interface TemplateSpecsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Template Spec resource with the tags to be updated. */
  templateSpec?: TemplateSpecUpdateModel;
}

/** Contains response data for the update operation. */
export type TemplateSpecsUpdateResponse = TemplateSpec;

/** Optional parameters. */
export interface TemplateSpecsGetOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the get operation. */
export type TemplateSpecsGetResponse = TemplateSpec;

/** Optional parameters. */
export interface TemplateSpecsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TemplateSpecsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the listBySubscription operation. */
export type TemplateSpecsListBySubscriptionResponse = TemplateSpecsListResult;

/** Optional parameters. */
export interface TemplateSpecsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the listByResourceGroup operation. */
export type TemplateSpecsListByResourceGroupResponse = TemplateSpecsListResult;

/** Optional parameters. */
export interface TemplateSpecsGetBuiltInOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the getBuiltIn operation. */
export type TemplateSpecsGetBuiltInResponse = TemplateSpec;

/** Optional parameters. */
export interface TemplateSpecsListBuiltInsOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the listBuiltIns operation. */
export type TemplateSpecsListBuiltInsResponse = TemplateSpecsListResult;

/** Optional parameters. */
export interface TemplateSpecsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the listBySubscriptionNext operation. */
export type TemplateSpecsListBySubscriptionNextResponse = TemplateSpecsListResult;

/** Optional parameters. */
export interface TemplateSpecsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type TemplateSpecsListByResourceGroupNextResponse = TemplateSpecsListResult;

/** Optional parameters. */
export interface TemplateSpecsListBuiltInsNextOptionalParams
  extends coreClient.OperationOptions {
  /** Allows for expansion of additional Template Spec details in the response. Optional. */
  expand?: TemplateSpecExpandKind;
}

/** Contains response data for the listBuiltInsNext operation. */
export type TemplateSpecsListBuiltInsNextResponse = TemplateSpecsListResult;

/** Optional parameters. */
export interface TemplateSpecVersionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type TemplateSpecVersionsCreateOrUpdateResponse = TemplateSpecVersion;

/** Optional parameters. */
export interface TemplateSpecVersionsUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Template Spec Version resource with the tags to be updated. */
  templateSpecVersionUpdateModel?: TemplateSpecVersionUpdateModel;
}

/** Contains response data for the update operation. */
export type TemplateSpecVersionsUpdateResponse = TemplateSpecVersion;

/** Optional parameters. */
export interface TemplateSpecVersionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type TemplateSpecVersionsGetResponse = TemplateSpecVersion;

/** Optional parameters. */
export interface TemplateSpecVersionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TemplateSpecVersionsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type TemplateSpecVersionsListResponse = TemplateSpecVersionsListResult;

/** Optional parameters. */
export interface TemplateSpecVersionsListBuiltInsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBuiltIns operation. */
export type TemplateSpecVersionsListBuiltInsResponse = TemplateSpecVersionsListResult;

/** Optional parameters. */
export interface TemplateSpecVersionsGetBuiltInOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBuiltIn operation. */
export type TemplateSpecVersionsGetBuiltInResponse = TemplateSpecVersion;

/** Optional parameters. */
export interface TemplateSpecVersionsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type TemplateSpecVersionsListNextResponse = TemplateSpecVersionsListResult;

/** Optional parameters. */
export interface TemplateSpecVersionsListBuiltInsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBuiltInsNext operation. */
export type TemplateSpecVersionsListBuiltInsNextResponse = TemplateSpecVersionsListResult;

/** Optional parameters. */
export interface TemplateSpecsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
