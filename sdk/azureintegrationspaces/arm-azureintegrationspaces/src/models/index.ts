/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
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
  readonly details?: ErrorDetail[];
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

/** The response of a Space list operation. */
export interface SpaceListResult {
  /** The Space items on this page */
  value: Space[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
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

/** The type used for update operations of the Space. */
export interface SpaceUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The description of the resource. */
  description?: string;
}

/** The response of a Application list operation. */
export interface ApplicationListResult {
  /** The Application items on this page */
  value: Application[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The properties of tracking data store. */
export interface TrackingDataStore {
  /** The database name. */
  databaseName: string;
  /** The data store resource id. */
  dataStoreResourceId: string;
  /** The data store URI. */
  dataStoreUri: string;
  /** The data store ingestion URI. */
  dataStoreIngestionUri: string;
}

/** The type used for update operations of the Application. */
export interface ApplicationUpdate {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The description of the resource. */
  description?: string;
  /** The tracking data stores. */
  trackingDataStores?: { [propertyName: string]: TrackingDataStore };
}

/** The response of a BusinessProcess list operation. */
export interface BusinessProcessListResult {
  /** The BusinessProcess items on this page */
  value: BusinessProcess[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The properties of business process identifier. */
export interface BusinessProcessIdentifier {
  /** The property name of the business process identifier. */
  propertyName?: string;
  /** The property type of the business process identifier. */
  propertyType?: string;
}

/** The properties of business process stage. */
export interface BusinessProcessStage {
  /** The description of the business stage. */
  description?: string;
  /** The properties within the properties of the business process stage. */
  properties?: { [propertyName: string]: string };
  /** The property to keep track of stages before current in the business process stage. */
  stagesBefore?: string[];
}

/** The properties of business process mapping. */
export interface BusinessProcessMappingItem {
  /** The logic app resource id. */
  logicAppResourceId?: string;
  /** The workflow name within the logic app. */
  workflowName?: string;
  /** The operation name. */
  operationName?: string;
  /** The mapping item operation type of the business process. */
  operationType?: string;
}

/** The type used for update operations of the BusinessProcess. */
export interface BusinessProcessUpdate {
  /** The description of the business process. */
  description?: string;
  /** The table name of the business process. */
  tableName?: string;
  /** The tracking data store reference name. */
  trackingDataStoreReferenceName?: string;
  /** The business process identifier. */
  identifier?: BusinessProcessIdentifier;
  /** The business process stages. */
  businessProcessStages?: { [propertyName: string]: BusinessProcessStage };
  /** The business process mapping. */
  businessProcessMapping?: {
    [propertyName: string]: BusinessProcessMappingItem;
  };
}

/** The response of a BusinessProcessVersion list operation. */
export interface BusinessProcessVersionListResult {
  /** The BusinessProcessVersion items on this page */
  value: BusinessProcessVersion[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The business process development artifact get or delete request. */
export interface GetOrDeleteBusinessProcessDevelopmentArtifactRequest {
  /** The name of the business process development artifact. */
  name: string;
}

/** The business process development artifact save or get response. */
export interface SaveOrGetBusinessProcessDevelopmentArtifactResponse {
  /** The name of the business process development artifact. */
  name: string;
  /**
   * The system data of the business process development artifact.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
  /** The properties of the business process development artifact. */
  properties?: BusinessProcessDevelopmentArtifactProperties;
}

/** The properties of business process development artifact. */
export interface BusinessProcessDevelopmentArtifactProperties {
  /** The description of the business process. */
  description?: string;
  /** The business process identifier. */
  identifier?: BusinessProcessIdentifier;
  /** The business process stages. */
  businessProcessStages?: { [propertyName: string]: BusinessProcessStage };
  /** The business process mapping. */
  businessProcessMapping?: {
    [propertyName: string]: BusinessProcessMappingItem;
  };
  /** The tracking profile for the business process. */
  trackingProfiles?: { [propertyName: string]: TrackingProfileDefinition };
}

/** The tracking profile for the business process */
export interface TrackingProfileDefinition {
  /** The tracking definition schema uri. */
  schema?: string;
  /** The business process reference. */
  businessProcess?: BusinessProcessReference;
  /** The tracking definitions. */
  trackingDefinitions?: { [propertyName: string]: FlowTrackingDefinition };
}

/** The business process reference. */
export interface BusinessProcessReference {
  /** The business process name. */
  name?: string;
  /** The business process version. */
  version?: string;
}

/** The workflow tracking definition. */
export interface FlowTrackingDefinition {
  /** The tracking correlation context. */
  correlationContext?: TrackingCorrelationContext;
  /** The tracking events. */
  events?: { [propertyName: string]: TrackingEventDefinition };
}

/** The tracking correlation context. */
export interface TrackingCorrelationContext {
  /** The operation type for correlation context. */
  operationType?: string;
  /** The operation name for correlation context. */
  operationName?: string;
  /** The name of the correlation property. */
  propertyName?: string;
  /** The template expression for correlation context property value. */
  value?: string;
}

/** The tracking event definition. */
export interface TrackingEventDefinition {
  /** The operation type. */
  operationType?: string;
  /** The operation name. */
  operationName?: string;
  /** The properties to be collected for event. */
  properties?: { [propertyName: string]: Record<string, unknown> };
}

/** The business process development artifact get collection response. */
export interface ListBusinessProcessDevelopmentArtifactsResponse {
  /** The list of the business process development artifact. */
  value: SaveOrGetBusinessProcessDevelopmentArtifactResponse[];
}

/** The response of a ApplicationResource list operation. */
export interface ApplicationResourceListResult {
  /** The ApplicationResource items on this page */
  value: ApplicationResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The type used for update operations of the ApplicationResource. */
export interface ApplicationResourceUpdate {
  /** The type of the application resource. */
  resourceType?: string;
  /** The Arm id of the application resource. */
  resourceId?: string;
  /** The kind of the application resource. */
  resourceKind?: string;
}

/** The business process development artifact save or validate request. */
export interface SaveOrValidateBusinessProcessDevelopmentArtifactRequest {
  /** The name of the business process development artifact. */
  name: string;
  /** The properties of the business process development artifact. */
  properties?: BusinessProcessDevelopmentArtifactProperties;
}

/** The response of a InfrastructureResource list operation. */
export interface InfrastructureResourceListResult {
  /** The InfrastructureResource items on this page */
  value: InfrastructureResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** The type used for update operations of the InfrastructureResource. */
export interface InfrastructureResourceUpdate {
  /** The type of the infrastructure resource. */
  resourceType?: string;
  /** The id of the infrastructure resource. */
  resourceId?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** An integration space. */
export interface Space extends TrackedResource {
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The description of the resource. */
  description?: string;
}

/** An integration application under space. */
export interface Application extends TrackedResource {
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The description of the resource. */
  description?: string;
  /** The tracking data stores. */
  trackingDataStores?: { [propertyName: string]: TrackingDataStore };
}

/** A business process under application. */
export interface BusinessProcess extends ProxyResource {
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The version of the business process.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /** The description of the business process. */
  description?: string;
  /** The table name of the business process. */
  tableName?: string;
  /** The tracking data store reference name. */
  trackingDataStoreReferenceName?: string;
  /** The business process identifier. */
  identifier?: BusinessProcessIdentifier;
  /** The business process stages. */
  businessProcessStages?: { [propertyName: string]: BusinessProcessStage };
  /** The business process mapping. */
  businessProcessMapping?: {
    [propertyName: string]: BusinessProcessMappingItem;
  };
}

/** A business process version. */
export interface BusinessProcessVersion extends ProxyResource {
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The version of the business process.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /** The description of the business process. */
  description?: string;
  /** The table name of the business process. */
  tableName?: string;
  /** The tracking data store reference name. */
  trackingDataStoreReferenceName?: string;
  /** The business process identifier. */
  identifier?: BusinessProcessIdentifier;
  /** The business process stages. */
  businessProcessStages?: { [propertyName: string]: BusinessProcessStage };
  /** The business process mapping. */
  businessProcessMapping?: {
    [propertyName: string]: BusinessProcessMappingItem;
  };
}

/** A resource under application. */
export interface ApplicationResource extends ProxyResource {
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The type of the application resource. */
  resourceType?: string;
  /** The Arm id of the application resource. */
  resourceId?: string;
  /** The kind of the application resource. */
  resourceKind?: string;
}

/** An infrastructure resource under Space. */
export interface InfrastructureResource extends ProxyResource {
  /**
   * The status of the last operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /** The type of the infrastructure resource. */
  resourceType?: string;
  /** The id of the infrastructure resource. */
  resourceId?: string;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Provisioning */
  Provisioning = "Provisioning",
  /** Updating */
  Updating = "Updating",
  /** Deleting */
  Deleting = "Deleting",
  /** Accepted */
  Accepted = "Accepted"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Provisioning** \
 * **Updating** \
 * **Deleting** \
 * **Accepted**
 */
export type ProvisioningState = string;

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

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface SpacesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type SpacesListBySubscriptionResponse = SpaceListResult;

/** Optional parameters. */
export interface SpacesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
}

/** Contains response data for the listByResourceGroup operation. */
export type SpacesListByResourceGroupResponse = SpaceListResult;

/** Optional parameters. */
export interface SpacesGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SpacesGetResponse = Space;

/** Optional parameters. */
export interface SpacesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type SpacesCreateOrUpdateResponse = Space;

/** Optional parameters. */
export interface SpacesPatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch operation. */
export type SpacesPatchResponse = Space;

/** Optional parameters. */
export interface SpacesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SpacesListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type SpacesListBySubscriptionNextResponse = SpaceListResult;

/** Optional parameters. */
export interface SpacesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type SpacesListByResourceGroupNextResponse = SpaceListResult;

/** Optional parameters. */
export interface ApplicationsListBySpaceOptionalParams
  extends coreClient.OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
}

/** Contains response data for the listBySpace operation. */
export type ApplicationsListBySpaceResponse = ApplicationListResult;

/** Optional parameters. */
export interface ApplicationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ApplicationsGetResponse = Application;

/** Optional parameters. */
export interface ApplicationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ApplicationsCreateOrUpdateResponse = Application;

/** Optional parameters. */
export interface ApplicationsPatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch operation. */
export type ApplicationsPatchResponse = Application;

/** Optional parameters. */
export interface ApplicationsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ApplicationsDeleteBusinessProcessDevelopmentArtifactOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ApplicationsGetBusinessProcessDevelopmentArtifactOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getBusinessProcessDevelopmentArtifact operation. */
export type ApplicationsGetBusinessProcessDevelopmentArtifactResponse = SaveOrGetBusinessProcessDevelopmentArtifactResponse;

/** Optional parameters. */
export interface ApplicationsListBusinessProcessDevelopmentArtifactsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBusinessProcessDevelopmentArtifacts operation. */
export type ApplicationsListBusinessProcessDevelopmentArtifactsResponse = ListBusinessProcessDevelopmentArtifactsResponse;

/** Optional parameters. */
export interface ApplicationsSaveBusinessProcessDevelopmentArtifactOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the saveBusinessProcessDevelopmentArtifact operation. */
export type ApplicationsSaveBusinessProcessDevelopmentArtifactResponse = SaveOrGetBusinessProcessDevelopmentArtifactResponse;

/** Optional parameters. */
export interface ApplicationsValidateBusinessProcessDevelopmentArtifactOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ApplicationsListBySpaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySpaceNext operation. */
export type ApplicationsListBySpaceNextResponse = ApplicationListResult;

/** Optional parameters. */
export interface BusinessProcessesListByApplicationOptionalParams
  extends coreClient.OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
}

/** Contains response data for the listByApplication operation. */
export type BusinessProcessesListByApplicationResponse = BusinessProcessListResult;

/** Optional parameters. */
export interface BusinessProcessesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type BusinessProcessesGetResponse = BusinessProcess;

/** Optional parameters. */
export interface BusinessProcessesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type BusinessProcessesCreateOrUpdateResponse = BusinessProcess;

/** Optional parameters. */
export interface BusinessProcessesPatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch operation. */
export type BusinessProcessesPatchResponse = BusinessProcess;

/** Optional parameters. */
export interface BusinessProcessesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface BusinessProcessesListByApplicationNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByApplicationNext operation. */
export type BusinessProcessesListByApplicationNextResponse = BusinessProcessListResult;

/** Optional parameters. */
export interface BusinessProcessVersionsListByBusinessProcessOptionalParams
  extends coreClient.OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
}

/** Contains response data for the listByBusinessProcess operation. */
export type BusinessProcessVersionsListByBusinessProcessResponse = BusinessProcessVersionListResult;

/** Optional parameters. */
export interface BusinessProcessVersionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type BusinessProcessVersionsGetResponse = BusinessProcessVersion;

/** Optional parameters. */
export interface BusinessProcessVersionsListByBusinessProcessNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByBusinessProcessNext operation. */
export type BusinessProcessVersionsListByBusinessProcessNextResponse = BusinessProcessVersionListResult;

/** Optional parameters. */
export interface ApplicationResourcesListByApplicationOptionalParams
  extends coreClient.OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
}

/** Contains response data for the listByApplication operation. */
export type ApplicationResourcesListByApplicationResponse = ApplicationResourceListResult;

/** Optional parameters. */
export interface ApplicationResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ApplicationResourcesGetResponse = ApplicationResource;

/** Optional parameters. */
export interface ApplicationResourcesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ApplicationResourcesCreateOrUpdateResponse = ApplicationResource;

/** Optional parameters. */
export interface ApplicationResourcesPatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch operation. */
export type ApplicationResourcesPatchResponse = ApplicationResource;

/** Optional parameters. */
export interface ApplicationResourcesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ApplicationResourcesListByApplicationNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByApplicationNext operation. */
export type ApplicationResourcesListByApplicationNextResponse = ApplicationResourceListResult;

/** Optional parameters. */
export interface InfrastructureResourcesListBySpaceOptionalParams
  extends coreClient.OperationOptions {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
  /** Select the specified fields to be included in the response. */
  select?: string[];
  /** Expand the indicated resources into the response. */
  expand?: string[];
  /** Expressions that specify the order of returned results. */
  orderby?: string[];
}

/** Contains response data for the listBySpace operation. */
export type InfrastructureResourcesListBySpaceResponse = InfrastructureResourceListResult;

/** Optional parameters. */
export interface InfrastructureResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type InfrastructureResourcesGetResponse = InfrastructureResource;

/** Optional parameters. */
export interface InfrastructureResourcesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type InfrastructureResourcesCreateOrUpdateResponse = InfrastructureResource;

/** Optional parameters. */
export interface InfrastructureResourcesPatchOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the patch operation. */
export type InfrastructureResourcesPatchResponse = InfrastructureResource;

/** Optional parameters. */
export interface InfrastructureResourcesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface InfrastructureResourcesListBySpaceNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySpaceNext operation. */
export type InfrastructureResourcesListBySpaceNextResponse = InfrastructureResourceListResult;

/** Optional parameters. */
export interface MicrosoftIntegrationSpacesOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
