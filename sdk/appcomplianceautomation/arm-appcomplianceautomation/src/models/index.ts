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

/** Object that includes an array of resources and a possible link for next set. */
export interface ReportResourceList {
  /**
   * List of the reports
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: ReportResource[];
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Report's properties. */
export interface ReportProperties {
  /**
   * Report id in database.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Report status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: ReportStatus;
  /**
   * Report's tenant id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /**
   * Report name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportName?: string;
  /** Report offer Guid. */
  offerGuid?: string;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone: string;
  /** Report collection trigger time. */
  triggerTime: Date;
  /**
   * Report next collection trigger time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextTriggerTime?: Date;
  /**
   * Report last collection trigger time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastTriggerTime?: Date;
  /**
   * List of subscription Ids.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subscriptions?: string[];
  /** List of resource data. */
  resources: ResourceMetadata[];
  /**
   * Report compliance status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceStatus?: ReportComplianceStatus;
  /**
   * Azure lifecycle management
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
}

/** Single resource Id's metadata. */
export interface ResourceMetadata {
  /** Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  resourceId: string;
  /** Resource type. */
  resourceType?: string;
  /** Resource kind. */
  resourceKind?: string;
  /** Resource name. */
  resourceName?: string;
  /** Resource's tag type. */
  tags?: { [propertyName: string]: string };
}

/** A list which includes all the compliance result for one report. */
export interface ReportComplianceStatus {
  /** The Microsoft 365 certification name. */
  m365?: OverviewStatus;
}

/** The overview of the compliance result for one report. */
export interface OverviewStatus {
  /** The count of all passed full automation control. */
  passedCount?: number;
  /** The count of all failed full automation control. */
  failedCount?: number;
  /** The count of all manual control. */
  manualCount?: number;
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

/** A class represent a AppComplianceAutomation report resource update properties. */
export interface ReportResourcePatch {
  /** Report property. */
  properties?: ReportProperties;
}

/** Object that includes an array of resources and a possible link for next set. */
export interface SnapshotResourceList {
  /**
   * List of the snapshots
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: SnapshotResource[];
  /**
   * The URL the client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/** Snapshot's properties. */
export interface SnapshotProperties {
  /**
   * Snapshot id in the database.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Snapshot name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly snapshotName?: string;
  /**
   * The timestamp of resource creation (UTC).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdAt?: Date;
  /**
   * Azure lifecycle management
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The report essential info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportProperties?: ReportProperties;
  /**
   * Metadata pertaining to creation and last modification of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reportSystemData?: SystemData;
  /**
   * List of compliance results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceResults?: ComplianceResult[];
}

/** A class represent the compliance result. */
export interface ComplianceResult {
  /**
   * The name of the compliance. e.g. "M365"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceName?: string;
  /**
   * List of categories.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly categories?: Category[];
}

/** A class represent the compliance category. */
export interface Category {
  /**
   * The name of the compliance category. e.g. "Operational Security"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly categoryName?: string;
  /**
   * The category type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly categoryType?: CategoryType;
  /**
   * Category status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly categoryStatus?: CategoryStatus;
  /**
   * List of control families.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlFamilies?: ControlFamily[];
}

/** A class represent the control family. */
export interface ControlFamily {
  /**
   * The name of the control family. e.g. "Malware Protection - Anti-Virus"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly familyName?: string;
  /**
   * The control family type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly familyType?: ControlFamilyType;
  /**
   * Control family status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly familyStatus?: ControlFamilyStatus;
  /**
   * List of controls.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controls?: Control[];
}

/** A class represent the control. */
export interface Control {
  /**
   * The Id of the control. e.g. "Operational Security#10"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlId?: string;
  /**
   * The short name of the control. e.g. "Unsupported OS and Software."
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlShortName?: string;
  /**
   * The full name of the control. e.g. "Validate that unsupported operating systems and software components are not in use."
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlFullName?: string;
  /**
   * The control type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlType?: ControlType;
  /**
   * The control's description
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlDescription?: string;
  /**
   * The hyper link to the control's description'.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlDescriptionHyperLink?: string;
  /**
   * Control status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlStatus?: ControlStatus;
  /**
   * List of assessments.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly assessments?: Assessment[];
}

/** A class represent the assessment. */
export interface Assessment {
  /**
   * The name of the assessment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The severity level of this assessment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly severity?: AssessmentSeverity;
  /**
   * The description of the assessment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * The remediation of the assessment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly remediation?: string;
  /**
   * Indicates whether all the resource(s) are compliant.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isPass?: IsPass;
  /**
   * The policy id mapping to this assessment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly policyId?: string;
  /**
   * List of resource assessments.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceList?: AssessmentResource[];
}

/** A class represent the assessment resource. */
export interface AssessmentResource {
  /**
   * The Id of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceId?: string;
  /**
   * Resource status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceStatus?: ResourceStatus;
  /**
   * The reason for the N/A resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly reason?: string;
  /**
   * The status change date for the resource. For unavailable date, set it as N/A.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusChangeDate?: string;
}

/** Snapshot's download request. */
export interface SnapshotDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** Indicates the download type. */
  downloadType: DownloadType;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

/** Object that includes all the possible response for the download operation. */
export interface DownloadResponse {
  /**
   * List of the reports
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceList?: ResourceItem[];
  /**
   * List of the compliance result
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceReport?: ComplianceReportItem[];
  /**
   * compliance pdf report
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly compliancePdfReport?: DownloadResponseCompliancePdfReport;
  /**
   * compliance detailed pdf report
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceDetailedPdfReport?: DownloadResponseComplianceDetailedPdfReport;
}

/** Resource Id. */
export interface ResourceItem {
  /**
   * The subscription Id of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subscriptionId?: string;
  /**
   * The resource group name of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGroup?: string;
  /**
   * The resource type of this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceType?: string;
  /**
   * The resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceId?: string;
}

/** Object that includes all the content for single compliance result. */
export interface ComplianceReportItem {
  /**
   * The category name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly categoryName?: string;
  /**
   * The control Id - e.g. "1".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlId?: string;
  /**
   * The control name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlName?: string;
  /**
   * The control type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly controlType?: ControlType;
  /**
   * The compliance result's status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly complianceState?: ComplianceState;
  /**
   * The compliance result mapped policy Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly policyId?: string;
  /**
   * The policy's display name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly policyDisplayName?: string;
  /**
   * The policy's detail description.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly policyDescription?: string;
  /**
   * The compliance result mapped subscription Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subscriptionId?: string;
  /**
   * The compliance result mapped resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceGroup?: string;
  /**
   * The compliance result mapped resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceType?: string;
  /**
   * The compliance result mapped resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceId?: string;
  /**
   * The compliance result last changed date - e.g. "2022-10-24T02:55:16.3274379Z". For unavailable date, set it as "N/A".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusChangeDate?: string;
}

/** compliance pdf report */
export interface DownloadResponseCompliancePdfReport {
  /**
   * uri of compliance pdf report
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sasUri?: string;
}

/** compliance detailed pdf report */
export interface DownloadResponseComplianceDetailedPdfReport {
  /**
   * uri of compliance detailed pdf report
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sasUri?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** A class represent an AppComplianceAutomation report resource. */
export interface ReportResource extends ProxyResource {
  /** Report property. */
  properties: ReportProperties;
}

/** A class represent a AppComplianceAutomation snapshot resource. */
export interface SnapshotResource extends ProxyResource {
  /**
   * Snapshot's property'.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: SnapshotProperties;
}

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

/** Known values of {@link ReportStatus} that the service accepts. */
export enum KnownReportStatus {
  /** Active */
  Active = "Active",
  /** Failed */
  Failed = "Failed",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Defines values for ReportStatus. \
 * {@link KnownReportStatus} can be used interchangeably with ReportStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Failed** \
 * **Disabled**
 */
export type ReportStatus = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Updating */
  Updating = "Updating",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Creating** \
 * **Deleting** \
 * **Updating**
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

/** Known values of {@link CategoryType} that the service accepts. */
export enum KnownCategoryType {
  /** FullyAutomated */
  FullyAutomated = "FullyAutomated",
  /** PartiallyAutomated */
  PartiallyAutomated = "PartiallyAutomated",
  /** Manual */
  Manual = "Manual",
}

/**
 * Defines values for CategoryType. \
 * {@link KnownCategoryType} can be used interchangeably with CategoryType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FullyAutomated** \
 * **PartiallyAutomated** \
 * **Manual**
 */
export type CategoryType = string;

/** Known values of {@link CategoryStatus} that the service accepts. */
export enum KnownCategoryStatus {
  /** Healthy */
  Healthy = "Healthy",
  /** Unhealthy */
  Unhealthy = "Unhealthy",
}

/**
 * Defines values for CategoryStatus. \
 * {@link KnownCategoryStatus} can be used interchangeably with CategoryStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy** \
 * **Unhealthy**
 */
export type CategoryStatus = string;

/** Known values of {@link ControlFamilyType} that the service accepts. */
export enum KnownControlFamilyType {
  /** FullyAutomated */
  FullyAutomated = "FullyAutomated",
  /** PartiallyAutomated */
  PartiallyAutomated = "PartiallyAutomated",
  /** Manual */
  Manual = "Manual",
}

/**
 * Defines values for ControlFamilyType. \
 * {@link KnownControlFamilyType} can be used interchangeably with ControlFamilyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FullyAutomated** \
 * **PartiallyAutomated** \
 * **Manual**
 */
export type ControlFamilyType = string;

/** Known values of {@link ControlFamilyStatus} that the service accepts. */
export enum KnownControlFamilyStatus {
  /** Healthy */
  Healthy = "Healthy",
  /** Unhealthy */
  Unhealthy = "Unhealthy",
}

/**
 * Defines values for ControlFamilyStatus. \
 * {@link KnownControlFamilyStatus} can be used interchangeably with ControlFamilyStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy** \
 * **Unhealthy**
 */
export type ControlFamilyStatus = string;

/** Known values of {@link ControlType} that the service accepts. */
export enum KnownControlType {
  /** FullyAutomated */
  FullyAutomated = "FullyAutomated",
  /** PartiallyAutomated */
  PartiallyAutomated = "PartiallyAutomated",
  /** Manual */
  Manual = "Manual",
}

/**
 * Defines values for ControlType. \
 * {@link KnownControlType} can be used interchangeably with ControlType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FullyAutomated** \
 * **PartiallyAutomated** \
 * **Manual**
 */
export type ControlType = string;

/** Known values of {@link ControlStatus} that the service accepts. */
export enum KnownControlStatus {
  /** Passed */
  Passed = "Passed",
  /** Failed */
  Failed = "Failed",
  /** NotApplicable */
  NotApplicable = "NotApplicable",
}

/**
 * Defines values for ControlStatus. \
 * {@link KnownControlStatus} can be used interchangeably with ControlStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed** \
 * **Failed** \
 * **NotApplicable**
 */
export type ControlStatus = string;

/** Known values of {@link AssessmentSeverity} that the service accepts. */
export enum KnownAssessmentSeverity {
  /** High */
  High = "High",
  /** Medium */
  Medium = "Medium",
  /** Low */
  Low = "Low",
}

/**
 * Defines values for AssessmentSeverity. \
 * {@link KnownAssessmentSeverity} can be used interchangeably with AssessmentSeverity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High** \
 * **Medium** \
 * **Low**
 */
export type AssessmentSeverity = string;

/** Known values of {@link IsPass} that the service accepts. */
export enum KnownIsPass {
  /** True */
  True = "True",
  /** False */
  False = "False",
}

/**
 * Defines values for IsPass. \
 * {@link KnownIsPass} can be used interchangeably with IsPass,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **True** \
 * **False**
 */
export type IsPass = string;

/** Known values of {@link ResourceStatus} that the service accepts. */
export enum KnownResourceStatus {
  /** Healthy */
  Healthy = "Healthy",
  /** Unhealthy */
  Unhealthy = "Unhealthy",
  /** NotApplicable */
  NotApplicable = "NotApplicable",
}

/**
 * Defines values for ResourceStatus. \
 * {@link KnownResourceStatus} can be used interchangeably with ResourceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy** \
 * **Unhealthy** \
 * **NotApplicable**
 */
export type ResourceStatus = string;

/** Known values of {@link DownloadType} that the service accepts. */
export enum KnownDownloadType {
  /** ComplianceReport */
  ComplianceReport = "ComplianceReport",
  /** CompliancePdfReport */
  CompliancePdfReport = "CompliancePdfReport",
  /** ComplianceDetailedPdfReport */
  ComplianceDetailedPdfReport = "ComplianceDetailedPdfReport",
  /** ResourceList */
  ResourceList = "ResourceList",
}

/**
 * Defines values for DownloadType. \
 * {@link KnownDownloadType} can be used interchangeably with DownloadType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ComplianceReport** \
 * **CompliancePdfReport** \
 * **ComplianceDetailedPdfReport** \
 * **ResourceList**
 */
export type DownloadType = string;

/** Known values of {@link ComplianceState} that the service accepts. */
export enum KnownComplianceState {
  /** Healthy */
  Healthy = "Healthy",
  /** Unhealthy */
  Unhealthy = "Unhealthy",
}

/**
 * Defines values for ComplianceState. \
 * {@link KnownComplianceState} can be used interchangeably with ComplianceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy** \
 * **Unhealthy**
 */
export type ComplianceState = string;

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
export interface ReportsListOptionalParams extends coreClient.OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Contains response data for the list operation. */
export type ReportsListResponse = ReportResourceList;

/** Optional parameters. */
export interface ReportsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type ReportsListNextResponse = ReportResourceList;

/** Optional parameters. */
export interface ReportGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ReportGetResponse = ReportResource;

/** Optional parameters. */
export interface ReportCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ReportCreateOrUpdateResponse = ReportResource;

/** Optional parameters. */
export interface ReportUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ReportUpdateResponse = ReportResource;

/** Optional parameters. */
export interface ReportDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface SnapshotsListOptionalParams
  extends coreClient.OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Contains response data for the list operation. */
export type SnapshotsListResponse = SnapshotResourceList;

/** Optional parameters. */
export interface SnapshotsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type SnapshotsListNextResponse = SnapshotResourceList;

/** Optional parameters. */
export interface SnapshotGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SnapshotGetResponse = SnapshotResource;

/** Optional parameters. */
export interface SnapshotDownloadOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the download operation. */
export type SnapshotDownloadResponse = DownloadResponse;

/** Optional parameters. */
export interface AppComplianceAutomationToolForMicrosoft365OptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
