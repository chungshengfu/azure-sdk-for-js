/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type OrganizationProfileUnion =
  | OrganizationProfile
  | AzureDevOpsOrganizationProfile
  | GitHubOrganizationProfile;
export type AgentProfileUnion = AgentProfile | Stateful | StatelessAgentProfile;
export type FabricProfileUnion = FabricProfile | VmssFabricProfile;

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

/** The response of a Pool list operation. */
export interface PoolListResult {
  /** The Pool items on this page */
  value: Pool[];
  /**
   * The link to the next page of items
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Defines the organization in which the pool will be used. */
export interface OrganizationProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "AzureDevOps" | "GitHub";
}

/** The agent profile of the machines in the pool. */
export interface AgentProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Stateful" | "Stateless";
  /** Defines pool buffer. */
  resourcePredictions?: Record<string, unknown>;
}

/** Defines the type of fabric the agent will run on. */
export interface FabricProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Vmss";
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /**
   * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
  type: ManagedServiceIdentityType;
  /** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. */
  userAssignedIdentities?: { [propertyName: string]: UserAssignedIdentity };
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /**
   * The principal ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
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

/** The type used for update operations of the Pool. */
export interface PoolUpdate {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The status of the current operation. */
  provisioningState?: ProvisioningState;
  /** Defines how many resources can there be created at any given time. */
  maximumConcurrency?: number;
  /** Defines the organization in which the pool will be used. */
  organizationProfile?: OrganizationProfileUnion;
  /** Defines how the machine will be handled once it executed a job. */
  agentProfile?: AgentProfileUnion;
  /** Defines the type of fabric the agent will run on. */
  fabricProfile?: FabricProfileUnion;
  /** The resource id of the DevCenter Project the pool belongs to. */
  devCenterProjectResourceId?: string;
}

/** Defines an Azure DevOps organization. */
export interface Organization {
  /** The Azure DevOps organization URL in which the pool should be created. */
  url: string;
  /** Optional list of projects in which the pool should be created. */
  projects?: string[];
  /** How many machines can be created at maximum in this organization out of the maximumConcurrency of the pool. */
  parallelism?: number;
}

/** Defines the type of Azure DevOps pool permission. */
export interface AzureDevOpsPermissionProfile {
  /** Determines who has admin permissions to the Azure DevOps pool. */
  kind: AzureDevOpsPermissionType;
  /** User email addresses */
  users?: string[];
  /** Group email addresses */
  groups?: string[];
}

/** The data disk of the VMSS. */
export interface DataDisk {
  /** The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/. */
  caching?: CachingType;
  /** The initial disk size in gigabytes. */
  diskSizeGiB?: number;
  /** The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs". */
  storageAccountType?: StorageAccountType;
  /** The drive letter for the empty data disk. If not specified, it will be the first available letter. */
  driveLetter?: string;
}

/** The Azure SKU of the machines in the pool. */
export interface DevOpsAzureSku {
  /** The Azure SKU name of the machines in the pool. */
  name: string;
}

/** Defines a GitHub organization */
export interface GitHubOrganization {
  /** The GitHub organization URL in which the pool should be created. */
  url: string;
  /** Optional list of repositories in which the pool should be created. */
  repositories?: string[];
}

/** The network profile of the machines in the pool. */
export interface NetworkProfile {
  /** The subnet id on which to put all machines created in the pool. */
  subnetId: string;
}

/** The OS profile of the machines in the pool. */
export interface OsProfile {
  /** The secret management settings of the machines in the pool. */
  secretsManagementSettings?: SecretsManagementSettings;
  /** Determines how the service should be run. By default, this will be set to Service. */
  logonType?: LogonType;
}

/** The secret management settings of the machines in the pool. */
export interface SecretsManagementSettings {
  /** Where to store certificates on the machine. */
  certificateStoreLocation?: string;
  /** The list of certificates to install on all machines in the pool. */
  observedCertificates: string[];
  /** Defines if the key of the certificates should be exportable. */
  keyExportable: boolean;
}

/** The VM image of the machines in the pool. */
export interface PoolImage {
  /** The resource id of the image. */
  resourceId?: string;
  /** The image to use from a well-known set of images made available to customers. */
  wellKnownImageName?: string;
  /** List of aliases to reference the image by. */
  aliases?: string[];
  /** The percentage of the buffer to be allocated to this image. */
  buffer?: string;
}

/** The storage profile of the VMSS. */
export interface StorageProfile {
  /** The Azure SKU name of the machines in the pool. */
  osDiskStorageAccountType?: OsDiskStorageAccountType;
  /** A list of empty data disks to attach. */
  dataDisks?: DataDisk[];
}

/** Azure DevOps organization profile */
export interface AzureDevOpsOrganizationProfile extends OrganizationProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "AzureDevOps";
  /** The list of Azure DevOps organizations the pool should be present in. */
  organizations: Organization[];
  /** The type of permission which determines which accounts are admins on the Azure DevOps pool. */
  permissionProfile?: AzureDevOpsPermissionProfile;
}

/** GitHub organization profile */
export interface GitHubOrganizationProfile extends OrganizationProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "GitHub";
  /** The list of GitHub organizations/repositories the pool should be present in. */
  organizations: GitHubOrganization[];
}

/** Stateful profile meaning that the machines will be returned to the pool after running a job. */
export interface Stateful extends AgentProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Stateful";
  /** How long should stateful machines be kept around. The maximum is one week. */
  maxAgentLifetime: string;
}

/** Stateless profile meaning that the machines will be cleaned up after running a job. */
export interface StatelessAgentProfile extends AgentProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Stateless";
}

/** The agents will run on Virtual Machine Scale Sets. */
export interface VmssFabricProfile extends FabricProfile {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "Vmss";
  /** The Azure SKU of the machines in the pool. */
  sku: DevOpsAzureSku;
  /** The VM images of the machines in the pool. */
  images: PoolImage[];
  /** The OS profile of the machines in the pool. */
  osProfile?: OsProfile;
  /** The storage profile of the machines in the pool. */
  storageProfile?: StorageProfile;
  /** The network profile of the machines in the pool. */
  networkProfile?: NetworkProfile;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** Concrete tracked resource types can be created by aliasing this type using a specific property type. */
export interface Pool extends TrackedResource {
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
  /** The status of the current operation. */
  provisioningState?: ProvisioningState;
  /** Defines how many resources can there be created at any given time. */
  maximumConcurrency?: number;
  /** Defines the organization in which the pool will be used. */
  organizationProfile?: OrganizationProfileUnion;
  /** Defines how the machine will be handled once it executed a job. */
  agentProfile?: AgentProfileUnion;
  /** Defines the type of fabric the agent will run on. */
  fabricProfile?: FabricProfileUnion;
  /** The resource id of the DevCenter Project the pool belongs to. */
  devCenterProjectResourceId?: string;
}

/** Defines headers for Pools_createOrUpdate operation. */
export interface PoolsCreateOrUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
}

/** Defines headers for Pools_update operation. */
export interface PoolsUpdateHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
}

/** Defines headers for Pools_delete operation. */
export interface PoolsDeleteHeaders {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  retryAfter?: number;
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
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

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Represents a succeeded operation. */
  Succeeded = "Succeeded",
  /** Represents a failed operation. */
  Failed = "Failed",
  /** Represents a canceled operation. */
  Canceled = "Canceled",
  /** Represents a pending operation. */
  Provisioning = "Provisioning",
  /** Represents a pending operation. */
  Updating = "Updating",
  /** Represents an operation under deletion. */
  Deleting = "Deleting",
  /** Represents an accepted operation. */
  Accepted = "Accepted",
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Represents a succeeded operation. \
 * **Failed**: Represents a failed operation. \
 * **Canceled**: Represents a canceled operation. \
 * **Provisioning**: Represents a pending operation. \
 * **Updating**: Represents a pending operation. \
 * **Deleting**: Represents an operation under deletion. \
 * **Accepted**: Represents an accepted operation.
 */
export type ProvisioningState = string;

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAssignedUserAssigned */
  SystemAssignedUserAssigned = "SystemAssigned, UserAssigned",
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned, UserAssigned**
 */
export type ManagedServiceIdentityType = string;

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

/** Known values of {@link AzureDevOpsPermissionType} that the service accepts. */
export enum KnownAzureDevOpsPermissionType {
  /** Pool will inherit permissions from the project or organization. */
  Inherit = "Inherit",
  /** Only the pool creator will be an admin of the pool. */
  CreatorOnly = "CreatorOnly",
  /** Only the specified accounts will be admins of the pool. */
  SpecificAccounts = "SpecificAccounts",
}

/**
 * Defines values for AzureDevOpsPermissionType. \
 * {@link KnownAzureDevOpsPermissionType} can be used interchangeably with AzureDevOpsPermissionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inherit**: Pool will inherit permissions from the project or organization. \
 * **CreatorOnly**: Only the pool creator will be an admin of the pool. \
 * **SpecificAccounts**: Only the specified accounts will be admins of the pool.
 */
export type AzureDevOpsPermissionType = string;

/** Known values of {@link CachingType} that the service accepts. */
export enum KnownCachingType {
  /** Don't use host caching. */
  None = "None",
  /** For workloads that only do read operations. */
  ReadOnly = "ReadOnly",
  /** For workloads that do a balance of read and write operations. */
  ReadWrite = "ReadWrite",
}

/**
 * Defines values for CachingType. \
 * {@link KnownCachingType} can be used interchangeably with CachingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: Don't use host caching. \
 * **ReadOnly**: For workloads that only do read operations. \
 * **ReadWrite**: For workloads that do a balance of read and write operations.
 */
export type CachingType = string;

/** Known values of {@link StorageAccountType} that the service accepts. */
export enum KnownStorageAccountType {
  /** The data disk should use standard locally redundant storage. */
  StandardLRS = "standard_lrs",
  /** The data disk should use premium locally redundant storage. */
  PremiumLRS = "premium_lrs",
  /** The data disk should use standard SSD locally redundant storage. */
  StandardSsdlrs = "standardssd_lrs",
  /** The data disk should use premium SSD zonal redundant storage. */
  PremiumZRS = "premium_zrs",
  /** The data disk should use standard SSD zonal redundant storage. */
  StandardSsdzrs = "standardssd_zrs",
}

/**
 * Defines values for StorageAccountType. \
 * {@link KnownStorageAccountType} can be used interchangeably with StorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **standard_lrs**: The data disk should use standard locally redundant storage. \
 * **premium_lrs**: The data disk should use premium locally redundant storage. \
 * **standardssd_lrs**: The data disk should use standard SSD locally redundant storage. \
 * **premium_zrs**: The data disk should use premium SSD zonal redundant storage. \
 * **standardssd_zrs**: The data disk should use standard SSD zonal redundant storage.
 */
export type StorageAccountType = string;

/** Known values of {@link LogonType} that the service accepts. */
export enum KnownLogonType {
  /** Run as a service. */
  Service = "Service",
  /** Run in interactive mode. */
  Interactive = "Interactive",
}

/**
 * Defines values for LogonType. \
 * {@link KnownLogonType} can be used interchangeably with LogonType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Service**: Run as a service. \
 * **Interactive**: Run in interactive mode.
 */
export type LogonType = string;

/** Known values of {@link OsDiskStorageAccountType} that the service accepts. */
export enum KnownOsDiskStorageAccountType {
  /** Standard OS disk type. */
  Standard = "Standard",
  /** Premium OS disk type. */
  Premium = "Premium",
  /** Standard SSD OS disk type. */
  StandardSSD = "StandardSSD",
}

/**
 * Defines values for OsDiskStorageAccountType. \
 * {@link KnownOsDiskStorageAccountType} can be used interchangeably with OsDiskStorageAccountType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard**: Standard OS disk type. \
 * **Premium**: Premium OS disk type. \
 * **StandardSSD**: Standard SSD OS disk type.
 */
export type OsDiskStorageAccountType = string;

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
export interface PoolsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type PoolsListBySubscriptionResponse = PoolListResult;

/** Optional parameters. */
export interface PoolsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type PoolsListByResourceGroupResponse = PoolListResult;

/** Optional parameters. */
export interface PoolsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PoolsGetResponse = Pool;

/** Optional parameters. */
export interface PoolsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PoolsCreateOrUpdateResponse = Pool;

/** Optional parameters. */
export interface PoolsUpdateOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type PoolsUpdateResponse = Pool;

/** Optional parameters. */
export interface PoolsDeleteOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type PoolsDeleteResponse = PoolsDeleteHeaders;

/** Optional parameters. */
export interface PoolsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type PoolsListBySubscriptionNextResponse = PoolListResult;

/** Optional parameters. */
export interface PoolsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type PoolsListByResourceGroupNextResponse = PoolListResult;

/** Optional parameters. */
export interface ManagedDevOpsInfrastructureOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
