/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Definition of the Automanage best practice. */
export interface BestPractice {
  /**
   * The fully qualified ID for the best practice.  For example, /providers/Microsoft.Automanage/bestPractices/azureBestPracticesProduction
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The type of the resource.  For example, Microsoft.Automanage/bestPractices
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The name of the best practice. For example, azureBestPracticesProduction
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Properties of the best practice. */
  properties?: ConfigurationProfileProperties;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Automanage configuration profile properties. */
export interface ConfigurationProfileProperties {
  /** configuration dictionary of the configuration profile. */
  configuration?: Record<string, unknown>;
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

/** The response of the list best practice operation. */
export interface BestPracticeList {
  /** Result of the list best practice operation. */
  value?: BestPractice[];
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
}

/** Represents an update resource */
export interface UpdateResource {
  /** The tags of the resource. */
  tags?: { [propertyName: string]: string };
}

/** The response of the list configuration profile operation. */
export interface ConfigurationProfileList {
  /** Result of the list ConfigurationProfile operation. */
  value?: ConfigurationProfile[];
}

/** Automanage configuration profile assignment properties. */
export interface ConfigurationProfileAssignmentProperties {
  /** The Automanage configurationProfile ARM Resource URI. */
  configurationProfile?: string;
  /**
   * The target VM resource URI
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetId?: string;
  /**
   * The status of onboarding, which only appears in the response.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
}

/** The response of the list configuration profile assignment operation. */
export interface ConfigurationProfileAssignmentList {
  /** Result of the list configuration profile assignment operation. */
  value?: ConfigurationProfileAssignment[];
}

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

/** Data related to the report detail. */
export interface AssignmentReportProperties {
  /** Start time of the configuration profile assignment processing. */
  startTime?: string;
  /** End time of the configuration profile assignment processing. */
  endTime?: string;
  /**
   * Last modified time of the configuration profile assignment processing.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastModifiedTime?: string;
  /**
   * Duration of the configuration profile assignment processing.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly duration?: string;
  /**
   * Type of the configuration profile assignment processing (Initial/Consistency).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The status of the configuration profile assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The configurationProfile linked to the assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly configurationProfile?: string;
  /**
   * List of resources processed by the configuration profile assignment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resources?: ReportResource[];
  /**
   * Error message, if any, returned by the configuration profile assignment processing.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorDetail;
  /**
   * Version of the report format
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportFormatVersion?: string;
}

/** Details about the resource processed by the configuration profile assignment */
export interface ReportResource {
  /**
   * Name of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * ARM id of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Type of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Status of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * Error message, if any, returned when deploying the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorDetail;
}

/** The response of the list report operation. */
export interface ReportList {
  /** Result of the list report operation. */
  value?: Report[];
}

/** The list of ServicePrincipals. */
export interface ServicePrincipalListResult {
  /** The list of servicePrincipals. */
  value?: ServicePrincipal[];
}

/** The Service Principal properties for the subscription. */
export interface ServicePrincipalProperties {
  /**
   * The Service Principal Id for the subscription.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly servicePrincipalId?: string;
  /**
   * Returns the contributor RBAC Role exist or not for the Service Principal Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly authorizationSet?: boolean;
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

/** Definition of the configuration profile. */
export interface ConfigurationProfileUpdate extends UpdateResource {
  /** Properties of the configuration profile. */
  properties?: ConfigurationProfileProperties;
}

/** Definition of the configuration profile. */
export interface ConfigurationProfile extends TrackedResource {
  /** Properties of the configuration profile. */
  properties?: ConfigurationProfileProperties;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Configuration profile assignment is an association between a VM and automanage profile configuration. */
export interface ConfigurationProfileAssignment extends ProxyResource {
  /** Properties of the configuration profile assignment. */
  properties?: ConfigurationProfileAssignmentProperties;
  /**
   * Azure resource id. Indicates if this resource is managed by another Azure resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly managedBy?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Definition of the report. */
export interface Report extends ProxyResource {
  /** The properties for the report. */
  properties?: AssignmentReportProperties;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** The Service Principal Id for the subscription. */
export interface ServicePrincipal extends ProxyResource {
  /** The Service Principal properties for the subscription */
  properties?: ServicePrincipalProperties;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
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
  Key = "Key",
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

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system",
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
  Internal = "Internal",
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Optional parameters. */
export interface BestPracticesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type BestPracticesGetResponse = BestPractice;

/** Optional parameters. */
export interface BestPracticesListByTenantOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByTenant operation. */
export type BestPracticesListByTenantResponse = BestPracticeList;

/** Optional parameters. */
export interface BestPracticesVersionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type BestPracticesVersionsGetResponse = BestPractice;

/** Optional parameters. */
export interface BestPracticesVersionsListByTenantOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByTenant operation. */
export type BestPracticesVersionsListByTenantResponse = BestPracticeList;

/** Optional parameters. */
export interface ConfigurationProfilesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationProfilesCreateOrUpdateResponse = ConfigurationProfile;

/** Optional parameters. */
export interface ConfigurationProfilesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationProfilesGetResponse = ConfigurationProfile;

/** Optional parameters. */
export interface ConfigurationProfilesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ConfigurationProfilesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ConfigurationProfilesUpdateResponse = ConfigurationProfile;

/** Optional parameters. */
export interface ConfigurationProfilesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ConfigurationProfilesListByResourceGroupResponse =
  ConfigurationProfileList;

/** Optional parameters. */
export interface ConfigurationProfilesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ConfigurationProfilesListBySubscriptionResponse =
  ConfigurationProfileList;

/** Optional parameters. */
export interface ConfigurationProfilesVersionsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationProfilesVersionsCreateOrUpdateResponse =
  ConfigurationProfile;

/** Optional parameters. */
export interface ConfigurationProfilesVersionsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationProfilesVersionsGetResponse = ConfigurationProfile;

/** Optional parameters. */
export interface ConfigurationProfilesVersionsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ConfigurationProfilesVersionsListChildResourcesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChildResources operation. */
export type ConfigurationProfilesVersionsListChildResourcesResponse =
  ConfigurationProfileList;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationProfileAssignmentsCreateOrUpdateResponse =
  ConfigurationProfileAssignment;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationProfileAssignmentsGetResponse =
  ConfigurationProfileAssignment;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsListByVirtualMachinesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByVirtualMachines operation. */
export type ConfigurationProfileAssignmentsListByVirtualMachinesResponse =
  ConfigurationProfileAssignmentList;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type ConfigurationProfileAssignmentsListResponse =
  ConfigurationProfileAssignmentList;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ConfigurationProfileAssignmentsListBySubscriptionResponse =
  ConfigurationProfileAssignmentList;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsListByMachineNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByMachineName operation. */
export type ConfigurationProfileAssignmentsListByMachineNameResponse =
  ConfigurationProfileAssignmentList;

/** Optional parameters. */
export interface ConfigurationProfileAssignmentsListByClusterNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByClusterName operation. */
export type ConfigurationProfileAssignmentsListByClusterNameResponse =
  ConfigurationProfileAssignmentList;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface ReportsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ReportsGetResponse = Report;

/** Optional parameters. */
export interface ReportsListByConfigurationProfileAssignmentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConfigurationProfileAssignments operation. */
export type ReportsListByConfigurationProfileAssignmentsResponse = ReportList;

/** Optional parameters. */
export interface ServicePrincipalsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ServicePrincipalsListBySubscriptionResponse =
  ServicePrincipalListResult;

/** Optional parameters. */
export interface ServicePrincipalsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ServicePrincipalsGetResponse = ServicePrincipal;

/** Optional parameters. */
export interface ConfigurationProfileHcrpAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationProfileHcrpAssignmentsCreateOrUpdateResponse =
  ConfigurationProfileAssignment;

/** Optional parameters. */
export interface ConfigurationProfileHcrpAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationProfileHcrpAssignmentsGetResponse =
  ConfigurationProfileAssignment;

/** Optional parameters. */
export interface ConfigurationProfileHcrpAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HcrpReportsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type HcrpReportsGetResponse = Report;

/** Optional parameters. */
export interface HcrpReportsListByConfigurationProfileAssignmentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConfigurationProfileAssignments operation. */
export type HcrpReportsListByConfigurationProfileAssignmentsResponse =
  ReportList;

/** Optional parameters. */
export interface ConfigurationProfileHCIAssignmentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ConfigurationProfileHCIAssignmentsCreateOrUpdateResponse =
  ConfigurationProfileAssignment;

/** Optional parameters. */
export interface ConfigurationProfileHCIAssignmentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ConfigurationProfileHCIAssignmentsGetResponse =
  ConfigurationProfileAssignment;

/** Optional parameters. */
export interface ConfigurationProfileHCIAssignmentsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface HCIReportsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type HCIReportsGetResponse = Report;

/** Optional parameters. */
export interface HCIReportsListByConfigurationProfileAssignmentsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByConfigurationProfileAssignments operation. */
export type HCIReportsListByConfigurationProfileAssignmentsResponse =
  ReportList;

/** Optional parameters. */
export interface AutomanageClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
